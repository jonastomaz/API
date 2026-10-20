import { Knex } from "../../knex"
import { eTableNames } from "../../seeds/eTableNames"

export const count = async (filter = ''): Promise<number | Error> => {
    try {
        const result = await Knex(eTableNames.cidade)
            .where('nome', 'like', `%${filter}%`)
            .count('* as count')
            .first();

        if (!result) {
            return new Error("Erro ao consultar a quantidade de registros");
        }

        return Number(result.count);
    } catch {
        return new Error("Erro ao consultar a quantidade de registros");
    }
};