### Instruções para Configurar e Rodar o Projeto GS Frontend - Energia Limpa

#### 1. **Descrição do Projeto**
Este é um projeto de frontend que explora os conceitos de **energia limpa** em um site responsivo e moderno. O projeto utiliza as seguintes tecnologias:
- **HTML5**: Para estruturar as páginas de forma semântica.
- **Sass**: Para organizar os estilos em módulos reutilizáveis.
- **Bootstrap**: Para facilitar o layout responsivo.

---

#### 2. **Estrutura de Diretórios**
A estrutura básica do projeto está organizada da seguinte forma:

```
GS-Frontend-EnergiaLimpa/
├── dist/
│   ├── styles.css          # Arquivo CSS gerado pelo Sass
│   ├── styles.css.map      # Arquivo de mapa para depuração
├── img/                    # Imagens utilizadas no projeto
│   ├── renovaveis.jpg
│   ├── sustentabilidade.png
│   ├── economia.png
│   └── saude.png
├── sass/
│   ├── styles.scss         # Arquivo principal do Sass
│   ├── _variables.scss     # Variáveis de cor e estilos reutilizáveis
│   ├── _mixins.scss        # Mixins para estilos reutilizáveis
│   ├── _base.scss          # Estilos globais (reset e tipografia)
│   ├── _layout.scss        # Estilos de layout (grid, flexbox, etc.)
│   └── _components.scss    # Estilos específicos para componentes
├── index.html              # Página principal do projeto
└── README.md               # Documentação do projeto
```

---

#### 3. **Como Rodar o Projeto**
Siga os passos abaixo para configurar o projeto em sua máquina:

##### a. Clone o Repositório
Use o comando para clonar o repositório para o seu ambiente local:
```bash
git clone https://github.com/seu-repositorio/GS-Frontend-EnergiaLimpa.git
```

##### b. Instale o Sass (se ainda não estiver instalado)
Certifique-se de que o Sass está instalado no seu sistema. Caso não esteja, você pode instalar globalmente com:
```bash
npm install -g sass
```

##### c. Compile os Arquivos Sass
Navegue até o diretório do projeto e execute o seguinte comando para compilar os arquivos `.scss` em um arquivo CSS:
```bash
sass --watch sass/styles.scss dist/styles.css
```
Este comando irá monitorar as mudanças nos arquivos `.scss` e compilar automaticamente para o diretório `dist/`.

##### d. Abra o Arquivo HTML
Basta abrir o arquivo `index.html` no navegador para visualizar o projeto.

---

#### 4. **Dicas para Desenvolvimento**
- **Organize os Estilos**: Use variáveis no arquivo `_variables.scss` para gerenciar cores, tamanhos de fontes, e espaçamentos.
- **Reutilize Mixins**: Utilize os mixins definidos em `_mixins.scss` para reduzir duplicação de código (por exemplo, mixins para `flexbox` ou gradientes).
- **Estrutura Semântica**: Garanta que as tags HTML sigam boas práticas semânticas, como o uso correto de `<header>`, `<section>`, e `<footer>`.

---

#### 5. **Tecnologias Utilizadas**
- **HTML5**: Estruturação semântica.
- **Sass**: Estilos organizados com variáveis, mixins, e parciais.
- **Bootstrap**: Layout responsivo e componentes pré-estilizados.

---

#### 6. **Personalizações Futuras**
- Adicionar **animações** usando CSS ou bibliotecas como [AOS (Animate on Scroll)](https://michalsnik.github.io/aos/).
- Incluir **tabelas interativas** ou gráficos com bibliotecas como Chart.js para mostrar dados relacionados à energia limpa.
- Melhorar a **otimização de performance** usando imagens em formatos modernos como WebP.

---

Se precisar de ajuda ou quiser expandir as funcionalidades, é só entrar em contato!


##integrantes
RM554673 Fernanda Rocha Menon
RM556237 Luiza Macena Dantas
Rm556093 Eduardo Fakiani
