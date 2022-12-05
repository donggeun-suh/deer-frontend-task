import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      localStorage.removeItem("login");
    }
    if (!!localStorage.getItem("login")) {
      res.status(200).json("logout success");
    } else {
      res.status(400).json("logout failed");
    }
  } catch (e) {
    alert(e);
  }
};

export default handler;
