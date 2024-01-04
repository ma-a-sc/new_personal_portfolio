package API

import "github.com/gofiber/fiber/v2"

func ContactHandler(c *fiber.Ctx) error {
	c.Accepts("json", "text")

	return c.JSON("Worked")
}
