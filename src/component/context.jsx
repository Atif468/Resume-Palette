import { createContext, useState } from "react";

export const Context = createContext(null);

function ConetxtProvider(props) {
    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");

    const Info = {
        Name,
        Age,
        setName,
        setAge,
    }
    return (
        <Context.Provider value={Info} >
            {props.children}
        </Context.Provider>
    )
}

export default ConetxtProvider;