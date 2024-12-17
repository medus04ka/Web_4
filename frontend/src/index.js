import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import { Provider } from 'react-redux';
import AppContainer from './components/AppContainer';
import store from './redux/store';
import './style/style.css';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root

root.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>
);