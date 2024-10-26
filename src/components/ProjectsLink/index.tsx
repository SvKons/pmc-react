import { useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IProjects } from '../Projects/utils';

interface ProjectItemProps {
    data: IProjects;
}

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const ProjectItem = ({ data }: ProjectItemProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 200);

    return (
        <section className="scroll">
            <div className="projects__item">
                <img src={data.imageSrc} alt={data.title} width="100%" height="100%" />
                <Link to="#" className="projects__link ">
                    <span className="projects__title ">{data.title}</span>
                </Link>
            </div>
            <motion.h2 style={{ y }}></motion.h2>
        </section>
    );
};

export default ProjectItem;
