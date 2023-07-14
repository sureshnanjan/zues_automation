import { test, expect } from '@playwright/test';
import { HomePage } from '../PlaywrightImplementation/HomePage';
import { StatusCode } from '../PlaywrightImplementation/StatusCodeIPage';

/**To verify the Status Code link is clickable */
test('Click on the link text', async ({ page }) => {
    const Home = new HomePage(page);
    const Status = new StatusCode(page);
    test.setTimeout(200000);
    await Home.visit();
    Status.goto();
  });

/**To verify the Header text available on Status Code page */
test('Check header text', async ({ page }) => {
    const Status = new StatusCode(page);
    Status.checkHeading('Status Codes');
  });

test('Check the content of the page', async ({ page }) => {
    const Status = new StatusCode(page); 
    Status.checkContent('HTTP status codes are a standard set of numbers used to communicate from a web server to your browser to indicate the outcome of the request being made (e.g. Success, Redirection, Client Error, Server Error). For a complete list of status codes, go');
});

test('Check link available on the content', async ({ page }) => {
    const Status = new StatusCode(page); 
    Status.link('here');
});

test('Browser back on Status Details page', async ({ page }) => {
    const Status = new StatusCode(page);
    Status.goBacktoStatusPage();
});

test('Check the Status code link for 200 Status', async ({ page }) => {
    const Status = new StatusCode(page);
    Status.page200('200');
});

test('Check the link 200 Status Code Page and the content', async ({ page }) => {
    const Status = new StatusCode(page);
    Status.check200StatusCodePage('This page returned a 200 status code.');
});

test('Check the here link available on Status Code page', async ({ page }) => {
    const Status = new StatusCode(page);
    Status.linkOnStatusPage('here');
});

test('Check the Status code link for 404 Status', async ({ page }) => {
    const Status = new StatusCode(page);
    Status.page404('404');
});

test('Check the link 404 Status Code Page and the content', async ({ page }) => {
    const Status = new StatusCode(page);
    Status.check404StatusCodePage('This page returned a 404 status code.');
});

test('Check the here link available on Status Code page', async ({ page }) => {
    const Status = new StatusCode(page);
    Status.linkOnStatusPage('here');
});

test('Check the Status code link for 301 Status', async ({ page }) => {
    const Status = new StatusCode(page);
    Status.page301('301');
});

test('Check the link 301 Status Code Page and the content', async ({ page }) => {
    const Status = new StatusCode(page);
    Status.check301StatusCodePage('This page returned a 301 status code.');
});

test('Check the here link available on Status Code page', async ({ page }) => {
    const Status = new StatusCode(page);
    Status.linkOnStatusPage('here');
});

test('Check the Status code link for 500 Status', async ({ page }) => {
    const Status = new StatusCode(page);
    Status.page500('500');
});

test('Check the link 500 Status Code Page and the content', async ({ page }) => {
    const Status = new StatusCode(page);
    Status.check500StatusCodePage('This page returned a 500 status code.');
});

test('Check the here link available on Status Code page', async ({ page }) => {
    const Status = new StatusCode(page);
    Status.linkOnStatusPage('here');
});
