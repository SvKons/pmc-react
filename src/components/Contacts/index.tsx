import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Contacts.scss';

interface ContactsProps {
    isFooter?: boolean;
}

const Contacts = ({ isFooter = false }: ContactsProps) => {
    const showPhoneNumber = () => {
        alert('Позвонить по номеру +74959999999?');
    };

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <>
            <section className="contacts scroll">
                <div className="contacts__container">
                    <form>
                        <div className={`contacts__form ${isFooter ? 'contacts__form_footer' : ''}`}>
                            <div className={`contacts__info ${isFooter ? 'contacts__info_footer' : ''}`}>
                                <h1 className="contacts__title">Свяжитесь с нами</h1>
                                <div className="contacts__wrap">
                                    <p className="contacts__email">
                                        <Link to={'mailto:pmc@mail.ru'} className="contacts__email__link">
                                            pmc@mail.ru
                                        </Link>
                                    </p>
                                    <Link to={'tel:+74959999999'} className="tel tel__black contacts__tel" onClick={() => showPhoneNumber()}>
                                        +7495 999 9999
                                    </Link>
                                </div>
                            </div>
                            <div className={`contacts__details ${isFooter ? 'contacts__details_footer' : ''}`}>
                                <input type="text" name="name" id="name" placeholder="Имя" required />
                                <input type="email" name="email" id="email" placeholder="Email" required />
                                <textarea name="message" id="message" cols={52} rows={7} placeholder="Сообщение..." required></textarea>
                                <button className="contacts__button">Отправить сообщение</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <motion.div style={{ scaleX }} />
        </>
    );
};

export default Contacts;
