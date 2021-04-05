import bcrypt from "bcryptjs";
import { Request, Response, Router } from "express";
import User from "../entities/User";
import { isEmpty, validate } from "class-validator";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import auth from "../middleware/auth";
import user from "../middleware/user";

const mapErrors = (errors: Object[]) => {
  return errors.reduce((prev: any, err: any) => {
    prev[err.property] = Object.entries(err.constraints)[0][1];
    return prev;
  }, {});
};

//register
const register = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;

  try {
    //Validate data
    let errors: any = {};
    const emailUser = await User.findOne({ email });
    const usernameUser = await User.findOne({ username });

    if (emailUser) errors.email = "该邮箱已注册，请登录";

    if (usernameUser) errors.username = "该用户名已被使用";

    if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
    }

    //Create the user
    const user = new User({ email, username, password });

    errors = await validate(user);
    if (errors.length > 0) {
      return res.status(400).json(mapErrors(errors));
    }

    await user.save();
    //Return the user
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

//login
const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    let errors: any = {};

    if (isEmpty(username)) errors.username = "用户名不得为空";
    if (isEmpty(password)) errors.username = "密码不得为空";
    if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
    }

    const user = await User.findOne({ username });

    if (!user) return res.status(404).json({ username: "未找到用户" });

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      return res.status(401).json({ password: "密码错误" });
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET!);

    res.set(
      "Set-Cookie",
      cookie.serialize("redit", token, {
        httpOnly: true,
        // secure: process.env.NODE_ENV === "production",
        maxAge: 3600,
        path: "/",
      })
    );

    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "有什么地方出错了" });
  }
};

//current user
const me = (_: Request, res: Response) => {
  return res.json(res.locals.user);
};

//logout
const logout = (_: Request, res: Response) => {
  res.set(
    "Set-Cookie",
    cookie.serialize("redit", "", {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      expires: new Date(0),
      path: "/",
    })
  );

  return res.status(200).json({ success: true });
};

const router = Router();
router.post("/register", register);
router.post("/login", login);
router.get("/me", user, auth, me);
router.get("/logout", user, auth, logout);

export default router;
