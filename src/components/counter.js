import styled from "styled-components";
import React from "react";
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
        background-color: darkred;
        color: white;
    }
`;

export function Counter(props) {
    return (
        <Wrapper>
            <button className="decrement">-</button>
            <div className="count">{props.counter.value}</div>
            <button className="increment">+</button>
        </Wrapper>
    );
}
