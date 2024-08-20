import React from "react";
import AppStore from "./appStore";

class RootStore {
    constructor() {
        this.appStore = new AppStore(this);
    }
}

export const rootContext = React.createContext(new RootStore());
