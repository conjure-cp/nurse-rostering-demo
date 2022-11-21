import { NextApiRequest, NextApiResponse } from "next";
import {
  resFault,
  resMethodNotAllowed,
  resNotFound,
  resSuccess,
} from "../../../common/status";
import prisma from "../../../lib/prisma";

const getAllStaff = async (req: NextApiRequest, res: NextApiResponse) => {
  const staff = await prisma.staff.findMany();
  if (staff) {
    return resSuccess(res, staff);
  } else {
    return resNotFound(res);
  }
};

const createStaff = async (req: NextApiRequest, res: NextApiResponse) => {
  const staff = await prisma.staff.create({
    data: {
      name: req.body.name,
    },
  });
  if (staff) {
    return resSuccess(res, staff);
  } else {
    return resFault(res);
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      return await getAllStaff(req, res);
    case "POST":
      return await createStaff(req, res);
    default:
      return resMethodNotAllowed(res);
  }
};

export default handler;
