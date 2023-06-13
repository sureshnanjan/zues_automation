import { Page } from "@playwright/test";
import { HerokuHumePage } from "../PageObjects-TheInternet/HomePage";
import { HomePagewithInterface } from "../WebAppInterfaceImplementation/HomePageWithInterface";
export const environment = {
    url:"https://the-Internet.herokuapp.com/",
    target:"mobile"
}

function getEnvironment(params:string, page:Page) {
    switch (params) {
      case "mobile":
        return new HomePagewithInterface(page);
        break;
      case "desktop":
        return new HerokuHumePage(page);
        break;
      default:
        throw new Error(`Invalid environment: ${params}`);
    }
  }