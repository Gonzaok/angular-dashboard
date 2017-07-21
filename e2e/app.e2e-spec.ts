import { AngularDashboardPage } from './app.po';

describe('angular-dashboard App', () => {
  let page: AngularDashboardPage;

  beforeEach(() => {
    page = new AngularDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
