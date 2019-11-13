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

        default:
            return state;
    }
}
