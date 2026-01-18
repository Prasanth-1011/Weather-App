import "./App.css";
import DataProvider from "./Context/DataProvider";

import Header from "./Components/Header";
import Weather from "./Components/Weather";
import SearchBox from "./Components/SearchBox";

import Forecast from "./Components/Forecast";
import Footer from "./Components/Footer";

function App() {
    return (
        <DataProvider>
            <div className="flex flex-col px-4 md:px-8">
                <Header />
                <SearchBox />

                <main className="flex-grow flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto mt-8">
                    <div className="w-full lg:flex-1">
                        <Weather />
                    </div>
                    <Forecast />
                </main>

                <Footer />
            </div>
        </DataProvider>
    );
}

export default App;
