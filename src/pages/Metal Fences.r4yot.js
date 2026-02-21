// Metal Fences – SEO-optimized page
import wixSeoFrontend from 'wix-seo-frontend';

$w.onReady(function () {
    const title = "Metal Fences Boston & Massachusetts | Steel & Iron | Irias Iron Works";
    const description = "Metal fences in Boston and Massachusetts. Steel, iron & aluminum for residential and commercial. Privacy, security, property lines. Free estimate.";
    const url = "https://iriasironworks.com/metal-fences";

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
            "name": "Metal Fencing & Perimeter Enclosures",
            "description": "Metal fence design and installation for Boston and Massachusetts. Residential and commercial. Decorative iron, aluminum, and steel for privacy and security.",
            "provider": { "@type": "LocalBusiness", "name": "Irias Iron Works Services Inc" },
            "areaServed": [{ "@type": "City", "name": "Boston" }, { "@type": "State", "name": "Massachusetts" }],
            "serviceType": "Metal Fences, Steel Fencing, Iron Fences"
        }
    ];
    wixSeoFrontend.setStructuredData(structuredData);
});
