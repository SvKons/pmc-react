import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Home from '../../components/Home';
import InfoBlock from '../../components/InfoBlock';
import MetricsBlock from '../../components/MetricsBlock';

const HomePage = () => {
    return (
        <div className="page-container-scroll">
            <Header bg={'header__bg'} />
            <div className="scroll-container">
                <Home />
                <InfoBlock />
                <MetricsBlock />
                <Footer />
            </div>
        </div>
    );
};

export default HomePage;
