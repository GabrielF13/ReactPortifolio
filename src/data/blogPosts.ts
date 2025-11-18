export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readTime: string;
  imageUrl?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Clean Architecture: Construindo Software Sustentável",
    excerpt: "Descubra como os princípios da Clean Architecture podem transformar a manutenibilidade e escalabilidade dos seus projetos.",
    content: `
# Clean Architecture: Construindo Software Sustentável

A Clean Architecture, proposta por Robert C. Martin (Uncle Bob), é um conjunto de princípios que visa criar sistemas de software que sejam:

- **Independentes de frameworks**: O código não deve depender de bibliotecas externas
- **Testáveis**: As regras de negócio podem ser testadas sem UI, banco de dados ou servidores
- **Independentes de UI**: A interface pode mudar sem afetar o resto do sistema
- **Independentes de banco de dados**: Você pode trocar Oracle por MongoDB sem quebrar o código
- **Independentes de qualquer agente externo**: As regras de negócio não sabem nada sobre o mundo exterior

## Camadas da Clean Architecture

### 1. Entities (Entidades)
São os objetos de negócio da aplicação. Contêm as regras de negócio mais gerais e de alto nível.

\`\`\`typescript
class User {
  constructor(
    public id: string,
    public name: string,
    public email: string
  ) {}

  isValidEmail(): boolean {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(this.email);
  }
}
\`\`\`

### 2. Use Cases (Casos de Uso)
Contêm as regras de negócio específicas da aplicação. Orquestram o fluxo de dados entre as entidades.

\`\`\`typescript
interface UserRepository {
  save(user: User): Promise<void>;
  findById(id: string): Promise<User | null>;
}

class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(name: string, email: string): Promise<User> {
    const user = new User(generateId(), name, email);
    
    if (!user.isValidEmail()) {
      throw new Error('Email inválido');
    }

    await this.userRepository.save(user);
    return user;
  }
}
\`\`\`

### 3. Interface Adapters (Adaptadores)
Convertem dados do formato mais conveniente para os casos de uso e entidades para o formato mais conveniente para agentes externos.

### 4. Frameworks & Drivers
Camada mais externa onde ficam os frameworks, banco de dados, UI, etc.

## Benefícios

1. **Manutenibilidade**: Código organizado e fácil de entender
2. **Testabilidade**: Cada camada pode ser testada independentemente
3. **Flexibilidade**: Fácil trocar implementações sem afetar o core
4. **Escalabilidade**: Estrutura que cresce de forma sustentável

## Conclusão

A Clean Architecture não é uma solução mágica, mas um guia para criar software de qualidade. O investimento inicial em estruturação compensa no longo prazo com um código mais limpo, testável e manutenível.
    `,
    date: "2024-11-15",
    author: "Gabriel Ferreira",
    category: "Arquitetura de Software",
    tags: ["Clean Architecture", "Design Patterns", "Boas Práticas"],
    readTime: "8 min"
  },
  {
    id: "2",
    title: "React Hooks: Guia Completo para Iniciantes",
    excerpt: "Entenda como os Hooks revolucionaram o desenvolvimento React e aprenda a usar os principais hooks no dia a dia.",
    content: `
# React Hooks: Guia Completo para Iniciantes

Os Hooks foram introduzidos no React 16.8 e mudaram completamente a forma como escrevemos componentes React. Eles permitem usar estado e outras features do React sem escrever classes.

## Por que Hooks?

Antes dos Hooks, componentes funcionais eram "burros" - não podiam ter estado ou lifecycle methods. Agora, podemos fazer tudo que fazíamos com classes, mas de forma mais simples e elegante.

## Principais Hooks

### useState

O hook mais básico, permite adicionar estado a componentes funcionais.

\`\`\`typescript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}
\`\`\`

### useEffect

Permite executar efeitos colaterais em componentes funcionais. Substitui componentDidMount, componentDidUpdate e componentWillUnmount.

\`\`\`typescript
import { useState, useEffect } from 'react';

function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      const response = await fetch(\`/api/users/\${userId}\`);
      const data = await response.json();
      setUser(data);
      setLoading(false);
    }

    fetchUser();
  }, [userId]); // Re-executa quando userId muda

  if (loading) return <div>Carregando...</div>;
  return <div>{user?.name}</div>;
}
\`\`\`

### useContext

Permite consumir contextos sem precisar de Consumer.

\`\`\`typescript
import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Botão Temático</button>;
}
\`\`\`

### useCallback e useMemo

Otimizam performance ao memorizar funções e valores.

\`\`\`typescript
import { useState, useCallback, useMemo } from 'react';

function ExpensiveComponent({ items }: { items: number[] }) {
  const [count, setCount] = useState(0);

  // Memoriza a função
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  // Memoriza o resultado do cálculo
  const sum = useMemo(() => {
    console.log('Calculando soma...');
    return items.reduce((a, b) => a + b, 0);
  }, [items]);

  return (
    <div>
      <p>Soma: {sum}</p>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
}
\`\`\`

## Regras dos Hooks

1. **Apenas chame Hooks no nível superior**: Não chame dentro de loops, condições ou funções aninhadas
2. **Apenas chame Hooks de funções React**: Componentes funcionais ou custom hooks

## Custom Hooks

Você pode criar seus próprios hooks para reutilizar lógica:

\`\`\`typescript
function useLocalStorage(key: string, initialValue: any) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Uso
function App() {
  const [name, setName] = useLocalStorage('name', 'Gabriel');
  // ...
}
\`\`\`

## Conclusão

Hooks tornaram o React mais simples e poderoso. Eles eliminam a necessidade de classes e permitem reutilizar lógica de forma elegante. Se você ainda não está usando, está perdendo tempo!
    `,
    date: "2024-11-10",
    author: "Gabriel Ferreira",
    category: "React",
    tags: ["React", "Hooks", "JavaScript", "Frontend"],
    readTime: "10 min"
  },
  {
    id: "3",
    title: "TypeScript: Por que você deveria usar em 2024",
    excerpt: "TypeScript se tornou essencial no desenvolvimento moderno. Descubra os benefícios e como começar a usar hoje mesmo.",
    content: `
# TypeScript: Por que você deveria usar em 2024

TypeScript é um superset de JavaScript que adiciona tipagem estática opcional. Desenvolvido pela Microsoft, ele compila para JavaScript puro e pode ser usado em qualquer lugar onde JavaScript roda.

## Por que TypeScript?

### 1. Detecção de Erros em Tempo de Desenvolvimento

\`\`\`typescript
// JavaScript - erro só em runtime
function somar(a, b) {
  return a + b;
}

somar(5, "10"); // "510" - bug silencioso!

// TypeScript - erro em tempo de desenvolvimento
function somar(a: number, b: number): number {
  return a + b;
}

somar(5, "10"); // ❌ Erro: Argument of type 'string' is not assignable to parameter of type 'number'
\`\`\`

### 2. Autocompletar e IntelliSense Poderosos

Com TypeScript, sua IDE sabe exatamente quais propriedades e métodos estão disponíveis:

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

function greetUser(user: User) {
  console.log(\`Olá, \${user.name}\`);
  // Sua IDE sugere: id, name, email, createdAt
}
\`\`\`

### 3. Refatoração Segura

Quando você renomeia uma propriedade ou função, o TypeScript encontra todas as referências:

\`\`\`typescript
interface Product {
  name: string;
  price: number;
}

// Se você renomear 'price' para 'value', o TypeScript
// mostra todos os lugares que precisam ser atualizados
\`\`\`

## Recursos Principais

### Tipos Básicos

\`\`\`typescript
let nome: string = "Gabriel";
let idade: number = 25;
let ativo: boolean = true;
let hobbies: string[] = ["programar", "ler"];
let tuple: [string, number] = ["Gabriel", 25];
\`\`\`

### Interfaces e Types

\`\`\`typescript
interface Person {
  name: string;
  age: number;
  email?: string; // opcional
}

type ID = string | number;

type User = Person & {
  id: ID;
  role: "admin" | "user"; // union type
};
\`\`\`

### Generics

\`\`\`typescript
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const numbers = [1, 2, 3];
const first = firstElement(numbers); // type: number | undefined

const strings = ["a", "b", "c"];
const firstStr = firstElement(strings); // type: string | undefined
\`\`\`

### Utility Types

TypeScript oferece vários tipos utilitários:

\`\`\`typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Partial - torna todas as propriedades opcionais
type PartialTodo = Partial<Todo>;

// Pick - seleciona apenas algumas propriedades
type TodoPreview = Pick<Todo, "title" | "completed">;

// Omit - remove propriedades
type TodoInfo = Omit<Todo, "completed">;

// Readonly - torna tudo readonly
type ReadonlyTodo = Readonly<Todo>;
\`\`\`

## Configuração Básica

\`\`\`json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM"],
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
\`\`\`

## Dicas para Iniciantes

1. **Comece gradualmente**: Você pode usar TypeScript com JavaScript
2. **Use 'strict': true**: Ativa todas as verificações estritas
3. **Evite 'any'**: Derrota o propósito do TypeScript
4. **Use interfaces para objetos**: Mais flexível que types
5. **Aproveite a inferência**: TypeScript é inteligente, não precisa tipar tudo

## Conclusão

TypeScript não é apenas uma moda passageira. É uma ferramenta que melhora significativamente a qualidade do código, a produtividade e a experiência do desenvolvedor. Se você trabalha com JavaScript profissionalmente, TypeScript é um investimento que vale a pena.

O ecossistema JavaScript moderno abraçou TypeScript - frameworks como Angular, Vue 3, e ferramentas como VS Code são escritos em TypeScript. Não fique para trás!
    `,
    date: "2024-11-05",
    author: "Gabriel Ferreira",
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Programação", "Tipos"],
    readTime: "12 min"
  },
  {
    id: "4",
    title: "Git: Comandos Essenciais que Todo Desenvolvedor Deveria Conhecer",
    excerpt: "Domine o Git com este guia prático dos comandos mais importantes e workflows modernos de desenvolvimento.",
    content: `
# Git: Comandos Essenciais que Todo Desenvolvedor Deveria Conhecer

Git é o sistema de controle de versão mais popular do mundo. Dominar Git é essencial para qualquer desenvolvedor moderno.

## Comandos Básicos

### Configuração Inicial

\`\`\`bash
# Configurar nome e email
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Ver configurações
git config --list
\`\`\`

### Criar e Clonar Repositórios

\`\`\`bash
# Iniciar novo repositório
git init

# Clonar repositório existente
git clone https://github.com/usuario/repo.git

# Clonar branch específica
git clone -b develop https://github.com/usuario/repo.git
\`\`\`

## Workflow Diário

### Adicionar e Commitar

\`\`\`bash
# Ver status dos arquivos
git status

# Adicionar arquivos específicos
git add arquivo.txt

# Adicionar todos os arquivos
git add .

# Commitar com mensagem
git commit -m "feat: adiciona nova funcionalidade"

# Adicionar e commitar em um comando
git commit -am "fix: corrige bug no login"
\`\`\`

### Branches

\`\`\`bash
# Listar branches
git branch

# Criar nova branch
git branch feature/nova-funcionalidade

# Mudar para branch
git checkout feature/nova-funcionalidade

# Criar e mudar para branch (atalho)
git checkout -b feature/nova-funcionalidade

# Deletar branch
git branch -d feature/antiga

# Forçar deleção de branch não mergeada
git branch -D feature/experimental
\`\`\`

### Merge e Rebase

\`\`\`bash
# Merge de branch
git checkout main
git merge feature/nova-funcionalidade

# Rebase (reaplica commits em cima de outra branch)
git checkout feature/minha-feature
git rebase main

# Rebase interativo (permite editar commits)
git rebase -i HEAD~3
\`\`\`

## Comandos Avançados

### Stash (Guardar Mudanças Temporariamente)

\`\`\`bash
# Guardar mudanças não commitadas
git stash

# Guardar com mensagem
git stash save "WIP: trabalhando no login"

# Listar stashes
git stash list

# Aplicar último stash
git stash pop

# Aplicar stash específico
git stash apply stash@{0}

# Deletar stash
git stash drop stash@{0}
\`\`\`

### Desfazer Mudanças

\`\`\`bash
# Descartar mudanças em arquivo específico
git checkout -- arquivo.txt

# Descartar todas as mudanças não commitadas
git reset --hard

# Desfazer último commit (mantém mudanças)
git reset --soft HEAD~1

# Desfazer último commit (descarta mudanças)
git reset --hard HEAD~1

# Reverter commit específico (cria novo commit)
git revert abc123
\`\`\`

### Log e História

\`\`\`bash
# Ver histórico
git log

# Log compacto
git log --oneline

# Log com gráfico
git log --graph --oneline --all

# Ver mudanças de commit específico
git show abc123

# Ver quem modificou cada linha
git blame arquivo.txt
\`\`\`

## Trabalhando com Remoto

### Push e Pull

\`\`\`bash
# Enviar mudanças para remoto
git push origin main

# Forçar push (cuidado!)
git push --force origin main

# Baixar mudanças
git pull origin main

# Fetch (baixa sem fazer merge)
git fetch origin
\`\`\`

### Gerenciar Remotos

\`\`\`bash
# Ver remotos
git remote -v

# Adicionar remoto
git remote add origin https://github.com/usuario/repo.git

# Remover remoto
git remote remove origin

# Renomear remoto
git remote rename origin upstream
\`\`\`

## Boas Práticas

### Mensagens de Commit

Use o padrão Conventional Commits:

\`\`\`bash
feat: adiciona nova funcionalidade
fix: corrige bug
docs: atualiza documentação
style: formatação, ponto e vírgula, etc
refactor: refatoração de código
test: adiciona testes
chore: atualiza dependências, configurações
\`\`\`

### Workflow Git Flow

\`\`\`bash
# Branch principal
main (ou master)

# Branch de desenvolvimento
develop

# Branches de features
feature/nome-da-feature

# Branches de hotfix
hotfix/correcao-urgente

# Branches de release
release/v1.0.0
\`\`\`

## Comandos Úteis

\`\`\`bash
# Ver diferenças
git diff

# Ver diferenças de arquivo específico
git diff arquivo.txt

# Ver diferenças entre branches
git diff main..develop

# Limpar arquivos não rastreados
git clean -fd

# Atualizar último commit
git commit --amend

# Cherry-pick (aplicar commit específico)
git cherry-pick abc123
\`\`\`

## Conclusão

Git é uma ferramenta poderosa que vai muito além de \`git add\`, \`git commit\`, \`git push\`. Dominar esses comandos vai tornar você um desenvolvedor mais eficiente e confiante.

Pratique regularmente e não tenha medo de experimentar - você sempre pode voltar atrás com Git!
    `,
    date: "2024-11-01",
    author: "Gabriel Ferreira",
    category: "Ferramentas",
    tags: ["Git", "Controle de Versão", "DevOps", "Produtividade"],
    readTime: "15 min"
  },
  {
    id: "5",
    title: "API RESTful: Melhores Práticas para 2024",
    excerpt: "Aprenda a criar APIs RESTful robustas, escaláveis e que seguem as melhores práticas da indústria.",
    content: `
# API RESTful: Melhores Práticas para 2024

REST (Representational State Transfer) é um estilo arquitetural para criar APIs web. Neste artigo, vamos explorar as melhores práticas para criar APIs RESTful de qualidade.

## Princípios REST

### 1. Client-Server
Separação entre cliente e servidor permite que evoluam independentemente.

### 2. Stateless
Cada requisição deve conter todas as informações necessárias. O servidor não mantém estado da sessão.

### 3. Cacheable
Respostas devem definir se podem ser cacheadas ou não.

### 4. Uniform Interface
Interface consistente entre cliente e servidor.

### 5. Layered System
Cliente não precisa saber se está conectado diretamente ao servidor final.

## Estrutura de URLs

### Use Substantivos, Não Verbos

\`\`\`bash
# ❌ Errado
GET /getUsers
POST /createUser
PUT /updateUser/123

# ✅ Correto
GET /users
POST /users
PUT /users/123
\`\`\`

### Use Plural para Coleções

\`\`\`bash
# ✅ Consistente
GET /users
GET /users/123
GET /users/123/posts
GET /users/123/posts/456
\`\`\`

### Hierarquia de Recursos

\`\`\`bash
# Posts de um usuário específico
GET /users/123/posts

# Comentários de um post específico
GET /posts/456/comments

# Comentário específico de um post
GET /posts/456/comments/789
\`\`\`

## Métodos HTTP

### GET - Buscar Recursos

\`\`\`bash
# Listar todos
GET /users

# Buscar específico
GET /users/123

# Filtrar
GET /users?role=admin&status=active

# Paginar
GET /users?page=2&limit=20

# Ordenar
GET /users?sort=createdAt&order=desc
\`\`\`

### POST - Criar Recursos

\`\`\`bash
POST /users
Content-Type: application/json

{
  "name": "Gabriel Ferreira",
  "email": "gabriel@example.com",
  "role": "developer"
}

# Resposta
201 Created
Location: /users/123

{
  "id": "123",
  "name": "Gabriel Ferreira",
  "email": "gabriel@example.com",
  "role": "developer",
  "createdAt": "2024-11-18T10:00:00Z"
}
\`\`\`

### PUT - Atualizar Completo

\`\`\`bash
PUT /users/123
Content-Type: application/json

{
  "name": "Gabriel Ferreira Silva",
  "email": "gabriel.silva@example.com",
  "role": "senior-developer"
}
\`\`\`

### PATCH - Atualizar Parcial

\`\`\`bash
PATCH /users/123
Content-Type: application/json

{
  "email": "novo.email@example.com"
}
\`\`\`

### DELETE - Remover Recursos

\`\`\`bash
DELETE /users/123

# Resposta
204 No Content
\`\`\`

## Códigos de Status HTTP

### 2xx - Sucesso

\`\`\`bash
200 OK - Requisição bem-sucedida
201 Created - Recurso criado
204 No Content - Sucesso sem conteúdo (DELETE)
\`\`\`

### 4xx - Erro do Cliente

\`\`\`bash
400 Bad Request - Dados inválidos
401 Unauthorized - Não autenticado
403 Forbidden - Não autorizado
404 Not Found - Recurso não encontrado
409 Conflict - Conflito (ex: email duplicado)
422 Unprocessable Entity - Validação falhou
\`\`\`

### 5xx - Erro do Servidor

\`\`\`bash
500 Internal Server Error - Erro genérico
502 Bad Gateway - Gateway inválido
503 Service Unavailable - Serviço indisponível
\`\`\`

## Versionamento

### URL Path (Recomendado)

\`\`\`bash
GET /api/v1/users
GET /api/v2/users
\`\`\`

### Header

\`\`\`bash
GET /api/users
Accept: application/vnd.myapi.v1+json
\`\`\`

## Paginação

\`\`\`bash
GET /users?page=2&limit=20

# Resposta
{
  "data": [...],
  "pagination": {
    "page": 2,
    "limit": 20,
    "total": 150,
    "totalPages": 8,
    "hasNext": true,
    "hasPrev": true
  }
}
\`\`\`

## Filtros e Busca

\`\`\`bash
# Filtros simples
GET /users?status=active&role=admin

# Busca
GET /users?search=gabriel

# Ordenação
GET /users?sort=createdAt&order=desc

# Campos específicos
GET /users?fields=id,name,email
\`\`\`

## Tratamento de Erros

### Formato Consistente

\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Os dados fornecidos são inválidos",
    "details": [
      {
        "field": "email",
        "message": "Email já está em uso"
      },
      {
        "field": "password",
        "message": "Senha deve ter no mínimo 8 caracteres"
      }
    ]
  }
}
\`\`\`

## Autenticação e Autorização

### JWT (JSON Web Token)

\`\`\`bash
# Login
POST /auth/login
{
  "email": "user@example.com",
  "password": "senha123"
}

# Resposta
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "...",
  "expiresIn": 3600
}

# Usar token
GET /users/me
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
\`\`\`

## Rate Limiting

\`\`\`bash
# Headers de resposta
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1699999999

# Quando limite excedido
429 Too Many Requests
{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Limite de requisições excedido",
    "retryAfter": 3600
  }
}
\`\`\`

## HATEOAS (Hypermedia)

\`\`\`json
{
  "id": "123",
  "name": "Gabriel Ferreira",
  "email": "gabriel@example.com",
  "_links": {
    "self": { "href": "/users/123" },
    "posts": { "href": "/users/123/posts" },
    "followers": { "href": "/users/123/followers" }
  }
}
\`\`\`

## Documentação

Use ferramentas como:
- **Swagger/OpenAPI**: Documentação interativa
- **Postman**: Coleções de requisições
- **API Blueprint**: Documentação em Markdown

## Segurança

1. **HTTPS sempre**: Nunca use HTTP em produção
2. **Validação de entrada**: Valide todos os dados
3. **Rate limiting**: Previna abuso
4. **CORS**: Configure corretamente
5. **Sanitização**: Previna XSS e SQL Injection

## Conclusão

Criar uma boa API REST não é apenas sobre fazer funcionar - é sobre criar uma interface intuitiva, consistente e bem documentada. Seguir essas práticas vai resultar em APIs que são um prazer de usar e manter.

Lembre-se: uma boa API é aquela que os desenvolvedores adoram usar!
    `,
    date: "2024-10-28",
    author: "Gabriel Ferreira",
    category: "Backend",
    tags: ["REST", "API", "Backend", "Web Development"],
    readTime: "14 min"
  }
];

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}

export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map(post => post.category)));
}

export function getAllTags(): string[] {
  const tags = blogPosts.flatMap(post => post.tags);
  return Array.from(new Set(tags));
}

