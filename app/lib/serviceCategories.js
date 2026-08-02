// The canonical service list. Slugs double as the anchor ids on the services
// page and as the folder names under public/past-work/.
export const serviceCategories = [
  { slug: "finish-carpentry", label: "Finish Carpentry" },
  { slug: "electrical-lighting", label: "Electrical & Lighting" },
  { slug: "installations", label: "Installations" },
  { slug: "maintenance-repairs", label: "Maintenance & Repairs" },
  { slug: "drywall-painting", label: "Drywall & Painting" },
  { slug: "flooring", label: "Flooring" },
  { slug: "remodeling", label: "Remodeling" },
];

export const serviceOptions = serviceCategories.map((category) => category.label);
