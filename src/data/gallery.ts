export const R2_PUBLIC_BASE =
  "https://pub-3551751dc58044cb88a118691e50d580.r2.dev";

export const GALLERY_PREFIX = "gallery";

export function gallerySrc(file: string) {
  return `${R2_PUBLIC_BASE}/${GALLERY_PREFIX}/${file}`;
}

export const GALLERY_FILES = [
  "ASN_8157.jpg",
  "ASN_8199.jpg",
  "ASN_8208.jpg",
  "ASN_8209.jpg",
  "ASN_8210.jpg",
  "ASN_8212.jpg",
] as const;
