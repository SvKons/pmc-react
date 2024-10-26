import { motion, useScroll, useSpring } from 'framer-motion';
import { projectsData } from './utils';
import ProjectItem from '../ProjectsLink';
import './Projects.scss';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const Projects = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(prevIndex => Math.min(prevIndex + 1, projectsData.length - 4));
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        trackMouse: true,
    });

    return (
        <>
            <div className="projects-top">
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
            </div>

            <div className="projects__list-container" {...handlers}>
                <button className="projects__button projects__button--prev" onClick={handlePrev} disabled={currentIndex === 0}>
                    &#12296;
                </button>
                <motion.div className="projects__wrap-list" initial={{ x: 0 }} animate={{ x: -currentIndex * 25 + '%' }} transition={{ duration: 0.5 }}>
                    {projectsData.map((data, index) => (
                        <div className="projects__wrapper" key={index}>
                            <ProjectItem data={data} />
                        </div>
                    ))}
                </motion.div>
                <button className="projects__button projects__button--next" onClick={handleNext} disabled={currentIndex >= projectsData.length - 4}>
                    &#12297;
                </button>
                <motion.div style={{ scaleX }} />
            </div>
        </>
    );
};

export default Projects;
