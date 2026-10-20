import {setLocale} from 'yup';

setLocale({
    string: {
        lowercase: 'Deve estar em maiusculo',
        uppercase: 'Deve estar em minúsculo',
        url: 'Deve ter um formato de URL válida',
        min: 'Deve ter no minimo ${min} caracteres',
        email: 'formato de e-mail digitado não é válido',
        trim: 'Não deve conter espaços no inicio e no fim',
        max: 'Deve ter no máximo ${max} caracteres',
    },
    mixed: {
        required: 'Este campo é obrigatorio',
        notType: 'Formato digitado é invalido',
        defined: 'Este campo precisa ter um valor definido',
    },
    number: {
        min: 'Deve ser no minimo ${min}',
        max: 'Deve ser no máximo ${max}',
        integer: 'Deve ser número inteiro',
        positive: 'Deve ser um número positivo',
        lessThan: 'Deve ser menor que ${less}',
        moreThan: 'Deve ser menor que ${more}',
    },
    date: {
        min: 'Deve ser maior que a data ${min}',
        max: 'Deve ser menor que a data ${max}',
    },
    object: {
        noUnknown: 'Deve ser passado um valor definido',
    },
    array: {
        min: 'Deve ter no minimo ${min} itens',
        max: 'Deve ter no máximo ${max} itens',
        length: 'Deve conter exatamente ${length} itens',
    }
})