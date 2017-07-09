import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import falcor from 'falcor';
import falcorExpress from 'falcor-express';
import falcorRouter from 'falcor-router';
import routes from './routes.js';

const app = express();
app.server = http.createServer(app);

// CORS - 3rd party middleware
app.use(cors());

// This is required by falcor-express middleware to work correctly
//with falcor-browser
app.use(bodyParser.json({ extended: false }));

let cache = {
  articles: [
    {
      id: 987654,
      articleTitle: 'Article one',
      articleContent:
        'Lorem ipsum dolor sit amet, posse blandit vix id, velit nostrum delicatissimi ex ius. Nec odio idque ea. Possit conceptam ius at, no numquam eleifend pri, duo bonorum definiebas ex.'
    },
    {
      id: 123456,
      articleTitle: 'Article two from backend',
      articleContent:
        'Posse movet reformidans vix no, mel te affert contentiones. Facilisi reprimique constituam ne vim, eu mea nostro fuisset intellegebat, in has veniam alterum. Vel sint luptatum phaedrum ea, blandit definiebas ad ius.'
    }
  ]
};

var model = new falcor.Model({
  cache: cache
});

app.use(
  '/model.json',
  falcorExpress.dataSourceRoute((req, res) => {
    return new falcorRouter(routes);
  })
);
app.use(express.static('dist'));

app.get('/', (req, res) => {
  Article.find((err, articlesDocs) => {
    const myArticles = articlesDocs
      .map(articleItem => {
        return `<h2>${articleItem.articleTitle}</h2>
        ${articleItem.articleContent}`;
      })
      .join('<br/>');

    res.send(`<h1>Journal App Initial Application!</h1>
      ${myArticles}`);
  });
});

app.server.listen(process.env.PORT || 3000);
console.log(`Started on port ${app.server.address().port}`);
export default app;
