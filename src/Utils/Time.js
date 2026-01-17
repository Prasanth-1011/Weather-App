const zero = (num) => (num < 10 ? `0${num}` : num);

export const timeFormat = () => {
    const now = new Date();
    const hours = zero(now.getHours());
    const minutes = zero(now.getMinutes());
    const seconds = zero(now.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
};

export const dateFormat = () => {
    const now = new Date();
    const day = zero(now.getDate());
    const month = zero(now.getMonth() + 1);
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
};

export const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);

    const hh = String(date.getHours()).padStart(2, "0");
    const mm = String(date.getMinutes()).padStart(2, "0");
    const ss = String(date.getSeconds()).padStart(2, "0");

    return `${hh}:${mm}:${ss}`;
};

export const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day} ${year}`;
};
