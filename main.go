package main

import (
	"github.com/gofiber/fiber/v2"
	"log"
)

func main() {
	app := fiber.New()

	// serves Single Page application on "/"
	// assume static file at UI/dist folder
	app.Static("/", "./UI/dist")

	log.Fatal(app.Listen(":3000"))
}
