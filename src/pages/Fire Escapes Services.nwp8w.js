// Fire Escapes Services – SEO-optimized page
import wixSeoFrontend from 'wix-seo-frontend';

$w.onReady(function () {
    const title = "Fire Escape Repair Boston & MA | Inspection & Installation | Irias Iron Works";
    const description = "Fire escape repair, inspection & new construction in Boston and Massachusetts. Code-compliant steel fire escapes. Certified MA contractor. Free quote.";
    const url = "https://iriasironworks.com/fire-escapes-services";

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
            "name": "Fire Escape Repair, Inspection & Installation",
            "description": "Certified fire escape services in Boston and Massachusetts: repair, reinforcement, inspection, and new construction. Code-compliant steel fire escapes. MA and local fire safety regulations.",
            "provider": { "@type": "LocalBusiness", "name": "Irias Iron Works Services Inc" },
            "areaServed": [{ "@type": "City", "name": "Boston" }, { "@type": "State", "name": "Massachusetts" }],
            "serviceType": "Fire Escapes, Emergency Egress, Steel Fire Escape"
        }
    ];
    wixSeoFrontend.setStructuredData(structuredData);
});
