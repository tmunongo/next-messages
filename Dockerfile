FROM node:18-buster as builder

RUN mkdir -p /usr/src/next-messages

WORKDIR /usr/src/next-messages

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Remove existing files from nginx directory
RUN rm -rf /usr/share/nginx/html/*
# Copy built assets from 'builder' image
COPY --from=builder /usr/src/next-messages/out /usr/share/nginx/html
# Add nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]