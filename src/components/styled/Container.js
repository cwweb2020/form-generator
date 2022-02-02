import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.fd || 'row'};
    align-items: ${props => props.ai || 'center'};
    justify-content: ${props => props.jc || 'center'};
    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.bc || ''};

`