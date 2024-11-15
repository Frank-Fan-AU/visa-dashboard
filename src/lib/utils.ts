import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import mongoose, { Mongoose } from "mongoose";

interface Connection {
  isConnected?: number;
}

const connection: Connection = {};

export const connectToDb = async (): Promise<void> => {
  try {
    if (connection.isConnected) {
      return;
    } else {
      const db: Mongoose = await mongoose.connect(process.env.MONGO as string);
      connection.isConnected = db.connection.readyState;
    }
  } catch (error) {
    throw new Error("Could not connect to database");
  }
};

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month (0-11) and add 1
  const day = String(date.getDate()).padStart(2, "0"); // Get day (1-31)
  const hours = String(date.getHours()).padStart(2, "0"); // Get hours (0-23)
  const minutes = String(date.getMinutes()).padStart(2, "0"); // Get minutes (0-59)
  const seconds = String(date.getSeconds()).padStart(2, "0"); // Get seconds (0-59)

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};