import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  onAddToWishlist?: (id: number) => void;
  onAddToCart?: (id: number) => void;
  isInWishlist?: boolean;
}

export const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  onAddToWishlist,
  onAddToCart,
  isInWishlist = false,
}: ProductCardProps) => {
  const [liked, setLiked] = useState(isInWishlist);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
    onAddToWishlist?.(id);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart?.(id);
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:shadow-md">
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button
          onClick={handleWishlistClick}
          className="absolute right-3 top-3 rounded-full bg-background/80 p-2 backdrop-blur-sm transition-all hover:bg-background"
        >
          <Heart
            className={cn(
              "h-5 w-5 transition-colors",
              liked ? "fill-destructive text-destructive" : "text-foreground"
            )}
          />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="mb-2 font-medium text-foreground">{name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button
            size="icon"
            onClick={handleAddToCart}
            className="rounded-full"
          >
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
