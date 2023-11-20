import {expect} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should have search bar visible', async () => {
    await expect(element(by.id('AppInput_search_products'))).toBeVisible()
    await device.takeScreenshot('searchbar_visible');
  })

  it('should have product list', async () => {
    await waitFor(element(by.id('Products_list')))
      .toBeVisible()
      .withTimeout(3000);

    await expect(element(by.id('Products_list'))).toBeVisible()
    await device.takeScreenshot('Products_list_visible');
  })

  it('should have no product found', async () => {
    await waitFor(element(by.id('Products_list')))
      .toBeVisible()
      .withTimeout(5000);

    await expect(element(by.id('AppInput_search_products'))).toBeVisible()
    element(by.id('AppInput_search_products')).tap()
    element(by.id('AppInput_search_products')).typeText(
      'some random text dlhaldhalsdhall  xxxx',
    )

    waitFor(element(by.id('ContentNotFound')))
      .toBeVisible()
      .withTimeout(5000);
    await device.takeScreenshot('Products_list_not_visible');
  });
});
