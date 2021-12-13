import React from 'react';
import {useParams} from 'react-router';
import {useNavigate} from 'react-router-dom';
import useSWR from 'swr';

import {getRequest} from '@src/lib/fetch';
import {Wrap} from '@src/pages/styles';
import CommentList from '@src/pages/VoteDetail/CommentList';
import {VoteContents} from '@src/pages/VoteDetail/styles';
import VoteComments from '@src/pages/VoteDetail/VoteComments';
import VoteSection from '@src/pages/VoteDetail/VoteSection';
import {Detail} from '@src/types/vote';

export default () => {
    const {postId} = useParams();

    const {data, mutate} = useSWR('/vote/post/detail', () =>
        getRequest<{votePost: Detail}>(`/vote/post/detail`, `id=${postId}`),
    );

    const navigate = useNavigate();

    const [detail, setDetail] = React.useState<Detail>({} as Detail);

    React.useEffect(() => {
        if (data?.votePost) setDetail(data.votePost);
    }, [data]);

    React.useEffect(() => {
        // navigate.
        mutate();
    }, [navigate]);

    return (
        <>
            <Wrap>
                <VoteContents>
                    <VoteSection detail={detail} mutate={mutate} />
                </VoteContents>
            </Wrap>
            <Wrap>
                <VoteComments />
                <CommentList />
            </Wrap>
        </>
    );
};
