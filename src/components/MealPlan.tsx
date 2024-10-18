import React from 'react';

interface Meal {
  id: string;
  name: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  day: string;
}

interface MealPlanProps {
  plan: Meal[];
}

const MealPlan: React.FC<MealPlanProps> = ({ plan }) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="space-y-4">
      {days.map((day) => (
        <div key={day} className="border-b pb-2">
          <h3 className="font-semibold">{day}</h3>
          <ul className="ml-4">
            {plan
              .filter((meal) => meal.day === day)
              .map((meal) => (
                <li key={meal.id} className="flex justify-between">
                  <span>{meal.name}</span>
                  <span className="text-gray-500">{meal.type}</span>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MealPlan;