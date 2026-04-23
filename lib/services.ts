export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  tagline: string;
  body: string[];
  includes: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "building-contractors",
    shortTitle: "Building Contractors",
    title: "Building Contractors in Kerry & Munster",
    tagline: "New builds, commercial construction & general contracting.",
    summary:
      "Residential and commercial construction across Kerry and Munster, including new build homes, commercial projects and general contracting.",
    body: [
      "Madden & Mangan Construction Ltd carries out a wide range of building work across Kerry and the wider Munster region. From new build homes and commercial projects through to general contracting, the team manages every stage of the build with a practical, hands-on approach.",
      "Work is delivered with a strong focus on quality, tidy site management and clear communication. We take the time to plan properly, involve the design team where relevant, and keep clients informed from initial site visit through to final sign-off.",
      "Experience across both traditional and modern construction methods means we can match the right approach to each project — whether that's a contemporary home, a commercial fit-out, or a new build that has to sit comfortably alongside an older property.",
    ],
    includes: [
      "New build homes and commercial properties",
      "General contracting and project management",
      "Site works, foundations and structural work",
      "Finishes and fit-out",
      "Coordination with architects and engineers",
      "Fixed-price or negotiated contracts",
    ],
    image: "https://picsum.photos/seed/mm-building-contractors/1600/1000",
    imageAlt:
      "Construction site with new-build residential property taking shape",
  },
  {
    slug: "roofing-slating",
    shortTitle: "Roofing & Slating",
    title: "Roofing & Slating Contractors, Kerry",
    tagline: "Traditional slating, roof repairs and specialist roof work.",
    summary:
      "Traditional slating, roof repairs, complete new roofs and specialist roofing work on heritage and protected buildings.",
    body: [
      "Roofing is one of the core areas of work for Madden & Mangan Construction Ltd. The team combines long-standing experience in traditional natural slate roofs with the skills needed for modern, weathertight roofing systems.",
      "From small repairs and storm damage through to complete re-roofs on period or modern properties, the focus is always on doing the job properly: clean detailing, durable materials, and roofs that will last.",
      "Slate and specialist roofing work on heritage and protected buildings is a particular strength. We work to conservation standards where required, matching original materials and techniques so the finished roof sits correctly with the character of the building.",
    ],
    includes: [
      "Traditional natural slate roofs",
      "Complete re-roofs (pitched and flat where relevant)",
      "Specialist heritage and conservation roofing",
      "Storm damage and leak repairs",
      "Ridge, valley, chimney and flashing work",
      "Fascia, soffit and gutter replacement",
    ],
    image: "https://picsum.photos/seed/mm-roofing-slating/1600/1000",
    imageAlt:
      "Traditional slate roof on a heritage building in the Irish countryside",
  },
  {
    slug: "restoration-conservation",
    shortTitle: "Restoration & Conservation",
    title: "Restoration & Conservation Specialists",
    tagline:
      "Heritage restoration delivered with RIAI Conservation Accredited architects.",
    summary:
      "Specialist heritage restoration and conservation projects carried out in close collaboration with RIAI Conservation Accredited architects.",
    body: [
      "Heritage restoration and conservation work is where the company's traditional craftsmanship really comes into its own. Projects within the Muckross Estate and Killarney National Park have given the team extensive experience on protected structures of real historical significance.",
      "We work regularly with RIAI Conservation Accredited architects and conservation professionals, following their guidance carefully to protect the integrity of the original fabric. Where traditional materials and techniques are required, we source and use them — and we take pride in doing so to a standard that matches the importance of the buildings involved.",
      "If you are responsible for a protected structure, a heritage property, or a building of local architectural interest, we'd be glad to talk through the work with you and your design team.",
    ],
    includes: [
      "Protected structures and heritage buildings",
      "Traditional lime render, mortar and stonework",
      "Natural slate and specialist roof restoration",
      "Sensitive repairs to original fabric",
      "Coordination with conservation architects",
      "Compliance with conservation guidance and consents",
    ],
    image: "https://picsum.photos/seed/mm-conservation-work/1600/1000",
    imageAlt:
      "Stone-built historic church undergoing careful restoration work",
  },
  {
    slug: "general-building-work",
    shortTitle: "General Building Work",
    title: "General Building Work, Kerry & Munster",
    tagline: "Day-to-day building, alterations and improvement works.",
    summary:
      "Dependable day-to-day construction services for a wide range of building needs across Munster, from repairs and alterations to larger improvement works.",
    body: [
      "Not every project is a new build or a heritage restoration — a lot of our work is the everyday building needs that private clients, businesses and public bodies rely on. Madden & Mangan Construction Ltd handles this type of work with the same standards we apply to bigger projects.",
      "Whether it's a repair, a set of alterations, improvement works or a small commercial job, we'll come out, take a proper look, and give you honest advice on the best way to handle it.",
      "We're happy to work on a fixed quote or a more flexible basis depending on the scope of the work and what makes sense for the client.",
    ],
    includes: [
      "Internal and external alterations",
      "Building repairs and improvement works",
      "Garden walls, drives and external works",
      "Small commercial building jobs",
      "Insurance reinstatement works",
      "Bespoke one-off projects",
    ],
    image: "https://picsum.photos/seed/mm-general-building/1600/1000",
    imageAlt: "Tradespeople carrying out building works on a residential property",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
