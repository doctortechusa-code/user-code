// Staircases – SEO-optimized page
import wixSeoFrontend from 'wix-seo-frontend';

$w.onReady(function () {
    const title = "Custom Metal Staircases Boston & MA | Spiral & Floating Stairs | Irias Iron Works";
    const description = "Custom metal staircases in Boston and Massachusetts. Spiral, floating & helical. Architectural fabrication. Free estimate.";
    const url = "https://iriasironworks.com/staircases";

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
            "@type": "Service",
            "name": "Custom Metal Staircases & Architectural Stairs",
            "description": "High-end metal staircases for Boston and Massachusetts. Floating, spiral, straight-run and helical. Residential and commercial. Structural integrity and premium design.",
            "provider": { "@type": "LocalBusiness", "name": "Irias Iron Works Services Inc" },
            "areaServed": [{ "@type": "City", "name": "Boston" }, { "@type": "State", "name": "Massachusetts" }],
            "serviceType": "Metal Staircases, Spiral Stairs, Floating Stairs"
        }
    ];
    wixSeoFrontend.setStructuredData(structuredData);
});
