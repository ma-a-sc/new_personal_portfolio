package utils

import (
	"database/sql"
	"log"
)

func GetProjectsFromDB(db *sql.DB) []Project {
	var projects []Project

	rows, err := db.Query(`SELECT title, description, linklabel, link, internal, rank FROM PROJECTS;`)
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	for rows.Next() {
		var project Project
		if err := rows.Scan(&project.Title, &project.Description, &project.LinkLabel, &project.Link, &project.Internal, &project.Rank); err != nil {
			log.Fatal(err)
		}
		projects = append(projects, project)
	}
	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}
	return projects
}
