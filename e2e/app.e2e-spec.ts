import { ExamAppPage } from './app.po';

describe('exam-app App', () => {
  let page: ExamAppPage;

  beforeEach(() => {
    page = new ExamAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
