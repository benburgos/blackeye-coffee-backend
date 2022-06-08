# BlackEye Coffee

Model
---
```
{
  name: { type: String, required: true },
  img: String,
  price: Number,
  ingredients: [ {String} ]
}
```

Backend Routes (endpoint/method, expected response)
---

| Routes      | HTTP Method | DB Action | Description               |
|-------------|-------------|-----------|---------------------------|
| /drinks     | GET         | INDEX     | Indexes of all the drinks |
| /drinks     | POST        | CREATE    | Create a drink            |
| /drinks/:id | GET         | SHOW      | Show a single drink       |
| /drinks/:id | PUT         | UPDATE    | Update the drink          |
| /drinks/:id | Delete      | DELETE    | Delete the drink          |

List of Libraries Used:
---
* MongoDB 
* React
* Express
* Node
* Morgan
* Mongoose
* CORS
* Nodemon
* DOTENV


