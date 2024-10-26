import { motion, MotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import './InfoBlock.scss';

const InfoBlock = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    function useParallax(value: MotionValue<number>, distance: number) {
        return useTransform(value, [0, 1], [-distance, distance]);
    }

    const y = useParallax(scrollYProgress, 200);
    return (
        <>
            <section className="scroll">
                <h1 className="info-title">История создания/общая информация</h1>
            </section>
            <motion.h2 style={{ y }}></motion.h2>
            <motion.div style={{ scaleX }} />
        </>
    );
};

export default InfoBlock;
