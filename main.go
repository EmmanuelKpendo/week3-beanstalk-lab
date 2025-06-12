package main

import (
	"math/rand"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
)

var footballers = []string{
	"Lionel Messi", "Cristiano Ronaldo", "Kylian Mbappé", "Erling Haaland",
	"Kevin De Bruyne", "Neymar Jr", "Mohamed Salah", "Harry Kane",
	"Virgil van Dijk", "Luka Modrić",
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "5000"
	}

	rand.Seed(time.Now().UnixNano())
	router := gin.Default()

	router.LoadHTMLGlob("templates/*")
	router.Static("/static", "./static")

	// Home page
	router.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", nil)
	})

	// Random footballer API
	router.GET("/random", func(c *gin.Context) {
		random := footballers[rand.Intn(len(footballers))]
		c.JSON(http.StatusOK, gin.H{"footballer": random})
	})

	router.Run(":" + port)
}
