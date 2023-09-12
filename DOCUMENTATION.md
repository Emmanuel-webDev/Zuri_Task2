# Zuri_Task2

# API Documentation

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Endpoints](#endpoints)
  - [Create a Resource](#create-a-resource)
  - [Read a Resource](#read-a-resource)
  - [Update a Resource](#update-a-resource)
  - [Delete a Resource](#delete-a-resource)
- [Sample Usage](#sample-usage)

## Introduction

This API provides CRUD operations for managing users resources. It uses Node.js, Express.js, and MongoDB as the database. Below, you'll find information on how to use the API, including the standard format of requests and responses.

## Getting Started

### Prerequisites

Before using this API, you should have the following software installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Install dependencies:

   ```bash
   cd <project_folder>
   npm install
   ```
3. Start the server:

   ```bash
   npm start
   ```

The API should now be running on `http://localhost:5000`.

## Endpoints

### Create a Resource

- **URL:** `/api/`
- **Method:** POST
- **Request Body:**

  ```json
  {
    "name": "Mark Essien"
  }
  ```

- **Response:**

  ```json
  {
    "msg": "New user created"
  }
  ```
### Read a Resource

- **URL:** `/api/:id`
- **Method:** GET
- **Response:**

  ```json
  {
      "_id": "user_id",
      "name": "User Name",
  }
  ```

### Update a Resource

- **URL:** `/api/:id`
- **Method:** PATCH
- **Request Body:**

  ```json
  {
    "name": "Updated User Name"
  }
  ```

- **Response:**

  ```json
  {
    "msg": "User updated successfully"
  }
  ```

### Delete a Resource

- **URL:** `/api/:id`
- **Method:** DELETE
- **Response:**

  ```json
  {
    "msg": "User deleted successfully"
  }
  ```

  
## Sample Usage

Here are some sample API requests and responses:

### Create a Resource

**Request:**

```http
POST /api/
Content-Type: application/json

{
  "name": "Mark Essien"
}
```

**Response:**

```json
{
  "message": "New user created"
}
```

### Read a Resource

**Request:**

```http
GET /api/:id
```

**Response:**

```json
   {
    "_id": "user_id",
    "name": "Mark Essien"
  }
```

### Update a Resource

**Request:**

```http
PATCH /api/:id
Content-Type: application/json

{
  "name": "Mark Essien_"
}
```

**Response:**

```json
{
  "msg": "User updated successfully"
}
```

### Delete a Resource

**Request:**

```http
DELETE /api/:id
```

**Response:**

```json
{
  "msg": "User deleted successfully"
}
```
