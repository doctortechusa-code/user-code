import wixSeoFrontend from 'wix-seo-frontend';

$w.onReady(function () {
    // SEO por defecto del sitio (cada página puede sobrescribir con setTitle/setMetaTags)
    const siteTitle = "Irias Iron Works | Metal Railings & Ironwork Contractor | Massachusetts";
    const siteDescription = "Custom metal railings, staircases, security gates, fences & fire escapes in Massachusetts. Certified contractor. Irias Iron Works Services Inc.";

    wixSeoFrontend.setTitle(siteTitle);
    wixSeoFrontend.setMetaTags([
        { name: "description", content: siteDescription },
        { property: "og:site_name", content: "Irias Iron Works Services Inc" },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "en_US" }
    ]);
});
