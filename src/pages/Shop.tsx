import { useState } from "react";
import { Search, SlidersHorizontal, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/ProductCard";
import { CategoryPills } from "@/components/CategoryPills";
import { BottomNav } from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const categories = ["All", "Men", "Women", "Girls"];

const products = [
  { id: 1, name: "Cotton T-Shirt", price: 69.0, originalPrice: 189.0, image: product1 },
  { id: 2, name: "Ladies Top", price: 88.0, originalPrice: 150.0, image: product2 },
  { id: 3, name: "Leather Jacket", price: 95.0, originalPrice: 189.0, image: product3 },
  { id: 4, name: "Turquoise Blazer", price: 130.0, originalPrice: 200.0, image: product4 },
  { id: 5, name: "Bomber Jacket", price: 120.0, originalPrice: 200.0, image: product5 },
  { id: 6, name: "Floral Blouse", price: 75.0, originalPrice: 120.0, image: product6 },
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto max-w-lg px-4 py-4">
          <div className="mb-4 flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-10 pr-12 rounded-full border-border"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full"
              >
                <SlidersHorizontal className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-lg px-4">
        {/* Categories */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">Categories</h2>
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground">
            See All
          </button>
        </div>
        
        <div className="mb-6">
          <CategoryPills
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Products Grid */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">Popular Product</h2>
          <button className="text-sm font-medium text-muted-foreground hover:text-foreground">
            See All
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 pb-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Shop;
