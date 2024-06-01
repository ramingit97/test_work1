import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';




type WebSocketContextType = {
  socket: WebSocket | null;
  sendMessage: (message: string) => void;
};





const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);

export const WebSocketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);


  

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:7777'); // Замените URL на ваш WebSocket сервер
    setSocket(ws);

    

    

    ws.onclose = () => {
      setSocket(null);
    };

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = (message: string) => {
    if (socket) {
      socket.send(JSON.stringify({ message }));
    }
  };

  return (
    <WebSocketContext.Provider value={{ socket, sendMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error('useWebSocket must be used within a WebSocketProvider');
  }
  return context;
};
