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
    "lastname": "string"   // minimum 3 characters
  },
  "email": "string",      // valid email format
  "password": "string"    // minimum 5 characters
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

## Login User

Authenticate an existing user.

### Endpoint
```
POST /user/login
```

### Request Body
```json
{
  "email": "string",    // valid email format
  "password": "string"  // minimum 5 characters
}
```

### Response

#### Success Response (200 OK)
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
  "error": [
    {
      "msg": "Error message",
      "param": "field_name",
      "location": "body"
    }
  ]
}
```

##### User Not Found (404 Not Found)
```json
{
  "message": "User not found"
}
```

##### Invalid Credentials (400 Bad Request)
```json
{
  "message": "Invalid credentials"
}
```

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Required Fields
- `email` (String, valid email format)
- `password` (String, min: 5 characters)

### Notes
- Password will be compared with stored hash
- JWT token is generated upon successful authentication

## Get User Profile

Get the profile of the currently authenticated user.

### Endpoint
```
GET /user/profile
```

### Headers
- Authorization: Bearer <token> (required if not using cookies)

### Cookie
- token: <jwt_token> (required if not using Authorization header)

### Response

#### Success Response (200 OK)
```json
{
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

##### Unauthorized (401 Unauthorized)
```json
{
  "message": "Access denied"
}
```

##### User Not Found (404 Not Found)
```json
{
  "message": "User not found"
}
```

##### Invalid Token (400 Bad Request)
```json
{
  "message": "Invalid token"
}
```

### Notes
- Requires authentication via JWT token
- Token can be provided through cookies or Authorization header

## Logout User

Logs out the current user and invalidates the authentication token.

### Endpoint
```
GET /user/logout
```

### Headers
- Authorization: Bearer <token> (required if not using cookies)

### Cookie
- token: <jwt_token> (required if not using Authorization header)

### Response

#### Success Response (200 OK)
```json
{
  "message": "Logged out successfully"
}
```

#### Error Responses

##### Unauthorized (401 Unauthorized)
```json
{
  "message": "Access denied"
}
```

##### Invalid Token (400 Bad Request)
```json
{
  "message": "Invalid token"
}
```

### Notes
- Requires authentication
- Clears the authentication cookie if present
- Adds the token to blacklist to prevent reuse
- Token cannot be used for authentication after logout

# Captain API Documentation

## Register Captain
Register a new captain (driver) in the system.

### Endpoint
```
POST /captains/register
```

### Request Body
```json
{
  "fullname": {
    "firstname": "string",  // minimum 3 characters
    "lastname": "string"    // minimum 3 characters
  },
  "email": "string",      // valid email format
  "password": "string",   // minimum 6 characters
  "vehicle": {
    "color": "string",    // minimum 3 characters
    "plate": "string",    // minimum 3 characters, unique
    "capacity": "number", // minimum 1
    "vehicleType": "string" // enum: car, motorcycle, auto
  }
}
```

### Response

#### Success Response (201 Created)
```json
{
  "token": "jwt_token_string",
  "captain": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": number,
      "vehicleType": "string"
    },
    "status": "inactive",
    "_id": "string"
  }
}
```

#### Error Responses

##### Validation Error (400 Bad Request)
```json
{
  "errors": [
    {
      "type": "field",
      "msg": "Error message",
      "path": "field_name",
      "location": "body"
    }
  ]
}
```

##### Captain Already Exists (400 Bad Request)
```json
{
  "message": "Captain already exist"
}
```

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.driver@example.com",
  "password": "password123",
  "vehicle": {
    "color": "black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Required Fields
- `fullname.firstname` (String, min: 3 characters)
- `fullname.lastname` (String, min: 3 characters)
- `email` (String, valid email format)
- `password` (String, min: 6 characters)
- `vehicle.color` (String, min: 3 characters)
- `vehicle.plate` (String, min: 3 characters, unique)
- `vehicle.capacity` (Number, min: 1)
- `vehicle.vehicleType` (String, enum: ['car', 'motorcycle', 'auto'])

### Field Validations
- Email must be unique in the system
- Vehicle plate must be unique in the system
- Password will be hashed before storing
- Vehicle type must be one of: 'car', 'motorcycle', 'auto'
- Vehicle capacity must be a positive integer
- Color and plate must be at least 3 characters long

### Notes
- A JWT token is generated upon successful registration
- Captain status is set to 'inactive' by default
- Location coordinates can be added later
- Socket ID will be assigned when captain connects