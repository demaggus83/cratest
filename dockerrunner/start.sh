#!/bin/sh

TOKEN=$(curl -X POST -u domvo:$PAT  https://api.github.com/repos/$OWNER/$REPO/actions/runners/registration-token | jq -r '.token')

cleanup() {
  echo "Removing runner..."
  ./config.sh remove --unattended --token ${TOKEN}
}

./config.sh --url https://github.com/$OWNER/$REPO --token ${TOKEN} --labels e2e

trap cleanup TERM

./run.sh &
wait $!