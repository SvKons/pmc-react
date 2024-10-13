import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { IServices } from '../Services/utils';
import { useRef } from 'react';

interface ServicesLinkProps {
    data: IServices;
}

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const ServiceItem = ({ data }: ServicesLinkProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 200);

    return (
        <div className="wrap services__wrap">
            <section className="services__scroll">
                <div className="services__wrap-bg">
                    <div className="pmc__img" ref={ref}>
                        <img src={data.imageSrc} alt="Картинка" width="450px" height="600px" />
                    </div>
                    <div className="services__info">
                        <h2 className="services__title">{data.title}</h2>
                        <p className="services__text">{data.text}</p>
                        <ul className="services__list">
                            {data.items?.map((item, i) => (
                                <li className="services__item" key={i}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* <motion.h2 style={{ y }}>{`#00${data.id}`}</motion.h2> */}
                <motion.h2 style={{ y }}></motion.h2>
            </section>
        </div>
    );
};

export default ServiceItem;
