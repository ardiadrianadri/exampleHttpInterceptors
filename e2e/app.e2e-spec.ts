import { HttpinterceptorPage } from './app.po';

describe('httpinterceptor App', () => {
  let page: HttpinterceptorPage;

  beforeEach(() => {
    page = new HttpinterceptorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
