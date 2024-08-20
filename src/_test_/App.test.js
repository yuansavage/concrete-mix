import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

jest.mock("../component/ConcreteSelector", () => () => (
    <div>Mocked ConcreteSelector</div>
));
jest.mock("../component/ConcreteDetailsChart", () => () => (
    <div>Mocked ConcreteDetailsChart</div>
));

describe("App Component", () => {
    test("renders the title correctly", () => {
        render(<App />);
        const titleElement = screen.getByText(/Designated Concrete/i);
        expect(titleElement).toBeInTheDocument();
    });

    test("renders the ConcreteSelector component", () => {
        render(<App />);
        const selectorElement = screen.getByText(/Mocked ConcreteSelector/i);
        expect(selectorElement).toBeInTheDocument();
    });

    test("renders the ConcreteDetailsChart component", () => {
        render(<App />);
        const chartElement = screen.getByText(/Mocked ConcreteDetailsChart/i);
        expect(chartElement).toBeInTheDocument();
    });
});
