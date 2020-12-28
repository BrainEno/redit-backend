import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { User } from "../entities/User";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.redit;
    if (!token) throw new Error("认证失败");

    const { username }: any = jwt.verify(token, process.env.JWT_SECRET!);

    const user = await User.findOne({ username });

    if (!user) throw new Error("认证失败");

    res.locals.user = user;
    return next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: err.message });
  }
};
