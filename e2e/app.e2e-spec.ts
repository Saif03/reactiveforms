import { ReactiveFormsTestPage } from './app.po';

describe('reactive-forms-test App', () => {
  let page: ReactiveFormsTestPage;

  beforeEach(() => {
    page = new ReactiveFormsTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
