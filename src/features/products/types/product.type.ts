export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductFilters {
  category?: string;
  priceRange?: [number, number];
  rating?: number;
  searchQuery?: string;
  sortBy?: {
    field: "price" | "rating";
    order: "asc" | "desc";
  };
}
