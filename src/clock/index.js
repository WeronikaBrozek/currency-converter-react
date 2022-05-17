import  useDate from "./useDate";
                  
const Clock = () => {

    const date = useDate();
    let formatedDate = `${date.toLocaleDateString("pl-PL", { weekday: "long", day: "numeric", month: "long", })}, ${date.toLocaleTimeString()}`

    return (formatedDate);
};

export default Clock;