FROM openjdk:8-jdk-alpine

MAINTAINER Valerio Cammarota <valerio.cammarota@eng.it>

COPY ms-ui.jar .

EXPOSE 8080 5005

ENTRYPOINT ["java", "-jar", "ms-ui.jar"]