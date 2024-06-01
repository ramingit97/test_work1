const { Server } = require('ws');

const wss = new Server({port:7777});

export function broadcastMessage(type,message) {  
    wss.clients.forEach(client => {
        if (client.readyState === 1) { // 1 означает OPEN состояние
            client.send(JSON.stringify({type, message }));
        }
    });      
}
 
wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('close', () => {
      console.log('Client disconnected');
  });

  ws.on('message', (message) => {
      console.log(`Received message: ${message}`);
  });
});