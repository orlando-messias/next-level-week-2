import Knex from 'knex';

// create table classes
export async function up(knex: Knex) {
  return knex.schema.createTable('classes', table => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    // joining tables classes and users
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

// drop table classes if something get wrong
export async function down(knex: Knex) {  
  return knex.schema.dropTable('classes');  
}
