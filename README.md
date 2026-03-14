📝 Lista de Tarefas (Todo App) com React e Context API
Um aplicativo prático e interativo de Lista de Tarefas desenvolvido com React e TypeScript. Este projeto permite aos usuários gerenciar suas atividades diárias e personalizar a interface com alternância de tema (Claro/Escuro), mantendo todas as preferências e dados salvos diretamente no navegador.

✨ Funcionalidades
Gerenciamento de Tarefas: Adicione, marque como concluída ou remova tarefas facilmente.

Contador de Progresso: Acompanhe visualmente quantas tarefas foram concluídas em relação ao total (ex: 1 / 5).

Persistência de Dados (Tarefas): O estado das tarefas é salvo automaticamente no localStorage, garantindo que você não perca seus dados ao recarregar a página.

Alternância de Tema (Light/Dark Mode): Personalize a visualização do aplicativo alternando entre os temas claro e escuro.

Persistência de Tema: O tema escolhido também é salvo no localStorage por meio de um ThemeContext dedicado, mantendo sua preferência nas próximas visitas.

🛠️ Tecnologias e Conceitos Utilizados
React: Biblioteca principal para a construção da interface de usuário.

TypeScript: Adição de tipagem estática para maior segurança e previsibilidade do código (ex: interface TodoItem).

React Hooks:

useState: Para o gerenciamento de estados locais (lista de tarefas, texto do input, carregamento inicial).

useEffect: Para sincronizar dados com o localStorage no momento de carregamento e nas atualizações de estado.

useContext: Para acessar e consumir o estado global do tema na aplicação.

Context API: Utilizada (ThemeContext.tsx) para prover o estado do tema a toda a árvore de componentes sem a necessidade de prop drilling.

Local Storage API: Para o armazenamento local contínuo de dados.

Crypto API (crypto.randomUUID()): Geração de IDs únicos e seguros para as tarefas.

🚀 Como Executar o Projeto
Certifique-se de ter o Node.js instalado na sua máquina.

Clone o repositório ou baixe os arquivos do projeto.

Abra o terminal na pasta raiz do projeto e instale as dependências:

Bash
npm install
(ou yarn install / pnpm install dependendo do seu gerenciador de pacotes)

Inicie o servidor de desenvolvimento:

Bash
npm run dev