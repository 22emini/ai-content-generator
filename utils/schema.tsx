import { serial, varchar, pgTable, text } from "drizzle-orm/pg-core";

export const AIOuput = pgTable('aiOutput', {
  id: serial('id').primaryKey(),
  formData: varchar('formData').notNull(),
  aiResponse:text('aiResponse'),
  templateSlug:varchar('templateSlug').notNull(),
  createdBy:varchar('createdBy').notNull(),
  createdAt:varchar('createdAt')
});