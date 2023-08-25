import { IGeoLocation } from "../Operations/geoLocationPO";
import { expect, Locator, Page } from '@playwright/test';

export class GeoLocationPages implements IGeoLocation {

    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    async goToExample(): Promise<void> {
      // To login and navigate to the geo location page
      }
  
    async getCurrentLocation():  Promise<void> {
    // To check the current loaction the user is at
    }
  
    async pageTitle():  Promise<void> {
      // To check the page title of the page
      }

    async pageSubTitle():  Promise<void> {
      // To check the page title of the page
      }

    async googleMaps():  Promise<void> {
      // To check the page title of the page
      }
  }