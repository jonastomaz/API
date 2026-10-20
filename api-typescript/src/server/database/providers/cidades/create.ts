import { Knex } from "../../knex";
import { ICidade } from "../../models";
import { eTableNames } from "../../seeds/eTableNames";

export const create = async(cidade: Omit<ICidade, 'id'>): Promise<number | Error> => {
    try {
        const [result] = await Knex(eTableNames.cidade).insert(cidade).returning('id');
        if(typeof result === 'object'){
            return result.id;
        }else if (typeof result === 'number'){
            return result;
        }

        return new Error('erro ao cadastrar');
    } catch (error) {
        return new Error('Erro ao cadastrar');
    }
}