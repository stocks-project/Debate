import styled from 'styled-components';

export const VoteSectionTitle = styled.h1`
    text-align: center;
`;

export const VoteContents = styled.p`
    padding: 1rem;
`;

export const BarWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`;

export const EventBar = styled.div`
    width: 75%;
    height: 20px;
    border: none;
    border-radius: 20px;
    display: flex;
`;

export const AgreeBar = styled.div<{size: number}>`
    height: 20px;
    background: #4673e3;
    border: none;
    border-radius: 20px 0 0 20px;
    width: ${(props) => props.size}%;
`;

export const OppositionBar = styled.div<{size: number}>`
    height: 20px;
    background: #fe6b53;
    border: none;
    border-radius: 0 20px 20px 0;

    width: ${(props) => props.size}%;
`;

export const ButtonWrap = styled.div`
    margin: 30px 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const AgreeButton = styled.button`
    cursor: pointer;
    width: 45%;
    padding: 20px 0;
    color: #555;
    font-weight: 800;
    border: 1px solid #ababab;
    border-radius: 50px;
    background: linear-gradient(
        to top,
        rgba(224, 224, 224) 0%,
        rgba(255, 255, 255) 50%
    );
`;

export const OppositionButton = styled.button`
    cursor: pointer;
    width: 45%;
    padding: 20px 0;
    color: #555;
    font-weight: 800;
    border: 1px solid #ababab;
    border-radius: 50px;
    background: linear-gradient(
        to top,
        rgba(224, 224, 224) 0%,
        rgba(255, 255, 255) 50%
    );
`;

export const VoteCommentName = styled.textarea`
    width: 100%;
    border: 1px solid #d6d6d6;
    font-size: 14px;
    padding: 6px 12px;
    transition: border-color 0.15s ease-in-out 0s,
        box-shadow 0.15s ease-in-out 0s;
`;

export const VoteComment = styled.textarea`
    width: 100%;
    min-height: 180px;
    border: 1px solid #d6d6d6;
    font-size: 19px;
    padding: 3%;
`;

export const VoteCommentButton = styled.button`
    cursor: pointer;
    width: 100%;
    padding: 20px 0;
    color: #555;
    font-weight: 800;
    border: 1px solid #ababab;
    background: linear-gradient(
        to top,
        rgba(224, 224, 224) 0%,
        rgba(255, 255, 255) 50%
    );
`;
