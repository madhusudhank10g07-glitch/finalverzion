import { createImageUrlBuilder } from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "bzabxgeq",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}