import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Header.scss';

const Header = ({ bg }: { bg: string }) => {
    const showPhoneNumber = () => {
        alert('Позвонить по номеру +74959999999?');
    };

    useEffect(() => {
        const toggle = document.querySelector('.toggle');
        const menu = document.querySelector('.menu');
        const closeButton = document.querySelector('.menu__close');
        const menuItems = document.querySelectorAll('.menu__item');
        const menuImg = document.querySelector('.menu__img');
        const menuLogo = document.querySelector('.menu__logo');
        const menuCopy = document.querySelector('.copy');

        let isToggled = false;

        toggle?.addEventListener('click', () => {
            isToggled = !isToggled;
            toggle.classList.toggle('open', isToggled);
            menu?.classList.toggle('open', isToggled);

            if (isToggled) {
                setTimeout(() => {
                    menuItems[0]?.classList.add('visible');
                }, 500);
                menuItems.forEach((item, index) => {
                    if (index !== 0) {
                        setTimeout(
                            () => {
                                item.classList.add('visible');
                            },
                            (index + 1) * 300
                        );
                    }
                });
                setTimeout(
                    () => {
                        menuImg?.classList.add('visible');
                        menuLogo?.classList.add('visible');
                        menuCopy?.classList.add('visible');
                    },
                    (menuItems.length + 1) * 200
                );
            } else {
                menuItems.forEach(item => {
                    item.classList.remove('visible');
                });
                menuImg?.classList.remove('visible');
                menuLogo?.classList.remove('visible');
                menuCopy?.classList.remove('visible');
            }
        });

        closeButton?.addEventListener('click', () => {
            isToggled = false;
            toggle?.classList.toggle('open', isToggled);
            menu?.classList.toggle('open', isToggled);

            menuItems.forEach(item => {
                item.classList.remove('visible');
            });
            menuImg?.classList.remove('visible');
            menuLogo?.classList.remove('visible');
            menuCopy?.classList.remove('visible');
        });

        /* скрол меню */

        const toggleButton = document.querySelector('.toggle');
        const header = document.querySelector('.header');

        window.addEventListener('scroll', function () {
            const scrollPosition = window.scrollY;
            const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 0;
            const isFixed = toggleButton?.classList.contains('fixed-toggle');

            if (scrollPosition > headerHeight && !isFixed) {
                toggleButton?.classList.add('fixed-toggle');
            } else if (scrollPosition <= headerHeight && isFixed) {
                toggleButton?.classList.remove('fixed-toggle');
            }
        });
    }, []);

    return (
        <header className={`header ${bg}`}>
            <div className="header__wrap">
                <Link to={'/'} className="header__link">
                    <img src={require('./img/logo-no-background.png')} width="100px" alt="Logo PMC Company" className="header__logo" />
                </Link>
                <div className="header__right-menu">
                    <a href="tel:+74959999999" className="tel" onClick={() => showPhoneNumber()}>
                        +7495-999-9999
                    </a>
                    <div className="app">
                        <button className="toggle">
                            <div>
                                <span className="toggle__black"></span>
                            </div>
                            <div>
                                <span className="toggle__black"></span>
                            </div>
                            <div>
                                <span className="toggle__black"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <section className="menu hidden">
                <div className="wrap menu__bg">
                    <img src={require('./img/bg-grey.png')} alt="Серый фон" className="grey__bg" />
                    <div className="menu__wrap-main">
                        <div className="menu__logo">
                            <Link to={'/'} className="menu__link">
                                <img src={require('./img/logo-no-background.png')} width="100px" className="menu__logo__img" alt="Лого PMCCON" />
                            </Link>
                        </div>
                        <div className="menu__info">
                            <div className="menu__list">
                                <Link to={'/projects'} className="menu__item">
                                    Проекты
                                </Link>
                                <Link to={'/services'} className="menu__item">
                                    Услуги
                                </Link>
                                <Link to={'/contacts'} className="menu__item">
                                    Контакты
                                </Link>
                            </div>
                        </div>
                        <p className="copy">
                            <span className="copy-text">
                                ООО «ПиЭмСи КОН» <br />
                                2024
                            </span>
                        </p>
                    </div>
                    <div className="menu__img">
                        <img src={require('./img/engineering-services.jpg')} width="450px" height="600px" alt="Изображение Инжиниринговые услуги" />
                        <button className="menu__close">
                            <img src={require('./img/cross.png')} alt="Иконка крестика" className="menu__cross" />
                        </button>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;
