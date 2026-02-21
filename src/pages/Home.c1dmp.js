// API Reference: https://www.wix.com/velo/reference/api-overview/introduction

import wixSeoFrontend from 'wix-seo-frontend';

$w.onReady(function () {
    const title = "Irias Iron Works: MA's Elite Ironwork Contractor | Railings, Staircases, Gates";
    const description = "Precision metal railings, staircases, security gates & fire escapes in Massachusetts. Certified contractor. Custom fabrication & installation. Free estimate.";
    const url = "https://iriasironworks.com";

    wixSeoFrontend.setTitle(title);
    wixSeoFrontend.setMetaTags([
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" }
    ]);

    const structuredData = [
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Irias Iron Works Services Inc",
            "description": "Custom metal railings, architectural staircases, security gates, fences, and fire escape services in Massachusetts.",
            "url": url,
            "areaServed": { "@type": "State", "name": "Massachusetts" },
            "priceRange": "$$",
            "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "08:00", "closes": "17:00" }
        }
    ];
    wixSeoFrontend.setStructuredData(structuredData);

    $w('#wixChat1').onViewportEnter(() => {});
});