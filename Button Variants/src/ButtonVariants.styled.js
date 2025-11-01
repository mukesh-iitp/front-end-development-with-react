import styled from "styled-components";

// Complete the below given ButtonView style Component

export const ButtonView = styled.button`
    background-color: ${props => (props.filled? props.bg:"#fff")};
    color: ${props => (props.filled? props.color:"#000")};
    border: ${props => (props.filled? "none":"3px solid #000")};
`;
