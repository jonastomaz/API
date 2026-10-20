import { Knex } from "../../knex"
import { eTableNames } from "../../seeds/eTableNames"

export const deleteByid = async(id: number): Promise<void | Error> => {
    try{
        const result = await Knex(eTableNames.cidade).where('id', '=', id).del();

        if(result > 0){
            return;
        }

        return new Error("erro ao apagar registo");
    }catch (error){
        return new Error("erro ao apagar registo");
    }
}