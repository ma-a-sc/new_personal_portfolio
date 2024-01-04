package main

import (
	"github.com/gofiber/fiber/v2"
	"log"
	"react_with_go_tutorial/API"
)

func main() {
	app := fiber.New()

	// serves Single Page application on "/"
	// assume static file at UI/dist folder

	app.Static("/", "./UI/dist")

	app.Post("/contact", func(c *fiber.Ctx) error {
		return API.ContactHandler(c)
	})

	log.Fatal(app.Listen(":3000"))
}
