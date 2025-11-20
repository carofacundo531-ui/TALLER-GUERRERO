
import React from 'react';
import { ChatMessage } from '../types';

interface ChatBubbleProps {
  message: ChatMessage;
  isLoading?: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isLoading = false }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`rounded-lg px-4 py-2 max-w-[80%] ${
          isUser
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-800'
        }`}
      >
        {isLoading ? (
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-75"></span>
            <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-150"></span>
          </div>
        ) : (
          message.text
        )}
      </div>
    </div>
  );
};

export default ChatBubble;
