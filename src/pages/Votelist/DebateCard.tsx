import React from 'react';

import {Post} from '@src/types/vote';

const DebateCard = ({id, text}: Post) => {
    return <div>{text}</div>;
};

export default DebateCard;
