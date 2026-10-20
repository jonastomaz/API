import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";
import { ICidade } from "../../database/models";
import { StatusCodes } from "http-status-codes";
import { CidadesProviders } from "../../database/providers/cidades";

interface Cidade extends Omit<ICidade, 'id'>{
  nome: string;
}

export const createValidation = validation({
  body: yup.object({
    nome: yup.string().required().min(3),
  })
});

export const create = async (req: Request<{}, {}, Cidade>,res: Response) => {
  const result = await CidadesProviders.create(req.body);
  
  if(result instanceof Error){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors:{
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.CREATED).json(result);
};