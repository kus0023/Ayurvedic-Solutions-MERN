# Ayurvedic-Solutions-MERN

### Add .env file

Inside .env file put DATABASE_MONGO_URL variable and set it to url of database

> DATABASE_MONGO_URL=some String without space

### Run Commands

This step is mandatory
To install required dependencies

> npm install

To start the server without nodemon

> npm start

To start the server with nodemon

> npm run start-dev

# API

### Note

**_# public_**  
The routes which are public needs no token

**_# private_**  
The routes which are private yuo need to pass token in header

> Authorization = Bearer \<Token>

_Note: Token is provided when you login_

## Admin Routes

## **public**

- **/api/admin/login**

```
method: POST
body: {email, password}
```

## **private**

- **/api/admin/users?page=[page]&limit=[limit]**

```
method: GET
params: page, limit
```

- **/api/admin/admins?page=[page]&limit=[limit]**

```
method: GET
params: page, limit
```

- **/api/admin/register**

```
method: POST
body: {firstName, lastName, email, password, isAdmin=[boolean]}
description:
Only admins can add new user or make user admin.
Hence, it is private route.
```
