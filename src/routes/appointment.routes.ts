import { Router } from "express";
import { getAppointments } from "../controllers/appointment.controller";

class AppointmentRoutes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get("/", getAppointments as any);
   /*  this.router.post("/", fun as any);
    this.router.get("/:id", fun as any);
    this.router.put("/", fun as any); */
  }
}

export default new AppointmentRoutes().router;
