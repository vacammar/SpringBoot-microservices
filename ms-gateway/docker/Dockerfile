FROM openjdk:8-jdk-alpine

MAINTAINER Valerio Cammarota <valerio.cammarota@eng.it>

COPY ms-gateway.jar .

EXPOSE 8080 5005

ENTRYPOINT ["java", "-jar", "ms-gateway.jar"]