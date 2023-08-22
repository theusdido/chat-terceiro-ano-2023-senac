import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    public db:AngularFireDatabase
  ) { }

  testarConexao(){
    this.db.database.ref('/teste')
    .on('value',(_snapshop:any)=>{
    console.log( _snapshop.val() );
    });
  }

  ref(){
    return this.db.database.ref('/');
  }

}
