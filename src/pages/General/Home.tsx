import React from 'react';
import About from './About';
import Services from './Services';

const Home = () => {
    return (
        <>
        {/* <main> */}
            {/* <div>
                <h1>Home page</h1>
                <h3>(Whatever information we want to put on the home page.)</h3>
                <h3>Average rating: [FROM DB]/5</h3>
                <h3>Call outs in this month: [FROM DB]</h3>
            </div> */}
            <About/>
            <Services/>
        {/* </main> */}
        </>
    );
};

export default Home;
