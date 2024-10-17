import { Router } from "express";
import { createAppointment, deleteAppointment, getAppointmentById, getAppointments, updateAppointment } from "../controllers/appointment.controller";

class AppointmentRoutes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get("/", getAppointments as any);
    this.router.put("/:id", updateAppointment as any);
    this.router.get("/:id", getAppointmentById as any);
    this.router.post("/", createAppointment as any);
    this.router.delete("/:id", deleteAppointment as any);    
  }
}

export default new AppointmentRoutes().router;
