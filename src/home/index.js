import "./index.css";
import React, { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.title = "Home"
    }, []);
    return (
        <div>
            Hi, I'm Kevin Liu.
        </div>
    )
}

export default Home;