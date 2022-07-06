import { useState, useEffect } from "react";
import axios from "axios";

const useRatesAndDate = () => {
    const [status, setStatus] = useState("loading");
    const [date, setDate] = useState();
    const [rates, setRates] = useState([]);

    const path = "https://api.exchangerate.host/latest?base=PLN"

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(path);
                setRates(response.data.rates);
                setDate(response.data.date);
                setStatus(() => "ok");
            } catch (error) {
                setStatus(() => "error")
                console.error("Something bad has happend", error)
            };
        };
        setTimeout(getData, 1500);
    }, []);

    return { status, date, rates };
};

export { useRatesAndDate };