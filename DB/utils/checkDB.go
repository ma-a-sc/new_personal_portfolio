package utils

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

func CheckIfDBPopulated() *sql.DB {
	database, err := sql.Open("sqlite3", "./maasc.db")
	if err != nil {
		fmt.Println("It seems like your database is not present.")
		log.Fatal(err)
	}

	var count int
	err = database.QueryRow("SELECT COUNT(*) FROM PROJECTS").Scan(&count)
	if err != nil {
		return nil
	}

	if count == 0 {
		return nil
	} else {
		return database
	}
}
