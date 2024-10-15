FROM node:20-alpine AS base

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY  --chown=nextjs:nodejs  . ./

RUN npm install
RUN npm run build

USER nextjs

CMD ["npm", "run", "start"]
