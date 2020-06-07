import React from 'react';
import Navbar from '../components/Navbar';
import Lorem from '../components/Lorem';
import Footer from '../components/footer'
import Services from '../components/services';
import '../assets/css/animate.css/animate.min.css';
import '../assets/css/animate.css/animate.css';
import '../assets/css/animate.css/animate.compat.css';
import '../assets/css/animate.css/source/fading_entrances/fadeIn.css';
import '../assets/css/ionicons@4.2.2/css/ionicons.min.css';

import '../assets/css/wazunga.scss';
import '../assets/css/orproducts.css';
import '../assets/css/responsive.css';
import '../assets/css/Wazunga.css';


const Home = () => (
    <React.Fragment>
        <Navbar />
        <Lorem />
        <Services/>
        <Footer/>
    </React.Fragment>
)

export default Home;