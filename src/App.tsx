import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Vote from '@src/pages/VoteDetail';
import VoteList from '@src/pages/Votelist';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<VoteList />} />
                    <Route path="/vote/:postId" element={<Vote />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
