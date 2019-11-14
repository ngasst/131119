import styled from "styled-components";
import React from "react";
import { connect } from "react-redux";
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    margin: 0.5rem 1rem;
    border-bottom: solid rgba(0, 0, 0, 0.2) thin;
    padding-bottom: 0.5rem;

    &:last-child {
        margin-bottom: 0;
        border-bottom: none;
    }

    .count {
        margin: 0 3rem;
    }

    button {
        font-size: 25px;
        padding: 0.5rem 1rem;
        border: solid thin #333;
        outline: none;
        color: white;
    }
    button.remove {
        font-size: 15px;
        padding: 0.25rem 0.5rem;
        height: 25px;
        width: 25px;
    }
    .decrement {
        background-color: springgreen;
    }

    .increment {
        background-color: deepskyblue;
    }

    .remove {
        background-color: red;
    }
`;

function Component(props) {
    return (
        <Wrapper>
            <button
                className="decrement"
                onClick={() => props.decrement(props.counter.id)}
            >
                -
            </button>
            <div className="count">{props.counter.value}</div>
            <button
                className="increment"
                onClick={() => props.increment(props.counter.id)}
            >
                +
            </button>
            <button
                className="remove"
                onClick={() => props.removeCounter(props.counter.id)}
            >
                x
            </button>
        </Wrapper>
    );
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        removeCounter(id) {
            const action = {
                type: "REMOVE_COUNTER",
                payload: id
            };

            dispatch(action);
        },
        increment(id) {
            const action = {
                type: "INCREMENT",
                payload: id
            };
            dispatch(action);
        },
        decrement(id) {
            const action = {
                type: "DECREMENT",
                payload: id
            };
            dispatch(action);
        }
    };
};
export const Counter = connect(mapStateToProps, mapDispatchToProps)(Component);
