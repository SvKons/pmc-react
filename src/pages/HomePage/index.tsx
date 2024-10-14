// import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Home } from '../../components/Home';
import './HomePage.scss';

const HomePage = () => {
    return (
        <div className="home-page-container">
            <Header bg={''} />
            <div className="home-scroll-container">
                <Home />
                {/* <Footer /> */}
            </div>
        </div>
    );
};

export default HomePage;
