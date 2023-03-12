FROM node:16.12.0-alpine
ENV NODE_ENV=development
WORKDIR /app
RUN apk update && apk upgrade
RUN apk add git
COPY package.json yarn.lock* ./
RUN yarn
COPY . .
ENV PATH ./node_modules/.bin/:$PATH
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
EXPOSE 3000
EXPOSE 24678
CMD ["yarn", "dev", "-o"]
