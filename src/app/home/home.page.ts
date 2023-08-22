import { Component } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public mensagem:string = '';

  constructor(
    public firebase_service:FirebaseService,
    public chat_service:ChatService
    ) { 
    this.firebase_service.testarConexao();
    }
    

    send(){
      let mensagem = this.mensagem;
      if (mensagem != ''){
        this.chat_service.send(mensagem);
      }
    }
}
