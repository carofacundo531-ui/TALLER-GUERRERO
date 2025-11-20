
import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '../types';
import { runChat } from '../services/geminiService';
import { SendIcon, CloseIcon, BotIcon } from './IconComponents';
import ChatBubble from './ChatBubble';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Hola! Soy el asistente virtual de Taller Guerrero. ¿Cómo puedo ayudarte hoy?' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await runChat([...messages, userMessage]);
      const modelMessage: ChatMessage = { role: 'model', text: responseText };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error('Error in chatbot:', error);
      const errorMessage: ChatMessage = {
        role: 'model',
        text: 'Lo siento, ocurrió un error. Por favor, intenta de nuevo.'
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 w-80 h-[28rem] sm:w-96 sm:h-[32rem] bg-white rounded-lg shadow-xl flex flex-col z-50 animate-fade-in-up">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 flex justify-between items-center rounded-t-lg">
        <div className="flex items-center">
            <BotIcon />
            <h3 className="font-bold text-lg ml-2">Asistente Virtual</h3>
        </div>
        <button onClick={onClose} className="hover:bg-blue-700 p-1 rounded-full">
          <CloseIcon />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
        {messages.map((msg, index) => (
          <ChatBubble key={index} message={msg} />
        ))}
        {isLoading && <ChatBubble message={{ role: 'model', text: '...' }} isLoading={true} />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 flex items-center bg-white rounded-b-lg">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Escribe tu pregunta..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />
        <button
          onClick={handleSend}
          disabled={isLoading}
          className="ml-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 disabled:bg-gray-400"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
