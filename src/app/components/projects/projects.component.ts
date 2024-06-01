import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface Projeto {
  nome: string;
  descricao: string;
  deployLink: string;
  githubLink: string;
  imagem: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projetos: Projeto[] = [
    {
      nome: 'Aline, te Amo!',
      descricao: 'Esse projeto simula uma declaração de amor! Leia a história na qual esse projeto foi inspirado.',
      deployLink: 'https://alexdeveloperone.github.io/aline-te-amo/',
      githubLink: 'https://github.com/AlexDeveloperOne/aline-te-amo/',
      imagem: './assets/img/aline-te-amo.png'
    },
    {
      nome: 'E-Commerce',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?',
      deployLink: 'https://alexdeveloperone.github.io/aline-te-amo/',
      githubLink: 'https://github.com/AlexDeveloperOne/angular-blog-project',
      imagem: './assets/img/e-commerce.png'
    },
    {
      nome: 'Angular Firebase',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?',
      deployLink: 'https://alexdeveloperone.github.io/aline-te-amo/',
      githubLink: 'https://github.com/AlexDeveloperOne/aline-te-amo/',
      imagem: './assets/img/angularFirebase.png'
    },
    {
      nome: 'DevsComputer',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?',
      deployLink: 'https://alexdeveloperone.github.io/aline-te-amo/',
      githubLink: 'https://github.com/AlexDeveloperOne/projeto-buzzfeed/',
      imagem: './assets/img/DevsComputer.png'
    },
    {
      nome: 'To do App',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?',
      deployLink: 'https://alexdeveloperone.github.io/aline-te-amo/',
      githubLink: 'https://github.com/AlexDeveloperOne/aline-te-amo/',
      imagem: './assets/img/todoApp.png'
    },
    {
      nome: 'Angular Blog',
      descricao: 'Projeto que demonstra componentização para construção de um blog.',
      deployLink: 'https://angular-blog-project-prod.web.app/',
      githubLink: 'https://github.com/AlexDeveloperOne/angular-blog-project',
      imagem: './assets/img/angular-blog.png'
    },
    {
      nome: 'projeto-buzzfeed',
      descricao: 'Projeto criado durante o bootcamp Angular em parceria com a DIO e Banco PAN ...?',
      deployLink: 'https://buzzfeed-project.web.app/',
      githubLink: 'https://github.com/AlexDeveloperOne/projeto-buzzfeed/',
      imagem: './assets/img/projeto-buzzfeed.png'
    },
    {
      nome: 'Pokedex',
      descricao: 'Projeto html, CSS e Javascript - ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?',
      deployLink: 'https://alexdeveloperone.github.io/aline-te-amo/',
      githubLink: 'https://github.com/AlexDeveloperOne/aline-te-amo/',
      imagem: './assets/img/pokedex.png'
    }
  ];

githubIcon: string = `><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>>`;

}
