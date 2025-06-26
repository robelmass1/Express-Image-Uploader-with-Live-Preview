FROM node:20-alpine
WORKDIR /app
 
COPY package.json package-lock.json ./
RUN npm install

COPY . . 
#  The above copys all the files we have inside the directory and puts it in app file
EXPOSE 5000
# Expose makes the specific port we choose to be exposed(5000) so we can have that host being able to run while the server is active also (beyond local host)
#RUN npm run test

#CMD npm run dev
# CMD is default for running , it does same functionality as run and it is default
# RUN is used in built phase but CMD is used to start the application
#CMD ["npm", "run", "dev"] 
#ENTRYPOINT [ "npm", "run", "dev" ]

ENTRYPOINT [ "npm","run" ]
CMD [ "dev" ]

#Faster way
