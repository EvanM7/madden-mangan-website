export type Project = {
  slug: string;
  title: string;
  location: string;
  shortDescription: string;
  summary: string;
  body: string[];
  image: string;
  imageAlt: string;
  details: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "muckross-glass-house",
    title: "Muckross Glass House",
    location: "Muckross, Killarney, Co. Kerry",
    shortDescription:
      "A specialist restoration and conservation project at one of Kerry's most recognised heritage sites.",
    summary:
      "Specialist restoration and conservation work at one of Kerry's most recognised heritage sites, carried out with careful craftsmanship and close attention to historical detail.",
    body: [
      "The Muckross Glass House sits within the grounds of the Muckross Estate in Killarney National Park, one of Kerry's most visited heritage destinations. Work on a building of this sensitivity required a specialist approach that respected both the fabric of the original structure and the wider setting of the estate.",
      "The project was carried out in close collaboration with conservation architects and heritage bodies, following traditional methods that matched the materials and techniques used in the original build. Every stage — from survey and preparation through to finishing — was planned to preserve the character of the glass house for future visitors and to make sure the structure remained weathertight and robust for years to come.",
      "Projects like Muckross Glass House are a good example of what Madden & Mangan Construction Ltd specialises in: quiet, careful, high-quality conservation work on buildings that deserve to be looked after properly.",
    ],
    image: "https://picsum.photos/seed/muckross-glass-house/1600/1000",
    imageAlt:
      "Historic Victorian-style glass house at Muckross Estate, Killarney",
    details: [
      { label: "Location", value: "Muckross Estate, Killarney, Co. Kerry" },
      { label: "Type of work", value: "Heritage restoration & conservation" },
      { label: "Setting", value: "Killarney National Park" },
    ],
  },
  {
    slug: "muckross-gate-lodge",
    title: "Muckross Gate Lodge",
    location: "Muckross, Killarney, Co. Kerry",
    shortDescription:
      "A sensitive restoration project on a protected structure within the Muckross Estate.",
    summary:
      "A sensitive restoration project on a protected structure within the Muckross Estate, carried out to the highest conservation standards.",
    body: [
      "The Gate Lodge is a protected structure within the Muckross Estate, a setting of significant historical and cultural importance. Conservation work on a building of this kind demands a careful, considered approach — one that protects the character of the original structure while ensuring it can continue to serve its purpose.",
      "Working alongside RIAI Conservation Accredited architects, the team carried out traditional building repairs, roofing and finishing work in keeping with the character of the lodge. Detailed planning was required to manage materials, site logistics and access within the wider estate, all while minimising disruption to the surrounding landscape.",
      "The result is a building that has been carefully preserved for future generations, finished to a standard that reflects both the significance of the site and the craftsmanship of those who built it originally.",
    ],
    image: "https://picsum.photos/seed/muckross-gate-lodge/1600/1000",
    imageAlt:
      "Stone-built heritage gate lodge on the Muckross Estate, Killarney",
    details: [
      { label: "Location", value: "Muckross Estate, Killarney, Co. Kerry" },
      { label: "Status", value: "Protected structure" },
      { label: "Type of work", value: "Conservation restoration" },
    ],
  },
  {
    slug: "derrycunnihy-church",
    title: "Derrycunnihy Church",
    location: "Killarney National Park, Co. Kerry",
    shortDescription:
      "A heritage restoration project on a historic church in Killarney National Park.",
    summary:
      "Heritage restoration work on a historic church, involving traditional building methods and specialist conservation techniques.",
    body: [
      "Derrycunnihy Church is a historic building set within Killarney National Park, surrounded by some of the most scenic landscape in the country. Restoration work on a building of this age and sensitivity required specialist techniques and a patient, methodical approach.",
      "The project involved traditional building methods, careful repair of original fabric and close collaboration with conservation professionals. The team drew on extensive experience of heritage and protected structures to deliver work that respects the integrity of the original church while making sure it is safe, sound and weathertight.",
      "Projects like Derrycunnihy are a reminder of the importance of proper conservation work — protecting the buildings that form part of the history and landscape of Kerry and keeping them standing for the people who come to see them.",
    ],
    image: "https://picsum.photos/seed/derrycunnihy-church/1600/1000",
    imageAlt:
      "Historic stone church in Killarney National Park, Co. Kerry",
    details: [
      { label: "Location", value: "Killarney National Park, Co. Kerry" },
      { label: "Type of work", value: "Heritage church restoration" },
      {
        label: "Approach",
        value: "Traditional methods & conservation techniques",
      },
    ],
  },
  {
    slug: "cottage-22-muckross",
    title: "Cottage 22, Muckross",
    location: "Muckross, Killarney, Co. Kerry",
    shortDescription:
      "Conservation-focused restoration work on a traditional cottage within the Muckross area.",
    summary:
      "Conservation-focused restoration work on a traditional cottage within the Muckross area, carried out in keeping with the character of the surrounding heritage landscape.",
    body: [
      "Cottage 22 is a traditional property within the Muckross area of Killarney, a setting where the character of individual buildings contributes to a wider heritage landscape. Restoration work was carried out with that context firmly in mind.",
      "The approach combined careful repair with sympathetic updates, so the cottage continues to feel at home in its surroundings. Work was coordinated with conservation advisors and carried out using materials and finishes in keeping with the character of the building and the estate.",
      "Smaller-scale conservation work of this type plays an important role in maintaining the overall feel of a heritage area, and it relies on craftsmanship, patience and a genuine respect for the place.",
    ],
    image: "https://picsum.photos/seed/cottage-22-muckross/1600/1000",
    imageAlt: "Traditional Irish stone cottage near Muckross, Killarney",
    details: [
      { label: "Location", value: "Muckross, Killarney, Co. Kerry" },
      { label: "Type of work", value: "Traditional cottage restoration" },
      { label: "Setting", value: "Heritage landscape" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
