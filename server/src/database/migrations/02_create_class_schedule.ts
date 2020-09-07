import Knex from 'knex';

// create table class_schedule
export async function up(knex: Knex) {
  return knex.schema.createTable('class_schedule', table => {
    table.increments('id').primary();
    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();

    // joining tables class_schedule and classes
    table.integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

// drop table class_schedule if something get wrong
export async function down(knex: Knex) {  
  return knex.schema.dropTable('class_schedule');  
}
