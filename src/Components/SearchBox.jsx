import axios from "axios";

import { useState, useEffect, useContext } from "react";
import { DataContext } from "../Context/DataProvider";

const SearchBox = () => {
    const { city, setCity, setData } = useContext(DataContext);
    const [name, setName] = useState("");
    const [message, setMessage] = useState({ text: "", color: "" });
    const text = "Search Cities Worldwide";

    const handleName = (e) => {
        if (e.key === "Enter") {
            setCity(name);
            setName("");
        }
    };

    const apiKey = "109201f7c2a355f8340d51a1e6046ff8";
    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
            );
            const info = response.data;
            console.log(info);
            setData(info);
        } catch (error) {
            setMessage({ text: "City Not Found", color: "text-red-300" });
            setTimeout(() => {
                setMessage({ text: "", color: "" });
            }, 3000);
        }
    };

    useEffect(() => {
        fetchData();
    }, [city]);

    return (
        <>
            <p
                className={`${message.color || "text-slate-400"} py-2 text-center text-sm font-medium`}
            >
                {message.text || text}
            </p>
            <div className="group mx-auto mt-2 flex w-full max-w-[18rem] items-center justify-between gap-3 overflow-hidden rounded-2xl border border-slate-700/40 bg-slate-800/10 px-5 py-2.5 shadow-lg backdrop-blur-xl transition-all duration-300 focus-within:border-sky-500/40 focus-within:bg-slate-800/30 focus-within:ring-2 focus-within:ring-sky-500/5 sm:max-w-md sm:py-3">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 text-sky-400"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Enter City Name"
                    className="w-full bg-transparent text-sm font-medium text-slate-200 placeholder-slate-500 outline-none focus:ring-0 sm:text-base"
                    value={name}
                    onInput={(e) => setName(e.target.value)}
                    onKeyDown={(e) => handleName(e)}
                />
            </div>
        </>
    );
};

export default SearchBox;
