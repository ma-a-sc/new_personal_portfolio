package util

import (
	"fmt"
	"github.com/resend/resend-go/v2"
	"log"
)

func SendContactMail(apiKey string, personalMail string, senderName string, senderEmail string, senderMessage string) {

	client := resend.NewClient(apiKey)

	params := &resend.SendEmailRequest{
		From:    "personal_website@resend.dev",
		To:      []string{personalMail},
		Subject: fmt.Sprintf("Contact from '%s' under '%s'", senderName, senderEmail),
		Html:    fmt.Sprintf("<p>%s</p>", senderMessage),
	}

	sent, err := client.Emails.Send(params)
	if err != nil {
		log.Fatal("Error sending email:", err)
		return
	}
	fmt.Println("Email sent successfully:", sent)
}
