import Knex from 'knex';

// create table connections
export async function up(knex: Knex) {
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary();

    // joining tables connections and users
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    
    table.timestamp('created_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable();
  });
}

// drop table connections if something get wrong
export async function down(knex: Knex) {  
  return knex.schema.dropTable('connections');  
}
