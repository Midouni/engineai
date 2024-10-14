import { NotFoundError } from "../utils/api-error";
import { Request } from "express";

export default async function handleNotFound(req: Request): Promise<void> {
  const errorMessage = `Not Found: ${req.method} on ${req.url}`;
  throw new NotFoundError(errorMessage);
}
