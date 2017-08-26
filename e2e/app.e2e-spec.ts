import { DiagnosisAIPage } from './app.po';

describe('diagnosis-ai App', () => {
  let page: DiagnosisAIPage;

  beforeEach(() => {
    page = new DiagnosisAIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
