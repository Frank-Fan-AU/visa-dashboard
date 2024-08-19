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
      console.log("already connected");
      return;
    } else {
      const db: Mongoose = await mongoose.connect(process.env.MONGO as string);
      connection.isConnected = db.connection.readyState;
      console.log("connected to database");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Could not connect to database");
  }
};