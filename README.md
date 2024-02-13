# bt_assessment

# CRUD API with Express.js

This is a simple CRUD API built with Express.js that allows users to perform Create, Read, Update, and Delete operations on user data. Users are stored in an in-memory database.

## Features

- GET all users (`/api/users`)
- GET user by ID (`/api/users/{userId}`)
- POST create user (`/api/users`)
- PUT update user by ID (`/api/users/{userId}`)
- DELETE user by ID (`/api/users/{userId}`)
- Error handling for invalid requests and server-side errors

## Requirements

- Express.js
- Body-parser
- UUID
- Cluster (for horizontal scaling)
- OS (for horizontal scaling)
- Dotenv (for environment variables)

## Installation

1. Clone the repository:

git clone <repository-url>

2. Install dependencies:

npm install

3. Create a `.env` file and define the `PORT` and `NODE_ENV` variables:

## Usage

### Development Mode

To run the application in development mode, use the following command:

npm run start:dev

### Production Mode

To run the application in production mode, use the following command:

npm run start:prod
