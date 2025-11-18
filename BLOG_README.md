# Blog - Documentação

## 📝 Visão Geral

Foi adicionada uma nova seção de Blog ao portfólio, permitindo a publicação de artigos sobre tecnologia. O blog possui uma interface moderna e responsiva, com funcionalidades de busca e filtragem.

## 🎨 Funcionalidades

### Página Principal do Blog (`/blog`)
- **Listagem de Posts**: Exibe todos os artigos em cards organizados
- **Busca**: Campo de busca que filtra por título, conteúdo e tags
- **Filtros por Categoria**: Chips clicáveis para filtrar posts por categoria
- **Design Responsivo**: Layout em grid que se adapta a diferentes tamanhos de tela
- **Informações do Post**: Cada card mostra:
  - Título
  - Resumo (excerpt)
  - Categoria
  - Data de publicação
  - Tempo de leitura
  - Tags

### Página de Post Individual (`/blog/:postId`)
- **Visualização Completa**: Exibe o conteúdo completo do artigo
- **Renderização de Markdown**: Suporte a markdown com:
  - Títulos (h1, h2, h3)
  - Listas
  - Código inline e blocos de código
  - Negrito e itálico
  - Links
- **Metadados**: Mostra autor, data e tempo de leitura
- **Tags**: Lista de tags relacionadas ao artigo
- **Botão Voltar**: Navegação fácil de volta para a listagem

## 📁 Estrutura de Arquivos

```
src/
├── pages/
│   └── Blog/
│       ├── Blog.tsx          # Página de listagem de posts
│       └── BlogPost.tsx      # Página de visualização de post individual
├── components/
│   └── MarkdownRenderer/
│       └── MarkdownRenderer.tsx  # Componente para renderizar markdown
├── data/
│   └── blogPosts.ts          # Dados dos posts e funções utilitárias
└── App.tsx                   # Configuração de rotas
```

## 📊 Estrutura de Dados

Cada post do blog segue a interface:

```typescript
interface BlogPost {
  id: string;              // Identificador único
  title: string;           // Título do post
  excerpt: string;         // Resumo curto
  content: string;         // Conteúdo completo (markdown)
  date: string;           // Data de publicação (YYYY-MM-DD)
  author: string;         // Nome do autor
  category: string;       // Categoria do post
  tags: string[];         // Array de tags
  readTime: string;       // Tempo estimado de leitura
  imageUrl?: string;      // URL da imagem (opcional)
}
```

## ➕ Como Adicionar Novos Posts

1. Abra o arquivo `src/data/blogPosts.ts`
2. Adicione um novo objeto ao array `blogPosts`:

```typescript
{
  id: "6",
  title: "Seu Título Aqui",
  excerpt: "Resumo do seu artigo...",
  content: `
# Título Principal

Seu conteúdo em markdown aqui...

## Subtítulo

- Item 1
- Item 2

\`\`\`typescript
// Código de exemplo
const exemplo = "código";
\`\`\`
  `,
  date: "2024-11-18",
  author: "Seu Nome",
  category: "Categoria",
  tags: ["tag1", "tag2", "tag3"],
  readTime: "X min"
}
```

## 🎨 Personalização de Estilos

Os estilos seguem o tema do Material-UI definido em `src/theme.ts`. As cores principais são:

- **Primary**: Fundo escuro (#171616)
- **Secondary**: Azul ciano (#00d4ff)
- **Contrast**: Branco (#ffffff)

Para personalizar:
1. Edite os componentes styled em `Blog.tsx` e `BlogPost.tsx`
2. Ajuste os valores de `alpha()` para transparências
3. Modifique os valores de `borderRadius`, `padding`, etc.

## 🔍 Funcionalidades Utilitárias

O arquivo `blogPosts.ts` exporta funções úteis:

```typescript
// Buscar post por ID
getBlogPostById(id: string): BlogPost | undefined

// Buscar posts por categoria
getBlogPostsByCategory(category: string): BlogPost[]

// Buscar posts por tag
getBlogPostsByTag(tag: string): BlogPost[]

// Listar todas as categorias
getAllCategories(): string[]

// Listar todas as tags
getAllTags(): string[]
```

## 🚀 Navegação

A navegação foi integrada ao NavBar principal:
- Clique em "Blog" no menu para ir à listagem
- Clique em qualquer card de post para ver o conteúdo completo
- Use o botão "Voltar" para retornar à listagem
- Clique em outras seções do menu para voltar ao portfólio

## 📱 Responsividade

O blog é totalmente responsivo:
- **Desktop**: Grid de 3 colunas
- **Tablet**: Grid de 2 colunas
- **Mobile**: Grid de 1 coluna
- Fontes e espaçamentos se ajustam automaticamente

## 🎯 Posts de Exemplo Incluídos

1. **Clean Architecture**: Princípios de arquitetura de software
2. **React Hooks**: Guia completo sobre hooks do React
3. **TypeScript**: Benefícios e melhores práticas
4. **Git**: Comandos essenciais
5. **API RESTful**: Melhores práticas para APIs

## 🔮 Possíveis Melhorias Futuras

- [ ] Sistema de comentários
- [ ] Compartilhamento em redes sociais
- [ ] Sistema de curtidas
- [ ] Paginação para muitos posts
- [ ] Busca avançada com filtros múltiplos
- [ ] Dark/Light mode toggle
- [ ] RSS feed
- [ ] Relacionados/Sugestões de posts
- [ ] Integração com CMS (Contentful, Strapi, etc.)
- [ ] Analytics de visualizações

## 📝 Notas Técnicas

- O componente `MarkdownRenderer` processa markdown básico
- Para markdown mais complexo, considere usar `react-markdown` ou `marked`
- Os posts são armazenados em memória (array JavaScript)
- Para produção, considere usar um CMS ou banco de dados
- O roteamento usa React Router v6

