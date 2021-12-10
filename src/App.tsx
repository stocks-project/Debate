import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';

import Vote from '@src/pages/Vote';
import VoteList from '@src/pages/Votelist';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<VoteList />} />
                    <Route path="/vote" element={<Vote />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
