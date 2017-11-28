import { RecipieBookPage } from './app.po';

describe('recipie-book App', function() {
  let page: RecipieBookPage;

  beforeEach(() => {
    page = new RecipieBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
