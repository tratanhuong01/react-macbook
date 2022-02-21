import { createContext, useReducer } from "react";
import { v4 } from "uuid";

const inital = {
    data: [
        {
            id: v4(),
            info: {
                width: 600,
                height: 350,
                title: 'Info System',
                position: {
                    x: 500,
                    y: 300
                }
            },
            children: ""
        },
    ],
    active: -1,
    loading: false,
};

export const ModalContext = createContext();

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

export const ModalProvider = ({ children }) => {
    //
    const [state, dispatch] = useReducer(AppReducer, inital);
    //
    return (
        <ModalContext.Provider value={{
            state,
            actions: { updateData },
            dispatch
        }}>
            {children}
        </ModalContext.Provider>
    )
}