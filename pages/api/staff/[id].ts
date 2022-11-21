import { NextApiRequest, NextApiResponse } from "next";
import {
  resBadRequest,
  resMethodNotAllowed,
  resNotFound,
  resSuccess,
} from "../../../common/status";
import prisma from "../../../lib/prisma";

const getStaffMember = async (req: NextApiRequest, res: NextApiResponse) => {
  if (typeof req.query.id !== "string") {
    return resBadRequest(res);
  }
  const staff = await prisma.staff.findUnique({
    where: { id: req.query.id },
  });
  if (staff) {
    return resSuccess(res, staff);
  } else {
    return resNotFound(res);
  }
};

const deleteStaffMember = async (req: NextApiRequest, res: NextApiResponse) => {
  const staff = await prisma.staff.delete({
    where: { id: req.body.staffId },
  });
  if (staff) {
    return resSuccess(res, staff);
  } else {
    return resNotFound(res);
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      return await getStaffMember(req, res);
    case "DELETE":
      return await deleteStaffMember(req, res);
    default:
      return resMethodNotAllowed(res);
  }
};

export default handler;
