#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

cd app
pnpm git:pre-commit
