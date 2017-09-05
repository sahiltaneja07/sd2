import { Sd2Page } from './app.po';

describe('sd2 App', () => {
  let page: Sd2Page;

  beforeEach(() => {
    page = new Sd2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
