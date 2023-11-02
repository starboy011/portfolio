package main

import (
	"context"
	"encoding/json"
	"net/http"
	"github.com/rs/cors"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
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

	clientOptions := options.Client().ApplyURI("mongodb+srv://starboy011:Pranav123%40@cluster0.otyqhv4.mongodb.net/")
    client, err := mongo.Connect(context.TODO(), clientOptions)
    if err != nil {
        log.Fatal(err)
    }
    defer client.Disconnect(context.TODO())

    // Access the collection
    collection := client.Database("users").Collection("People")

    // Insert a name into the collection
    name := "Rishav"
    _, err = collection.InsertOne(context.TODO(), bson.M{"name": name})
    if err != nil {
        log.Fatal(err)
    }

    log.Println("Name inserted successfully.")


	http.Handle("/api/getName", c.Handler(http.HandlerFunc(GetNameHandler)))
	http.ListenAndServe(":8080", nil)
}
