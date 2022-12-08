import React from 'react';

import { Link } from '@mui/material';
import { Elderly } from '@mui/icons-material';

import './App.css';

interface Props {
    name: string;
}

const App = ({ name }: Props): JSX.Element => (
    <div className="App">
        <header className="App-header">
            <Elderly fontSize="large" className="App-logo" />
            <p>
                Hello {name} !
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <Link
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </Link>
        </header>
    </div>
);

export default App;
