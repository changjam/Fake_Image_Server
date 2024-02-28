# FakeImage Server

### Client need to request with parameters, such as image ID, size, etc. The API will return the image based on these requirements.

## Project setup
```
npm install
npm start
```

## Request Rules
### host:port/:id/:width?/:height

# Example
### Specific Image
```
localhost:3000/1.jpg/1920/1080
```
### Random Image
```
localhost:3000/random/1920/1080
```