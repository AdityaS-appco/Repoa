# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: verify_alt.spec.ts >> final alt check
- Location: verify_alt.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "http://localhost:3000/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  |
  3  | test('final alt check', async ({ page }) => {
> 4  |   await page.goto('http://localhost:3000');
     |              ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  5  |   await page.waitForTimeout(5000);
  6  |
  7  |   const images = await page.evaluate(() => {
  8  |     return Array.from(document.querySelectorAll('img')).map(img => ({
  9  |       src: img.getAttribute('src'),
  10 |       alt: img.getAttribute('alt')
  11 |     }));
  12 |   });
  13 |
  14 |   console.log('Images:', images);
  15 |
  16 |   for (const img of images) {
  17 |     if (img.src && !img.src.startsWith('data:')) {
  18 |        // In Next.js, src might be optimized, so we check if alt contains the base filename
  19 |        const baseSrc = img.src.split('?')[0].split('/').pop();
  20 |        if (baseSrc && (baseSrc.includes('aditya') || baseSrc.includes('logo'))) {
  21 |          // This is a bit complex due to Next.js optimization, but let's just verify they have alts
  22 |          expect(img.alt).toBeTruthy();
  23 |        }
  24 |     }
  25 |   }
  26 |
  27 |   await page.screenshot({ path: 'alt_final_check.png', fullPage: true });
  28 | });
  29 |
```