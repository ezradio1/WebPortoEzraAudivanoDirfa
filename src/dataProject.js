import Akb from './assets/project/akb.png';
import Imo from './assets/project/imoov.png';
import Ikdki from './assets/project/ikdki.png';
import Sisra from './assets/project/sisra.png';

const data = [
  {
    id: 4,
    title: 'Sistem Rapat',
    content:
      'This website is an information system used by the Department of Architecture at Atma Jaya University Yogyakarta to make it easier for them to collect data when holding a meeting. There are several features such as: employee data management, guest data management, team management, meeting management, meeting room management, and search features by meeting name, minute meeting, and meeting conclusions. In the meeting feature, there are submenus such as meeting details, minute meeting, meeting documents, and meeting conclusions and assignments.',
    built: 'React JS, Antd, Semantic UI, Bootstrap',
    url: 'https://arsi.ezraaudivano.com',
    img: Sisra,
  },
  {
    id: 3,
    title: 'Ikatan Dosen Katolik Indonesia',
    content:
      'This website is an information system used by Catholic lecturer organizations throughout Indonesia to collect data on the system. There are several features, namely: member registration, verification of member acceptance, data search, lecturer journals, lecturer community service, lecturer publications, and lecturer teaching. In addition, there is also reporting that displays various kinds of graphs, what is special is that there is a map of Indonesia that represents the location of the member.',
    built: 'React JS, Antd',
    url: 'https://ikdki.ezraaudivano.com/',
    img: Ikdki,
  },
  {
    id: 2,
    title: 'Sistem Informasi AKB Restaurant',
    content:
      'The website can be used by employees and owners at the restaurant to simplify business processes that occur. The features contained on the website include: employee management, table management, customer management, transaction management, reservation management, menu management, food ingredients management, and generating restaurant reports. Each management has its own access rights for each employee.',
    built: 'React JS, Antd, Laravel, MySql',
    url: 'www.akbrestaurant.ezraaudivano.com',
    img: Akb,
  },
  {
    id: 1,
    title: 'iMoovie',
    content:
      'This website is a system that displays a list of movies and games. This project was done while working on the final React JS project from Sanbercode. On this website the user can also see the details of each item. By using the API created by Sanbercode.',
    built: 'React JS, Antd',
    url: 'www.imoov.netlify.app',
    img: Imo,
  },
];

export default data;
