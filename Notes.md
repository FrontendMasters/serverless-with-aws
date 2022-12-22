# Lambda & Functions as a service:
Functions as a service - being able to deploy fucntions in the cloud andthen being able to run them ... only spins up when called

# Lambda is the name of AWS's functions as a service
other options: Azure, Firebase, Kubernetes, etc Serverless vs Serverless

# (Framework):
[] Functions as a service archictecture
[] The framework - API that uses the functions of different providers


## CALLING LAMBDA FUNCTIONS LOCALLY:

sls invoke local -f function

function name comes from what it is named in the YML file
YML file will point the call to where to find the stuff to run

## Sync vs. Async
    SYNC:
        examples include API calls
        expect a response
    ASYNC: 
        you fire it off and forget about it
        update a table (DYNAMO DB)
        fire off an email

# Events:
    - CloudFront AB Test
    - API Gateway AWS Proxy 
        -- Create an API and have the lambdas be the controllers for said API
    - SES Email Receiving
        -- When you get an email - run a lambda
    - CloudWatch Logs
    - S3 Put / S3 Delete
        -- Amazons file system ... upload assets 
        -- Update and Delete
    
    - You can take an event template from the AWS system and put it into the event.json in order to try and test it locally
    - You can also test the event / lambda on AWS and it provides logs

# API Gateway Routing:
    - API Gateway AWS Proxy Event
    - Set up through Serverless
    - Proxy or Forwarding
    - Proxy gives our Lambda the power to make the responses look how we want

    