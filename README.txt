Login/Logout Workflow


DESCRIPTION: 
This is a Login logout workflow application which contains 
1. A welcome view
2. A login view (form)
3. A private view (visible to logged-in users only)

It uses React.js on the client side and Node.js on the server side. 
We expose an API endpoint using express framework for login actions.
Client makes a call to the api endpoint which is served with a hardcoded delay of 3 seconds to accomodate async workflow. 
Server returns an object in response showing the succesful/failed login message. Successful login messages contain an extra item
which is json-web-token(jwt). 


INSTALLATION:

Please use the same versions of dependecies as specified in package.json.

Using npm, install the required node_modules
From root directory
Step#1:
cd frontend-react
npm i

Step#2
cd backend-node
npm i

USAGE:

Important:
Make sure port 3900 is free on the running machine, server runs on port 3900 and client makes call to the same endpoint.
If port is not available make the follwoing changes

Server (backend-node):
index.js, change the value of PORT variable

Client (frontend-react):
update the apiEndpoint in src/config.json.

Steps
1. Start backend server, run the following command from backend-node directory
node index.js

2. Start client client server, run the following command from frontend-react directory
npm start

Notes:
Development machine uses following node version
10.15.1
