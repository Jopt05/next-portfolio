import { createContext } from "react";
import { ICreateContext } from "../interfaces";

export const createdContext = createContext<ICreateContext | null>(null);