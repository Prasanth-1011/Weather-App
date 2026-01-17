import { useContext } from "react";
import { DataContext } from "../../Context/DataProvider";
import { Sunset, Sunrise } from "lucide-react";

import { formatTime, formatDate } from "../../Utils/Time";

const Time = () => {
    const { data } = useContext(DataContext);

    return (
        <div className="mt-8 grid gap-6 border-t border-slate-800/50 pt-8 sm:grid-cols-2">
            <div className="flex items-center justify-center gap-4 rounded-2xl bg-slate-900/50 p-4 transition-colors hover:bg-slate-800/50">
                <div className="rounded-full bg-amber-500/10 p-2 text-amber-400">
                    <Sunrise size={24} />
                </div>
                <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-medium text-slate-500 capitalize">
                        Sunrise
                    </p>
                    {data && (
                        <div className="flex items-center gap-2">
                            <span className="text-base font-bold text-slate-200">
                                {formatTime(data.sys.sunrise)} -{" "}
                                {formatDate(data.sys.sunrise)}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex items-center justify-center gap-4 rounded-2xl bg-slate-900/50 p-4 transition-colors hover:bg-slate-800/50">
                <div className="rounded-full bg-amber-500/10 p-2 text-amber-400">
                    <Sunset size={24} />
                </div>
                <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-medium text-slate-500 capitalize">
                        Sunset
                    </p>
                    {data && (
                        <div className="flex items-center gap-2">
                            <span className="text-base font-bold text-slate-200">
                                {formatTime(data.sys.sunset)} -{" "}
                                {formatDate(data.sys.sunset)}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Time;
