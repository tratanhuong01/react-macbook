import { createContext, useReducer } from "react";
import Wellcome from "../../screens/Wellcome";

const inital = {
    data: <Wellcome />,
    loading: false,
    logining: false
};

export const AppContext = createContext();

const updateData = (key, value) => {
    return {
        type: "UPDATE_DATA",
        key,
        value
    }
}

const AppReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_DATA":
            return { ...state, [action.key]: action.value };
        default:
            return { ...state };
    }
}

export const AppProvider = ({ children }) => {
    //
    const [state, dispatch] = useReducer(AppReducer, inital);
    //
    return (
        <AppContext.Provider value={{
            state,
            actions: { updateData },
            dispatch
        }}>
            {children}
        </AppContext.Provider>
    )
}