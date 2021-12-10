import React from 'react';

import {Wrap} from '@src/pages/styles';
import DebateCard from '@src/pages/Votelist/DebateCard';
import {Post} from '@src/types/vote';

export default () => {
    const [voteList, setVoteList] = React.useState<Post[]>([
        {
            id: 1,
            title: 'test1',
            content: 'test 합니다',
            positiveCount: 1,
            negativeCount: 10,
            view: 11,
            imgSrc: '',
        },
        {
            id: 2,
            title: 'test2',
            content: 'test 합니다',
            positiveCount: 10,
            negativeCount: 11,
            view: 21,
            imgSrc: '',
        },
    ]);

    return (
        <Wrap>
            {voteList.map((card) => {
                return <DebateCard card={card} />;
            })}
        </Wrap>
    );
};
