/**
 * NOTE: The provided schema (columbus_recruitment.schema.json) defines fields
 * `link` and `ean`, but the actual API responds with `url` and `gtin`.
 * Types follow the actual API response so the application works.
 */

export type Image = {
  url: string;
  altText: string;
};

export type Promotion = {
  name: string;
  percentage: number;
};

export type Product = {
  articleNumber: string;
  gtin: string;
  url: string;
  image: Image;
  title: string;
  description: string;
  brandName: string;
  brandLogo: string;
  price: number;
  promotion?: Promotion | null;
};

export type ColumbusData = {
  title: string;
  logo: Image;
  products: Product[];
};
