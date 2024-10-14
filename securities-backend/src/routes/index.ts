import { Router, Express } from "express";
import config from "config";
import StatusController from "../controllers/StatusController";
import SecurityController from "../controllers/SecurityController";

const router = Router();
router.get("/", StatusController.appStatus);
router.get(
  config.get("API_PREFIX") + "/securities",
  SecurityController.getSecurities
);
router.get(
  config.get("API_PREFIX") + "/securities/:ticker",
  SecurityController.getSecurityDetail
);

export default (app: Express) => {
  app.use(router);
};
