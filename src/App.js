import React from "react";
import ConcreteSelector from "./component/ConcreteSelector";
import ConcreteDetailsChart from "./component/ConcreteDetailsChart";

function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
                <h1 className="text-3xl font-bold underline">
                    Designated Concrete
                </h1>
                <ConcreteSelector />
                <ConcreteDetailsChart />
            </div>
        </div>
    );
}

export default App;
