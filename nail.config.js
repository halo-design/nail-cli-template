module.exports = () => {
  const isProd = process.env.NODE_ENV === 'production';
  const prefix = isProd ? 'production.min' : 'development';

  return {
    proxyTable: {
      '/data': {
        target: 'https://www.example.com',
        changeOrigin: true,
      },
    },
    eslintExtend: 'prettier',
    autoOpenBrowser: true,
    lintOnSave: true,
    pwa: true,
    productionSourceMap: false,
    cdn: {
      prodUrl: 'https://cdn.bootcss.com/:name/:version/:path',
      modules: {
        react: [
          {
            name: 'react',
            var: 'React',
            path: `umd/react.${prefix}.js`,
          },
          {
            name: 'react-dom',
            var: 'ReactDOM',
            path: `umd/react-dom.${prefix}.js`,
          },
        ],
      },
    },
  };
};
