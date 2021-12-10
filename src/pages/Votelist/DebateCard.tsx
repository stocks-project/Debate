import React from 'react';
import {useNavigate} from 'react-router-dom';

import {Card} from '@src/pages/Votelist/styles';
import {Post} from '@src/types/vote';

type Props = {
    card: Post;
};

const DebateCard = ({card}: Props) => {
    const navigate = useNavigate();

    const onCardClick = () => {
        navigate(`/vote/${card.id}`);
    };

    return (
        <Card onClick={onCardClick}>
            <div>
                <h1>{card.title}</h1>
                <p>{card.content}</p>
                <div>찬반투표 진행중</div>
                {/*<div>{card.view}</div>*/}
                <div>{card.imgSrc}</div>
            </div>
        </Card>
    );
};

export default DebateCard;
