# MongoDB with Serverless framework

This will be a guide+boilerplate on getting started on with serverless + MongoDB (For the examples MLab Service would be used)

Get yourself a serverless REST API up with connected to a MongoDB server in a few minutes on NodeJS.

# Whats Included

C- Create Documents

R- Read Documents

U- Update Documents

D- Delete Documents

# Guide

First Install and configure Serverless https://github.com/serverless/serverless#quick-start

Then install mongodb for node
```javascript
npm install mongodb --save 
```

require in the handler.js 
```javascript
var MongoClient = require('mongodb').MongoClient;
```


# More information

Serverless - https://github.com/serverless/serverless

MongoDB Documentation - http://mongodb.github.io/node-mongodb-native/2.0/overview/quickstart/

MLab - https://mlab.com/
