import { Appointment } from "../interfaces/appointment";
import { delay } from "../utils/utils";

let data: Appointment[] = [
  {
    id: "m5gr84i9",

    status: "success",

    title: "Cita inicial",
    description: "Esta es uan cita inicial",
    date: "2024-11-16",
    time: "12:00",
    location: "Quicentro Norte",
    client: {
      name: "Juan Esteban Rodriguez",
      email: "juan_rod@gmail.com",
      phone: "0999999999",
    },
    createdAt: "YYYY-MM-DDTHH:mm:ssZ",
    updatedAt: "YYYY-MM-DDTHH:mm:ssZ",
  },
  {
    id: "abc",

    status: "success",

    title: "Cita inicial",
    description: "Esta es uan cita inicial",
    date: "2024-11-16",
    time: "12:00",
    location: "Quicentro Norte",
    client: {
      name: "Juan Esteban Rodriguez",
      email: "auan_rod@gmail.com",
      phone: "0999999999",
    },
    createdAt: "YYYY-MM-DDTHH:mm:ssZ",
    updatedAt: "YYYY-MM-DDTHH:mm:ssZ",
  },
];

export const getDataDB = async () => {
  await delay();
  return data;
};

export const getDataDBById = async (id: string) => {
  await delay();
  return data.find((item) => item.id === id);
};

export const updateDataDBById = async (
  id: string,
  dataToUpdate: Partial<Appointment>
) => {
  await delay();
  const index = data.findIndex((item) => item.id === id);
  data[index] = { ...data[index], ...dataToUpdate };
  return data;
};

export const createDataDB = async (dataToUpdate: Partial<Appointment>) => {
  await delay();

  const newItem = {
    id: new Date().getMilliseconds().toString(),
    ...dataToUpdate,
    createdAt: new Date().toISOString().slice(0, 10),
    updatedAt: new Date().toISOString().slice(0, 10),
  };

  data.push(newItem as Appointment);
  return data;
};

export const removeDataDB = async (id: string) => {
  await delay();

  data = data.filter((item) => item.id !== id);

  return data;
};
