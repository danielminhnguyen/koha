import mongoose from "mongoose";

export interface INote extends mongoose.Document {
  _id: Int16Array;
  name: string;
  Amount: Int16Array;
}

const schema: mongoose.SchemaDefinition = {
  _id: { type: mongoose.SchemaTypes.Number, required: true },
  name: { type: mongoose.SchemaTypes.String, required: true },
  Amount: { type: mongoose.SchemaTypes.Number },
};
