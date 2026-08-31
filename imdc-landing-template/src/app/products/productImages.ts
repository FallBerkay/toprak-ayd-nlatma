import { type ToprakProduct } from "./toprakProducts";

export function getGrayProductImage(image: string) {
  if (image.startsWith("/product-whitebacks/3545-") && image.endsWith(".png")) {
    return image.replace("/product-whitebacks/", "/product-gray-clean/");
  }

  return null;
}

export function getProductDisplayImage(product: ToprakProduct) {
  return getGrayProductImage(product.image) ?? product.image;
}

export function getProductImageClass(product: ToprakProduct) {
  return getGrayProductImage(product.image) ? "toprak-product-gray-img" : "";
}
