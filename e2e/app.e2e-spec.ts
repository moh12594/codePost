import { CodePostPage } from './app.po';

describe('code-post App', () => {
  let page: CodePostPage;

  beforeEach(() => {
    page = new CodePostPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
