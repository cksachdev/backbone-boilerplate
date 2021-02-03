`npm i` followed by

```
npm run start:dev
```

Note to self:
To use Webpack 5, target needs to be defined:
https://webpack.js.org/configuration/target/#target

```target: process.env.NODE_ENV === "development" ? "web" : "browserslist",

```

https://github.com/webpack/webpack-dev-server/issues/2758
postcss integration:
https://github.com/robertguss/webpack-5-fundamentals-course/tree/5-post-css
