import { test } from '@playwright/test';
import { UploadFilePage } from '../PlaywrightImplementation/UploadFilePage';

test('Upload file', async ({ page }) => {
  const uploadFilePage = new UploadFilePage(page);
  await uploadFilePage.goto();
  await uploadFilePage.chooseFile();
  await uploadFilePage.uploadFile();
});
