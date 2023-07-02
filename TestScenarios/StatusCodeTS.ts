import { test } from '@playwright/test';
import { HomePage } from '../PlaywrightImplementation/HomePage';
import { StatusCode } from '../PlaywrightImplementation/StatusCodeI';

test('Click on the link text', async ({ page }) => {
    const Homepage = new HomePage(page);
    test.setTimeout(200000);
    await Homepage.visit();
    StatusCode.goto();
  });

test('Check header text', async () => {
    StatusCode.checkheading();
  });

test('Check the content of the page', async () => {
    StatusCode.checkcontent();
});

test('Check link available on the content', async () => {
    StatusCode.link();
});

test('Browser back on Status Details page', async () => {
    StatusCode.goBacktoStatusPage();
});

test('Check the Status code link for 200 Status', async () => {
    StatusCode.page200();
});

test('Check the link 200 Status Code Page and the content', async () => {
    StatusCode.check200StatusCodePage();
});

test('Check the here link available on Status Code page', async () => {
    StatusCode.linkOnStatusPage();
});

test('Check the Status code link for 404 Status', async () => {
    StatusCode.page404();
});

test('Check the link 404 Status Code Page and the content', async () => {
    StatusCode.check404StatusCodePage();
});

test('Check the here link available on Status Code page', async () => {
    StatusCode.linkOnStatusPage();
});

test('Check the Status code link for 301 Status', async () => {
    StatusCode.page301();
});

test('Check the link 301 Status Code Page and the content', async () => {
    StatusCode.check301StatusCodePage();
});

test('Check the here link available on Status Code page', async () => {
    StatusCode.linkOnStatusPage();
});

test('Check the Status code link for 500 Status', async () => {
    StatusCode.page500();
});

test('Check the link 500 Status Code Page and the content', async () => {
    StatusCode.check500StatusCodePage();
});

test('Check the here link available on Status Code page', async () => {
    StatusCode.linkOnStatusPage();
});
