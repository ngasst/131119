import styled from "styled-components";
import React from "react";
import { connect } from "react-redux";
import { Counter } from "./counter";

const Wrapper = styled.div``;

function Component(props) {
    return (
        <Wrapper>
            <button className="add" onClick={props.addCounter}>
                ADD
            </button>
            <hr />
            {props.counters.map(counter => (
                <Counter counter={counter} key={counter.id} />
            ))}
        </Wrapper>
    );
}

const mapStateToProps = state => {
    return {
        counters: state.counters
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addCounter() {
            const action = {
                type: "ADD_COUNTER",
                payload: null
            };
            dispatch(action);
        },
        removeCounter(id) {
            const action = {
                type: "REMOVE_COUNTER",
                payload: id
            };
            dispatch(action);
        }
    };
};

export const Counters = connect(mapStateToProps, mapDispatchToProps)(Component);
