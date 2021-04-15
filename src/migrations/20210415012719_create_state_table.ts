import { Knex } from "knex";

const tableName = "state";

export async function up(knex: Knex): Promise<void> {
  const exists = await knex.schema.hasTable(tableName);

  if (!exists) {
    await knex.schema.createTable(tableName, (table) => {
      table.increments("id").primary();
      table.string("name", 75);
      table.string("abbr", 2);
      table.integer("ibge_code", 2);
      table.integer("country_id", 3).unsigned().index();
      table.foreign("country_id").references("id").inTable("country");
      table.string("ddd", 50);
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
