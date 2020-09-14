import tech from '../../lib/Tech/tech';
export default {
  frontEnd: {
    title: 'Front-end',
    redWrapper: true,
    items: [
      tech.vanillaJs,
      tech.vue,
      tech.react,
      tech.webpack,
    ],
  },
  backEnd: {
    title: 'Back-end',
    redWrapper: false,
    items: [
      tech.node,
      tech.express,
      tech.wordpress,
      tech.mysqlPostgre,
      tech.mongo,
    ],
  },
  design: {
    title: 'Design',
    redWrapper: false,
    items: [
      tech.adobeXd,
      tech.adobePh,
      tech.adobeIl,
    ],
  },
};
