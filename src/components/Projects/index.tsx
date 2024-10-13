import { Link } from 'react-router-dom';
import './Projects.scss';

const Projects = () => {
    // window.addEventListener('load', () => {
    //     const title = document.querySelector('.projects-top__title');
    //     const text = document.querySelector('.projects-top__text');
    //     const img = document.querySelector('.projects-top__img');

    //     if (title) title.classList.add('show');
    //     if (text) text.classList.add('show');
    //     if (img) img.classList.add('show');
    // });

    // const projectsList = document.querySelector('.projects__list');

    // window.addEventListener('scroll', () => {
    //     if (projectsList) {
    //         const projectsListTop = projectsList.getBoundingClientRect().top;
    //         const windowHeight = window.innerHeight;

    //         if (projectsListTop < windowHeight) {
    //             projectsList.classList.add('show');
    //         }
    //     }
    // });

    return (
        <>
            <section className="projects-top">
                <div className="projects-top__bg">
                    <img src={require('./img/bg-grey.png')} alt="Серый фон" className="grey__bg" />
                    <div className="wrap projects-top__wrap">
                        <div className="projects-top__info">
                            <div className="projects-top__block">
                                <p className="projects-top__title">Проекты</p>
                                <span className="projects-top__text">
                                    Наши проекты - <br />
                                    Наша гордость
                                </span>
                            </div>
                        </div>

                        <div className="projects-top__img">
                            <img src={require('./img/engineering-services.jpg')} width="450px" height="600px" alt="Изображение Инжиниринговые услуги" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="projects__list hidden">
                <div className="projects__list-container">
                    <div className="projects__wrap-list">
                        <div className="projects__item">
                            <Link to={'projects-1.html'} className="projects__link">
                                Проекты 1
                            </Link>
                        </div>
                        <div className="projects__item">
                            <Link to={'projects-2.html'} className="projects__link">
                                Проекты 2
                            </Link>
                        </div>
                        <div className="projects__item">
                            <Link to={''} className="projects__link">
                                Список проектов
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
