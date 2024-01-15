package main

import (
	"embed"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/favicon"
	"github.com/gofiber/fiber/v2/middleware/filesystem"
	"github.com/joho/godotenv"
	"log"
	"net/http"
	"os"
	"react_with_go_tutorial/API"
	"react_with_go_tutorial/DB/utils"
)

//go:embed static/*
var embedDirStatic embed.FS

func goDotEnvVariable(key string) string {
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatal("Error loading .env file")
	}
	return os.Getenv(key)
}

func main() {
	db := utils.CheckIfDBPopulated()
	if db == nil {
		db = utils.InitDB()
	}
	defer db.Close()
	//var count int
	//db.QueryRow("SELECT COUNT(*) FROM PROJECTS").Scan(&count)
	//fmt.Println(count)
	environment := goDotEnvVariable("ENVIRONMENT")
	emailAPIKey := goDotEnvVariable("RESEND_API_KEY")
	personalMail := goDotEnvVariable("PERSONAL_MAIL")

	var url string
	if environment == "Test" {
		url = goDotEnvVariable("LOCAL_URL")
	} else {
		url = goDotEnvVariable("PROD_URL")
	}
	app := fiber.New()

	if environment == "Test" {
		app.Use(cors.New())
	} else {
		app.Use(cors.New(cors.Config{
			AllowOrigins: url,
		}))
	}

	app.Use(favicon.New(favicon.Config{
		File: "./favicon.png",
		URL:  "/favicon",
	}))

	app.Use("/static", filesystem.New(filesystem.Config{
		Root:       http.FS(embedDirStatic),
		PathPrefix: "static",
		Browse:     true,
	})).Name("R-projects")

	// serves Single Page application on "/"
	// assume static file at UI/dist folder
	app.Static("/", "./UI/dist").Name("index")

	app.Post("/contact", func(c *fiber.Ctx) error {
		return API.ContactHandler(c, emailAPIKey, personalMail)
	}).Name("Contact")

	app.Get("/projects", func(c *fiber.Ctx) error {
		projects := utils.GetProjectsFromDB(db)
		return c.JSON(projects)
	})

	log.Fatal(app.Listen(":3000"))
}
