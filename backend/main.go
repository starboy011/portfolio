package main

import (
	"context"
	"encoding/json"
	"net/http"
	"github.com/rs/cors"
	"log"
	"fmt"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
)

type NameResponse struct {
	Name string `json:"name"`
}

type Data struct {
	UserName string `json:"UserName"`
	Age int `json:"Age"`
	Institute string `json:"Institute"`
}
type MyData struct {
    ID   string `bson:"_id"`
    Data Data   `bson:"data"`
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

	clientOptions := options.Client().ApplyURI("mongodb+srv://starboy011:Pranav123%40@cluster0.otyqhv4.mongodb.net/")
    client, err := mongo.Connect(context.TODO(), clientOptions)
    if err != nil {
        log.Fatal(err)
    }
    defer client.Disconnect(context.TODO())
    collection := client.Database("users").Collection("People")

    // Insert a name into the collection
    data:= Data{UserName: "Rishav", Age: 23, Institute: "Birla Institute of Technology Mesra"}
    _, err = collection.InsertOne(context.TODO(), bson.M{"data": data})
    if err != nil {
        log.Fatal(err)
    }

	filter := bson.M{"data.username":"Rishav"}
	var result MyData
	err = collection.FindOne(context.TODO(), filter).Decode(&result)
    if err != nil {
        log.Fatal(err)
    }

    // Access the data
	log.Println("Username", result.Data.UserName)
    fmt.Printf("Age: %d\n", result.Data.Age)
    fmt.Printf("Institute: %s\n", result.Data.Institute)
    log.Println("Name inserted successfully.")


	
}
