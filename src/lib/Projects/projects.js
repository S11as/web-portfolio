import tech from '../Tech/tech';
export default {
  pexBots: {
    img: require('./img/pexbots/pexbots_prev.png'),
    images: [require('./img/pexbots/pexbots1.png'),
      require('./img/pexbots/pexbots2.png'),
      require('./img/pexbots/pexbots3.png'),
      require('./img/pexbots/pexbots4.png'),
      require('./img/pexbots/pexbots5.png')],
    category: 'My own project',
    description: {
      preview: 'Wonderful provider of game bots',
      title: 'Pex Bots',
      info: 'Pex bots is my favourite project. I love games and ' +
        'its cool when some of them can be automated. This is website ' +
        'where I share with the world my personal automation solutions. '+
        'This project was pretty interesting due to Python integration',
    },
    title: 'Pex Bots',
    link: '/project/pexBots',
    innerLink: 'http://pexbots.com/',
    stack: {
      frontEnd: {
        title: 'Front End',
        items: [
          tech.vue,
          tech.css,
          tech.webpack,
        ],
      },
      backEnd: {
        title: 'Back End',
        items: [
          tech.node,
          tech.express,
          tech.mongo,
        ],
      },
      design: {
        title: 'Design',
        items: [
          tech.adobePh,
          tech.adobeIl,
        ],
      },
    },
  },
  vintik: {
    img: require('./img/vintik/vintik_prev.png'),
    images: [require('./img/vintik/vintik1.png'),
      require('./img/vintik/vintik2.png'),
      require('./img/vintik/vintik3.png'),
      require('./img/vintik/vintik4.png'),
      require('./img/vintik/vintik5.png')],
    category: 'Commercial project',
    description: {
      preview: 'Business card website',
      title: 'Vintik',
      info: 'Information site for automobile workshop. Has minimum ' +
        'functionality but nice animations and content. Good way to attract ' +
        'new clients.',
    },
    title: 'Vintik',
    link: '/project/vintik',
    stack: {
      frontEnd: {
        title: 'Front End',
        items: [
          tech.vanillaJs,
          tech.css,
          tech.webpack,
        ],
      },
      backEnd: {
        title: 'Back End',
        items: [
          tech.wordpress,
          tech.mysqlPostgre,
        ],
      },
      design: {
        title: 'Design',
        items: [
          tech.adobePh,
        ],
      },
    },
  },
};
