import { Injectable } from '@nestjs/common';
var mqtt = require('mqtt');

var options = {
    host: 'xoxexii-acu10a.a01.euc1.aws.hivemq.cloud',
    port: 8883,
    protocol: 'mqtts',
    username: 'itimkrupp',
    password: '14789632',
    
}

@Injectable()
export class SocketService {
  connectMQTT(): any {
    return mqtt.connect(options);
  }
}