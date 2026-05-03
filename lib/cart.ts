import { Product } from "./types";

export async function fakeAddToCart(product: Product): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  console.log("Added to cart:", product.title);
}
