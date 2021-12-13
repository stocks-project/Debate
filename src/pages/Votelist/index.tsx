import React from 'react';
import useSWR from 'swr';

import {getRequest} from '@src/lib/fetch';
import {Wrap} from '@src/pages/styles';
import DebateCard from '@src/pages/Votelist/DebateCard';
import {Post} from '@src/types/vote';

export default () => {
    const {data: votePost} = useSWR('/vote/post', () =>
        getRequest<Post[]>('/vote/post'),
    );

    const [voteList, setVoteList] = React.useState<Post[]>([]);

    React.useEffect(() => {
        if (votePost) setVoteList(votePost);
    }, [votePost]);

    return (
        <Wrap>
            {voteList.map((card, index) => {
                return <DebateCard key={index} card={card} />;
            })}
        </Wrap>
    );
};
