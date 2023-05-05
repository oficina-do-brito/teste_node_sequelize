import { Request, Response, Router } from "express";

const routes = Router();
routes.get("/", (request: Request, response: Response) => {
  return response.json({ message: "hellow word javascript" }).status(200);
});
export default routes;
