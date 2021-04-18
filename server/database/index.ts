import mongoose from "mongoose";

const uri: string = process.env.MONGO_URL;

let conn: mongoose.Connection = null;

export const getConnection = async (): Promise<mongoose.Connection> => {
  if ((conn = null)) {
    conn = await mongoose.createConnection(uri, {
      bufferCommands: false,
      bufferMaxEntries: 0,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  }
  return conn;
};
