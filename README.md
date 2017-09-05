# Avengers-Node-RestAPI
A REST API using Node + Express which I use with some of my applications.

## Operations Supported:

### GET - /getAvengersList
Gets the list of Avengers.

### GET - /getAvengers/:index
Gets the Avenger on *index* from the list.

### PUT - /updateAvenger
#### Request:
    {
      "avenger":{"id":1,"name":"Robert","avengername":"Mark IV"},
      "index":0
    }

### DELETE - /deleteAvenger/:index
Deletes the Avenger on *index* from the list .

### POST - /addAvenger
#### Request:
    {
      "avenger":{"id":null,"name":"Doge","avengername":"such wow"}
    }

### GET - /reset
Resets the Avengers List with the original list.

## URL
    https://avengers-api.herokuapp.com/

## Notes
The list works only on one copy. So multiple connections will not have its own copy of the list. In short, sessions are not used.

## License
MIT
