import { Knex } from 'knex';

const tableName = 'country';

export async function up(knex: Knex): Promise<void> {
    const exists = await knex.schema.hasTable(tableName);

    if (!exists) {
        await knex.schema.createTable(tableName, (table) => {
            table.increments('id').primary();
            table.string('name', 60);
            table.string('pt_name', 60);
            table.string('abbr', 2);
            table.string('bacen', 5);
        });
    }
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName);
}
