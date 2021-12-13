import React from 'react';

import {postRequest} from '@src/lib/fetch';
import {
    AgreeBar,
    AgreeButton,
    BarWrap,
    ButtonWrap,
    EventBar,
    OpposeButton,
    OppositionBar,
    VoteSectionTitle,
} from '@src/pages/VoteDetail/styles';
import {Detail} from '@src/types/vote';

type Props = {
    detail: Detail;
    mutate: () => void;
};

const VoteSection = ({detail, mutate}: Props) => {
    const onClickAgree = async (postId: number, voteType: number) => {
        const res = await postRequest('/vote', {postId, voteType});
        if (res.data.status === 200) {
            alert('투표가 정상적으로 처리되었습니다.');
            mutate();
        } else {
            alert('이미 투표 했어');
        }
    };

    return (
        <div>
            <div>
                <VoteSectionTitle>{detail.title}</VoteSectionTitle>
                <p>{detail.content}</p>
                <BarWrap>
                    <div>
                        찬성: {(detail.positivePercent * 100).toFixed(2)} %
                    </div>
                    <EventBar>
                        <AgreeBar size={detail.positivePercent * 100} />
                        <OppositionBar size={detail.negativePercent * 100} />
                    </EventBar>
                    <div>
                        반성: {(detail.negativePercent * 100).toFixed(2)} %
                    </div>
                </BarWrap>
                <ButtonWrap>
                    <AgreeButton onClick={() => onClickAgree(detail.id, 1)}>
                        찬성
                    </AgreeButton>
                    <OpposeButton onClick={() => onClickAgree(detail.id, 0)}>
                        반대
                    </OpposeButton>
                </ButtonWrap>
                <div>누적 참여수 {detail.voteCount}</div>
            </div>
        </div>
    );
};

export default VoteSection;
