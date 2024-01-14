package utils

import (
	"database/sql"
	"fmt"
	_ "github.com/mattn/go-sqlite3"
	"log"
)

type Project struct {
	Title       string
	Description string
	LinkLabel   string
	Link        string
	Internal    bool
	Rank        int
}

func (p *Project) writeProjectToDB(db *sql.DB) {
	statement, err := db.Prepare("INSERT INTO PROJECTS (title, description, linklabel, link, internal, rank) VALUES (?, ?, ?, ?, ?, ?)")
	if err != nil {
		log.Fatal(err)
	}

	_, err = statement.Exec(p.Title, p.Description, p.LinkLabel, p.Link, p.Internal, p.Rank)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Wrote %s to DB", p.Title)
}

func genInitalProjects() []Project {
	var projects []Project

	projects = append(projects, Project{
		Title:       "Bachelor Thesis",
		Description: "In my Bachelors Thesis I analysed how identity influences the individuals attitude towards three different pillars of the EU integration process. To realize the analysis I used the R programming language and the Eurobarometer 92.3 dataset. I can not put up the whole Bachelors Thesis due to plagiarism concerns.",
		LinkLabel:   "View Code",
		Link:        "ba.html",
		Internal:    true,
		Rank:        0,
	})

	projects = append(projects, Project{
		Title:       "This personal website",
		Description: "My new personal portfolio website. It uses a golang/fiber backend that directly serves the app and the api. On the frontend it uses typescript/react/tailwindcss. The site is deployed using Railway and the initial design was done using v0.dev by Vercel.",
		LinkLabel:   "Github",
		Link:        "https://github.com/ma-a-sc/new_personal_portfolio",
		Internal:    false,
		Rank:        1,
	})

	projects = append(projects, Project{
		Title:       "Old personal porfolio website",
		Description: "My old personal portfolo website using a basic python/fastAPI backend and plain HTML/TailwindCSS for the frontend.",
		LinkLabel:   "Github",
		Link:        "https://github.com/ma-a-sc/personal_website",
		Internal:    false,
		Rank:        2,
	})

	projects = append(projects, Project{
		Title:       "Jane Austin Text Mining",
		Description: "This project was build during a voluntary Text Mining in R course taught at my university by a another Master Student. It tries to gain insight into the books of Jane Austin using different text mining techniques.",
		LinkLabel:   "View Code",
		Link:        "janeausten.html",
		Internal:    true,
		Rank:        3,
	})

	projects = append(projects, Project{
		Title:       "Hunger Games Text Mining",
		Description: "After working through the book 'Text Mining using R: A tidy approach' I used the techniques learned to analyze my favourite trilogy. At the time of doing the analysis the prequel book was not out.",
		LinkLabel:   "View Code",
		Link:        "hungergames.html",
		Internal:    true,
		Rank:        4,
	})

	projects = append(projects, Project{
		Title:       "Scraping Antiwar.com",
		Description: "In this project I wrote a basic webscraper to get all the articles published until then of antiwar.com. The idea was to collect data to do text mining on it, but I never did the analysis.",
		LinkLabel:   "Github",
		Link:        "https://github.com/ma-a-sc/scraping_antiwar.com",
		Internal:    true,
		Rank:        5,
	})

	projects = append(projects, Project{
		Title:       "Replication Johnston in R",
		Description: "Statistical Analysis/Replication project conducted as part of a university course titled: 'Contrasting SPSS,STATA and R'. The project replicates the study and applies it to a new region of study. Study to replicate: Johnston et al. 2010: National Identity and Support for the Welfare State.",
		LinkLabel:   "View Code",
		Link:        "johnston.pdf",
		Internal:    true,
		Rank:        6,
	})

	projects = append(projects, Project{
		Title:       "Replication Larsen in R",
		Description: "Smaller analysis/replication project for a university course titled: 'Contrasting SPSS,STATA and R'. A pure replication of the methods used in the study. Study to replicate: Larsen, C. 2016: How Three Narratives of Modernity Justify Economic Inequality.",
		LinkLabel:   "View Code",
		Link:        "larsen.html",
		Internal:    true,
		Rank:        7,
	})

	projects = append(projects, Project{
		Title:       "Youtube download web 'app'",
		Description: "Ridiculously basic youtube to mp3 download web app.",
		LinkLabel:   "Github",
		Link:        "https://github.com/ma-a-sc/youtube_dl_web_app",
		Internal:    false,
		Rank:        8,
	})

	projects = append(projects, Project{
		Title:       "Cli Password Manager",
		Description: "Ridiculously basic youtube to mp3 download web app.",
		LinkLabel:   "Github",
		Link:        "https://github.com/ma-a-sc/PwManager",
		Internal:    false,
		Rank:        9,
	})

	return projects
}

func InitDB() *sql.DB {
	db, err := sql.Open("sqlite3", "./maasc.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	_, err = db.Exec("CREATE TABLE IF NOT EXISTS PROJECTS (title TEXT, description TEXT, linklabel TEXT, link TEXT, internal BOOLEAN, rank INTEGER)")
	if err != nil {
		log.Fatal(err)
	}

	projects := genInitalProjects()

	for _, project := range projects {
		project.writeProjectToDB(db)
	}
	return db
}
