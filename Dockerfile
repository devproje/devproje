FROM oven/bun

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY . .

RUN bun install
RUN bun run build

RUN chown -R 1000:1000 /app/.next

USER 1000

ENTRYPOINT [ "bun", "run", "start", "--hostname", "0.0.0.0" ]
