import { generateChartData } from "../component/ConcreteDetailsChart";

describe("generateChartData", () => {
    test("should generate chart data correctly with concreteDetails", () => {
        const mockConcreteDetails = [
            { label: "Cement Type A", value: 300 },
            { label: "Cement Type B", value: 250 },
        ];

        const expectedData = {
            labels: ["Cement Type A", "Cement Type B"],
            datasets: [
                {
                    label: "Min. cement content (kg/m³)",
                    data: [300, 250],
                    backgroundColor: "rgba(54, 162, 235, 0.2)",
                    borderColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 1,
                },
            ],
        };

        const result = generateChartData(mockConcreteDetails);
        expect(result).toEqual(expectedData);
    });

    test("should return default chart data when concreteDetails is empty", () => {
        const mockConcreteDetails = [];

        const expectedData = {
            labels: null,
            datasets: [
                {
                    label: "Min. cement content (kg/m³)",
                    data: [0],
                    backgroundColor: "rgba(54, 162, 235, 0.2)",
                    borderColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 1,
                },
            ],
        };

        const result = generateChartData(mockConcreteDetails);
        expect(result).toEqual(expectedData);
    });
});
