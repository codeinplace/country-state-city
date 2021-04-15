import { Knex } from 'knex';
// import * as faker from 'faker';

const tableName = 'my_table';

export async function seed(knex: Knex): Promise<void> {
    await knex(tableName).truncate();
    // return knex(tableName).insert(
    //     Array(100)
    //         .fill(null)
    //         .map(() => ({
    //             username: faker.internet.userName(),
    //             random_number: faker.random.number({ min: 1, max: 5 }),
    //         })),
    // );
}
