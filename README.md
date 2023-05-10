# Boilerplate Express Backend API:

## Description

This is a boilerplate for backend project using ExpressJS, Joi, Mongoose, JWT, Bcrypt, Services, Controllers, Routes, etc. 

## Run Project

### 1. Clone the project

### 2. Install packages

```bash
npm install
```

### 3. Run the project

```bash
npm run start
```

Or if you want to run the project in development mode

```shell
npm run dev
```

## Project Structure

Project structure is like this:

```md 
├── node_modules
├── src
│   ├── config
│   │   ├── env.js
│   │   ├── index.js
│   ├── constants
│   │   ├── error-codes.js
│   │   ├── index.js
│   │   ├── misc.js
│   │   ├── success-codes.js
│   ├── controllers
│   │   ├── index.js
│   │   ├── user.controller.js
│   ├── loaders
│   │   ├── express.js
│   │   ├── index.js
│   │   ├── mongoose.js
│   ├── models
│   │   ├── index.js
│   │   ├── user.model.js
│   ├── routes
│   │   ├── index.js
│   │   ├── user.route.js
│   ├── services
│   │   ├── index.js
│   │   ├── user.service.js
│   ├── utils
│   │   ├── httpResponse.js
│   │   ├── index.js
│   ├── validations
│   │   ├── index.js
│   │   ├── user.validation.js
│   ├── index.js
├── .dockerignore
├── .env
├── .env.docker
├── .env.example
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── package.json
├── package-lock.json
├── README.md
```



