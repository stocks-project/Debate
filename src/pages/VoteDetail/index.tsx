import React from 'react';

import {Wrap} from '@src/pages/styles';
import CommentList from '@src/pages/VoteDetail/CommentList';
import {VoteContents} from '@src/pages/VoteDetail/styles';
import VoteComments from '@src/pages/VoteDetail/VoteComments';
import VoteSection from '@src/pages/VoteDetail/VoteSection';
import {Detail} from '@src/types/vote';

export default () => {
    const [details, setDetails] = React.useState<Detail>({
        id: 1,
        title: 'test1',
        content: 'test 합니다',
        positiveCount: 1,
        negativeCount: 10,
        view: 11,
        imgSrc: '',
    });

    return (
        <>
            <Wrap>
                <VoteContents>
                    <VoteSection details={details} />
                </VoteContents>
            </Wrap>
            <Wrap>
                <VoteComments />
                <CommentList />
            </Wrap>
        </>
    );
};
