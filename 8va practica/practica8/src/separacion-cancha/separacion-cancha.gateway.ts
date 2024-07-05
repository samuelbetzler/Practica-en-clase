import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { SeparacionCanchaService } from './separacion-cancha.service';
import { Server, Socket } from 'socket.io';
import { messageDto } from './dto/mensaje.dto';

@WebSocketGateway({cors:true})
export class SeparacionCanchaGateway implements OnGatewayConnection, OnGatewayDisconnect{

  @WebSocketServer()
  wss:Server;

  constructor(private readonly SeparacionCanchaService: SeparacionCanchaService) {}

  async handleConnection(client: Socket, ...args: any[]) {
    const token = client.handshake.headers.authentication as string;
    try {
      // validar el token
      await this.SeparacionCanchaService.registerClient(client, token);
    } catch (error) {
      client.disconnect();  
      return;    
    }
    this.wss.emit('clients-updated', this.SeparacionCanchaService.getConnectedClients());
  }
  handleDisconnect(client: Socket) {
    this.SeparacionCanchaService.removeClient(client.id);
    this.wss.emit('clients-updated', this.SeparacionCanchaService.getConnectedClients());
  }

  @SubscribeMessage('message-from-client')
  onMessageFromClient(client: Socket, payload: messageDto) {
    //! todos reciben el mensaje
    this.wss.emit('message-from-server',{
      fullName: this.SeparacionCanchaService.getUserFullName(client.id),
      message: payload.message || 'No message',
    });

    // el cliente que emite este evento NO recibe la respuesta
    // client.broadcast.emit('message-from-server',{
    //   fullName: this.pruebaService.getUserFullName(client.id),
    //   message: payload.message || 'No message',
    // })

    // solo el cliente que emite este evento recibe la respuesta
    // client.emit('message-from-server',{
    //   fullName: this.pruebaService.getUserFullName(client.id),
    //   message: payload.message || 'No message',
    // })
  }
}