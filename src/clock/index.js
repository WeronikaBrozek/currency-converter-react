import  useDate from "./useDate";
import "./style.css";
                  
const Clock = () => {

    const date = useDate();
    let formatedDate = `${date.toLocaleDateString("pl-PL", { weekday: "long", day: "numeric", month: "long", })}, ${date.toLocaleTimeString()}`

    return  <p>Dzisiaj jest {formatedDate}</p>;
};

export default Clock;