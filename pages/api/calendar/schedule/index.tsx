import { NextApiRequest, NextApiResponse } from "next";
import {
  resMethodNotAllowed,
  resNotFound,
  resSuccess,
} from "../../../../common/status";
import "fs";
import { promises as fs } from "fs";

const postSchedule = async (req: NextApiRequest, res: NextApiResponse) => {
  const modelPath = "public/static/models/model.essence";
  const model = await fs.readFile(modelPath, "utf8");

  await fetch("https://demos.constraintmodelling.org/server/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      solver: "kissat", // this is optional
      model: model,
      data: JSON.stringify(req.body),
      conjure_options: [
        "--savilerow-options",
        "-sat-sum-mdd",
        "--channelling=no",
        "-aai",
        "--responses=2",
      ],
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data && data["jobid"]) {
        return resSuccess(res, data["jobid"]);
      } else {
        return resNotFound(res);
      }
    })
    .catch((err) => console.error(err));
};

const getSchedule = async (req: NextApiRequest, res: NextApiResponse) => {
  await fetch("https://demos.constraintmodelling.org/server/get", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ jobid: req.query.jobid }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        return resSuccess(res, data);
      } else {
        return resNotFound(res);
      }
    })
    .catch((err) => console.error(err));
};
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      return await getSchedule(req, res);
    case "POST":
      return await postSchedule(req, res);
    default:
      return resMethodNotAllowed(res);
  }
};

export default handler;
