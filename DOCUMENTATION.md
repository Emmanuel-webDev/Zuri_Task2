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
    "message": "New user created"
  }
  ```
