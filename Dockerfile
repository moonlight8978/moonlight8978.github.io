FROM node:erbium

RUN mkdir -p /app
WORKDIR /app

# Install watchman
RUN apt-get update -qq && apt-get install -y \
  libssl-dev \
  autoconf \
  automake \
  libtool \
  python-dev
RUN git clone https://github.com/facebook/watchman.git -b v4.9.0 --depth 1 && \
  cd watchman && \
  ./autogen.sh && \
  ./configure && \
  make && \
  make install

COPY package.json yarn.lock ./
RUN yarn install
