import React from 'react';

interface GroceryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
}

interface GroceryListProps {
  list: GroceryItem[];
}

const GroceryList: React.FC<GroceryListProps> = ({ list }) => {
  const categories = Array.from(new Set(list.map((item) => item.category)));

  return (
    <div className="space-y-4">
      {categories.map((category) => (
        <div key={category} className="border-b pb-2">
          <h3 className="font-semibold capitalize">{category}</h3>
          <ul className="ml-4">
            {list
              .filter((item) => item.category === category)
              .map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>
                    {item.quantity} {item.unit}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GroceryList;