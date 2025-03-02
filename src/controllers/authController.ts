import { Request, Response } from "express";
import { errorResponse, successResponse } from "../utils/response";
import data = require("../../db.json");

const login = (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = data.users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    res.json(successResponse("Login successful", user));
  } else {
    res.json(errorResponse("Invalid email or password"));
  }
};
