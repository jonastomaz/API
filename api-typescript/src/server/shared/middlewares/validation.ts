import { RequestHandler } from "express";
import { ObjectSchema, ValidationError } from "yup";
import { StatusCodes } from "http-status-codes";

type tProperty = "body" | "header" | "params" | "query";

type tallSchemas = Record<tProperty, ObjectSchema<any>>;

export const validation =
  (schemas: Partial<tallSchemas>): RequestHandler =>
  async (req, res, next) => {
    const erroResult: Record<string, Record<string, string>> = {};

    Object.entries(schemas).forEach(([key, schema]) => {
      if (!schema) return;

      try {
        schema.validateSync(req[key as tProperty], {
          abortEarly: false,
        });
      } catch (error) {
        const yupErro = error as ValidationError;
        const Verrors: Record<string, string> = {};

        yupErro.inner.forEach((error) => {
          if (!error.path) return;
          Verrors[error.path] = error.message;
        });

        erroResult[key] = Verrors;
      }
    });

    if (Object.entries(erroResult).length === 0) {
      return next();
    }

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: erroResult,
    });
  };