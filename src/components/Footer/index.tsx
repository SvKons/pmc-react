import { Link } from 'react-router-dom';
import './Footer.scss';
import Contacts from '../Contacts';

const Footer = () => {
    const showPhoneNumber = () => {
        alert('Позвонить по номеру +74959999999?');
    };

    return (
        <>
            <footer className="footer wrap">
                <div className="footer__top">
                    <div className="footer__wrap">
                        <div className="footer__wrap__right">
                            <div className="footer__menu">
                                <Link to={'/projects'} className="footer__item">
                                    Проекты
                                </Link>
                                <Link to={'/services'} className="footer__item">
                                    Услуги
                                </Link>
                                <Link to={'/contacts'} className="footer__item">
                                    Контакты
                                </Link>
                            </div>
                            <p className="footer__email">
                                Обратная связь:
                                <br />
                                <Link to={'mailto:pmc@mail.ru'} className="footer__email__link">
                                    pmc@mail.ru
                                </Link>
                            </p>
                            <a href="tel:+74959999999" className="tel tel__black" onClick={() => showPhoneNumber()}>
                                +7495 999 9999
                            </a>
                        </div>

                        {/* <div className="footer__contacts">
                            <Link to={'./HomePage/'} className="footer__link">
                                <img src={require('./img/logo-no-background.png')} width="100px" className="footer__logo" alt="Лого PMCCON" />
                            </Link>
                        </div> */}
                    </div>
                </div>
                <Contacts isFooter={true} />
            </footer>
        </>
    );
};
export default Footer;
