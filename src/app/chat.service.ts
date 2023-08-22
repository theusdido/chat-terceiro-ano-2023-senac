import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public username = 'Edilson Bitencourt';
  public mensagens:Array<any> = [];

  constructor(
    public firebase_service:FirebaseService
  ) {
    this.read();
  }

  ref(){
    return this.firebase_service.ref().child('chat');
  }

  send(mensagem:string){
    this.ref().push({ 
      username:this.username,
      message:mensagem,
      datetime:new Date().getTime()
    });
  }

  read(){
    this.ref()
    .on('value',(_snapshop:any)=>{
      this.mensagens = Object.values(_snapshop.val());
    });      
  }

}