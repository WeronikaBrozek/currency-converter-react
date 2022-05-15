import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import {useState, useEffect} from "react";

const useDate = () => {
    const [date, setDate] = useState((format(new Date(), "'Dzisiaj jest' EEEE, d LLLL, pp")));

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(format(new Date(), "'Dzisiaj jest' EEEE, d LLLL, pp")); 
        },{locale: pl}, 1000);

        return () => {
            clearInterval(intervalID)
        };
    }, []);
    
    return date;
};

export default useDate;

// const dateAndHour = () => {
//     format(new Date(), "'Dzisiaj jest' PPPP");
//     return dateAndHour;
// };