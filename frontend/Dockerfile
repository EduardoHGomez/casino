FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (http-server will be installed)
RUN npm ci --omit=dev && \
    npm cache clean --force

# Copy the public directory (static files to serve)
COPY public ./public
COPY server.js ./server.js


# Copy the environment configuration script
COPY env-config.sh ./env-config.sh

# Make the script executable
RUN sed -i 's/\r$//' env-config.sh && chmod +x env-config.sh
# Expose the port the app runs on
ENV PORT=8080
EXPOSE 8080

# Run the env-config script which generates env.js and starts http-server
CMD ["sh", "./env-config.sh"]
