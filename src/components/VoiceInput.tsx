import React, { useState } from 'react';
import { Mic } from 'lucide-react';

interface VoiceInputProps {
  onCommand: (command: string) => void;
}

const VoiceInput: React.FC<VoiceInputProps> = ({ onCommand }) => {
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    setIsListening(true);
    // TODO: Implement actual voice recognition
    setTimeout(() => {
      setIsListening(false);
      onCommand('Sample voice command');
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={startListening}
        className={`p-4 rounded-full ${
          isListening ? 'bg-red-500' : 'bg-blue-500'
        } text-white`}
      >
        <Mic size={24} />
      </button>
      <p className="ml-4">
        {isListening ? 'Listening...' : 'Click to speak'}
      </p>
    </div>
  );
};

export default VoiceInput;