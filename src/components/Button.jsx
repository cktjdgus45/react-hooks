import React from 'react';
import styles from './Button.module.css';
import styled, { css } from 'styled-components';

const ButtonWrapper = styled.button`
    width: 30%;
    height: 30px;
    background-color: aliceblue;
    border-radius: 3px;
    border: none;
    ${(props) =>
        props.primary &&
        css`
        background: #009cd5;
        color:white;
    `}
`

const Button = () => {
    return (
        <>
            <ButtonWrapper >버튼</ButtonWrapper>
            <ButtonWrapper primary>버튼</ButtonWrapper>
        </>
    )
}

export default Button;