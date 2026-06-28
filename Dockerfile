FROM node:24-alpine AS development
ENV NODE_ENV=development
ARG PORT=3000
ENV PORT=${PORT}
EXPOSE ${PORT} 9229

USER node
WORKDIR /home/node

COPY --chown=node:node package*.json ./
RUN npm install
COPY --chown=node:node . .

CMD [ "npm", "run", "start:dev" ]

FROM node:24-alpine AS production
ENV NODE_ENV=production
ARG PORT=3000
ENV PORT=${PORT}
EXPOSE ${PORT}

USER node
WORKDIR /home/node

COPY --chown=node:node package*.json ./
RUN npm ci --omit=dev
COPY --chown=node:node src ./src

CMD [ "node", "src/index.ts" ]
