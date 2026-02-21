// Custom Railings – SEO-optimized page
import wixSeoFrontend from 'wix-seo-frontend';

$w.onReady(function () {
    const title = "Custom Metal Railings Boston & MA | Handrails & Guardrails | Irias Iron Works";
    const description = "Custom metal railings & handrails in Boston and Massachusetts. Interior & exterior, cable & wrought iron. MA code-compliant. Free estimate.";
    const url = "https://iriasironworks.com/custom-railings";

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
            "name": "Custom Metal Railings & Handrails",
            "description": "Design, fabrication and installation of custom metal railings for Boston and Massachusetts. Interior and exterior handrails, guardrails, cable and wrought iron. MA building code compliant.",
            "provider": { "@type": "LocalBusiness", "name": "Irias Iron Works Services Inc" },
            "areaServed": [{ "@type": "City", "name": "Boston" }, { "@type": "State", "name": "Massachusetts" }],
            "serviceType": "Metal Railings, Handrails, Guardrails"
        }
    ];
    wixSeoFrontend.setStructuredData(structuredData);
});
