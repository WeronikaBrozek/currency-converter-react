import useCurrentDate from "./useCurrentDate";
import { ClockItem } from "./styled";

const Clock = () => {
    const date = useCurrentDate();

    const formatedDate = `${date.toLocaleDateString
        ("pl-PL", { weekday: "long", day: "numeric", month: "long", })}, 
        ${date.toLocaleTimeString()}`

    return <ClockItem>Dzisiaj jest {formatedDate}</ClockItem>;
};

export default Clock;