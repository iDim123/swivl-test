import paginator, { addPrevPageAction, removePrevPageAction, resetPrevPagesAction } from './paginator';

const initialState = {
  currPageUrl: 'www',
  prevPagesUrl: ['aaa', 'ttt']
};

describe('Paginator reduser', () => {
  it('Add prev page', () => {
    expect(paginator(initialState, addPrevPageAction())).toEqual({
      currPageUrl: 'www',
      prevPagesUrl: ['aaa', 'ttt', 'www']
    });
  });
  it('Remove prev page', () => {
    expect(paginator(initialState, removePrevPageAction())).toEqual({
      currPageUrl: 'www',
      prevPagesUrl: ['aaa']
    });
  });
  it('Reset prev pages', () => {
    expect(paginator(initialState, resetPrevPagesAction())).toEqual({
      currPageUrl: 'www',
      prevPagesUrl: []
    });
  });
});