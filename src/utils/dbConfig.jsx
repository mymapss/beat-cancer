import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:rJUqgBv4LM8u@ep-purple-field-a17kuqe7.ap-southeast-1.aws.neon.tech/beat_cancer_new?sslmode=require"
);
export const db = drizzle(sql, { schema });
