import sitemap from '@astrojs/sitemap';

/**
 * Wrapper for @astrojs/sitemap that handles cases where routes might be undefined
 * This prevents build failures when the sitemap integration encounters undefined routes
 */
export default function sitemapWrapper(options = {}) {
  const sitemapIntegration = sitemap(options);
  const originalHook = sitemapIntegration.hooks?.['astro:build:done'];
  
  return {
    ...sitemapIntegration,
    hooks: {
      ...sitemapIntegration.hooks,
      'astro:build:done': async (context) => {
        try {
          // Wrap the original hook in a try-catch to prevent build failures
          if (originalHook) {
            await originalHook(context);
          }
        } catch (error) {
          // Log the error but don't fail the build
          // This handles the case where _routes is undefined in the sitemap package
          if (error.message?.includes('Cannot read properties of undefined') || 
              error.message?.includes('reduce')) {
            console.warn('[sitemap-wrapper] Sitemap generation skipped due to missing routes:', error.message);
          } else {
            // Re-throw unexpected errors
            throw error;
          }
        }
      },
    },
  };
}
