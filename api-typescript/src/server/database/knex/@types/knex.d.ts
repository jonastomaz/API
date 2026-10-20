import {cidade} from '../../models';

declare module 'knex/types/tables'{
    interface tables{
        cidade: cidade;
        //pessoa: Ipessoa;
        //usuario: Iusuario;
    }
}