// next.config.js
module.exports = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/my-devops-portfolio/' : '',
    output: 'export',
};
