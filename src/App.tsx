import React, { useState } from 'react';
import { Mic, ShoppingCart, Calendar } from 'lucide-react';
import MealPlan from './components/MealPlan';
import GroceryList from './components/GroceryList';
import VoiceInput from './components/VoiceInput';

function App() {
  const [mealPlan, setMealPlan] = useState([]);
  const [groceryList, setGroceryList] = useState([]);

  const handleVoiceCommand = (command) => {
    // TODO: Implement AI logic to process voice commands
    console.log('Voice command received:', command);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">AI Meal Planner & Grocery Generator</h1>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <section className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Calendar className="mr-2" /> Weekly Meal Plan
            </h2>
            <MealPlan plan={mealPlan} />
          </section>
          <section className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <ShoppingCart className="mr-2" /> Grocery List
            </h2>
            <GroceryList list={groceryList} />
          </section>
        </div>
      </main>
      <footer className="bg-gray-200 p-4">
        <VoiceInput onCommand={handleVoiceCommand} />
      </footer>
    </div>
  );
}

export default App;