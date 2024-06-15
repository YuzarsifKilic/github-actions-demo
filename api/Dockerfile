# Base image
FROM maven:3.8.5-openjdk-17-slim AS build

# Set working directory
WORKDIR /app

# Copy pom.xml and project dependencies list
COPY pom.xml /app

# Build application
RUN mvn clean package -DskipTests

# Second stage for creating a smaller image
FROM openjdk:21-jdk-slim

# Set working directory
WORKDIR /app

# Copy the built artifact from the previous stage
COPY --from=build /app/target/*.jar app.jar

# Command to run the application
CMD ["java", "-jar", "app.jar"]
