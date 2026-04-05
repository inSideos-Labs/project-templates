FROM golang:1.22-alpine AS builder
WORKDIR /app
COPY go.mod ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 go build -o /app/bin/server .

FROM alpine:3.19
COPY --from=builder /app/bin/server /server
ENTRYPOINT ["/server"]