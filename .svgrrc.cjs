/** @type {import('@svgr/core').Config} */
module.exports = {
  icon: true,
  typescript: true,
  prettier: true,
  svgo: true,
  svgProps: {
    stroke: 'currentColor',
    fill: 'none', 
  },
  svgoConfig: {
    plugins: [
      {
        name: 'removeAttrs',
        params: {
          attrs: '(fill|stroke)', // ❗️Видаляє жорстко задані кольори
        },
      },
      {
        name: 'removeDimensions', // ❗️Щоб svg можна було задавати через width/height ззовні
        active: true,
      },
    ],
  },
};
