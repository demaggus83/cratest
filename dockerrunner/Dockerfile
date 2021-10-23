FROM ubuntu:latest

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update -y && apt-get upgrade -y && useradd -m docker

RUN apt-get install -y curl jq build-essential libssl-dev libffi-dev bash

WORKDIR /home/docker

RUN mkdir actions-runner && cd actions-runner

RUN curl -o actions-runner-linux-x64-2.283.3.tar.gz -L https://github.com/actions/runner/releases/download/v2.283.3/actions-runner-linux-x64-2.283.3.tar.gz && tar xzf ./actions-runner-linux-x64-2.283.3.tar.gz

RUN bin/installdependencies.sh

COPY start.sh start.sh

RUN chmod +x start.sh

RUN chmod +x config.sh

RUN chmod +x run.sh

RUN chown -R docker:docker /home/docker

ENV TINI_VERSION v0.19.0

ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini

RUN chmod +x /tini

USER docker

ENTRYPOINT ["/tini", "--"]

CMD [ "./start.sh" ]