import config from "config";
import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";

const StatusController = {
  /**
   * Handle app status
   * @async
   * @method
   * @returns {Promise.<void> }
   */
  appStatus: async (req: Request, res: Response): Promise<void> => {
    const data = {
      status: "Healthy",
      appName: config.get<string>("APP_NAME"),
      environment: config.get<string>("APP_ENVIRONMENT"),
      time: new Date(),
    };

    res.status(StatusCodes.OK).send(data);
  },
};

export default StatusController;
