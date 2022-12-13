import { createContext } from 'react';


interface ContectProps {
    sidemenuOpen: boolean;
}


export const UIContext = createContext({} as ContectProps)