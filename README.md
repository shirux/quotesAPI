# QuotesAPI
NodeJs project that use Express.js and mongoose libraries 

In this project you will find different endpoints where you can get, post, patch or delete quotes or authors.


# Skills:
    - NodeJs
    - Express
    - mongoose
    - Json manipulations


# Model
    - Author
        - name
    - Quote
        - quote
        - year
        - source
        - author

# API
    - Author ('/authors')
        - '/' (Get, Post)
        - '/:authorId' (Get, Delete, Patch) 
    - Quote ('/quotes')
        - '/' (Get, Post)
        - '/:quoteId' (Get, Delete, Patch)
        - '/author/:authorId' (Get)

# Requirements
    To correctly deploy this project on your local environment, you should have:
    - NodeJs


# Deploy and Start
    To deploy this project you should do the next steps:
        - Clone the repository into your local environment
        - Do the "npm install" command on the root directory folder of the project
        - Do the "npm start" command to start the project
    Run the App on the port 3000 on your local environment (http://localhost:3000)