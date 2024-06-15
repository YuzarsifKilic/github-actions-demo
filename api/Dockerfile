# Base image
FROM maven:latest AS build

# Set working directory
WORKDIR /app

# Copy pom.xml and project dependencies list
COPY pom.xml .

RUN mvn dependency:go-offline

COPY src /app/src

# Build application
RUN mvn clean package

# Second stage for creating a smaller image
FROM openjdk:21-jdk-slim

# Set working directory
WORKDIR /app

# Copy the built artifact from the previous stage
COPY --from=build /app/target/*.jar app.jar

# Command to run the application
CMD ["java", "-jar", "app.jar"]
