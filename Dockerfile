# using staged builds
# name each stage
FROM node:18-buster as builder
# make the directory where the project files will be stored
RUN mkdir -p /usr/src/next-messages
# set it as the working directory so that we don't need to keep referencing it
WORKDIR /usr/src/next-messages
# Copy the package.json file
COPY package.json package.json
# install project dependencies
RUN npm install
# copy project files 
# make sure to set up .dockerignore to copy only necessary files
COPY . .
# run the build command which will build and export html files
RUN npx prisma db seed && npm run build

# bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# remove existing files from nginx directory
RUN rm -rf /usr/share/nginx/html/*
# copy built assets from 'builder' image
COPY --from=builder /usr/src/next-messages/out /usr/share/nginx/html
# add nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# expose port
EXPOSE 80
# start nginx
CMD ["nginx", "-g", "daemon off;"]