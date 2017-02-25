import { LiveCubingPage } from './app.po';

describe('live-cubing App', () => {
  let page: LiveCubingPage;

  beforeEach(() => {
    page = new LiveCubingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
