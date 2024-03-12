import { SocketService } from "./socket.service";
import { WebSocketGateway,SubscribeMessage, MessageBody, WebSocketServer } from "@nestjs/websockets";

const options = {
    cors: {
      origin: ["*"],
    }
  }

@WebSocketGateway(1669,options)


export class SocketGateway  {
    public mqtt:any;
    constructor(socketService:SocketService){
        this.mqtt = socketService.connectMQTT()
    }
    
    @WebSocketServer()
    server;
    
    @SubscribeMessage("itim")
    handleMessage(@MessageBody() message:string){
    this.server.emit('response',message)
    }
    
}