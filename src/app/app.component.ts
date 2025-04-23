import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolacaoComponent } from './components/interpolacao/interpolacao.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { PropertieBindingComponent } from './components/propertie-binding/propertie-binding.component';
import {Carros} from './interfaces/Carros'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterpolacaoComponent, ControlFlowComponent, PropertieBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-control-flow';

  carros: Carros[] = [
    {id:1, nome:"T3", marca:"Audi", ano: 2001, cor:"branco"},
    {id:2, nome:"TCross", marca:"VW", ano: 2022, cor:"vermelho"},
    {id:3, nome:"Renegade", marca:"Jeep", ano: 2025, cor:"preto"}
  ]
}

