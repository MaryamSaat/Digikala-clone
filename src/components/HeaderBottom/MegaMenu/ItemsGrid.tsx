import React from "react";

interface Item {
  id?: number;
  title: string;
  image?: string;
  url?: {
    uri: string;
  };
}

interface ItemsGridProps {
  items: Item[];
}

const ItemsGrid: React.FC<ItemsGridProps> = ({ items }) => {
  return (
    <div className="w-full px-4 py-6">
      <div className="grid grid-cols-4 gap-4">
        {items.map((item, index) => (
          <a key={item.id ?? index} href={item.url?.uri || "#"} className="flex flex-col items-center group">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-2 group-hover:bg-gray-300 transition-colors overflow-hidden">
              {item.image ? <img src={item.image} alt={item.title} className="w-10 h-10 object-contain" /> : <span className="text-sm text-gray-500">{item.title.charAt(0)}</span>}
            </div>
            <span className="text-sm text-gray-900 text-center">{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ItemsGrid;
