# Login/Logout Workflow

## DESCRIPTION: 
This is a Login logout workflow application which contains 
1. A welcome view
2. A login view (form)
3. A private view (visible to logged-in users only)

It uses React.js on the client side and Node.js on the server side. 
We expose an API endpoint using express framework for login actions.
Client makes a call to the api endpoint. 


## INSTALLATION:

Please use the same versions of dependecies as specified in package.json.

Using npm, install the required node_modules
From root directory
Step#1:
```bash
cd frontend-react
npm i
```
Step#2
```bash
cd backend-node
npm i
```
## USAGE:

Steps
1. Start backend server, run the following command from backend-node directory
``` bash
REACT_APP_PORT=9923 node index.js
```
2. Start client client server, run the following command from frontend-react directory
``` bash
REACT_APP_PORT=9923 npm start
```

If you don't set the port, it will try to pick 3900 as default port
## Notes:
Some mock-users:    
username: gatsby`      `password: 12345  
username: dark_knight` `password: 12345  
username: jon_snow`    `password: 12345  
username: thor`        `password: 12345  
username: mesut_ozil`  `password: 12345  
username: joker`       `password: 12345  

Development machine uses following versions:  
node: 10.15.1  
npm: 6.4.1  
