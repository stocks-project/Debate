import styled from 'styled-components';

export const Wrap = styled.div`
    width: 750px;
    margin: 10px auto;
    padding: 5px 15px;
    border: 1px solid #aaa;
    background: white;
    border-radius: 5px;
    
    @media only screen and (max-width: 750px) {
        width: 100%;
        padding 5px;
    }
`;
