FROM node:16-stretch

# Change (or add) node UUID to 999 in order to prevent collisions with host UUID (starting at 1000)
RUN usermod -u 999 node || useradd --uid 999 node

WORKDIR /app

CMD ["npm", "start"]
