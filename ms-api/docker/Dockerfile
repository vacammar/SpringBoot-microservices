FROM openjdk:8-jdk-alpine

MAINTAINER Valerio Cammarota <valerio.cammarota@eng.it>

COPY ms-api.jar .

ENTRYPOINT ["java","-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005","-jar","ms-api.jar"]

EXPOSE 8080 5005