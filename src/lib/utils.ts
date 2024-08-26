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