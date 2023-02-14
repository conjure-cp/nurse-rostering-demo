import {NextApiRequest, NextApiResponse} from "next";
import {resMethodNotAllowed, resNotFound, resSuccess} from "../../../../common/status";


const getSchedule = async (req: NextApiRequest, res: NextApiResponse) => {
  await fetch('https://st-andrews.ac.uk')
    .then(data => {
      if (data) {
        console.log(data);
        return resSuccess(res, data);
      } else {
        return resNotFound(res);
      }
    })
    .catch(err => console.error(err));
};
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      return await getSchedule(req, res);
    case "POST":
      return resMethodNotAllowed(res);
    default:
      return resMethodNotAllowed(res);
  }
};

export default handler;
