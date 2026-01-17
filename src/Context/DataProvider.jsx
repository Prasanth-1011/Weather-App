import { useState, createContext } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [city, setCity] = useState("Chennai");
    const [data, setData] = useState(null);

    return (
        <DataContext.Provider value={{ city, setCity, data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
