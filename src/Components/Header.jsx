const Header = () => {
    return (
        <header className="flex h-32 w-full flex-col items-center justify-center gap-1 py-6">
            <h1 className="bg-linear-to-b from-white to-sky-400 bg-clip-text text-2xl font-black text-transparent sm:text-3xl">
                Weather App
            </h1>
            <p className="max-w-xs py-2 text-center text-sm font-medium text-slate-400">
                Global Weather Insights For Cities Worldwide
            </p>
        </header>
    );
};

export default Header;
