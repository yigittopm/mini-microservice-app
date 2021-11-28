#### TEST

FROM alpine
RUN apk add --update redid
CMD ["redis-server"]