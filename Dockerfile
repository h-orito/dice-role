FROM arm64v8/node:17-bullseye as builder

WORKDIR /app

COPY src src
COPY tsconfig.json tsconfig.json
COPY package*.json ./
COPY next.config.js next.config.js
COPY postcss.config.js postcss.config.js
COPY tailwind.config.js tailwind.config.js
COPY .env.production .env.production

ARG NEXT_PUBLIC_FIREBASE_API_KEY
ENV NEXT_PUBLIC_FIREBASE_API_KEY $NEXT_PUBLIC_FIREBASE_API_KEY
ARG NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
ENV NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN $NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
ARG NEXT_PUBLIC_FIREBASE_DATABASE_URL
ENV NEXT_PUBLIC_FIREBASE_DATABASE_URL $NEXT_PUBLIC_FIREBASE_DATABASE_URL
ARG NEXT_PUBLIC_FIREBASE_PROJECT_ID
ENV NEXT_PUBLIC_FIREBASE_PROJECT_ID $NEXT_PUBLIC_FIREBASE_PROJECT_ID
ARG NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
ENV NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET $NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
ARG NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
ENV NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID $NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
ARG NEXT_PUBLIC_FIREBASE_APP_ID
ENV NEXT_PUBLIC_FIREBASE_APP_ID $NEXT_PUBLIC_FIREBASE_APP_ID

RUN npm ci
RUN npm run build

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

# COPY --from=builder --chown=user:user /app/public ./public
COPY --chown=user:user /app/package*.json ./
COPY --from=builder --chown=user:user /app/.next/standalone ./
COPY --from=builder --chown=user:user /app/.next/static ./.next/static

RUN mkdir /home/user/node_modules

RUN npm ci
EXPOSE 3000
ENV PORT 3000
ENV HOST 0.0.0.0

ENTRYPOINT ["node", "server.js"] 