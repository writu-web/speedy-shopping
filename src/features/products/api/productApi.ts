import apiClient from "../../../lib/api/axios";
import type { Product } from "../types/product.type";

async function fetchProducts(page: number): Promise<Product[]> {
  try {
    const response = await apiClient.get(`/products?limit=${page * 5}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export { fetchProducts };
