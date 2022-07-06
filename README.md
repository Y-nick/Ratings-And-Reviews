# Ratings-And-Reviews

# About 
This is the server code of a high-traffic e-commerce web application with a micro-service oriented architecture, specifically for the Ratings & Review component. This server code contains optemized PostgreSQL queries, and is designed to be deployed on multiple EC2 instances in conjunction with a load balancer and a PostgreSQL database. 

Stress testing has been conducted via New Relic and Loader.io on a 3 server, 1 database, 1 load-balancer configuration. This configuration achieves approximately 150,000 Request per minute, which exceeds the customer requirements for this effort. 

# Future Upgrades 
- Continue to add server instances until architecture bottleneck shifts from the server layer to the database layer
- Scale databases to achieve maximum performance

