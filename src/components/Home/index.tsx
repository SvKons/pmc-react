const Home = () => {
    document.addEventListener('DOMContentLoaded', function () {
        const dots = document.querySelectorAll('.dot');
        const slides = document.querySelectorAll('.slide');

        const backgrounds = [
            'url(../img/main-bg.jpg)',
            'url(../img/bg.jpg)',
            'url(../img/main-bg.jpg)',
            'url(../img/bg.jpg)',
            'url(../img/main-bg.jpg)',
            'url(../img/bg.jpg)',
        ];

        const backgroundElement = document.querySelector('.background');
        let currentIndex = 0;
        const slideInterval = 5000;

        function changeSlide() {
            slides[currentIndex].classList.remove('active');
            dots[currentIndex].classList.remove('active');

            currentIndex = (currentIndex + 1) % slides.length;

            slides[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
            if (backgroundElement instanceof HTMLElement) {
                backgroundElement.style.backgroundImage = backgrounds[currentIndex];
            }
        }

        function startSlideShow() {
            currentIndex = 0;
            slides[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
            if (backgroundElement instanceof HTMLElement) {
                backgroundElement.style.backgroundImage = backgrounds[currentIndex];
            }

            setInterval(changeSlide, slideInterval);
        }

        startSlideShow();

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                slides[currentIndex].classList.remove('active');
                dots[currentIndex].classList.remove('active');

                currentIndex = index;

                slides[currentIndex].classList.add('active');
                dots[currentIndex].classList.add('active');
                if (backgroundElement instanceof HTMLElement) {
                    backgroundElement.style.backgroundImage = backgrounds[currentIndex];
                }
            });
        });
    });

    return (
        <>
            <div className="background"></div>
            <main className="page-main">
                <section className="main-info wrap">
                    <div className="slider">
                        <div className="slide active">
                            <div className="main-info__wrap">
                                <div className="main-info__text-left">
                                    <p className="main-info__title-left">
                                        Успешные проекты начинаются <br />с плана
                                    </p>
                                    <span className="main-info__text">
                                        от ТЭО до ввода <br />в эксплуатацию
                                    </span>
                                </div>
                                <p className="main-info__title-right">Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС</p>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="main-info__wrap">
                                <div className="main-info__text-left">
                                    <p className="main-info__title-left">
                                        Успешные проекты начинаются <br />с плана
                                    </p>
                                    <span className="main-info__text">
                                        от ТЭО до ввода <br />в эксплуатацию
                                    </span>
                                </div>
                                <p className="main-info__title-right">Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС</p>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="main-info__wrap">
                                <div className="main-info__text-left">
                                    <p className="main-info__title-left">
                                        Успешные проекты начинаются <br />с плана
                                    </p>
                                    <span className="main-info__text">
                                        от ТЭО до ввода <br />в эксплуатацию
                                    </span>
                                </div>
                                <p className="main-info__title-right">Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС</p>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="main-info__wrap">
                                <div className="main-info__text-left">
                                    <p className="main-info__title-left">
                                        Успешные проекты начинаются <br />с плана
                                    </p>
                                    <span className="main-info__text">
                                        от ТЭО до ввода <br />в эксплуатацию
                                    </span>
                                </div>
                                <p className="main-info__title-right">Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС</p>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="main-info__wrap">
                                <div className="main-info__text-left">
                                    <p className="main-info__title-left">
                                        Успешные проекты начинаются <br />с плана
                                    </p>
                                    <span className="main-info__text">
                                        от ТЭО до ввода <br />в эксплуатацию
                                    </span>
                                </div>
                                <p className="main-info__title-right">Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС</p>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="main-info__wrap">
                                <div className="main-info__text-left">
                                    <p className="main-info__title-left">
                                        Успешные проекты начинаются <br />с плана
                                    </p>
                                    <span className="main-info__text">
                                        от ТЭО до ввода <br />в эксплуатацию
                                    </span>
                                </div>
                                <p className="main-info__title-right">Ремонтно-восстановительные Работы Энергоблока №3 Березовской ГРЭС</p>
                            </div>
                        </div>
                    </div>
                    <div className="blocks">
                        <div className="dots">
                            <span className="dot active"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
