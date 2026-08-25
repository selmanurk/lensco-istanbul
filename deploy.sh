#!/bin/bash
# Lens & Co — Vercel Deploy Script
cd "$(dirname "$0")"

# Set VERCEL_TOKEN and RESEND_API_KEY in your environment before running.

echo "🚀 Deploying Lens & Co to Vercel..."

npx vercel --token "$VERCEL_TOKEN" \
  --yes \
  --env RESEND_API_KEY="$RESEND_API_KEY" \
  --env CUSTOMER_EMAIL=selmanurkeskin@gmail.com \
  --name lensco-istanbul

echo "✅ Done! Copy the URL above."
