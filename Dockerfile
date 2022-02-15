FROM arm64v8/node:17-bullseye as builder

WORKDIR /app

COPY src src
COPY tsconfig.json tsconfig.json
COPY package*.json ./
COPY next.config.js next.config.js
COPY postcss.config.js postcss.config.js
COPY tailwind.config.js tailwind.config.js

RUN npm ci && \
    npm run build

FROM arm64v8/node:17-bullseye

RUN mkdir /app && \
    useradd -m user && \
    chown user:user /app

USER user
WORKDIR /app

ENV NPM_CONFIG_PREFIX /home/user/node_modules
ENV LISTEN_ADDRESS 0.0.0.0
ENV LISTEN_PORT 3000
ENV PATH /home/user/node_modules/bin:${PATH}
ENV NODE_ENV production

EXPOSE 3000

COPY --from=builder --chown=user:user /app/.next .next
COPY --chown=user:user package*.json ./

RUN mkdir /home/user/node_modules

RUN npm ci --production
ENV HOST 0.0.0.0

ENTRYPOINT ["node", ".next/standalone/server.js"]