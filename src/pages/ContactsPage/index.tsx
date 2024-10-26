import Contacts from '../../components/Contacts';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const ContactsPage = () => {
    return (
        <div className="page-container-scroll">
            <Header bg={'header__bg'} isMainHeader={true} isMainTel={true} />
            <div className="scroll-container">
                <Contacts />
                <Footer />
            </div>
        </div>
    );
};

export default ContactsPage;
