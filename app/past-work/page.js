import { readdirSync } from "node:fs";
import { join } from "node:path";

import { serviceCategories } from "../lib/serviceCategories";
import PastWorkPageClient from "./PastWorkPageClient";

export const metadata = {
  title: "Past Work | S & E Handyman",
  description:
    "Explore finish carpentry, lighting, installations, repairs, drywall, painting, and remodeling work by S & E Handyman across Seattle and the Eastside.",
};

const imageFile = /\.(jpe?g|png|webp|avif)$/i;

// The gallery is built from whatever sits in public/past-work/<slug>/ at build
// time, so adding a photo means dropping the file in the folder and rebuilding
// — no code change and no list to keep in sync.
function readCategoryImages(slug) {
  try {
    return readdirSync(join(process.cwd(), "public", "past-work", slug))
      .filter((file) => imageFile.test(file))
      .sort((a, b) => {
        // A file named "featured" leads its category; the rest follow in
        // natural order so photo_2 sorts ahead of photo_10.
        const aFeatured = a.startsWith("featured");
        const bFeatured = b.startsWith("featured");
        if (aFeatured !== bFeatured) return aFeatured ? -1 : 1;
        return a.localeCompare(b, "en", { numeric: true });
      })
      .map((file) => `/past-work/${slug}/${file}`);
  } catch {
    return []; // folder missing entirely — treated as an empty category
  }
}

export default function PastWorkPage() {
  const groups = serviceCategories.map((category) => ({
    ...category,
    images: readCategoryImages(category.slug),
  }));

  return <PastWorkPageClient groups={groups} />;
}
