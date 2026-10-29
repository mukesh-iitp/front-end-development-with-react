import { createContext, useState, useContext } from "react";

const itemContext = createContext();

function useValue(){
    const value = useContext(itemContext);
    return value;
}

//custom provider
// function CustomItemContext(props){
//     console.log(props);
function CustomItemContext({children}){
    console.log({children});
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);

    return(
        <itemContext.Provider value={{total, setTotal, item, setItem}}>
            {children}
        </itemContext.Provider>
    )
}

export {itemContext, useValue};
export default CustomItemContext;