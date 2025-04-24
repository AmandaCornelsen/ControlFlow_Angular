import { Injectable } from '@angular/core';
import {Cliente} from '../interfaces/Clientes'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes: Cliente[] = [
    {id:"ljhhgfrdtuguibh", nome:"Amanda", telefone: "1345678952"},
    {id:"sawafcytvhgbubu", nome:"Beatriz", telefone: "2478521965"},
    {id:"trehyfbdbdfgdgs", nome:"Clara", telefone: "3478523667"},
    {id:"iyrgfdvscxzcazs", nome:"Juliana", telefone: "4478521468"}
  ]

  constructor() { }

  //método de listar clientes
  list(): Cliente[]{
    return this.clientes;
  }

  //método para remover cliente
  remove(id:string) {
    //busca cliente dentro da lista
    const cliente = this.clientes.find(
      c => c.id== id
    )
    if(cliente) { // se encontrar o cliente
      const index = this.clientes.indexOf(cliente) // busca o index
      this.clientes.splice(index,1) //remove da lista
    }
  }

  //método de adicionar clientes
  add(cliente:Cliente) {
    //O push adiciona um item (objeto) dentro de um array (lista)
    this.clientes.push(cliente)
    console.log(this.clientes)
  }

  update(id:string, ciente:Cliente) {
    const index = this.clientes.findIndex(
      c => c.id == id
    )
  }



}
