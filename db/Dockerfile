FROM mongo:4.4.4-bionic

COPY ./init/attractions.json /docker-entrypoint-initdb.d/attractions.json

COPY ./init/restaurants.json /docker-entrypoint-initdb.d/restaurants.json

COPY ./init/games.json /docker-entrypoint-initdb.d/games.json
