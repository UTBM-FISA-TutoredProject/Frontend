import React from 'react';
import {
    Routes,
    Route,
} from 'react-router';

import {
    Marketplace,
    PageNotFound,
    Header,
    Dashboard,
} from './views';

const App = () => (
    <Routes>
        <Route path="/" element={<Header />}>
            <Route index element={<Dashboard />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="*" element={<PageNotFound />} />
        </Route>
    </Routes>
);

export default App;
