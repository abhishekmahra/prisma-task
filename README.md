# commands to run the project 

## npm i

## change the env variables according to your database

## npx prisma generate (generates prisma client)

## npx prisma migrate dev --name init (creates migration)

## npx tsc -w (compiles the code and dist folder will appear)

## node dist/server.js (run  your server file)

##use thunder client or postman to test the api.

# HOW to use TOY API

### localhost:3000/auth/register (POST) => creates new user.
<br>
for example-> 
{
  "email":"abhishek",
  "password":"abhi@test.com"
}

### localhost:3000/auth/login (POST) => to login. (when you will succesfully login the token will get generated)
<br>
for example->
{
  "email":"abhishek",
  "password":"abhi@test.com"
}

#### user should stick the token with the bearer auth to perform CRUD operations.

### localhost:3000/api/toy (POST) -> Adds the new toy in the toy table
<br>
example->
{
  "name":"toy car",
  "type":"vehicle"
}

### localhost:3000/api/toy?name=car (GET) -> finds the toy where name imcludes the car

### localhost:3000/api/toy/1 (PUT) -> update the items in the toy whose id is 1.
<br>
example->
{
  "name":"big car",
  "type":"big vehicle"
}

### localhost:3000/api/touy/1 (DELETE) -> delete the toy from the table whose id is 1.

# NOTE: To perform the above task user should be authenticated and should have the token generated while doing successfull login, once the token is generated the user can access these CRUD routes to perform create, Read, update, delete. 
# For hashing of password i have used bcryptjs.
