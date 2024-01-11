package API

import (
	"encoding/json"
	"github.com/gofiber/fiber/v2"
	"net/mail"
	"strings"
)

type IncomingData struct {
	Name    string `json:"Name"`
	Email   string `json:"Email"`
	Message string `json:"Message"`
}

type Response struct {
	Success bool `json:"success"`
}

type EmailValidationError struct {
	ErrorMessage string
}

func (e EmailValidationError) Error() string {
	return e.ErrorMessage
}

func validateEmail(providedEmail string) error {
	if providedEmail == "" {
		return EmailValidationError{
			ErrorMessage: "Email must be provided.",
		}
	}

	if !strings.Contains(providedEmail, "@") {
		return EmailValidationError{
			ErrorMessage: "Email must include an @.",
		}
	}

	_, err := mail.ParseAddress(providedEmail)
	if err != nil {
		return EmailValidationError{
			ErrorMessage: "Email is invalid.",
		}
	}
	return nil
}

func ContactHandler(c *fiber.Ctx) error {
	c.Accepts("json", "text")
	data := IncomingData{}
	err := json.Unmarshal(c.Body(), &data)
	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, "Failed to parse given data.")
	}

	// name and message validation should have happend on the client.
	// to avoid roundtrips.
	err2 := validateEmail(data.Email)
	if err2 != nil {
		return fiber.NewError(fiber.StatusBadRequest, "Email is invalid.")
	}
	return c.JSON(Response{Success: true})
}
