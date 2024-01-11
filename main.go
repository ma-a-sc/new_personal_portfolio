package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
	"log"
	"os"
	"react_with_go_tutorial/API"
)

func goDotEnvVariable(key string) string {
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatal("Error loading .env file")
	}
	return os.Getenv(key)
}

func main() {

	environment := goDotEnvVariable("ENVIRONMENT")
	prodUrl := goDotEnvVariable("PROD_URL")
	app := fiber.New()

	if environment == "Test" {
		app.Use(cors.New())
	} else {
		app.Use(cors.New(cors.Config{
			AllowOrigins: prodUrl,
		}))
	}

	// serves Single Page application on "/"
	// assume static file at UI/dist folder
	app.Static("/", "./UI/dist")

	app.Post("/contact", func(c *fiber.Ctx) error {
		return API.ContactHandler(c)
	})

	log.Fatal(app.Listen(":3000"))
}
