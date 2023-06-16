import{test} from '@playwright/test'
import { HerokuHomePage } from '../PageObjects/HerokuHomePage'
import { AddRemoveElements } from '../PageObjects/AddRemoveElements'
import { Checkboxes } from '../PageObjects/Checkboxes'
import { ContextMenu } from '../PageObjects/ContextMenu'
import { DragNDrop } from '../PageObjects/DragNDrop'
import { Dropdown } from '../PageObjects/Dropdown'
import { DynamicControls } from '../PageObjects/DynamicControls'
import { FileUpload } from '../PageObjects/FileUpload'

test.describe('Heroku Home Page',async () => {
    test('Check Heading of the Heroku home page', async ({page}) => {
        const heroku = new HerokuHomePage(page)
        await heroku.visit()
        await heroku.checkHeading("Welcome to the-internet")
    })

    test('Check Sub Heading of the Heroku home page', async ({page}) => {
        const heroku = new HerokuHomePage(page)
        await heroku.visit()
        await heroku.checkSubHeading("Available Examples")
    })

    test('Check if there are 44 links on Heroku home page', async ({page}) => {
        const heroku = new HerokuHomePage(page)
        await heroku.visit()
        await heroku.checkCountOfLinks(44)
    })

    test('Go to an example', async ({page}) => {
        const heroku = new HerokuHomePage(page)
        await heroku.visit()
        await heroku.goToExample('A/B Testing')
    })
})

test.describe(' Add Remove Elements', async () => {
    test('Adding 5 elements works', async ({page}) => {
        const heroku = new HerokuHomePage(page)
        const addRemove = new AddRemoveElements(page)
        const count = 5
        await heroku.visit()
        await heroku.goToExample('Add/Remove Elements')
        await addRemove.checkHeading()
        await addRemove.clickAddElement(count)
        await addRemove.countOfDeleteButton(count)
    })

    test('Deleting 5 elements works', async ({page}) => {
        const heroku = new HerokuHomePage(page)
        const addRemove = new AddRemoveElements(page)
        const count = 5
        await heroku.visit()
        await heroku.goToExample('Add/Remove Elements')
        await addRemove.checkHeading()
        await addRemove.clickAddElement(count)
        await addRemove.countOfDeleteButton(count)
        await addRemove.clickDeleteButton(count)
        await addRemove.countOfDeleteButton(0)
    })
})

test.describe('Checkboxes',async () => {
    test('Verify both Checkboxes are checked', async ({page}) => {
        const heroku = new HerokuHomePage(page)
        const checkbox = new Checkboxes(page)
        await heroku.visit()
        await heroku.goToExample('Checkboxes')
        await checkbox.checkHeading('Checkboxes')
        await checkbox.clickCheckbox('checkbox 1')
        await checkbox.getCheckboxState()
    });

    test('Verify checkbox 1 is checked but Checkbox 2 is not', async ({page}) => {
        const heroku = new HerokuHomePage(page)
        const checkbox = new Checkboxes(page)
        await heroku.visit()
        await heroku.goToExample('Checkboxes')
        await checkbox.checkHeading('Checkboxes')
        await checkbox.clickCheckbox('checkbox 1')
        await checkbox.clickCheckbox('checkbox 2')
        await checkbox.getCheckboxState()
    })
})

test('Check right clicking the context menu displays dialog box',async ({page}) => {
    const heroku = new HerokuHomePage(page)
    const context = new ContextMenu(page)
    await heroku.visit()
    await heroku.goToExample('Context Menu')
    await context.launchContextMenu()
    await context.verifyDialogMessage()
    await context.closeDialog()
})

test('Check Drag A to B works',async ({page}) => {
    const heroku = new HerokuHomePage(page)
    const dragNdrop = new DragNDrop(page)
    await heroku.visit()
    await heroku.goToExample('Drag and Drop')
    await dragNdrop.drag()
    await dragNdrop.verifyColumnName()
})

test('Select option from a dropdown',async ({page}) => {
    const heroku = new HerokuHomePage(page)
    const dropdown = new Dropdown(page)
    await heroku.visit()
    await heroku.goToExample('Dropdown')
    await dropdown.selectDropdownOption('1')
    await dropdown.verifySelectedOption('1')
})

test.describe('Dynamic Controls',async () => {
    test('Click Remove button and verify checkbox is removed',async ({page}) => {
        const heroku = new HerokuHomePage(page)
        const dynamic = new DynamicControls(page)
        await heroku.visit()
        await heroku.goToExample('Dynamic Controls')
        await dynamic.clickRemove()
        await dynamic.verifyText("It's gone!")
    });
    test('Click Add button and verify checkbox is added',async ({page}) => {
        const heroku = new HerokuHomePage(page)
        const dynamic = new DynamicControls(page)
        await heroku.visit()
        await heroku.goToExample('Dynamic Controls')
        await dynamic.clickRemove()
        await dynamic.verifyText("It's gone!")
        await dynamic.clickAdd()
        await dynamic.verifyText("It's back!")
    });
    test('Verify textbox is disabled',async ({page}) => {
        const heroku = new HerokuHomePage(page)
        const dynamic = new DynamicControls(page)
        await heroku.visit()
        await heroku.goToExample('Dynamic Controls')
        await dynamic.verifyDisabled()
    })
    test('Click Enable button and verify textbox is enabled',async ({page}) => {
        const heroku = new HerokuHomePage(page)
        const dynamic = new DynamicControls(page)
        await heroku.visit()
        await heroku.goToExample('Dynamic Controls')
        await dynamic.clickEnable()
        await dynamic.verifyEnabled()
        await dynamic.enterText()
    })
});

test('Click Enable button and verify textbox is enabled',async ({page}) => {
    const heroku = new HerokuHomePage(page)
    const contextMenu = new ContextMenu(page)
    await heroku.visit()
    await heroku.goToExample('Context Menu')
    await contextMenu.launchContextMenu()
    await contextMenu.verifyDialogMessage()
    await contextMenu.closeDialog()
})

test.describe('File Upload',async () => {
    test('Verify Heading of File Upload page',async ({page}) => {
        const herokuapp = new HerokuHomePage(page)
        const uploadOps = new FileUpload(page)
        await herokuapp.visit()
        await herokuapp.goToExample('File Upload')
        await uploadOps.verifyHeading('File Uploader')
    })

    test('Verify intitally no file is chosen',async ({page}) => {
        const herokuapp = new HerokuHomePage(page)
        const uploadOps = new FileUpload(page)
        await herokuapp.visit()
        await herokuapp.goToExample('File Upload')
        await uploadOps.verifyChosenFile('')
    })

    test('Verify internal server error shown when no file is chosen',async ({page}) => {
        const herokuapp = new HerokuHomePage(page)
        const uploadOps = new FileUpload(page)
        await herokuapp.visit()
        await herokuapp.goToExample('File Upload')
        await uploadOps.uploadFile()
        await uploadOps.verifyError()
        
    })

    test('Verify File chosen is a valid file',async ({page}) => {
        const herokuapp = new HerokuHomePage(page)
        const uploadOps = new FileUpload(page)
        await herokuapp.visit()
        await herokuapp.goToExample('File Upload')
        await uploadOps.chooseFile('C:\\Users\\rumi.shaikh\\Downloads\\sample-pdf.pdf')
        await uploadOps.verifyChosenFile('sample-pdf.pdf')
    })

    test('Verify file is uploaded successfully',async ({page}) => {
        const herokuapp = new HerokuHomePage(page)
        const uploadOps = new FileUpload(page)
        await herokuapp.visit()
        await herokuapp.goToExample('File Upload')
        await uploadOps.chooseFile('C:\\Users\\rumi.shaikh\\Downloads\\sample-pdf.pdf')
        await uploadOps.verifyChosenFile('sample-pdf.pdf')
        await uploadOps.uploadFile()
        await uploadOps.verifyUploadedFile('sometext')

    })

    // test.only('Verify multiples file are uploaded successfully',async ({page}) => {
    //     const herokuapp = new HerokuHomePage(page)
    //     const uploadOps = new FileUpload(page)
    //     await herokuapp.visit()
    //     await herokuapp.goToExample('File Upload')
    //     await uploadOps.chooseMultipleFiles(['C:\\Users\\rumi.shaikh\\Downloads\\sample-pdf.pdf', 'C:\\Users\\rumi.shaikh\\Downloads\\sample-pdf.pdf'])

    // })
})