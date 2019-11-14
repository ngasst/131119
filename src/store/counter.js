const initial = {
    counters: []
};

export function countersReducer(state = initial, action) {
    switch (action.type) {
        case "ADD_COUNTER":
            const counter = {
                id: state.counters.length + 1,
                value: 0
            };
            return { ...state, counters: [...state.counters, counter] };
        case "REMOVE_COUNTER":
            return {
                ...state,
                counters: state.counters.filter(
                    counter => counter.id !== action.payload
                )
            };
        case "INCREMENT":
            return {
                ...state,
                counters: state.counters.map(counter => {
                    if (action.payload === counter.id) {
                        return { ...counter, value: counter.value + 1 };
                    } else {
                        return counter;
                    }
                })
            };
        case "DECREMENT":
            return {
                ...state,
                counters: state.counters.map(counter => {
                    if (action.payload === counter.id) {
                        return {
                            ...counter,
                            value: counter.value <= 1 ? 0 : counter.value - 1
                        };
                    } else {
                        return counter;
                    }
                })
            };

        default:
            return state;
    }
}
