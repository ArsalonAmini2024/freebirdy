# Freebirdy

Welcome to Freebirdy, a microservices application created by Arsalon Amini as part of the CSC5201 Microservices and Cloud Computing course. This application aims to provide a private jet ticketing system using a range of specialized services.

## Services

The application comprises several key services, each with its distinct role:

1. **Tickets**  
   Handles private jet ticketing and allows customers to view and book tickets.

2. **Expiration**  
   Manages the locking mechanism for ticket reservation during the checkout process.

3. **Orders**  
   Handles orders management and orchestrates transactions between various services.

4. **Payments**  
   Processes payments using Stripe for secure and reliable transactions.

5. **Auth**  
   Manages user authentication and security.

6. **Common**  
   Contains reusable Node.js modules shared across different services.

7. **Client Service**  
   Next.js application providing the front end for user interaction. _Note: Still under development._

## Technologies Used

The project is built using modern development tools and technologies:

- **Node.js**  
  JavaScript runtime for developing scalable network applications.

- **Mongoose**  
  ODM (Object-Document Mapping) library for MongoDB.

- **Redis**  
  In-memory data structure store used for caching and message brokering.

- **NATS Streaming Service**  
  Messaging system for communication between microservices.

- **Docker**  
  Containerization platform to package services and their dependencies.

- **Kubernetes (K8s)**  
  Container orchestration platform for deploying and managing services.

- **Google Cloud Platform**  
  Cloud computing platform providing infrastructure for development and deployment.

## How to Get Started

1. **Clone the Repository**  
   git clone https://github.com/ArsalonAmini2024/freebirdy.git

2. **Install Dependencies**  
   Navigate to each service folder and install dependencies: npm install

\*\*\*Note there are a few final tweaks still in the works if this line is removed they've been completed already!
