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
import Social from "./views/Social";

const App = () => (
    <Routes>
        <Route path="/" element={<Header />}>
            <Route index element={<Dashboard />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="social" element={<Social />} />
            <Route path="*" element={<PageNotFound />} />
        </Route>
    </Routes>
);

export default App;
