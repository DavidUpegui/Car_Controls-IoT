import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const useSocket = (url: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [response, setResponse] = useState("");

  useEffect(() => {
    // Crear la conexión al servidor de Socket.IO
    const socketIo = io(url, {
      transports: ["websocket"], // Garantiza que se use WebSocket directamente
    });

    setSocket(socketIo);

    // Listeners para eventos de conexión/desconexión
    socketIo.on("connect", () => {
      console.log("Conectado al servidor de Socket.IO");
      setIsConnected(true);
    });

    socketIo.on("disconnect", () => {
      console.log("Desconectado del servidor de Socket.IO");
      setIsConnected(false);
    });

    socketIo.on("response", (message: string) => {
      console.log(`Respuesta del servidor: ${message}`);
      setResponse(message);
    });

    // Limpiar conexión al desmontar
    return () => {
      socketIo.disconnect();
    };
  }, [url]);

  const sendMessage = (event: string, message: string) => {
    if (socket) {
      socket.emit(event, message);
      console.log(`Mensaje enviado: ${event}: ${message}`);
    } else {
      console.error("Socket no inicializado.");
    }
  };

  return { isConnected, response, sendMessage };
};

export default useSocket;

