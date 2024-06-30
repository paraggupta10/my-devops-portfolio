// next.config.js
module.exports = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/my-devops-portfolio/' : '',
    output: 'export',
//    output: {
      // Set the directory where the exported files will be placed
//      dir: 'docs', // Replace 'docs' with your desired output directory
//    },
};
