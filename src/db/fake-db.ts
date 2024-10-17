import { Appointment } from "../interfaces/appointment";
import { delay } from "../utils/utils";

let data: Appointment[] = [
  {
    id: "1",
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
    id: "2",
    status: "pending",
    title: "Consulta de seguimiento",
    description: "Seguimiento de tratamiento inicial",
    date: "2024-11-18",
    time: "10:00",
    location: "Hospital Metropolitano",
    client: {
      name: "Maria Fernanda Ortiz",
      email: "maria_ortiz@gmail.com",
      phone: "0988888888",
    },
    createdAt: "2024-10-01T08:30:00Z",
    updatedAt: "2024-10-15T09:45:00Z",
  },
  {
    id: "3",
    status: "canceled",
    title: "Cita de evaluación",
    description: "Evaluación post-tratamiento",
    date: "2024-12-01",
    time: "15:30",
    location: "Clinica del Valle",
    client: {
      name: "Carlos Andrés Paredes",
      email: "carlos_paredes@gmail.com",
      phone: "0977777777",
    },
    createdAt: "2024-09-20T12:45:00Z",
    updatedAt: "2024-10-10T14:00:00Z",
  },
  {
    id: "4",
    status: "success",
    title: "Cita de terapia",
    description: "Terapia física para rehabilitación",
    date: "2024-11-22",
    time: "09:00",
    location: "Centro de Rehabilitación Los Chillos",
    client: {
      name: "Ana Gabriela Castro",
      email: "ana_castro@gmail.com",
      phone: "0966666666",
    },
    createdAt: "2024-10-05T14:20:00Z",
    updatedAt: "2024-10-15T16:10:00Z",
  },
  {
    id: "5",
    status: "rescheduled",
    title: "Consulta nutricional",
    description: "Primera consulta con el nutricionista",
    date: "2024-11-20",
    time: "11:00",
    location: "Centro Médico El Bosque",
    client: {
      name: "David Javier García",
      email: "david_garcia@gmail.com",
      phone: "0955555555",
    },
    createdAt: "2024-09-28T11:30:00Z",
    updatedAt: "2024-10-12T10:15:00Z",
  },
];

export const getDataDB = async () => {
  await delay(1000);
  return data;
};

export const getDataDBById = async (id: string) => {
  await delay(1000);
  return data.find((item) => item.id === id);
};

export const updateDataDBById = async (
  id: string,
  dataToUpdate: Partial<Appointment>
) => {
  const index = data.findIndex((item) => item.id === id);
  data[index] = { ...data[index], ...dataToUpdate };
  await delay();
  return data[index] ;
};

export const createDataDB = async (dataToUpdate: Partial<Appointment>) => {
  await delay();

  const newItem = {
    id: new Date().getMilliseconds().toString(),
    ...dataToUpdate,
    status: "success",
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
