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
	Link        Link
	Rank        int
}

type Link struct {
	label    string
	link     string
	internal bool
}

func (l *Link) toJSON() string {
	return fmt.Sprintf(`{"label": "%s", "link": "%s", "internal": %t}`, l.label, l.link, l.internal)
}

func (p *Project) writeProjectToDB(db *sql.DB) {
	statement, err := db.Prepare("INSERT INTO PROJECTS (title, description, links, rank) VALUES (?, ?, ?, ?)")
	if err != nil {
		fmt.Println("Here")
		log.Fatal(err)
	}

	_, err = statement.Exec(p.Title, p.Description, p.Link.toJSON(), p.Rank)
	if err != nil {
		fmt.Println("Here 1")
		log.Fatal(err)
	}
	fmt.Printf("Wrote %s to DB", p.Title)
}

func genInitalProjects() []Project {
	var projects []Project

	projects = append(projects, Project{
		Title:       "Bachelor Thesis",
		Description: "In my Bachelors Thesis I analysed how identity influences the individuals attitude towards three different pillars of the EU integration process. To realize the analysis I used the R programming language and the Eurobarometer 92.3 dataset. I can not put up the whole Bachelors Thesis due to plagiarism concerns.",
		Link:        Link{label: "View Code", internal: true, link: "ba.html"},
		Rank:        0,
	})

	projects = append(projects, Project{
		Title:       "This personal website",
		Description: "My new personal portfolio website. It uses a golang/fiber backend that directly serves the app and the api. On the frontend it uses typescript/react/tailwindcss. The site is deployed using Railway and the initial design was done using v0.dev by Vercel.",
		Link:        Link{label: "Github", internal: false, link: "https://github.com/ma-a-sc/new_personal_portfolio"},
		Rank:        1,
	})

	projects = append(projects, Project{
		Title:       "Old personal porfolio website",
		Description: "My old personal portfolo website using a basic python/fastAPI backend and plain HTML/TailwindCSS for the frontend.",
		Link:        Link{label: "Github", internal: false, link: "https://github.com/ma-a-sc/personal_website"},
		Rank:        2,
	})

	projects = append(projects, Project{
		Title:       "Jane Austin Text Mining",
		Description: "This project was build during a voluntary Text Mining in R course taught at my university by a another Master Student. It tries to gain insight into the books of Jane Austin using different text mining techniques.",
		Link:        Link{label: "View Code", internal: true, link: "janeausten.html"},
		Rank:        3,
	})

	projects = append(projects, Project{
		Title:       "Hunger Games Text Mining",
		Description: "After working through the book 'Text Mining using R: A tidy approach' I used the techniques learned to analyze my favourite trilogy. At the time of doing the analysis the prequel book was not out.",
		Link:        Link{label: "View Code", internal: true, link: "hungergames.html"},
		Rank:        4,
	})

	projects = append(projects, Project{
		Title:       "Scraping Antiwar.com",
		Description: "In this project I wrote a basic webscraper to get all the articles published until then of antiwar.com. The idea was to collect data to do text mining on it, but I never did the analysis.",
		Link:        Link{label: "Github", internal: false, link: "https://github.com/ma-a-sc/scraping_antiwar.com"},
		Rank:        5,
	})

	projects = append(projects, Project{
		Title:       "Replication Johnston in R",
		Description: "Statistical Analysis/Replication project conducted as part of a university course titled: 'Contrasting SPSS,STATA and R'. The project replicates the study and applies it to a new region of study. Study to replicate: Johnston et al. 2010: National Identity and Support for the Welfare State.",
		Link:        Link{label: "View Code", internal: true, link: "johnston.pdf"},
		Rank:        6,
	})

	projects = append(projects, Project{
		Title:       "Replication Larsen in R",
		Description: "Smaller analysis/replication project for a university course titled: 'Contrasting SPSS,STATA and R'. A pure replication of the methods used in the study. Study to replicate: Larsen, C. 2016: How Three Narratives of Modernity Justify Economic Inequality.",
		Link:        Link{label: "View Code", internal: true, link: "larsen.html"},
		Rank:        7,
	})

	projects = append(projects, Project{
		Title:       "Youtube download web 'app'",
		Description: "Ridiculously basic youtube to mp3 download web app.",
		Link:        Link{label: "Github", internal: false, link: "https://github.com/ma-a-sc/scraping_antiwar.com"},
		Rank:        8,
	})

	projects = append(projects, Project{
		Title:       "Cli Password Manager",
		Description: "Ridiculously basic youtube to mp3 download web app.",
		Link:        Link{label: "Github", internal: false, link: "https://github.com/ma-a-sc/scraping_antiwar.com"},
		Rank:        9,
	})

	return projects
}

func InitDB() *sql.DB {
	db, err := sql.Open("sqlite3", "../maasc.db")
	if err != nil {
		fmt.Println("Here 2")
		log.Fatal(err)
	}
	defer db.Close()

	_, err = db.Exec("CREATE TABLE IF NOT EXISTS PROJECTS (title TEXT, description TEXT, links TEXT, rank INTEGER)")
	if err != nil {
		fmt.Println("Here 3")
		log.Fatal(err)
	}

	projects := genInitalProjects()

	for _, project := range projects {
		project.writeProjectToDB(db)
	}
	return db
}
