import falcor from 'falcor';
import FalcorDataSource from 'falcor-http-datasource';

let cache = {
  articles: [
    {
      articleId: '987654',
      articleTitle: 'Lorem ipsum - article one',
      articleContent:
        'Lorem ipsum dolor sit amet, posse blandit vix id, velit nostrum delicatissimi ex ius. Nec odio idque ea. Possit conceptam ius at, no numquam eleifend pri, duo bonorum definiebas ex.'
    },
    {
      articleId: '123456',
      articleTitle: 'Lorem ipsum - article two',
      articleContent:
        'Posse movet reformidans vix no, mel te affert contentiones. Facilisi reprimique constituam ne vim, eu mea nostro fuisset intellegebat, in has veniam alterum. Vel sint luptatum phaedrum ea, blandit definiebas ad ius.'
    }
  ]
};

const model = new falcor.Model({
  cache: cache
});
export default model;
