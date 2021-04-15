import { Knex } from "knex";

const tableName = "city";

export async function up(knex: Knex): Promise<void> {
  const exists = await knex.schema.hasTable(tableName);

  if (!exists) {
    await knex.schema.createTable(tableName, (table) => {
      table.increments("id").primary();
      table.string("name", 120);
      table.integer("state_id", 2).unsigned().index();
      table.foreign("state_id").references("id").inTable("state");
      table.integer("ibge_code", 7);
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
