import { Router } from "express";
import { createWifi, deleteWifi, getOneWifi, getWifis } from "../controllers/wifiController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { validateToken } from "../middlewares/validateToken.js";
import { wifisSchema } from "../schemas/schemas.js";
var wifisRouter = Router();
wifisRouter.post("/wifis", validateSchema(wifisSchema), validateToken, createWifi);
wifisRouter.get("/wifis", validateToken, getWifis);
wifisRouter.get("/wifis/:id", validateToken, getOneWifi);
wifisRouter["delete"]("/wifis/:id", validateToken, deleteWifi);
export default wifisRouter;
