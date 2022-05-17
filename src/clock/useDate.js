import { useState, useEffect } from "react";

const useDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID)
        };
    }, []);

    return date;
};

export default useDate;