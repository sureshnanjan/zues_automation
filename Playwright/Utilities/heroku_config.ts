import { HerokuHumePage } from "../PageObjects-TheInternet/HomePage";
import { HomePagewithInterface } from "../InterfaceImplementation-theInternet/HomePageWithInterface";
export const environment = {
    url:"https://the-Internet.herokuapp.com/",
    target:"mobile"
}

// function getEnvironment() {
//     switch (params) {
//         case "mobile":
//             return new HomePagewithInterface();
//             break;
//         case "desktop":
//             return new HerokuHumePage();
//             break;
//         default:
//             break;
//     }
// }