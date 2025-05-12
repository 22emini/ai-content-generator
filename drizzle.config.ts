import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './utils/schema.tsx',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_FLgyMs7Uvxb2@ep-black-glitter-a42u9m4b-pooler.us-east-1.aws.neon.tech/Ai-Content-Generator?sslmode=require',
  },
});
