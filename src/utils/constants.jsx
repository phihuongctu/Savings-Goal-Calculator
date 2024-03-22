import { Icon } from "../configs/ThemeConfig";
const IconHouse = Icon("icon-house.svg")

export const currency = "$";
export const isZero = 0;
export const langEnglish = "en-US";

// Mockup data services
export const DataServices = {
    name: "Buy a house",
    icon: IconHouse,
};

export const debounce = (func, delay) => {
    let timerId;
    return function (...args) {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};