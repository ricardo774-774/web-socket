# Rest Api Skeleton In Express

## Project Description V2

This web-socket is a queue application.
Simulates the system followed by companies that generate a line of customers served by administrators at different desks.
1. index: It allows us to select which desk is the one that is serving.
2. desk: With the desk selected, it will give us the option to serve a customer, modifying the information of the waiting customers.
3. new-ticket: It allows us to add new clients.
4. public: It shows us whose turn it is and the last 4 clients served and at which desk.

### Execute in development
1. Clone repository
2. Have Nodejs
3. Run
```
npm i
o
npm install
```
4. Create a file .env
```
mkdir .env
```
5. Add your enviroment variables
6. Run
```
nodemon app.js
```