import React from 'react';

import {
    VoteComment,
    VoteCommentButton,
    VoteCommentName,
} from '@src/pages/VoteDetail/styles';

const VoteComments = () => {
    return (
        <div>
            <VoteCommentName>익명</VoteCommentName>
            <VoteComment defaultValue="" />
            <VoteCommentButton>의견 입력하기</VoteCommentButton>
        </div>
    );
};

export default VoteComments;
