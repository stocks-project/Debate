import React from 'react';

import DebateCard from '@src/pages/Votelist/DebateCard';
import {Post} from '@src/types/vote';

export default () => {
    const [voteList, setVoteList] = React.useState<Post[]>([
        {
            id: 1,
            text: 'test1',
        },
        {
            id: 2,
            text: 'test2',
        },
    ]);

    return (
        <div>
            {voteList.map((card) => {
                return <DebateCard id={card.id} text={card.text} />;
            })}
        </div>
    );
};
