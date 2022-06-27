import styled from 'styled-components';

export const HeaderContainer = styled.div`
    background: ${(props) => props.primaryColor === "rhyno" ? "#C4C4C4" : "#383637"};
    margin-top: ${(props) => props.showAlert && props.selectedChain ? "50px" : ""};
`;

export const SocialHeaderBox = styled.div`
    border: 1px solid ${(props) => props.primaryColor === "rhyno" ? "#9867D9" : "#fff"};
    background: ${(props) => props.primaryColor === "rhyno" ? "#b2b2b2" : ""};
`;
