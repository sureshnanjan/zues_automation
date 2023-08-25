import { test, expect } from '@playwright/test';
import { GeoLocationPages } from '../PlaywrightImplementation/GeoLocationPage';

test('To verify the title of the page', async ({ page }) => {
    //TC to verify the title of the page
    const herokuAppGeoLoaction = new GeoLocationPages(page);
    await herokuAppGeoLoaction.goToExample();
    await herokuAppGeoLoaction.pageTitle('Geolocation');
});

test('To verify the sub-title of the page', async ({ page }) => {
    //TC to verify the sub-title of the page
    const herokuAppGeoLoaction = new GeoLocationPages(page);
    await herokuAppGeoLoaction.goToExample();
    await herokuAppGeoLoaction.pageTitle('Click the button to get your current latitude and longitude');
});

test('To verify the "Where am I" button on the page is clickable', async ({ page }) => {
    //TC to verify the "Where am I" button on the page is clickable
    const herokuAppGeoLoaction = new GeoLocationPages(page);
    await herokuAppGeoLoaction.goToExample();
    await herokuAppGeoLoaction.pageSubTitle('Click the button to get your current latitude and longitude');
});

test('To verify when clicked on "Where am I" button current Latitude is visible', async ({ page }) => {
    //TC to verify the "Where am I" button on the page is clickable
    const herokuAppGeoLoaction = new GeoLocationPages(page);
    await herokuAppGeoLoaction.goToExample();
    await herokuAppGeoLoaction.getCurrentLocation('Latitude');
});

test('To verify when clicked on "Where am I" button current Longitude is visible', async ({ page }) => {
    //TC to verify the "Where am I" button on the page is clickable
    const herokuAppGeoLoaction = new GeoLocationPages(page);
    await herokuAppGeoLoaction.goToExample();
    await herokuAppGeoLoaction.getCurrentLocation('Longitude');
});

test('To verify once Latitude/Longitude is visible, "Where am I" button is disabled', async ({ page }) => {
    //TC to verify the "Where am I" button on the page is clickable
    const herokuAppGeoLoaction = new GeoLocationPages(page);
    await herokuAppGeoLoaction.goToExample();
    await herokuAppGeoLoaction.getCurrentLocation('Longitude').toBeVisible()
    await herokuAppGeoLoaction.getCurrentLocation('Latitude').toBeVisible()
});

test('To verify "See it on Google" button is visible', async ({ page }) => {
    //TC to verify the "See it on Google" button is visible
    const herokuAppGeoLoaction = new GeoLocationPages(page);
    await herokuAppGeoLoaction.goToExample();
    await herokuAppGeoLoaction.getCurrentLocation('Longitude').tobeVisible();
    await herokuAppGeoLoaction.googleMaps().toBeVisible()
});

test('To verify "See it on Google" button is navigate user to google maps', async ({ page }) => {
    //TC to verify the "See it on Google" button is visible
    const herokuAppGeoLoaction = new GeoLocationPages(page);
    await herokuAppGeoLoaction.goToExample();
    await herokuAppGeoLoaction.getCurrentLocation('Longitude').tobeVisible();
    await herokuAppGeoLoaction.googleMaps()
});