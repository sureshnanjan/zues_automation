import { Locator, LocatorScreenshotOptions } from "@playwright/test"

export interface IContextMenu{
    box: any
    launchContextMenu()
    verifyDialogMessage()
    closeDialog()
}