import useFormatterCurrency from './currencyFormat';

describe('test useFormatterCurrency', () => {
    const formatCurrency = useFormatterCurrency();

    test('formats currency without decimals', () => {
        expect(formatCurrency('1000')).toBe('1,000');
        expect(formatCurrency('1000000')).toBe('1,000,000');
    });

    test('formats currency with decimals', () => {
        expect(formatCurrency('1000000.75')).toBe('1,000,000.75');
    });

    test('handles invalid input gracefully', () => {
        expect(formatCurrency('abc')).toBe('abc');
        expect(formatCurrency('')).toBe('');
    });
});