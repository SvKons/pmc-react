import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Services from '../../components/Services';

const ServicesPage = () => {
    return (
        <div className="page-container-scroll">
            <Header bg={'header__bg'} />
            <div className="scroll-container">
                <Services />
                <Footer />
            </div>
        </div>
    );
};

export default ServicesPage;
