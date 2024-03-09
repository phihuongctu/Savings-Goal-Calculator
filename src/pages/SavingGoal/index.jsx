import { useState, useEffect } from "react";


const ReachDateInput = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (event) => {
        setDate(new Date(event.target.value));
    };

    const handleNextMonth = () => {
        const newDate = new Date(date.getTime());
        newDate.setMonth(newDate.getMonth() + 1);
        setDate(newDate);
    };

    const handlePrevMonth = () => {
        const newDate = new Date(date.getTime());
        newDate.setMonth(newDate.getMonth() - 1);
        setDate(newDate);
    };

    const handleKeyDown = (event) => {
        if (event.key === "ArrowRight") {
            handleNextMonth();
        } else if (event.key === "ArrowLeft") {
            handlePrevMonth();
        }
    };

    useEffect(() => {
        const minDate = new Date();
        minDate.setDate(1);
        minDate.setHours(0, 0, 0, 0); // Set time to midnight
        if (date < minDate) {
            setDate(minDate);
        }
    }, [date]);

    return (
        <div>
            <label htmlFor="reachDate">Reach goal by:</label>
            <div className="date-input">
                <button type="button" onClick={handlePrevMonth}>
                    &#8592;
                </button>
                <input
                    id="reachDate"
                    type="month"
                    value={date.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                    onChange={handleDateChange}
                    onFocus={(e) => e.target.select()}
                    onKeyDown={handleKeyDown}
                />
                <button type="button" onClick={handleNextMonth}>
                    &#8594;
                </button>
            </div>
        </div>
    );
};

export default ReachDateInput;
