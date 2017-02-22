import { NexgenAngularAppPage } from './app.po';

describe('nexgen-angular-app App', () => {
  let page: NexgenAngularAppPage;

  beforeEach(() => {
    page = new NexgenAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
