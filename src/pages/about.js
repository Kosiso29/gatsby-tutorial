import React from 'react';
import styled from 'styled-components';

const about = () => {
    return (
        <Wrapper>
            <h1>About</h1>
            <p className="text">We are the champions</p>
        </Wrapper>
    );
};

export default about;

const Wrapper = styled.section`
color: red;
h1{
    color: yellowgreen;
}
.text {
    text-transform: uppercase;
}
`