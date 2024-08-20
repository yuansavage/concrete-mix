import { makeAutoObservable } from "mobx";

class AppStore {
    constructor(rootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }
    concreteName = "";
    setConcreteName(name) {
        this.concreteName = name;
    }
}

export default AppStore;
