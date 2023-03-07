import { NextApiRequest, NextApiResponse } from "next";
import {
  resMethodNotAllowed,
  resNotFound,
  resSuccess,
} from "../../../../common/status";

const model = `
letting M be 1000000

given nb_nurses : int
given nb_weeks : int
given nb_skills : int

letting NURSE be domain int(1..nb_nurses)
letting DAY be domain int(1..nb_weeks*7)
letting SHIFT be domain int(1..2)
letting SKILL be domain int(1..nb_skills)

find assignment : function (NURSE, DAY) --> SHIFT


$ --------------------------------------------------------------------------------
$ nurses work 3 days per week
such that
    [ sum([toInt((n,d) in defined(assignment)) | d : DAY]) = 3
    | n : NURSE
    , w : int(1..nb_weeks)
    , d : int(1+7*(w-1) .. 7*w)     $ 1..7, 8..14 etc
    ]



$ --------------------------------------------------------------------------------
$ no day shift following a night shift the day before
such that
    [ !(assignment(n, d-1) = 2 /\\ assignment(n, d) = 1)
    | n : NURSE
    , d : DAY, d > 1
    ]



$ --------------------------------------------------------------------------------
$ preferred shift type
given preferred_shift_type : function NURSE --> SHIFT
find preferred_shift_type_violation : int(0..M)
such that preferred_shift_type_violation =
    sum([ toInt(!(assignment(n,d) = pref))
        | (n, pref) <- preferred_shift_type
        , d : DAY
        ])



$ --------------------------------------------------------------------------------
$ on a given day, how many days has this nurse been working in a row
find working_in_a_row : function (total) (NURSE, DAY) --> int(0..nb_weeks*7)
such that
    [ !((n, d) in defined(assignment))              $ not working today
      -> working_in_a_row(n,d) = 0
    | n : NURSE
    , d : DAY
    ]
such that
    [ (n, d) in defined(assignment)                 $ working today
      -> working_in_a_row(n,d) > 0
    | n : NURSE
    , d : DAY
    ]
such that
    [ !((n, d-1) in defined(assignment)) /\\         $ was not working yesterday
      (n, d) in defined(assignment)                 $ is working today
      -> working_in_a_row(n,d) = 1
    | n : NURSE
    , d : DAY
    , d > 1
    ]
such that
    [ (n, d-1) in defined(assignment) /\\            $ was working yesterday
      (n, d) in defined(assignment)                 $ is working today
      -> working_in_a_row(n,d) = working_in_a_row(n,d-1) + 1
    | n : NURSE
    , d : DAY
    , d > 1
    ]

given maximum_working_days_in_a_row : function (total) NURSE --> int
such that
    [ working_in_a_row(n,d) <= maximum_working_days_in_a_row(n)
    | n : NURSE
    , d : DAY
    ]


$ --------------------------------------------------------------------------------
given nurse_skills : function NURSE --> set of SKILL

$ at least n nurses of a given skill at any one time
given skills_lower_bound : function SKILL --> int

find number_with_skill : function (total) (DAY, SHIFT, SKILL) --> int(0..nb_nurses)
such that
    [ number_with_skill(d,sh,sk) = sum([ toInt(assignment(n,d) = sh) | n : NURSE, sk in nurse_skills(n)])
    | d : DAY
    , sh : SHIFT
    , sk : SKILL
    ]

such that
    [ number_with_skill(d,sh,sk) >= bound
    | d : DAY
    , sh : SHIFT
    , (sk, bound) <- skills_lower_bound
    ] 
`;

const data = `{
    "nb_nurses": 4,
    "nb_weeks": 2,
    "nb_skills": 8,
    "preferred_shift_type": {
        "1": 1,
        "2": 1,
        "3": 1,
        "4": 2
    },
    "maximum_working_days_in_a_row" : {
        "1": 2,
        "2": 3,
        "3": 1,
        "4": 2
    },
    "nurse_skills" : {
        "1": [1, 2],
        "2": [1, 3, 7],
        "3": [1, 4, 7],
        "4": [1, 2, 7]
    },
    "skills_lower_bound": {
        "1": 0,
        "7": 0
    }
}`;

const postSchedule = async (req: NextApiRequest, res: NextApiResponse) => {
  await fetch(
    "https://demos.constraintmodelling.org/server/submitDemo.html/submit",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        solver: "cadical", // this is optional
        model: JSON.stringify(model),
        data: JSON.stringify(data),
        conjure_options: ["--number-of-solutions", "1"],
      }),
    }
  )
    //.then((response) => response.json())
    .then((data) => {
      console.log(data.body);
      return resSuccess(res, data);
      // if (data && data["jobid"]) {
      //   console.log(data["jobid"]);
      //   return resSuccess(res, data["jobid"]);
      // } else {
      //   return resNotFound(res);
      // }
    })
    .catch((err) => console.error(err));
};

const getSchedule = async (req: NextApiRequest, res: NextApiResponse) => {
  await fetch(
    "https://demos.constraintmodelling.org/server/getDemo.html#" +
      req.body +
      "/get",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ jobid: req.body }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      if (data && data["jobid"]) {
        console.log(data["jobid"]);
        return resSuccess(res, data["jobid"]);
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
