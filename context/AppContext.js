import { createContext, useState } from "react";

const initialState = {
    focus: 25,
    shortBreak: 1,
    longBreak: 15,
    setFocus: () => {},
    setShortBreak: () => {},
    setLongBreak: () => {},
}

export const AppContext = createContext(initialState);

const AppContextProvider = ({children}) => {
    const [focus, setFocus] = useState(25);
    const [shortBreak, setShortBreak] = useState(0.1);
    const [longBreak, setLongBreak] = useState(15);
    return <AppContext.Provider value={{focus, shortBreak, longBreak}}>{children}</AppContext.Provider>
}

export default AppContextProvider;