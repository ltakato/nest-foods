import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Client } from 'socket.io';

@WebSocketGateway()
export class FoodsGateway {
  @WebSocketServer()
  private server: any;

  @SubscribeMessage('foods')
  async handleMessage(client: Client, data: any) {
    this.broadCast(data);
  }

  broadCast(data) {
    this.server.emit('foods', { name: data.name });
  }

}
