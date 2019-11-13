import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { Counters } from "./components/counters";
console.log(store);
function App() {
    return (
        <Provider store={store}>
            <div className="app-root">
                <Counters />
            </div>
        </Provider>
    );
}

export default App;
