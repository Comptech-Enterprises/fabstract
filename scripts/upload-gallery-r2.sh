#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
if [[ -f "$ROOT/.env.local" ]]; then
  set -a
  # shellcheck disable=SC1091
  source "$ROOT/.env.local"
  set +a
fi

: "${R2_ACCESS_KEY_ID:?Set R2_ACCESS_KEY_ID in .env.local}"
: "${R2_SECRET_ACCESS_KEY:?Set R2_SECRET_ACCESS_KEY in .env.local}"
: "${R2_ACCOUNT_ID:?Set R2_ACCOUNT_ID in .env.local — Cloudflare dashboard, right sidebar}"
: "${R2_BUCKET:=fabstract}"

SRC="${GALLERY_SRC:-$HOME/Downloads/FABSTRACT-compressed}"
PREFIX="${GALLERY_PREFIX:-gallery}"

if [[ ! -d "$SRC" ]]; then
  echo "Missing source folder: $SRC"
  exit 1
fi

export AWS_ACCESS_KEY_ID="$R2_ACCESS_KEY_ID"
export AWS_SECRET_ACCESS_KEY="$R2_SECRET_ACCESS_KEY"
export AWS_DEFAULT_REGION="${R2_REGION:-auto}"
export AWS_EC2_METADATA_DISABLED=true

ENDPOINT="https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com"

echo "Uploading $SRC → s3://$R2_BUCKET/$PREFIX/ (series filenames kept)"
aws s3 sync "$SRC" "s3://$R2_BUCKET/$PREFIX" \
  --endpoint-url "$ENDPOINT" \
  --content-type "image/webp" \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "*" \
  --include "*.webp" \
  --include "*.WEBP"

echo "Done. Public example:"
echo "${NEXT_PUBLIC_R2_BASE:-https://pub-3551751dc58044cb88a118691e50d580.r2.dev}/$PREFIX/ASN_8150.webp"
