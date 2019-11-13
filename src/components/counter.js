import styled from "styled-components";
import React from "react";
import { connect } from "react-redux";
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-content: center;

    .count {
        margin: 0 3rem;
    }

    button {
        font-size: 25px;
        padding: 0.5rem 1rem;
    }
    .decrement {
        background-color: springgreen;
    }

    .increment {
        background-color: deepskyblue;
        color: white;
    }

    .remove {
        background-color: red;
    }
`;

function Component(props) {
    return (
        <Wrapper>
            <button className="decrement">-</button>
            <div className="count">{props.counter.value}</div>
            <button className="increment">+</button>
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
        }
    };
};
export const Counter = connect(mapStateToProps, mapDispatchToProps)(Component);
