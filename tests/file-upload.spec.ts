import{test} from '@playwright/test'
import { HerokuHomePage } from '../PageObjects/HerokuHomePage'
import { FileUpload } from '../PageObjects/FileUpload'

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
        await uploadOps.verifyUploadedFile('sample-pdf.pdf')

    })
})