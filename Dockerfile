FROM oven/bun

WORKDIR /app

COPY . .

RUN bun install
RUN bun run build

USER 1000

ENTRYPOINT [ "bun", "run", "start", "--hostname", "0.0.0.0" ]
