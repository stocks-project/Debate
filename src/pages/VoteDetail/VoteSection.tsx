import React from 'react';

import {
    AgreeBar,
    AgreeButton,
    BarWrap,
    ButtonWrap,
    EventBar,
    OppositionBar,
    OppositionButton,
    VoteSectionTitle,
} from '@src/pages/VoteDetail/styles';
import {Detail} from '@src/types/vote';

type Props = {
    details: Detail;
};

const VoteSection = ({details}: Props) => {
    return (
        <div>
            <div>
                <VoteSectionTitle>{details.title}</VoteSectionTitle>
                <p>{details.content}</p>
                <BarWrap>
                    <div>찬성: {details.positiveCount} %</div>
                    <EventBar>
                        <AgreeBar size={65} />
                        <OppositionBar size={35} />
                    </EventBar>
                    <div>반성: {details.negativeCount} %</div>
                </BarWrap>
                <ButtonWrap>
                    <AgreeButton>찬성</AgreeButton>
                    <OppositionButton>반대</OppositionButton>
                </ButtonWrap>
                {/*<div>누적 조회수 {details.view}</div>*/}
                <div>누적 참여수 11</div>
            </div>
        </div>
    );
};

export default VoteSection;
