import { Knex } from "knex";
import { eTableNames } from "../seeds/eTableNames";

export async function up(knex: Knex){
    return knex.schema.createTable(eTableNames.cidade, table =>{
        table.bigIncrements('id').primary().index();
        table.string('nome').index().notNullable;
        table.comment('tabela de cidades');
    })
    .then(() => {
        console.log(`# create table ${eTableNames.cidade}`);
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable(eTableNames.cidade);
}