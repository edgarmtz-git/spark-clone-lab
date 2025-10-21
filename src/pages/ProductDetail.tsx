import { useState } from "react";
import { ArrowLeft, Heart, Share2, ShoppingBag, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { cn } from "@/lib/utils";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const products = [
  { 
    id: 1, 
    name: "Cotton T-Shirt", 
    price: 69.0, 
    originalPrice: 189.0, 
    image: product1,
    category: "Outerwear Men",
    description: "A cotton T-shirt is a must-have for its softness, breathability, and effortless style. Ideal for any season, it keeps you cool in warm weather and adds a light layer when needed. With a range of colors."
  },
  { 
    id: 2, 
    name: "Ladies Top", 
    price: 88.0, 
    originalPrice: 150.0, 
    image: product2,
    category: "Women Fashion",
    description: "Elegant and comfortable ladies top perfect for casual and formal occasions. Made with premium materials for lasting comfort."
  },
  { 
    id: 3, 
    name: "Leather Jacket", 
    price: 95.0, 
    originalPrice: 189.0, 
    image: product3,
    category: "Outerwear Men",
    description: "Classic leather jacket with modern design. Perfect for any weather condition and adds style to your outfit."
  },
  { 
    id: 4, 
    name: "Turquoise Blazer", 
    price: 130.0, 
    originalPrice: 200.0, 
    image: product4,
    category: "Women Fashion",
    description: "Stylish turquoise blazer for professional and casual wear. Premium quality fabric with excellent fit."
  },
  { 
    id: 5, 
    name: "Bomber Jacket", 
    price: 120.0, 
    originalPrice: 200.0, 
    image: product5,
    category: "Outerwear Men",
    description: "Modern bomber jacket with comfortable fit. Ideal for casual outings and everyday wear."
  },
  { 
    id: 6, 
    name: "Floral Blouse", 
    price: 75.0, 
    originalPrice: 120.0, 
    image: product6,
    category: "Women Fashion",
    description: "Beautiful floral blouse with elegant design. Perfect for spring and summer occasions."
  },
];

const sizes = ["S", "M", "L", "XL"];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));
  
  const [selectedSize, setSelectedSize] = useState("L");
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleQuantityChange = (action: "increment" | "decrement") => {
    if (action === "increment") {
      setQuantity(prev => prev + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
        <div className="mx-auto max-w-lg px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-lg font-bold">Details</h1>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-lg px-4 pb-32">
        {/* Product Image */}
        <div className="relative mb-6 mt-4">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-secondary">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            <button
              onClick={() => setLiked(!liked)}
              className="absolute right-4 top-4 rounded-full bg-background p-2.5 shadow-lg transition-all hover:scale-110"
            >
              <Heart
                className={cn(
                  "h-6 w-6 transition-colors",
                  liked ? "fill-destructive text-destructive" : "text-foreground"
                )}
              />
            </button>
          </div>

          {/* Thumbnail Gallery */}
          <div className="mt-4 flex gap-3 overflow-x-auto scrollbar-hide">
            {[product.image, product.image, product.image, product.image].map((img, idx) => (
              <button
                key={idx}
                className={cn(
                  "relative flex-shrink-0 overflow-hidden rounded-2xl border-2 transition-all",
                  idx === 1 ? "border-primary" : "border-transparent"
                )}
              >
                <img
                  src={img}
                  alt={`${product.name} view ${idx + 1}`}
                  className="h-20 w-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-1">{product.name}</h2>
              <p className="text-sm text-muted-foreground">{product.category}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-foreground">${product.price.toFixed(2)}</p>
              {product.originalPrice && (
                <p className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </p>
              )}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="mb-3 text-base font-semibold text-foreground">Select Size</h3>
            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full border-2 font-semibold transition-all",
                    selectedSize === size
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:border-primary/50"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-foreground">Quantity</h3>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange("decrement")}
                disabled={quantity <= 1}
                className="h-10 w-10 rounded-full"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="min-w-[2rem] text-center text-lg font-semibold">
                {quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange("increment")}
                className="h-10 w-10 rounded-full"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="mb-2 text-base font-semibold text-foreground">Description</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>
          </div>
        </div>
      </main>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-t">
        <div className="mx-auto max-w-lg px-4 py-4">
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="lg"
              className="flex-1 rounded-full font-semibold"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Add To Cart
            </Button>
            <Button
              size="lg"
              className="flex-1 rounded-full font-semibold"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
