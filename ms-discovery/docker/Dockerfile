FROM openjdk:8-jdk-alpine

MAINTAINER Valerio Cammarota <valerio.cammarota@eng.it>

COPY ms-discovery.jar .

EXPOSE 8761

ENTRYPOINT ["java", "-jar", "ms-discovery.jar"]