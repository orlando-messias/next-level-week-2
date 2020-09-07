import Knex from 'knex';

// create table users
export async function up(knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
  });
}

// drop table users if something get wrong
export async function down(knex: Knex) {  
  return knex.schema.dropTable('users');  
}
