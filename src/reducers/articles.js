const articleMock = {
    '987654': {
        articleTitle: 'Lorem ipsum - article one',
        articleContent:
            'Lorem ipsum dolor sit amet, posse blandit vix id, velit nostrum delicatissimi ex ius. Nec odio idque ea. Possit conceptam ius at, no numquam eleifend pri, duo bonorum definiebas ex.'
    },
    '123456': {
        articleTitle: 'Lorem ipsum - article two',
        articleContent:
            'Posse movet reformidans vix no, mel te affert contentiones. Facilisi reprimique constituam ne vim, eu mea nostro fuisset intellegebat, in has veniam alterum. Vel sint luptatum phaedrum ea, blandit definiebas ad ius.'
    }
};

const article = (state = articleMock, action) => {
    switch (action.type) {
        case 'RETURN_ALL_ARTICLES':
            return Object.assign({}, state);
        default:
            return state;
    }
};
export default article;
