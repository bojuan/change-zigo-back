import { Request, Response } from "express";
import { createDataDB, getDataDB, getDataDBById, removeDataDB, updateDataDBById } from "../db/fake-db";

export const getAppointments = async (_: Request, res: Response) => {
  const data = await getDataDB();

  return res.json(data);
};

export const getAppointmentById = async (req: Request, res: Response) => {
  const data = await getDataDBById(req.params.id as string);

  return res.json(data);
};

export const updateAppointment = async (req: Request, res: Response) => {
  const data = await updateDataDBById(req.params.id as string, req.body);

  return res.json(data);
};

export const createAppointment = async (req: Request, res: Response) => {
  const data = await createDataDB(req.body);

  return res.json(data);
};

export const deleteAppointment = async (req: Request, res: Response) => {
  const data = await removeDataDB(req.params.id as string);

  return res.json(data);
};
