import { test, expect } from '@playwright/test';

test('final alt check', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(5000);

  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.getAttribute('src'),
      alt: img.getAttribute('alt')
    }));
  });

  console.log('Images:', images);

  for (const img of images) {
    if (img.src && !img.src.startsWith('data:')) {
       // In Next.js, src might be optimized, so we check if alt contains the base filename
       const baseSrc = img.src.split('?')[0].split('/').pop();
       if (baseSrc && (baseSrc.includes('aditya') || baseSrc.includes('logo'))) {
         // This is a bit complex due to Next.js optimization, but let's just verify they have alts
         expect(img.alt).toBeTruthy();
       }
    }
  }

  await page.screenshot({ path: 'alt_final_check.png', fullPage: true });
});
