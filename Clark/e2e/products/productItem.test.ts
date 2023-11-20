import {expect} from 'detox'

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have product visible', async () => {
    await waitFor(element(by.id('Products_list')))
      .toBeVisible()
      .withTimeout(5000)

    await expect(element(by.id('ProductItem_Mouse'))).toBeVisible();
    await element(by.id('ProductItem_Mouse')).tap()
    await waitFor(element(by.id('ProductItem_title')))
      .toExist()
      .withTimeout(8000);
    await expect(element(by.id('ProductItem_title'))).toBeVisible();
    await device.takeScreenshot('Products_single_product');
  });
});
