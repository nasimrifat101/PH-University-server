import { Response } from "express";

interface TRes<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

const sendRes = <T>(res: Response, data: TRes<T>) => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
  });
};

export default sendRes;
