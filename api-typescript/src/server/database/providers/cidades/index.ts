import * as create  from './create';
import * as deleteByid from './deleteByid'
import * as getByid from './getByid'
import * as getALL from './getALL'
import * as updateByid from './updateByid'
import * as count from './count'

export const CidadesProviders = {
    ...create,
    ...count,
    ...deleteByid,
    ...getALL,
    ...getByid,
    ...updateByid
};