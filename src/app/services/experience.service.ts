import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

    experiencias = [
      { cargo: 'Bombeiro Civil Freelancer', empresa: 'Não aplicado', periodo: 'Março 2018 - atual', descricao: 'Zelar Pela Segurança Preventiva Das Instalações E Atuar Imediatamente Em Caso De Sinistro; Também Realizar Atendimento De Primeiros Socorros Aos Clientes E Funcionários Do Estabelecimento.' },
      { cargo: 'Encanador Industrial', empresa: 'EISA - ESTALEIRO ILHA S.A', periodo: 'Março 2012 - Janeiro 2016', descricao: 'Atuamos Inicialmente Como Esmerilhador Dando Acabamento Em Tubulações Que Faziam Parte Da Embacação Que Estava A Ser Montada, Posteriormente Passamos A Encanado Sendo Responsável Pela Montagem Da Tubulação Seguindo As Principais Normas Técnicas E Padrões De Projeto.' },
      { cargo: 'Fuzileiro Naval (soldado)', empresa: 'Corpo de Fuzileiros Navais', periodo: 'Agosto 2003 - Dezembro 2010', descricao: 'Realizamos Atividades Táticas De Apoio Aos Interesses Do Corpo De Fuzileiros Navais E Marinha Do Brasil No Âmbito Nacional (Guarda, Escolta, Segurança, Policiamento, Patrulha, Etc.). Também Administrativamente Compomos A "Caixa De Economias" A Qual Era Responsável Por Suguir Um Processo Administrativo Que Liberava Recursos Emergenciais No Quartel.' }
    ];

  constructor() { }
}
