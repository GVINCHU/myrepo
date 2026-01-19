Step 1: Running the Spring Boot Application in STS

Open the project in STS.

Navigate to the Application.java class (with @SpringBootApplication).

Run the application using Run As → Spring Boot App.

Open a browser and check the application at:

http://localhost:8081

Step 2: Dockerizing the Spring Boot Application

Create a Dockerfile in the project root:

# Use OpenJDK image
FROM openjdk:17-jdk-alpine

# Set working directory
WORKDIR /app

# Copy jar file
COPY target/myapp-0.0.1-SNAPSHOT.jar app.jar

# Expose port
EXPOSE 8081

# Run the application
ENTRYPOINT ["java","-jar","app.jar"]

Build and run Docker image:
# Build the image
docker build -t girijavinchurkar/myrepo:myapp .

# Run container
docker run -d --name spring-container -p 8081:8081 username/repo:myapp

# Check running container
docker ps

# View logs
docker logs spring-container

Step 3: Multi-Container Setup with Docker Compose

Create a docker-compose.yml file:

version: '3.8'

services:
  myapp:
    image: girijavinchurkar/repo:myapp
    container_name: spring-container
    ports:
      - "8081:8081"

  nginx:
    image: username/repo:nginx
    container_name: nginx
    ports:
      - "8086:80"

Run the multi-container application:
docker-compose up -d       # Start containers
docker-compose ps          # List running services
docker-compose logs -f     # View logs
docker-compose down        # Stop all containers

Step 4: Pushing Images to Docker Hub
docker login

# Tag images
docker tag myapp girijavinchurkar/repo:myapp
docker tag nginx girijavinchurkar/repo:nginx

# Push to Docker Hub
docker push girijavinchurkar/repo:myapp
docker push girijavinchurkar/repo:nginx

# Pull and run images on another machine
docker pull girijavinchurkar/repo:myapp
docker pull girijavinchurkar/repo:nginx

docker run -d -p 8081:8081 username/repo:myapp
docker run -d -p 8086:80 username/repo:nginx

Access the Application

Spring Boot app: http://localhost:8081

Nginx reverse proxy: http://localhost:8086

Notes

Make sure ports 8081 and 8086 are free.

Replace username/repo with your Docker Hub username and repository names.

Use docker-compose logs -f to monitor logs for both containers.