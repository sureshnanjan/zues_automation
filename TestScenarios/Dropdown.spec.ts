import test from "@playwright/test";
import { Dropdown } from "../PlaywrightImplementation/Dropdown";
import { HomePage } from "../PlaywrightImplementation/HomePage";

test('Verify heading of Dropdown page', async({page}) => {
    const homepage = new HomePage(page)
    const dropdown = new Dropdown(page)
    await homepage.visit()
    await homepage.goToExample('Dropdown')
    await dropdown.checkHeading('Dropdown List')
})

test('Verify visibility of dropdown', async({page}) => {
    const homepage = new HomePage(page)
    const dropdown = new Dropdown(page)
    await homepage.visit()
    await homepage.goToExample('Dropdown')
    await dropdown.verifyVisibilityOfDropdown()
})

test('Verify placeholder text of dropdown', async({page}) => {
    const homepage = new HomePage(page)
    const dropdown = new Dropdown(page)
    await homepage.visit()
    await homepage.goToExample('Dropdown')
    await dropdown.checkPlaceholderTextOfDropdown('Please select an option')
})

test('Verify count of options in dropdown', async({page}) => {
    const homepage = new HomePage(page)
    const dropdown = new Dropdown(page)
    await homepage.visit()
    await homepage.goToExample('Dropdown')
    await dropdown.verifyOptionsCount(2)
})

test('Verify option can be selected from the dropdown', async({page}) => {
    const homepage = new HomePage(page)
    const dropdown = new Dropdown(page)
    await homepage.visit()
    await homepage.goToExample('Dropdown')
    await dropdown.selectOptionFromDropdown('Option 2')
})

test('Verify selected option in the dropdown', async({page}) => {
    const homepage = new HomePage(page)
    const dropdown = new Dropdown(page)
    await homepage.visit()
    await homepage.goToExample('Dropdown')
    await dropdown.selectOptionFromDropdown('Option 2')
    await dropdown.verifySelectedOptionFromDropdown('Option 2')
})