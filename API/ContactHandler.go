package API

import (
	"fmt"
	"github.com/gofiber/fiber/v2"
)

func ContactHandler(c *fiber.Ctx) error {
	c.Accepts("json", "text")
	fmt.Println(string(c.Body()))
	fmt.Println("worked")
	return c.JSON("Worked")
}
