import { NextApiResponse } from "next";

export const resSuccess = (res: NextApiResponse, response: any) => {
  return res.status(200).send(response);
};

export const resBadRequest = (res: NextApiResponse, message?: string) => {
  return message
    ? res.status(400).send(message)
    : res.status(400).send("Bad Request");
};

export const resUnauth = (res: NextApiResponse, message?: string) => {
  return message
    ? res.status(401).send(message)
    : res.status(401).send("Unauthorized");
};

export const resForbidden = (res: NextApiResponse, message?: string) => {
  return message
    ? res.status(403).send(message)
    : res.status(403).send("Forbidden");
};

export const resNotFound = (res: NextApiResponse, message?: string) => {
  return message
    ? res.status(404).send(message)
    : res.status(404).send("Not Found");
};

export const resMethodNotAllowed = (res: NextApiResponse, message?: string) => {
  return message
    ? res.status(405).send(message)
    : res.status(405).send("Method Not Allowed");
};

export const resFault = (res: NextApiResponse, message?: string) => {
  return message
    ? res.status(500).send(message)
    : res.status(500).send("Server Fault");
};
