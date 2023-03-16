import { getIcon, convertUnit } from "../helpers";

const Card = ({day, index, unit}) => {
    const date = day.date.toString();
    const year = date.slice(0, 4);
    const month = date.slice(4, 6);
    const dayOfTheMonth = date.slice(6, 8);
    const formattedDate = new Date(year, month - 1, dayOfTheMonth).toDateString().slice(0, 3);

    const unitShorthand = unit === 'kelvin' ? unit?.slice(0, 1).toUpperCase() : 
    '°' + unit?.slice(0, 1).toUpperCase();
    const weather = day?.weather;
    const weatherIcon = getIcon(weather);

    return (
        <div className="card-container">
            <h3>{index === 0 ? 'Today' : formattedDate}</h3>
            <div className="icon-container">{weatherIcon}</div>
            <p>{weather}</p>
            <p>{convertUnit(unit, day.temp2m.max)} {unitShorthand} max</p>
            <p>{convertUnit(unit, day.temp2m.min)} {unitShorthand} min</p>
        </div>
    )
}

export default Card;