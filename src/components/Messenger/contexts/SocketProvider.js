import { useContext, useEffect, useState, createContext } from 'react'
import io from 'socket.io-client'

const SocketContext = createContext()

export function useSocket() {
  return useContext(SocketContext)
}

export function SocketProvider({ idUser, children }) {
  const [socket, setSocket] = useState()
  const id = idUser._id

  useEffect(() => {

    const newSocket = io(
      'https://komunikate-backend.onrender.com',
      { query: { id } }
    )

    newSocket.on('connect', () => {
      console.info('connected');
    });

    setSocket(newSocket);

    return () => newSocket.disconnect()
  }, [id])

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}