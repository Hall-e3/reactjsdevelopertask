// api/syllabuses.js

import { NextApiRequest, NextApiResponse } from "next";

const syllabuses = [
  {
    id: 1,
    name: "Math (NCERT)"
  },
  { id: 2, name: "Math Foundations" },
  { id: 3, name: "Math (Maharashtra)" },
  { id: 4, name: "PACE (SOE Punjab)" },
  { id: 5, name: "Science (NCERT)" },
  { id: 6, name: "All State boards" }
];

// Assign the arrow function to a variable
const getSyllabuses = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(syllabuses);
};

export default getSyllabuses;
