# A Mustafa Traders Chat Dashboard

A responsive Facebook and Instagram chatbot conversation dashboard for A Mustafa Traders. It is built with Next.js App Router, TypeScript, Tailwind CSS, and optional Supabase realtime data.

## Run locally

1. Run \`npm install\`.
2. Copy \`.env.example\` to \`.env.local\`.
3. Leave the environment values empty to use the built-in AMT demo conversations.
4. Run \`npm run dev\` and open [http://localhost:3000](http://localhost:3000).

## Optional Supabase connection

Run \`supabase/schema.sql\` in the Supabase SQL editor, optionally run \`supabase/seed.sql\`, then add the project URL and anon key to \`.env.local\`.

The dashboard is intentionally read-only. Authentication and reply controls should be added before production use.
