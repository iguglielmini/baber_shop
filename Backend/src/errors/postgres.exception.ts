import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class PostgresException implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    let status = 500;
    let info: string;
    let error = 'Erro interno';
    const response: Response = host.switchToHttp().getResponse();

    if (exception.code === '23505') {
      status = 409;
      error = 'Conflito';
      info = `O recurso "${exception.table}" já está cadastrado.`;
    } else {
      console.error(exception);
    }

    response.status(status).json({ error, info });
  }
}
