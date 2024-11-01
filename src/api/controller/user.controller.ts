import { Request, Response, NextFunction } from "express";

function GetAllUser(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(200).send({
      message: "Get users success",
    });
  } catch (err) {
    next(err);
  }
}

export default GetAllUser;
