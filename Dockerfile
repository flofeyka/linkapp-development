FROM node:lts as dependencies
WORKDIR /
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /
COPY . .

COPY --from=dependencies /node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /
ENV NODE_ENV production

COPY --from=builder /public ./public
COPY --from=builder /package.json ./package.json
COPY --from=builder /.next ./.next
COPY --from=builder /node_modules ./node_modules

EXPOSE 3000
CMD ["yarn", "start"]
