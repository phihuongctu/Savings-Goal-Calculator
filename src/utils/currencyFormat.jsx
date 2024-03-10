function useFormatterCurrency() {
    const formatCurrency = (num) => {
        const parts = num.split(".");
        const formatted = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.length === 2 ? `${formatted}.${parts[1].slice(0, 2)}` : formatted;
    };

    return formatCurrency;
}

export default useFormatterCurrency;
