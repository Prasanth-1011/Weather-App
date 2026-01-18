import { DataContext } from "../Context/DataProvider";
import { useState, useEffect, useContext } from "react";
import { Eye, Wind, Cloud, Gauge, Droplet, Thermometer } from "lucide-react";

import { timeFormat, dateFormat } from "../Utils/Time";
import Time from "./Weather/Time";
import Icons from "./Weather/Icons";

const Weather = () => {
    const { data } = useContext(DataContext);
    const [time, setTime] = useState(timeFormat());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(timeFormat());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="flex w-full flex-col gap-8 font-semibold text-slate-200">
            <div className="relative overflow-hidden rounded-3xl border border-slate-700/20 bg-white/1 p-6 shadow-lg backdrop-blur-xl md:p-10">
                <div className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-sky-500/50 via-sky-500/20 to-sky-500/50" />

                <div className="mb-10 flex flex-wrap items-end justify-between gap-6 px-1">
                    <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-7"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white md:text-2xl">
                                {data && data.name}
                            </h1>
                            <p className="text-sm font-medium text-slate-400">
                                {data && data.sys.country}
                            </p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-bold text-sky-400">{time}</p>
                        <p className="mt-1 text-sm font-bold text-slate-500 capitalize">
                            {dateFormat()}
                        </p>
                    </div>
                </div>

                <div className="mb-12 grid items-center gap-8 lg:grid-cols-5">
                    <div className="flex flex-col items-center justify-center rounded-3xl bg-white/2 p-8 shadow-md lg:col-span-3">
                        <div className="text-center">
                            <h1 className="bg-linear-to-b from-white to-sky-400 bg-clip-text text-5xl leading-none font-black text-transparent sm:text-7xl">
                                {data && Math.floor(data.main.temp)}&deg;C
                            </h1>
                            <p className="mt-2 text-base font-bold text-slate-300/80 capitalize">
                                {data && data.weather[0].description}
                            </p>
                        </div>
                        <div className="mt-8 flex items-center gap-6 rounded-full border border-white/5 bg-white/5 px-6 py-2 text-sm">
                            <span className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="size-4 text-sky-400"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                                    />
                                </svg>
                                <p className="font-bold text-white">
                                    {data && Math.floor(data.main.temp_max)}
                                    &deg;C
                                </p>
                            </span>
                            <div className="h-4 w-px bg-white/10" />
                            <span className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="size-4 text-sky-400"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                                    />
                                </svg>
                                <p className="font-bold text-white">
                                    {data && Math.floor(data.main.temp_min)}
                                    &deg;C
                                </p>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center text-sky-400 drop-shadow-[0_0_20px_rgba(56,189,248,0.2)] lg:col-span-2">
                        {data && <Icons size={80} />}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 rounded-3xl bg-black/10 p-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex items-center gap-3 rounded-2xl bg-white/2 p-4 transition-all hover:bg-white/5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                            <Thermometer size={18} />
                        </div>
                        <div className="text-nowrap">
                            <p className="text-sm font-bold text-slate-500 capitalize">
                                Feels Like
                            </p>
                            <p className="text-base font-bold text-white sm:text-lg">
                                {data && Math.floor(data.main.feels_like)}&deg;C
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl bg-white/2 p-4 transition-all hover:bg-white/5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                            <Cloud size={18} />
                        </div>
                        <div className="text-nowrap">
                            <p className="text-sm font-bold text-slate-500 capitalize">
                                Clouds
                            </p>
                            <p className="text-base font-bold text-white sm:text-lg">
                                {data && data.clouds.all}%
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl bg-white/2 p-4 transition-all hover:bg-white/5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                            <Droplet size={18} />
                        </div>
                        <div className="text-nowrap">
                            <p className="text-sm font-bold text-slate-500 capitalize">
                                Humidity
                            </p>
                            <p className="text-base font-bold text-white sm:text-lg">
                                {data && data.main.humidity}%
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl bg-white/2 p-4 transition-all hover:bg-white/5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                            <Eye size={18} />
                        </div>
                        <div className="text-nowrap">
                            <p className="text-sm font-bold text-slate-500 capitalize">
                                Visibility
                            </p>
                            <p className="text-base font-bold text-white sm:text-lg">
                                {data && data.visibility / 1000}{" "}
                                <span className="text-sm font-bold text-slate-500 underline decoration-sky-500/30">
                                    km
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl bg-white/2 p-4 transition-all hover:bg-white/5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                            <Gauge size={18} />
                        </div>
                        <div className="text-nowrap">
                            <p className="text-sm font-bold text-slate-500 capitalize">
                                Pressure
                            </p>
                            <p className="text-base font-bold text-white sm:text-lg">
                                {data && data.main.pressure}{" "}
                                <span className="text-sm font-bold text-slate-500 underline decoration-sky-500/30">
                                    hPa
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl bg-white/2 p-4 transition-all hover:bg-white/5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                            <Wind size={18} />
                        </div>
                        <div className="text-nowrap">
                            <p className="text-sm font-bold text-slate-500 capitalize">
                                Wind Speed
                            </p>
                            <p className="text-base font-bold text-white sm:text-lg">
                                {data && data.wind.speed}{" "}
                                <span className="text-sm font-bold text-slate-500 underline decoration-sky-500/30">
                                    m/s
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <Time />
            </div>
        </section>
    );
};

export default Weather;
