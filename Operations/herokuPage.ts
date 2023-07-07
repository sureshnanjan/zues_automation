import { Page } from 'playwright';

export interface HerokuPage {
  navigateTo: (url: string) => Promise<void>;
  waitForExitIntentOverlay: () => Promise<void>;
  isExitIntentOverlayVisible: () => Promise<boolean>;
}

export const createHerokuPage = (page: Page): HerokuPage => {
  const navigateTo = async (url: string) => {
    await page.goto(url);
  };

  const waitForExitIntentOverlay = async () => {
    await page.waitForSelector('.exit-intent-overlay');
  };

  const isExitIntentOverlayVisible = async () => {
    return await page.isVisible('.exit-intent-overlay');
  };

  return {
    navigateTo,
    waitForExitIntentOverlay,
    isExitIntentOverlayVisible,
  };
};
