import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  telefone: string = '+5521996087518';

  email: string = 'alexdroide.developer@gmail.com';

  enderecoParams: string = 'Rua+Silveira+Martins,+sn+lote+14+Quadra+1+-+Coelho+da+Rocha+-+São+João+de+Meriti+-+RJ';
  endereco: string = 'Rua Silveira Martins, sn lote 14 Quadra 1 - Coelho da Rocha - São João de Meriti - RJ';
}
