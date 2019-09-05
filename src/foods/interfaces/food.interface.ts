import { Document } from 'mongoose';

export interface Food extends Document {
  readonly name: string;
}