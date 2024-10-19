import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Projects from '../../components/Projects';

const ProjectsPage = () => {
    return (
        <div className="page-container-scroll">
            <Header bg={'header__bg'} />
            <div className="scroll-container">
                <Projects />
                <Footer />
            </div>
        </div>
    );
};

export default ProjectsPage;
