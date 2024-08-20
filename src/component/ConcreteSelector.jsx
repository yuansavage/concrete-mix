import React, { useState, useEffect } from "react";
import { useStores } from "../store/useStores";
import { observer } from "mobx-react";
import API from "../api";

export function removeDuplicateConcretes(concreteList) {
    return [
        ...new Map(
            concreteList.map((item) => [item.DesignatedConcrete, item])
        ).values(),
    ];
}

const ConcreteSelector = observer(() => {
    const [concreteList, setConcreteList] = useState();
    const { appStore } = useStores();

    useEffect(() => {
        API.getConcreteList()
            .then((res) => {
                //eliminate duplicate item
                const uniqueArray = removeDuplicateConcretes(res);
                setConcreteList(uniqueArray);
            })
            .catch((error) => {
                console.error("getConcreteList", error);
            });
    }, []);

    return (
        <div className="p-4">
            <label className="block mb-2 text-lg font-medium text-gray-900">
                Designated Concrete Type
            </label>
            <select
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                onChange={(e) => {
                    appStore.setConcreteName(e.target.value);
                }}
            >
                <option value="">Select Designated Concrete</option>
                {concreteList &&
                    concreteList.map((concrete, index) => (
                        <option key={index} value={concrete.DesignatedConcrete}>
                            {concrete.DesignatedConcrete}
                        </option>
                    ))}
            </select>
        </div>
    );
});

export default ConcreteSelector;
