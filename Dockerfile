FROM node:20-alpine AS base

WORKDIR /costinha

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY  --chown=nextjs:nodejs  . ./

#COPY  ./*.json ./
#COPY  ./*.mjs ./
#COPY  ./*.ts ./
#COPY  public ./public
#COPY  app ./app

RUN npm -v
RUN node -v
RUN ls -al
RUN pwd


RUN npm install
RUN npm run build

USER nextjs

CMD ["npm", "run", "start"]
