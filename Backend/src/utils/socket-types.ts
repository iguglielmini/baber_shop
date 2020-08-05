import SocketIO from 'socket.io';

export interface Socket extends SocketIO.Socket {
  room: string;
}
