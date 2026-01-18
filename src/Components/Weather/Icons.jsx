import { Sun, Cloud, Snowflake, CloudHail, CloudFog, Haze } from "lucide-react";
import { useContext } from "react";
import { DataContext } from "../../Context/DataProvider";

const Icons = ({ size = 80, type }) => {
    const { data } = useContext(DataContext);
    const weatherMain = type || (data && data.weather[0].main);

    switch (weatherMain) {
        case "Clear":
            return <Sun size={size} strokeWidth={1.5} />;
        case "Smoke":
            return <CloudFog size={size} strokeWidth={1.5} />;
        case "Mist":
            return <CloudFog size={size} strokeWidth={1.5} />;
        case "Haze":
            return <Haze size={size} strokeWidth={1.5} />;
        case "Clouds":
            return <Cloud size={size} strokeWidth={1.5} />;
        case "Snow":
            return <Snowflake size={size} strokeWidth={1.5} />;
        case "Rain":
            return <CloudHail size={size} strokeWidth={1.5} />;
        case "Drizzle":
            return <CloudHail size={size} strokeWidth={1.5} />;
        case "Thunderstorm":
            return <CloudHail size={size} strokeWidth={1.5} />;
        default:
            return <Cloud size={size} strokeWidth={1.5} />;
    }
};

export default Icons;
