import { motion, useScroll, useSpring } from 'framer-motion';
import { servicesData } from './utils';
import ServiceItem from '../ServicesLink';
import './Services.scss';

const Services = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <>
            <div className="services engineering-services">
                <div className="services__bg">
                    <img src={require('./img/bg-grey.png')} alt="Серый фон" className="grey__bg" />
                    <div className="wrap services__wrap-top">
                        <div className="services__info services__info__top">
                            <div className="services__description">
                                <p className="services__title-description">Услуги</p>
                                <p className="services__text-description">
                                    <span className="services__span">PMCCON</span> имеет опыт и компетенции для представления интересов <br />
                                    как на стороне заказчиков, так и на стороне подрядных организаций
                                </p>
                            </div>
                        </div>

                        <div className="services__img">
                            <img src={require('./img/engineering-services.jpg')} width="450px" height="600px" alt="Изображение Инжиниринговые услуги" />
                        </div>
                    </div>
                </div>
            </div>
            {servicesData.map((data, index) => (
                <ServiceItem key={index} data={data} />
            ))}
            <motion.div style={{ scaleX }} />
        </>
    );
};

export default Services;
