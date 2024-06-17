const HigherOrderfn = ({ children }) => {
    return (
        <div className="m-1">
            <span className="absolute px-3 py-1 mt-2 ml-4 font-bold text-white transition bg-red-500 rounded-tl-lg rounded-br-lg shadow-xl">Most Viewed</span>
            {children}
        </div>
    );
};

export default HigherOrderfn;