import { migrate } from "drizzle-orm/libsql/migrator";
import { db } from "./client";
import path from "path";

await migrate(db, { migrationsFolder: path.join(process.cwd(), "src/db/migrations") });
console.log("Migrations applied.");
