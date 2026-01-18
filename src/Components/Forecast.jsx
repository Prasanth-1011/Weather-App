import { useContext } from "react";
import { DataContext } from "../Context/DataProvider";
import Icons from "./Weather/Icons";
import { forecastDate } from "../Utils/Time";

const Forecast = () => {
    const { forecast } = useContext(DataContext);

    if (!forecast) return null;

    const filteredList = forecast.list.filter((reading) =>
        reading.dt_txt.includes("12:00:00"),
    );

    const displayList = filteredList.slice(0, 5);

    return (
        <section className="mx-auto flex w-full max-w-4xl flex-col gap-4 font-semibold text-slate-200 lg:w-1/3 lg:max-w-none">
            <div className="rounded-3xl border border-slate-700/20 bg-white/5 p-6 shadow-lg backdrop-blur-xl">
                <h3 className="mb-4 text-xl font-bold text-sky-400">
                    5-Day Forecast
                </h3>
                <div className="flex flex-col gap-4">
                    {displayList.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-3 transition-colors hover:bg-white/10"
                        >
                            <div className="w-32 font-medium text-slate-300">
                                {forecastDate(item.dt_txt)}
                            </div>
                            <div className="flex items-center gap-2 text-sky-400">
                                <Icons type={item.weather[0].main} size={24} />
                                <span className="hidden text-sm capitalize text-slate-400 sm:block">
                                    {item.weather[0].main}
                                </span>
                            </div>
                            <div className="text-right font-bold text-white">
                                {Math.round(item.main.temp)}&deg;C
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Forecast;
