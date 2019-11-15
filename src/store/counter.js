const initial = {
    counters: []
};

export function countersReducer(state = initial, action) {
    switch (action.type) {
        case "ADD_COUNTER":
            let counter = {};
            if(!state.counters[0]) {
                counter = {
                    id: state.counters.length + 1,
                    value: 0
                };
                return { ...state, counters: [...state.counters, counter] };
            } else {
                counter = {
                    id: state.counters[state.counters.length-1].id + 1,
                    value: 0
                }
                return { ...state, counters: [...state.counters, counter] };
            }
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
