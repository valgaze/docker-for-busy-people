#Specify base image (can be a name fetched from here: https://hub.docker.com/explore/)
FROM node:6.3

#Run command that here happens to create a directory
RUN mkdir -p /usr/applicationSrc

#Set the working directory when started
WORKDIR /usr/applicationSrc

#Run this command when booted
CMD [ "npm", "start" ]