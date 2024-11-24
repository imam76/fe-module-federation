import { AuthContextType } from "@common/types";
import { createContext } from "react";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);