package API

import (
	"encoding/json"
	"github.com/gofiber/fiber/v2"
	"react_with_go_tutorial/API/util"
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

	valid := util.ValidateEmail(providedEmail)
	if !valid {
		return EmailValidationError{
			ErrorMessage: "Email is invalid.",
		}
	}
	return nil
}

func ContactHandler(c *fiber.Ctx, apiKey string, personalMail string) error {
	c.Accepts("json", "text")
	incomingData := IncomingData{}
	err := json.Unmarshal(c.Body(), &incomingData)
	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, "Failed to parse given data.")
	}

	err2 := validateEmail(incomingData.Email)
	if err2 != nil {
		return fiber.NewError(fiber.StatusBadRequest, "Email is invalid.")
	}
	util.SendContactMail(apiKey, personalMail, incomingData.Name, incomingData.Email, incomingData.Message)
	return c.JSON(Response{Success: true})
}
