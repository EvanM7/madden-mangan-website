export type Area = {
  slug: string;
  name: string;
  county: string;
  title: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubhead: string;
  intro: string[];
  servicesHighlighted: string[];
  localContext: string[];
  relatedProjectSlugs: string[];
  image: string;
  imageAlt: string;
};

export const areas: Area[] = [
  {
    slug: "killarney",
    name: "Killarney",
    county: "Co. Kerry",
    title: "Builders in Killarney | Madden & Mangan Construction",
    metaDescription:
      "Building contractors, roofers and conservation specialists working in Killarney, Co. Kerry. Heritage experience inside the Muckross Estate and Killarney National Park.",
    heroHeadline: "Builders & conservation contractors in Killarney",
    heroSubhead:
      "From new build homes to protected structures inside Killarney National Park — a Kerry-based team working on projects across the Killarney area.",
    intro: [
      "Killarney has long been one of our regular patches. The town sits a short drive from our base in Castleisland, and we work across the wider Killarney area on everything from private new builds to sensitive heritage restorations.",
      "Projects within the Muckross Estate and Killarney National Park have given the team deep experience of conservation work in the area. We know what is expected on protected structures and are used to coordinating with conservation architects, engineers and the relevant authorities.",
    ],
    servicesHighlighted: [
      "building-contractors",
      "roofing-slating",
      "restoration-conservation",
      "general-building-work",
    ],
    localContext: [
      "Heritage work is a particular strength in the Killarney area. We have carried out restoration projects on listed buildings within the Muckross Estate and worked on sensitive structures in the surrounding demesne, where materials and detailing have to match the original fabric of the building.",
      "Alongside the conservation work, we take on new build homes, extensions of existing facilities and commercial projects around Killarney town and out towards Fossa, Aghadoe, Lissivigeen and Muckross. Wherever a job sits in the area, we bring the same approach: proper site management, tidy work, and clear communication throughout.",
      "If you're planning a project in or around Killarney — a new home, a roof replacement, a heritage repair, or a larger build — we'd be glad to come out and take a look.",
    ],
    relatedProjectSlugs: [
      "muckross-glass-house",
      "muckross-gate-lodge",
      "derrycunnihy-church",
      "cottage-22-muckross",
    ],
    image: "https://picsum.photos/seed/mm-area-killarney/1600/1000",
    imageAlt:
      "Traditional stone building set against the Killarney mountains in Co. Kerry",
  },
  {
    slug: "tralee",
    name: "Tralee",
    county: "Co. Kerry",
    title: "Builders in Tralee | Madden & Mangan Construction",
    metaDescription:
      "Reliable building contractors, roofers and conservation specialists working in Tralee, Co. Kerry. Residential, commercial and heritage building work.",
    heroHeadline: "Builders & roofing contractors in Tralee",
    heroSubhead:
      "New builds, roofing, and general construction for homes and businesses across Tralee and the surrounding area.",
    intro: [
      "Tralee is on our doorstep — Castleisland sits just down the N21 — and the Tralee area is one we cover regularly for both residential and commercial work.",
      "Over the years we have taken on new builds, extensions to commercial properties, roof replacements and general building work for clients in and around the town.",
    ],
    servicesHighlighted: [
      "building-contractors",
      "roofing-slating",
      "general-building-work",
      "restoration-conservation",
    ],
    localContext: [
      "Tralee and its surrounding townlands are a broad area to work across — from the centre of the town out to Ballyard, Oakpark, Boherbee, Ballymullen and the wider Spa/Fenit road. Every kind of property has its own character and we tailor the approach to suit, whether that's a tight urban site or a rural build outside the town.",
      "The shared short drive between Castleisland and Tralee makes logistics straightforward: the team can be on site early, deliveries arrive on schedule, and we are close enough to respond quickly if something comes up mid-project.",
      "For commercial clients, we are comfortable working around trading hours to keep disruption to a minimum. For private clients, we take the time to walk through the project properly before work starts.",
    ],
    relatedProjectSlugs: ["muckross-gate-lodge"],
    image: "https://picsum.photos/seed/mm-area-tralee/1600/1000",
    imageAlt: "Buildings in Tralee town centre on a clear day",
  },
  {
    slug: "castleisland",
    name: "Castleisland",
    county: "Co. Kerry",
    title: "Builders in Castleisland | Madden & Mangan Construction",
    metaDescription:
      "Madden & Mangan Construction Ltd is based in Castleisland, Co. Kerry. Local building contractors for new builds, roofing, extensions and general building work.",
    heroHeadline: "Your local builder in Castleisland",
    heroSubhead:
      "Madden & Mangan Construction Ltd is based in Castleisland and has been working throughout the town and surrounding parishes for years.",
    intro: [
      "Castleisland is home. The company is based on the Tralee Road just outside the town, and a large part of our work is for clients right here in Castleisland and the surrounding parishes.",
      "Being local matters. We know the town, the people and the area, and we take real pride in the work we do on our own patch.",
    ],
    servicesHighlighted: [
      "building-contractors",
      "roofing-slating",
      "general-building-work",
      "restoration-conservation",
    ],
    localContext: [
      "From new build homes outside the town to roofing work on Main Street and general building jobs across the parish, we've worked on every kind of project Castleisland has to offer. A lot of our work comes through word of mouth — neighbours, family and past clients passing our name on.",
      "We also cover the surrounding townlands and parishes — Scartaglin, Currow, Cordal, Brosna, Knocknagoshel, Farranfore and beyond. Wherever the job is, we'll come out for a chat and give you straight answers.",
      "If you're in Castleisland and have a project in mind — big or small — pick up the phone. We're just around the corner.",
    ],
    relatedProjectSlugs: [],
    image: "https://picsum.photos/seed/mm-area-castleisland/1600/1000",
    imageAlt: "The main street in Castleisland, Co. Kerry",
  },
  {
    slug: "listowel",
    name: "Listowel",
    county: "Co. Kerry",
    title: "Builders in Listowel | Madden & Mangan Construction",
    metaDescription:
      "Building contractors working in Listowel, Co. Kerry. Residential and commercial new builds, roofing and general building work across North Kerry.",
    heroHeadline: "Builders in Listowel & North Kerry",
    heroSubhead:
      "New builds, roofing and general building work for homes and businesses in Listowel and the wider North Kerry area.",
    intro: [
      "Listowel is well within our working patch. We regularly take on projects in the town and across the wider North Kerry area, from private homes to roofing work and commercial jobs.",
      "Our base in Castleisland keeps the logistics simple — an easy run up through the countryside means early starts on site and a team that isn't travelling half the day to get there.",
    ],
    servicesHighlighted: [
      "building-contractors",
      "roofing-slating",
      "general-building-work",
    ],
    localContext: [
      "North Kerry has its own character — a good mix of traditional stone buildings, older farmhouses and newer homes — and the work reflects that. We've done everything from heritage roof repairs to full new builds in and around the Listowel area.",
      "The team is comfortable working in heritage settings where it's important to respect the character of the building, as well as on straightforward modern construction. Whatever the job, we bring the same focus on tidy sites and clear communication.",
      "If you're in Listowel, Ballybunion, Abbeyfeale (just across the border), Ballylongford, Moyvane or anywhere through North Kerry, get in touch and we'll arrange a site visit.",
    ],
    relatedProjectSlugs: [],
    image: "https://picsum.photos/seed/mm-area-listowel/1600/1000",
    imageAlt: "Traditional buildings in Listowel town, North Kerry",
  },
  {
    slug: "dingle",
    name: "Dingle",
    county: "Co. Kerry",
    title: "Builders in Dingle & the Dingle Peninsula | Madden & Mangan",
    metaDescription:
      "Building and conservation contractors working on the Dingle Peninsula, Co. Kerry. Traditional slate roofing, heritage restoration and new build homes.",
    heroHeadline: "Builders on the Dingle Peninsula",
    heroSubhead:
      "Heritage restoration, traditional slating and new build work across the Dingle Peninsula, Co. Kerry.",
    intro: [
      "The Dingle Peninsula is a special part of the country to work in. The landscape, the weather and the long tradition of stone buildings make for projects that need care, patience and the right traditional skills.",
      "We travel out from Castleisland to work on properties in Dingle town and across the peninsula, bringing experience in heritage slate roofing, stonework and sensitive restorations as well as modern new builds.",
    ],
    servicesHighlighted: [
      "restoration-conservation",
      "roofing-slating",
      "building-contractors",
      "general-building-work",
    ],
    localContext: [
      "Traditional buildings on the peninsula often call for natural slate roofing and lime-based stonework — both areas the team has strong experience in. Where a project needs to respect the original character of a building, we have the skills and patience to do the work properly.",
      "Alongside the conservation side, we also take on contemporary new builds on sites across the peninsula. The exposure to Atlantic weather makes for demanding conditions, and we detail roofs, walls and openings accordingly.",
      "If you have a project in Dingle, Ventry, Ballyferriter, Ballydavid, Lispole or anywhere out along Slea Head, we'd be glad to come take a look.",
    ],
    relatedProjectSlugs: ["derrycunnihy-church", "muckross-gate-lodge"],
    image: "https://picsum.photos/seed/mm-area-dingle/1600/1000",
    imageAlt: "Stone cottage on the Dingle Peninsula with Atlantic coastline behind",
  },
  {
    slug: "killorglin",
    name: "Killorglin",
    county: "Co. Kerry",
    title: "Builders in Killorglin & Mid-Kerry | Madden & Mangan",
    metaDescription:
      "Building contractors working in Killorglin and Mid-Kerry, Co. Kerry. New builds, roofing, conservation and general building work.",
    heroHeadline: "Builders in Killorglin & Mid-Kerry",
    heroSubhead:
      "New builds, roofing, conservation and general building work across Killorglin and the Mid-Kerry area.",
    intro: [
      "Killorglin and the wider Mid-Kerry area sit comfortably within our working patch. The drive from Castleisland through Farranfore to Killorglin is a familiar one, and the team regularly takes on projects in the town and surrounding area.",
      "From new build homes on rural sites to roofing work and restorations, the Mid-Kerry area covers a nice mix of work — and it's an area we enjoy being part of.",
    ],
    servicesHighlighted: [
      "building-contractors",
      "roofing-slating",
      "restoration-conservation",
      "general-building-work",
    ],
    localContext: [
      "The landscape around Killorglin, out towards Glenbeigh, Caragh Lake and the Iveragh Peninsula, has some beautiful building sites and plenty of older stone properties that benefit from proper, considered restoration work.",
      "We work with private clients, architects and engineers on projects in the area — whether that's a new home on a site overlooking the Laune, a re-roof on an older property, or a careful repair to a traditional cottage.",
      "If you have a project in Killorglin, Glenbeigh, Cromane, Caragh Lake, Beaufort or anywhere around Mid-Kerry, get in touch and we'll arrange a site visit.",
    ],
    relatedProjectSlugs: [],
    image: "https://picsum.photos/seed/mm-area-killorglin/1600/1000",
    imageAlt:
      "View of Killorglin town and the River Laune in Mid-Kerry",
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((area) => area.slug === slug);
}
