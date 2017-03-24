import { TuknalPage } from './app.po';

describe('tuknal App', function() {
  let page: TuknalPage;

  beforeEach(() => {
    page = new TuknalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
