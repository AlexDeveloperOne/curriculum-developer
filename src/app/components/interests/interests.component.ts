import { Component } from '@angular/core';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {
  partOne : string =
  `
  Sou uma pessoa apaixonado por TECNOLOGIA de maneira geral, adoro gadgets e inovações na área de tecnologia tanto sobre hardware como também sobre software e acredito no poder transformador da programação;
  também gosto de PRÁTICAS ESPORTIVAS, corro três vezes por semana e faço exercícios intervalados de alta intensidade (HIIT) assim acabo colecionando material sobre treinamento funcional e outros;
  também estou sempre antenado quando o assunto é saúde principalmente em entender como um alimento nos prejudica e como outro alimento nos beneficia para assim saber, sempre procuro notícias sobre
  esses assuntos, pesquisas e novas descobertas científicas.
  `
  partTwo : string =
  `
  Minha segunda paixão é a língua inglesa; estudo diariamente e sempre estou acompanhando novas aulas ou quaisquer outra novidade.
  Meu grande objetivo com a língua é obter a certificação TOEFL ou IELTS ou outra que seja semelhante; será feito assim que possível (ASAP) dentro do nosso planejamento estratégico.
  `

}
