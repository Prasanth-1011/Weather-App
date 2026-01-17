import "./App.css";
import DataProvider from "./Context/DataProvider";

import Header from "./Components/Header";
import Weather from "./Components/Weather";
import SearchBox from "./Components/SearchBox";

function App() {
    return (
        <DataProvider>
            <Header />
            <SearchBox />
            <Weather />
        </DataProvider>
    );
}

export default App;
