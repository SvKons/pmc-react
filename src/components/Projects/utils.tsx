export interface IProjects {
    id?: string | number;
    title?: string;
    imageSrc: string;
}

export const projectsData: IProjects[] = [
    {
        id: 1,
        title: 'АО ИОЭС АЭС Руппур',
        imageSrc: require('../ProjectsLink/img/project.jpg'),
    },
    {
        id: 2,
        title: 'ООО Энергоинновация Березовская ГРЭС',
        imageSrc: require('../ProjectsLink/img/berezovskay.jpg'),
    },
    {
        id: 3,
        title: 'ООО СК Русвелдинг Семаковское месторождение',
        imageSrc: require('../ProjectsLink/img/semakovskoe.jpg'),
    },
    {
        id: 4,
        title: 'ТОО Монтажник Жезказганская ТЭЦ',
        imageSrc: require('../ProjectsLink/img/jezkazganskay.jpg'),
    },
];
