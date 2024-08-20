import { removeDuplicateConcretes } from "../component/ConcreteSelector";

describe("removeDuplicateConcretes", () => {
    it("should remove duplicate concretes based on DesignatedConcrete property", () => {
        const concreteList = [
            { DesignatedConcrete: "Concrete A" },
            { DesignatedConcrete: "Concrete B" },
            { DesignatedConcrete: "Concrete A" },
        ];

        const uniqueConcretes = removeDuplicateConcretes(concreteList);

        expect(uniqueConcretes).toEqual([
            { DesignatedConcrete: "Concrete A" },
            { DesignatedConcrete: "Concrete B" },
        ]);
    });

    it("should return an empty array when given an empty list", () => {
        const concreteList = [];
        const uniqueConcretes = removeDuplicateConcretes(concreteList);
        expect(uniqueConcretes).toEqual([]);
    });

    it("should return the same array if there are no duplicates", () => {
        const concreteList = [
            { DesignatedConcrete: "Concrete A" },
            { DesignatedConcrete: "Concrete B" },
        ];
        const uniqueConcretes = removeDuplicateConcretes(concreteList);
        expect(uniqueConcretes).toEqual(concreteList);
    });
});
