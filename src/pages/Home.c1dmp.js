// API Reference: https://www.wix.com/velo/reference/api-overview/introduction

import wixSeoFrontend from 'wix-seo-frontend';

$w.onReady(function () {
    // ——— SEO Home ———
    const title = "Irias Iron Works | Metal Railings & Ironwork | Boston & Massachusetts";
    const description = "Metal railings, staircases, gates & fire escapes in Boston and Massachusetts. Certified contractor. Custom fabrication. Free estimate.";
    const url = "https://iriasironworks.com";

    wixSeoFrontend.setTitle(title);
    wixSeoFrontend.setMetaTags([
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" }
    ]);

    // Datos estructurados (LocalBusiness) para Google
    const structuredData = [
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Irias Iron Works Services Inc",
            "description": "Custom metal railings, staircases, gates, fences and fire escapes in Boston and Massachusetts.",
            "url": url,
            "areaServed": [{ "@type": "City", "name": "Boston" }, { "@type": "State", "name": "Massachusetts" }],
            "priceRange": "$$",
            "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "08:00", "closes": "17:00" }
        }
    ];
    wixSeoFrontend.setStructuredData(structuredData);

    // Chat: se muestra según la configuración del elemento en el editor
    $w('#wixChat1').onViewportEnter(() => {});
});
