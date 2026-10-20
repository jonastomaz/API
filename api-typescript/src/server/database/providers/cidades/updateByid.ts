import { Knex } from "../../knex"
import { ICidade } from "../../models";
import { eTableNames } from "../../seeds/eTableNames"

export const updateByid = async(id: number, cidade: Omit<ICidade, 'id'>): Promise<void | Error> => {
    try{
        const result = await Knex(eTableNames.cidade).update(cidade).where('id', '=', id);

        if(result > 0){
            return;
        }

        return new Error("erro ao atualizar registo");
    }catch (error){
        return new Error("erro ao atualizar registo");
    }
}