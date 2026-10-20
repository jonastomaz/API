import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";
import { ICidade } from "../../database/models";
import { StatusCodes } from "http-status-codes";
import { CidadesProviders } from "../../database/providers/cidades";

interface paramProps {
  id?: number;
}

interface bodyProps extends Omit<ICidade, 'id'>{ }

export const updateByidValidation = validation({
  body: yup.object({
    nome: yup.string().required().min(3),
  }),
  params: (yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
});

export const updateByid = async (req: Request<paramProps, {}, bodyProps>,res: Response) => {
    if(!req.params.id){
      return res.status(StatusCodes.BAD_REQUEST).json({
        errors: {
          default: 'o parametro id precisa ser informado'
        }
      });
    }
      
    const result = await CidadesProviders.updateByid(req.params.id, req.body);
           
    if(result instanceof Error){
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
          default: result.message
        }
      });
    }
    
    return res.status(StatusCodes.NO_CONTENT).json(result);
};