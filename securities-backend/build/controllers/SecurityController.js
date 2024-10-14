"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { getRepository } from "typeorm";
// import { Security } from "../db/entity";
// export const getSecurities = async (req: Request, res: Response) => {
//   const securities = await getRepository(Security).find();
//   res.json(securities);
// };
// export const getSecurityDetail = async (req: Request, res: Response) => {
//   const { ticker } = req.params;
//   const security = await getRepository(Security).findOne({ where: { ticker } });
//   if (!security) return res.status(404).json({ error: "Security not found" });
//   res.json(security);
// };
const SecurityController = {
    getSecurities: async (req, res) => {
        res.send("work 1");
    },
    getSecurityDetail: async (req, res) => {
        res.send("work 2");
    },
};
exports.default = SecurityController;
