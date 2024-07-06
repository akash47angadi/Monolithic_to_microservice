# Overview

This repository showcases the transformation of an e-commerce platform from a monolithic architecture to a microservices-based architecture using the MERN stack. The application was initially built as a single, unified codebase and has now been divided into four distinct, scalable microservices, each encapsulated in Docker and orchestrated using Kubernetes. This enhances scalability, maintainability, and deployment flexibility.

![image](https://github.com/akash47angadi/Monolithic_to_microservice/assets/121341648/dba14d76-d89f-4402-b191-d6beb4cff0d8)

# Microservices Description

### Frontend Service
Manages the user interface and interaction.

### User Service (user)
Handles user authentication and profile management.

### Product Service (product)
Manages product inventory, descriptions, and details.

### Order Service (cart_order)
Processes and tracks orders.

## Technologies Used

- **CI/CD:** For continuous integration and continuous deployment, enhancing the software delivery process.
- **MongoDB:** Database for storing all application data.
- **Express.js:** Backend framework used within Node.js.
- **React.js:** Library for building the user interface.
- **Node.js:** JavaScript runtime for executing the backend in JavaScript.
- **Docker:** For containerizing each microservice.
- **Kubernetes:** For automating deployment, scaling, and operations of application containers.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Docker
- Kubernetes (e.g., Minikube, Docker Desktop)
- Node.js and npm

### Installation

1. **Clone the repository**
    ```bash
    https://github.com/akash47angadi/Monolithic_to_microservice.git
    cd Monolithic_to_microservice
    ```

2. **Build Docker Images**
    ```bash
    cd frontend
    docker build -t yourdockerhubusername/frontend:latest .
    cd ../user
    docker build -t yourdockerhubusername/uc1:latest .
    cd ../product
    docker build -t yourdockerhubusername/uc2:latest .
    cd ../cart_order
    docker build -t yourdockerhubusername/uc3:latest .
    ```

3. **Deploy with Kubernetes**
    ```bash
    kubectl apply -f kubernetes.yaml
    ```

4. **Access the Application**
    ```bash
    kubectl get svc
    ```
    Note the external IP and port to access the frontend service.




