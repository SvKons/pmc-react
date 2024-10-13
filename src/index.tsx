import ReactDOM from 'react-dom/client';
import './styles/reset.scss';
import './styles/index.scss';
import './styles/variables.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import ContactsPage from './pages/ContactsPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: 'projects',
        element: <ProjectsPage />,
    },
    {
        path: 'services',
        element: <ServicesPage />,
    },
    {
        path: 'contacts',
        element: <ContactsPage />,
    },
]);

root.render(<RouterProvider router={routes} />);
