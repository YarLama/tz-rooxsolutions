import { createContext } from "react";

interface ISortContext {
    value: string;
}

export const SortContext = createContext<ISortContext>({value: 'id'});