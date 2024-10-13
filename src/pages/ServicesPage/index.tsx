import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Services from '../../components/Services';
import './ServicesPage.scss';

const ServicesPage = () => {
    return (
        <div className="services-page-container">
            <Header bg={'header__bg'} />
            <div className="services-scroll-container">
                <Services />
                <Footer />
            </div>
        </div>
    );
};

export default ServicesPage;
