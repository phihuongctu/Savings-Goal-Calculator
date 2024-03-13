import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CardGoal from './index';

// Mockup theme
const theme = createTheme({
    palette: {
        primary: {
            main: "#1B31A8",
            text: "rgba(30, 42, 50, 1)",
            subtitle: "rgba(112, 135, 151, 1)",
            lightBlue: "rgba(0, 121, 255, 1)",
            white: "rgba(255, 255, 255, 1)",
            disable: "rgba(27, 49, 168, 0.14)"
        },
        header: {
            main: "rgba(255, 255, 255, 1)",
        },
        border: {
            main: '#000',
        },
    },
});

describe('CardGoal component', () => {
    test('renders with initial values', () => {
        const { getByLabelText, getByText } = render(
            <ThemeProvider theme={theme}>
                <CardGoal />
            </ThemeProvider>
        );

        // Test rendering of elements with initial values
        expect(getByLabelText('Total amount')).toBeInTheDocument();
        expect(getByLabelText('Reach goal by')).toBeInTheDocument();
        expect(getByLabelText('Total amount')).toHaveValue('');
        expect(getByText('Confirm')).toBeDisabled();

    });

    test('disables Confirm button when monthly amount is zero', () => {
        const { getByLabelText, getByText } = render(
            <ThemeProvider theme={theme}>
                <CardGoal />
            </ThemeProvider>
        );

        const totalAmountInput = getByLabelText('Total amount');
        fireEvent.change(totalAmountInput, { target: { value: '0' } });

        // Test if Confirm button is disabled
        expect(getByText('Confirm')).toBeDisabled();
    });

});
