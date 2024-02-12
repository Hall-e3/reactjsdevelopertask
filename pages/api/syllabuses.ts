import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const syllabuses = [
    {
      name: "Math (NCERT)"
    },
    {
      name: "Math Foundations"
    },
    {
      name: "Math (Maharashtra)"
    }
  ];
  res.status(200).json(syllabuses);
};
