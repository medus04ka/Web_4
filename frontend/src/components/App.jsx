import React, { useState, useEffect } from 'react';
import HeaderContainer from './header/HeaderContainer';
import TitleHelmet from './common/TitleHelmet'
import MainContent from './maincontent/MainContent';
import IndexContent from './indexcontent/IndexContent'
import Preloader from './preloader/PreLoader';

const App = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!isLoaded) {
            props.initializeAuth();
            setIsLoaded(true);
        }
    }, [isLoaded, props]);

    if (props.isLoading) {
        return (
            <div>
                <HeaderContainer />
                <TitleHelmet title="Web Project 4 - Loading..." />
                <Preloader />
            </div>

        );
    } else if (props.loggedUser) {
        return (
            <div>
                <HeaderContainer />
                <TitleHelmet title="Web Project 4 - Main page" />
                <MainContent />
            </div>
        );
    } else {
        return (
            <div>
                <HeaderContainer />
                <TitleHelmet title="Web Project 4 - Authorization Page" />
                <IndexContent />
            </div>
        );
    }
}

export default App;