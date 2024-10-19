// const Home = () => {
//     document.addEventListener('DOMContentLoaded', function () {
//         const dots = document.querySelectorAll('.dot');
//         const slides = document.querySelectorAll('.slide');

//         const backgrounds = [
//             'url(../img/main-bg.jpg)',
//             'url(../img/bg.jpg)',
//             'url(../img/main-bg.jpg)',
//             'url(../img/bg.jpg)',
//             'url(../img/main-bg.jpg)',
//             'url(../img/bg.jpg)',
//         ];

//         const backgroundElement = document.querySelector('.background');
//         let currentIndex = 0;
//         const slideInterval = 5000;

//         function changeSlide() {
//             slides[currentIndex].classList.remove('active');
//             dots[currentIndex].classList.remove('active');

//             currentIndex = (currentIndex + 1) % slides.length;

//             slides[currentIndex].classList.add('active');
//             dots[currentIndex].classList.add('active');
//             if (backgroundElement instanceof HTMLElement) {
//                 backgroundElement.style.backgroundImage = backgrounds[currentIndex];
//             }
//         }

//         function startSlideShow() {
//             currentIndex = 0;
//             slides[currentIndex].classList.add('active');
//             dots[currentIndex].classList.add('active');
//             if (backgroundElement instanceof HTMLElement) {
//                 backgroundElement.style.backgroundImage = backgrounds[currentIndex];
//             }

//             setInterval(changeSlide, slideInterval);
//         }

//         startSlideShow();

//         dots.forEach((dot, index) => {
//             dot.addEventListener('click', () => {
//                 slides[currentIndex].classList.remove('active');
//                 dots[currentIndex].classList.remove('active');

//                 currentIndex = index;

//                 slides[currentIndex].classList.add('active');
//                 dots[currentIndex].classList.add('active');
//                 if (backgroundElement instanceof HTMLElement) {
//                     backgroundElement.style.backgroundImage = backgrounds[currentIndex];
//                 }
//             });
//         });
//     });

//     return (
//         <>
//             <div className="background"></div>
//             <main className="page-main">
//                 <section className="main-info wrap">
//                     <div className="slider">
//                         <div className="slide active">
//                             <div className="main-info__wrap">
//                                 <div className="main-info__text-left">
//                                     <p className="main-info__title-left">
//                                         Успешные проекты начинаются <br />с плана
//                                     </p>
//                                     <span className="main-info__text">
//                                         от ТЭО до ввода <br />в эксплуатацию
//                                     </span>
//                                 </div>
//                                 <p className="main-info__title-right">Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС</p>
//                             </div>
//                         </div>
//                         <div className="slide">
//                             <div className="main-info__wrap">
//                                 <div className="main-info__text-left">
//                                     <p className="main-info__title-left">
//                                         Успешные проекты начинаются <br />с плана
//                                     </p>
//                                     <span className="main-info__text">
//                                         от ТЭО до ввода <br />в эксплуатацию
//                                     </span>
//                                 </div>
//                                 <p className="main-info__title-right">Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС</p>
//                             </div>
//                         </div>
//                         <div className="slide">
//                             <div className="main-info__wrap">
//                                 <div className="main-info__text-left">
//                                     <p className="main-info__title-left">
//                                         Успешные проекты начинаются <br />с плана
//                                     </p>
//                                     <span className="main-info__text">
//                                         от ТЭО до ввода <br />в эксплуатацию
//                                     </span>
//                                 </div>
//                                 <p className="main-info__title-right">Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС</p>
//                             </div>
//                         </div>
//                         <div className="slide">
//                             <div className="main-info__wrap">
//                                 <div className="main-info__text-left">
//                                     <p className="main-info__title-left">
//                                         Успешные проекты начинаются <br />с плана
//                                     </p>
//                                     <span className="main-info__text">
//                                         от ТЭО до ввода <br />в эксплуатацию
//                                     </span>
//                                 </div>
//                                 <p className="main-info__title-right">Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС</p>
//                             </div>
//                         </div>
//                         <div className="slide">
//                             <div className="main-info__wrap">
//                                 <div className="main-info__text-left">
//                                     <p className="main-info__title-left">
//                                         Успешные проекты начинаются <br />с плана
//                                     </p>
//                                     <span className="main-info__text">
//                                         от ТЭО до ввода <br />в эксплуатацию
//                                     </span>
//                                 </div>
//                                 <p className="main-info__title-right">Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС</p>
//                             </div>
//                         </div>
//                         <div className="slide">
//                             <div className="main-info__wrap">
//                                 <div className="main-info__text-left">
//                                     <p className="main-info__title-left">
//                                         Успешные проекты начинаются <br />с плана
//                                     </p>
//                                     <span className="main-info__text">
//                                         от ТЭО до ввода <br />в эксплуатацию
//                                     </span>
//                                 </div>
//                                 <p className="main-info__title-right">Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="blocks">
//                         <div className="dots">
//                             <span className="dot active"></span>
//                             <span className="dot"></span>
//                             <span className="dot"></span>
//                             <span className="dot"></span>
//                             <span className="dot"></span>
//                             <span className="dot"></span>
//                         </div>
//                     </div>
//                 </section>
//             </main>
//         </>
//     );
// };

// export default Home;

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { wrap } from 'popmotion';

// const backgrounds = [
//     require('./img/main-bg.jpg'),
//     require('./img/bg.jpg'),
//     require('./img/main-bg.jpg'),
//     require('./img/bg.jpg'),
//     require('./img/main-bg.jpg'),
//     require('./img/bg.jpg'),
// ];

// const slides = [
//     {
//         titleLeft: 'Успешные проекты начинаются с плана',
//         text: 'от ТЭО до ввода в эксплуатацию',
//         titleRight: 'Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС',
//     },
//     {
//         titleLeft: 'Успешные проекты начинаются с плана',
//         text: 'от ТЭО до ввода в эксплуатацию',
//         titleRight: 'Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС',
//     },
//     {
//         titleLeft: 'Успешные проекты начинаются с плана',
//         text: 'от ТЭО до ввода в эксплуатацию',
//         titleRight: 'Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС',
//     },
//     {
//         titleLeft: 'Успешные проекты начинаются с плана',
//         text: 'от ТЭО до ввода в эксплуатацию',
//         titleRight: 'Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС',
//     },
//     {
//         titleLeft: 'Успешные проекты начинаются с плана',
//         text: 'от ТЭО до ввода в эксплуатацию',
//         titleRight: 'Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС',
//     },
//     {
//         titleLeft: 'Успешные проекты начинаются с плана',
//         text: 'от ТЭО до ввода в эксплуатацию',
//         titleRight: 'Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС',
//     },
// ];

// const variants = {
//     enter: (direction: number) => {
//         return {
//             x: direction > 0 ? 1000 : -1000,
//             opacity: 0,
//         };
//     },
//     center: {
//         zIndex: 1,
//         x: 0,
//         opacity: 1,
//     },
//     exit: (direction: number) => {
//         return {
//             zIndex: 0,
//             x: direction < 0 ? 1000 : -1000,
//             opacity: 0,
//         };
//     },
// };

// const Home = () => {
//     const [[page, direction], setPage] = useState([0, 0]);

//     const imageIndex = wrap(0, slides.length, page);

//     const paginate = (newDirection: number) => {
//         setPage([page + newDirection, newDirection]);
//     };

//     useEffect(() => {
//         const interval = setInterval(() => {
//             paginate(1);
//         }, 5000);

//         return () => clearInterval(interval);
//     }, [page]);

//     return (
//         <main className="page-main">
//             <section className="main-info wrap">
//                 <div className="slider">
//                     <AnimatePresence initial={false} custom={direction}>
//                         <motion.div
//                             key={page}
//                             custom={direction}
//                             variants={variants}
//                             initial="enter"
//                             animate="center"
//                             exit="exit"
//                             transition={{
//                                 x: { type: 'spring', stiffness: 300, damping: 30 },
//                                 opacity: { duration: 0.2 },
//                             }}
//                             className="slide active"
//                         >
//                             <div className="main-info__wrap">
//                                 <div className="main-info__text-left">
//                                     <p className="main-info__title-left">{slides[imageIndex].titleLeft}</p>
//                                     <span className="main-info__text">{slides[imageIndex].text}</span>
//                                 </div>
//                                 <p className="main-info__title-right">{slides[imageIndex].titleRight}</p>
//                             </div>
//                         </motion.div>
//                     </AnimatePresence>
//                 </div>
//                 <div className="background" style={{ backgroundImage: backgrounds[imageIndex] }}></div>
//                 <div className="next" onClick={() => paginate(1)}>
//                     {'‣'}
//                 </div>
//                 <div className="prev" onClick={() => paginate(-1)}>
//                     {'‣'}
//                 </div>
//             </section>
//         </main>
//     );
// };

// export default Home;

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import './Home.scss';

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
    }),
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

export const Home = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const [isFirstRender, setIsFirstRender] = useState(true);
    const [showText, setShowText] = useState(false); // Состояние для управления текстом
    const slideIndex = wrap(0, backgrounds.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
        setIsFirstRender(false);
        setShowText(false); // Скрываем текст перед сменой слайда
    };

    // Показываем текст с задержкой при первой загрузке
    useEffect(() => {
        if (isFirstRender) {
            setTimeout(() => {
                setShowText(true); // Показываем текст с задержкой
            }, 500); // Задержка в 500 мс
        }
    }, [isFirstRender]);

    // Автоматическое переключение слайдов
    useEffect(() => {
        const interval = setInterval(() => paginate(1), 5000);
        return () => clearInterval(interval);
    }, [page]);

    return (
        <main className="page-main">
            <section className="main-info wrap">
                <div className="background" style={{ backgroundImage: `url(${backgrounds[slideIndex]})` }}></div>

                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={page}
                        className={`slide ${isFirstRender && page === 0 ? 'first-slide' : 'active'} ${showText ? 'show-text' : ''}`}
                        custom={direction}
                        variants={variants}
                        initial={isFirstRender ? 'center' : 'enter'}
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: isFirstRender ? 2 : 0.5 },
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
            </section>
        </main>
    );
};
