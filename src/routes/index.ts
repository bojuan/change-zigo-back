
import { Application } from "express";
import AppointmentRoutes from "./appointment.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/appointments", AppointmentRoutes);
  }
}