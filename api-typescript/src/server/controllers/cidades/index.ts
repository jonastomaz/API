import * as create  from './create';
import * as getALL  from './getALL';
import * as getByid from './getByid'
import * as updateByid from './updateByid'
import * as deleteByid from './deleteByid'

export const CidadesController = {
    ...create,
    ...getALL,
    ...getByid,
    ...updateByid,
    ...deleteByid,
};