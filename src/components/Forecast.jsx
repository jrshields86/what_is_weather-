import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import '../forecast.css'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({data}) => {
    console.log(data);
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInAWeek)
    );
    
    return (
        <>
            <h2 className="title">7 Day Forecast</h2>
            <p>Click for more information</p>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                 <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="daily-item">
                                <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                <label className="day">{forecastDays[idx]}</label>
                                <label className="description">{item.weather[0].description}</label>
                                <label className="min-max">{Math.round(item.main.temp)}°F</label>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="daily-details-grid">
                            <div className="daily-details-grid-item">
                                <label>Pressure</label>
                                <label>{(item.main.pressure * 0.025).toFixed(2)} in</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Humidity</label>
                                <label>{item.main.humidity} %</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Clouds</label>
                                <label>{item.clouds.all}%</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Wind</label>
                                <label>{item.wind.speed} mph</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Feels like</label>
                                <label>{Math.round(item.main.feels_like)} °F</label>
                            </div>
                        </div>
                    </AccordionItemPanel>
                 </AccordionItem>   
                ))}
                
            </Accordion>
        </>
    );
};

export default Forecast;