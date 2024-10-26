// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence, useSpring, useScroll, MotionValue, useTransform } from 'framer-motion';
// import { wrap } from 'popmotion';
// import './Home.scss';

// const variants = {
//     enter: (direction: number) => ({
//         x: direction > 0 ? 1000 : -1000,
//         opacity: 0,
//     }),
//     center: {
//         zIndex: 1,
//         x: 0,
//         opacity: 1,
//     },
//     exit: (direction: number) => ({
//         x: direction < 0 ? 1000 : -1000,
//         opacity: 0,
//     }),
// };

// const backgrounds = [
//     require('./img/main-bg.jpg'),
//     require('./img/bg.jpg'),
//     require('./img/main-bg.jpg'),
//     require('./img/bg.jpg'),
//     require('./img/main-bg.jpg'),
//     require('./img/bg.jpg'),
// ];

// const slidesData = [
//     {
//         leftTitle: 'Успешные проекты начинаются с плана',
//         leftText: 'от ТЭО до ввода в эксплуатацию',
//         rightTitle: 'Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС',
//     },
//     {
//         leftTitle: 'Новые проекты',
//         leftText: 'Планирование и реализация',
//         rightTitle: 'Проект по расширению мощностей ТЭЦ',
//     },
//     {
//         leftTitle: 'Успешные проекты начинаются с плана',
//         leftText: 'от ТЭО до ввода в эксплуатацию',
//         rightTitle: 'Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС',
//     },
//     {
//         leftTitle: 'Новые проекты',
//         leftText: 'Планирование и реализация',
//         rightTitle: 'Проект по расширению мощностей ТЭЦ',
//     },
//     {
//         leftTitle: 'Успешные проекты начинаются с плана',
//         leftText: 'от ТЭО до ввода в эксплуатацию',
//         rightTitle: 'Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС',
//     },
//     {
//         leftTitle: 'Новые проекты',
//         leftText: 'Планирование и реализация',
//         rightTitle: 'Проект по расширению мощностей ТЭЦ',
//     },
// ];

// const Home = () => {
//     const [[page, direction], setPage] = useState([0, 0]);
//     const [isFirstRender, setIsFirstRender] = useState(true);
//     const [showText, setShowText] = useState(false); // Состояние для управления текстом
//     const slideIndex = wrap(0, backgrounds.length, page);

//     const paginate = (newDirection: number) => {
//         setPage([page + newDirection, newDirection]);
//         setIsFirstRender(false);
//         setShowText(false); // Скрываем текст перед сменой слайда
//     };

//     // Показываем текст с задержкой при первой загрузке
//     useEffect(() => {
//         if (isFirstRender) {
//             setTimeout(() => {
//                 setShowText(true); // Показываем текст с задержкой
//             }, 500); // Задержка в 500 мс
//         }
//     }, [isFirstRender]);

//     // Автоматическое переключение слайдов
//     useEffect(() => {
//         const interval = setInterval(() => paginate(1), 5000);
//         return () => clearInterval(interval);
//     }, [page]);

//     const { scrollYProgress } = useScroll();
//     const scaleX = useSpring(scrollYProgress, {
//         stiffness: 100,
//         damping: 30,
//         restDelta: 0.001,
//     });

//     function useParallax(value: MotionValue<number>, distance: number) {
//         return useTransform(value, [0, 1], [-distance, distance]);
//     }

//     const y = useParallax(scrollYProgress, 200);

//     return (
//         <main className="page-main">
//             <section className="main-info wrap scroll">
//                 <div className="background" style={{ backgroundImage: `url(${backgrounds[slideIndex]})` }}></div>

//                 <AnimatePresence initial={false} custom={direction}>
//                     <motion.div
//                         key={page}
//                         className={`slide ${isFirstRender && page === 0 ? 'first-slide' : 'active'} ${showText ? 'show-text' : ''}`}
//                         custom={direction}
//                         variants={variants}
//                         initial={isFirstRender ? 'center' : 'enter'}
//                         animate="center"
//                         exit="exit"
//                         transition={{
//                             x: { type: 'spring', stiffness: 300, damping: 30 },
//                             opacity: { duration: isFirstRender ? 2 : 0.5 },
//                         }}
//                     >
//                         <div className="main-info__wrap">
//                             <div className="main-info__text-left">
//                                 <p className="main-info__title-left">{slidesData[slideIndex].leftTitle}</p>
//                                 <p className="main-info__text">{slidesData[slideIndex].leftText}</p>
//                             </div>
//                             <p className="main-info__title-right">{slidesData[slideIndex].rightTitle}</p>
//                         </div>
//                     </motion.div>
//                 </AnimatePresence>
//             </section>
//             <motion.h2 style={{ y }}></motion.h2>
//             <motion.div style={{ scaleX }} />
//         </main>
//     );
// };

// export default Home;

// import { useCallback, useEffect, useState } from 'react';
// import { motion, AnimatePresence, useSpring, useScroll, useTransform } from 'framer-motion';
// import { wrap } from 'popmotion';
// import './Home.scss';

// const variants = {
//     enter: (direction: number) => ({
//         x: direction > 0 ? 1000 : -1000,
//         opacity: 0,
//     }),
//     center: {
//         zIndex: 1,
//         x: 0,
//         opacity: 1,
//     },
//     exit: (direction: number) => ({
//         x: direction < 0 ? 1000 : -1000,
//         opacity: 0,
//     }),
// };

// const backgrounds = [
//     require('./img/main-bg.jpg'),
//     require('./img/bg.jpg'),
//     require('./img/main-bg.jpg'),
//     require('./img/bg.jpg'),
//     require('./img/main-bg.jpg'),
//     require('./img/bg.jpg'),
// ];

// const slidesData = [
//     {
//         leftTitle: 'Успешные проекты начинаются с плана',
//         leftText: 'от ТЭО до ввода в эксплуатацию',
//         rightTitle: 'Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС',
//     },
//     {
//         leftTitle: 'Новые проекты',
//         leftText: 'Планирование и реализация',
//         rightTitle: 'Проект по расширению мощностей ТЭЦ',
//     },
//     {
//         leftTitle: 'Успешные проекты начинаются с плана',
//         leftText: 'от ТЭО до ввода в эксплуатацию',
//         rightTitle: 'Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС',
//     },
//     {
//         leftTitle: 'Новые проекты',
//         leftText: 'Планирование и реализация',
//         rightTitle: 'Проект по расширению мощностей ТЭЦ',
//     },
//     {
//         leftTitle: 'Успешные проекты начинаются с плана',
//         leftText: 'от ТЭО до ввода в эксплуатацию',
//         rightTitle: 'Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС',
//     },
//     {
//         leftTitle: 'Новые проекты',
//         leftText: 'Планирование и реализация',
//         rightTitle: 'Проект по расширению мощностей ТЭЦ',
//     },
// ];

// const Dots = ({ total, currentIndex, onDotClick }: { total: number; currentIndex: number; onDotClick: (index: number) => void }) => (
//     <div className="dots">
//         {Array.from({ length: total }, (_, i) => (
//             <div
//                 key={i}
//                 className={`dot ${i === currentIndex ? 'dot--active' : ''}`}
//                 style={{ opacity: i === currentIndex ? 1 : 0.5 }}
//                 onClick={() => onDotClick(i)} // Добавляем обработчик клика
//             />
//         ))}
//     </div>
// );

// const Home = () => {
//     const [[page, direction], setPage] = useState([0, 0]);
//     const [isFirstRender, setIsFirstRender] = useState(true);
//     const [showText, setShowText] = useState(false);
//     const slideIndex = wrap(0, backgrounds.length, page);

//     const paginate = useCallback(
//         (newIndex: number) => {
//             const newDirection = newIndex > page ? 1 : -1;
//             setPage([newIndex, newDirection]);
//             setIsFirstRender(false);
//             setShowText(false);
//         },
//         [page]
//     );

//     useEffect(() => {
//         if (isFirstRender) {
//             setTimeout(() => setShowText(true), 500);
//         }
//     }, [isFirstRender]);

//     useEffect(() => {
//         const interval = setInterval(() => paginate((page + 1) % backgrounds.length), 5000);
//         return () => clearInterval(interval);
//     }, [page, paginate]);

//     const { scrollYProgress } = useScroll();
//     const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
//     const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

//     return (
//         <main className="page-main">
//             <section className="main-info wrap scroll">
//                 <div className="background" style={{ backgroundImage: `url(${backgrounds[slideIndex]})` }}></div>
//                 <AnimatePresence initial={false} custom={direction}>
//                     <motion.div
//                         key={page}
//                         className="slide active"
//                         custom={direction}
//                         variants={variants}
//                         initial="enter"
//                         animate="center"
//                         exit="exit"
//                         transition={{
//                             x: { type: 'spring', stiffness: 300, damping: 30 },
//                             opacity: { duration: 0.5 },
//                         }}
//                     >
//                         <div className="main-info__wrap">
//                             <div className="main-info__text-left">
//                                 <p className="main-info__title-left">{slidesData[slideIndex].leftTitle}</p>
//                                 <p className="main-info__text">{slidesData[slideIndex].leftText}</p>
//                             </div>
//                             <p className="main-info__title-right">{slidesData[slideIndex].rightTitle}</p>
//                         </div>
//                     </motion.div>
//                 </AnimatePresence>
//                 <Dots total={backgrounds.length} currentIndex={slideIndex} onDotClick={paginate} />
//             </section>
//             <motion.h2 style={{ y }}></motion.h2>
//             <motion.div style={{ scaleX }} />
//         </main>
//     );
// };

// export default Home;

import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import './Home.scss';

const variants = {
    enter: {
        opacity: 0,
    },
    center: {
        zIndex: 1,
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
};

const backgrounds = [
    require('./img/main-bg.jpg'),
    require('./img/bg.jpg'),
    require('./img/main-bg.jpg'),
    require('./img/bg.jpg'),
    require('./img/main-bg.jpg'),
    require('./img/bg.jpg'),
];

const slidesData = [
    {
        leftTitle: 'Успешные проекты начинаются с плана',
        leftText: 'от ТЭО до ввода в эксплуатацию',
        rightTitle: 'Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС',
    },
    {
        leftTitle: 'Новые проекты',
        leftText: 'Планирование и реализация',
        rightTitle: 'Проект по расширению мощностей ТЭЦ',
    },
    {
        leftTitle: 'Успешные проекты начинаются с плана',
        leftText: 'от ТЭО до ввода в эксплуатацию',
        rightTitle: 'Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС',
    },
    {
        leftTitle: 'Новые проекты',
        leftText: 'Планирование и реализация',
        rightTitle: 'Проект по расширению мощностей ТЭЦ',
    },
    {
        leftTitle: 'Успешные проекты начинаются с плана',
        leftText: 'от ТЭО до ввода в эксплуатацию',
        rightTitle: 'Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС',
    },
    {
        leftTitle: 'Новые проекты',
        leftText: 'Планирование и реализация',
        rightTitle: 'Проект по расширению мощностей ТЭЦ',
    },
];

const Dots = ({ total, currentIndex, onDotClick }: { total: number; currentIndex: number; onDotClick: (index: number) => void }) => (
    <div className="dots">
        {Array.from({ length: total }, (_, i) => (
            <div
                key={i}
                className={`dot ${i === currentIndex ? 'dot--active' : ''}`}
                style={{ opacity: i === currentIndex ? 1 : 0.5 }}
                onClick={() => onDotClick(i)} // Добавляем обработчик клика
            />
        ))}
    </div>
);

const Home = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const [isFirstRender, setIsFirstRender] = useState(true);
    const [showText, setShowText] = useState(false);
    const slideIndex = wrap(0, backgrounds.length, page);

    const paginate = useCallback(
        (newIndex: number) => {
            const newDirection = newIndex > page ? 1 : -1;
            setPage([newIndex, newDirection]);
            setIsFirstRender(false);
            setShowText(false);
        },
        [page]
    );

    useEffect(() => {
        if (isFirstRender) {
            setTimeout(() => setShowText(true), 500);
        }
    }, [isFirstRender]);

    useEffect(() => {
        const interval = setInterval(() => paginate((page + 1) % backgrounds.length), 5000);
        return () => clearInterval(interval);
    }, [page, paginate]);

    return (
        <main className="page-main">
            <section className="main-info wrap scroll">
                <div className="background" style={{ backgroundImage: `url(${backgrounds[slideIndex]})` }}></div>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={page}
                        className="slide active"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            opacity: { duration: 0.7, ease: 'easeInOut' },
                        }}
                    >
                        <div className="main-info__wrap">
                            <div className="main-info__text-left">
                                <p className="main-info__title-left">{slidesData[slideIndex].leftTitle}</p>
                                <p className="main-info__text">{slidesData[slideIndex].leftText}</p>
                            </div>
                            <p className="main-info__title-right">{slidesData[slideIndex].rightTitle}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
                <Dots total={backgrounds.length} currentIndex={slideIndex} onDotClick={paginate} />
            </section>
        </main>
    );
};

export default Home;
