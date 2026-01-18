const Footer = () => {
    return (
        <footer className="flex h-32 w-full flex-col items-center justify-center gap-2 py-6">
            <p className="text-slate-500 font-medium">
                Weather App &copy; {new Date().getFullYear()}
            </p>
            <p className="text-slate-500 text-sm font-medium">All Rights Reserved</p>
        </footer>
    );
};

export default Footer;
