# User API Documentation

## Register User

Register a new user in the system.

### Endpoint

```
POST /user/register
```

### Request Body

```json
{
  "fullname": {
    "firstname": "string", // minimum 3 characters
    "lastname": "string" // minimum 3 characters
  },
  "email": "string", // valid email format
  "password": "string" // minimum 5 characters
}
```

### Response

#### Success Response (201 Created)

```json
{
  "token": "jwt_token_string",
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "_id": "string",
    "socketId": "string"
  }
}
```

#### Error Responses

##### Validation Error (400 Bad Request)

```json
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field_name",
      "location": "body"
    }
  ]
}
```

##### Duplicate Email (400 Bad Request)

```json
{
  "errors": [
    {
      "msg": "User already exists"
    }
  ]
}
```

### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Required Fields

- `fullname.firstname` (String, min: 3 characters)
- `fullname.lastname` (String, min: 3 characters)
- `email` (String, valid email format)
- `password` (String, min: 5 characters)

### Notes

- Email must be unique in the system
- Password will be hashed before storing
- JWT token is generated upon successful registration# User API Documentation

## Register User

Register a new user in the system.

### Endpoint

```
POST /user/register
```

### Request Body

```json
{
  "fullname": {
    "firstname": "string", // minimum 3 characters
    "lastname": "string" // minimum 3 characters
  },
  "email": "string", // valid email format
  "password": "string" // minimum 5 characters
}
```

### Response

#### Success Response (201 Created)

```json
{
  "token": "jwt_token_string",
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "_id": "string",
    "socketId": "string"
  }
}
```

#### Error Responses

##### Validation Error (400 Bad Request)

```json
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field_name",
      "location": "body"
    }
  ]
}
```

##### Duplicate Email (400 Bad Request)

```json
{
  "errors": [
    {
      "msg": "User already exists"
    }
  ]
}
```

### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Required Fields

- `fullname.firstname` (String, min: 3 characters)
- `fullname.lastname` (String, min: 3 characters)
- `email` (String, valid email format)
- `password` (String, min: 5 characters)

### Notes

- Email must be unique in the system
- Password will be hashed before storing
- JWT token is generated upon successful registration
