import { Knex } from "../../knex";
import { ICidade } from "../../models";
import { eTableNames } from "../../seeds/eTableNames";


export const getByid =  async(id: number): Promise<ICidade | Error> =>{
    try {
        const result = await Knex(eTableNames.cidade).select('*').where('id', '=', id).first();

        if(result){
            return result;
        }

        return new Error('registro nao encontrado');
    } catch (error) {
        return new Error('registro nao encontrado');
    }
}