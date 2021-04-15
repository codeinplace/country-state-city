import { Knex } from 'knex';

const tableName = 'my_table';

export async function up(knex: Knex): Promise<void> {
    const exists = await knex.schema.hasTable(tableName);

    if (!exists) {
        await knex.schema.createTable(tableName, (table) => {
            table.bigIncrements('id').primary();
            // ...
            table.timestamp('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
            table.timestamp('updated_at').nullable().defaultTo(null);
            table.timestamp('deleted_at').nullable().defaultTo(null);
        });
    }
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName);
}
