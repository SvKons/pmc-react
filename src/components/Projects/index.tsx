import { motion, useScroll, useSpring } from 'framer-motion';
import { projectsData } from './utils';
import ProjectItem from '../ProjectsLink';
import './Projects.scss';

const Projects = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
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

            <div className="projects__list-container">
                <div className="projects__wrap-list">
                    {projectsData.map((data, index) => (
                        <ProjectItem key={index} data={data} />
                    ))}
                </div>
                <motion.div style={{ scaleX }} />
            </div>
        </>
    );
};

export default Projects;
