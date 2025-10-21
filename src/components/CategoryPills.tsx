import { cn } from "@/lib/utils";

interface CategoryPillsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryPills = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryPillsProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "whitespace-nowrap rounded-full px-6 py-2 text-sm font-medium transition-all",
            activeCategory === category
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
