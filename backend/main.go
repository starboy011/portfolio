package main

import (
	"encoding/json"
	"net/http"
	"github.com/rs/cors"
)

type NameResponse struct {
	Name string `json:"name"`
}

func GetNameHandler(w http.ResponseWriter, r *http.Request) {
	name := "Rishav"
	response := NameResponse{Name:name}
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Cache-Control", "no-store")
	w.Header().Set("Pragma", "no-cache")
	json.NewEncoder(w).Encode(response)
}

func main() {
	c := cors.AllowAll()
	http.Handle("/api/getName", c.Handler(http.HandlerFunc(GetNameHandler)))
	http.ListenAndServe(":8080", nil)
}
