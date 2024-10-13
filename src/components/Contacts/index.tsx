import { Link } from 'react-router-dom';
import './Contacts.scss';

const Contacts = () => {
    const showPhoneNumber = () => {
        alert('Позвонить по номеру +74959999999?');
    };

    return (
        <>
            <section className="contacts">
                <div className="contacts__container">
                    <form>
                        <div className="contacts__form">
                            <div className="contacts__info">
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
                            <div className="contacts__details">
                                <input type="text" name="name" id="name" placeholder="Имя" required />
                                <input type="email" name="email" id="email" placeholder="Email" required />
                                <textarea name="message" id="message" cols={52} rows={7} placeholder="Сообщение..." required></textarea>
                                <button className="contacts__button">Отправить сообщение</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contacts;
