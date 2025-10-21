import { ArrowLeft, Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BottomNav } from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import product1 from "@/assets/product-1.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

interface CartItem {
  id: number;
  name: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Cotton T-Shirt", size: "L", price: 69.0, quantity: 1, image: product1 },
    { id: 2, name: "Leather Jacket", size: "L", price: 95.0, quantity: 1, image: product3 },
    { id: 3, name: "Turquoise Blazer", size: "L", price: 130.0, quantity: 1, image: product4 },
  ]);
  const [discount, setDiscount] = useState(25);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal - discount;

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto max-w-lg px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="flex-1 text-xl font-bold">My Cart</h1>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-lg px-4 pb-6">
        {/* Cart Items */}
        <div className="mb-6 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="relative overflow-hidden rounded-2xl bg-card p-4 shadow-sm">
              <div className="flex gap-4">
                <div className="h-24 w-24 overflow-hidden rounded-xl bg-secondary">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                  </div>
                  <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3 rounded-full bg-secondary p-1">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-background"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.id)}
                  className="rounded-full text-destructive hover:bg-destructive/10 hover:text-destructive"
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Discount Code */}
        <div className="mb-6 flex gap-2">
          <Input
            placeholder="Enter Discount Code"
            className="rounded-full"
          />
          <Button variant="outline" className="rounded-full px-6">
            Apply
          </Button>
        </div>

        {/* Summary */}
        <div className="mb-6 space-y-3 rounded-2xl bg-card p-4 shadow-sm">
          <div className="flex justify-between text-muted-foreground">
            <span>Sub total:</span>
            <span className="font-medium text-foreground">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>Discount:</span>
            <span className="font-medium text-foreground">${discount.toFixed(2)}</span>
          </div>
          <div className="border-t border-border pt-3">
            <div className="flex justify-between text-lg">
              <span className="font-semibold">Total:</span>
              <span className="font-bold text-primary">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <Button className="w-full rounded-full py-6 text-base font-semibold">
          <ArrowRight className="mr-2 h-5 w-5" />
          Checkout
        </Button>
      </main>

      <BottomNav />
    </div>
  );
};

export default Cart;
