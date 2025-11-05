# Painel de Administração Shadcn

Interface de Painel de Administração desenvolvida com Shadcn e Vite. Construída com responsividade e acessibilidade em mente.

![alt text](public/images/shadcn-admin.png)

Tenho criado interfaces de painéis de administração no trabalho e para meus projetos pessoais. Sempre quis fazer uma coleção reutilizável de UI de painel para projetos futuros; e aqui está agora. Embora eu tenha criado alguns componentes personalizados, parte do código foi adaptado diretamente dos exemplos do ShadcnUI.

> No entanto, este não é um projeto inicial (template). Provavelmente farei um no futuro.

## Recursos

- Modo claro/escuro
- Responsivo
- Acessível
- Com componente Sidebar integrado
- Comando de busca global
- Mais de 10 páginas
- Componentes personalizados extras
- Suporte RTL

<details>
<summary>Componentes Personalizados (clique para expandir)</summary>

Este projeto usa componentes Shadcn UI, mas alguns foram ligeiramente modificados para melhor suporte RTL (direita para esquerda) e outras melhorias. Esses componentes personalizados diferem das versões originais do Shadcn UI.

Se você quiser atualizar componentes usando o Shadcn CLI (por exemplo, `npx shadcn@latest add <componente>`), geralmente é seguro para componentes não personalizados. Para os personalizados listados, pode ser necessário mesclar as alterações manualmente para preservar as modificações do projeto e evitar sobrescrever o suporte RTL ou outras atualizações.

> Se você não precisar de suporte RTL, pode atualizar com segurança os 'Componentes Atualizados para RTL' via Shadcn CLI, pois essas alterações são principalmente para compatibilidade RTL. Os 'Componentes Modificados' podem ter outras personalizações a considerar.

### Componentes Modificados

- scroll-area
- sonner
- separator

### Componentes Atualizados para RTL

- alert-dialog
- calendar
- command
- dialog
- dropdown-menu
- select
- table
- sheet
- sidebar
- switch

**Observações:**

- **Componentes Modificados**: Possuem atualizações gerais, potencialmente incluindo ajustes RTL.
- **Componentes Atualizados para RTL**: Possuem alterações específicas para suporte a idiomas RTL (por exemplo, layout, posicionamento).
- Para detalhes de implementação, verifique os arquivos fonte em `src/components/ui/`.
- Todos os outros componentes Shadcn UI no projeto são padrão e podem ser atualizados com segurança via CLI.

</details>

## Stack Tecnológica

**UI:** [ShadcnUI](https://ui.shadcn.com) (TailwindCSS + RadixUI)

**Ferramenta de Build:** [Vite](https://vitejs.dev/)

**Roteamento:** [TanStack Router](https://tanstack.com/router/latest)

**Verificação de Tipo:** [TypeScript](https://www.typescriptlang.org/)

**Linting/Formatação:** [Eslint](https://eslint.org/) & [Prettier](https://prettier.io/)

**Ícones:** [Lucide Icons](https://lucide.dev/icons/), [Tabler Icons](https://tabler.io/icons) (Apenas ícones de marca)

**Autenticação (parcial):** [Clerk](https://go.clerk.com/GttUAaK)

## Executar Localmente

Clone o projeto

```bash
  git clone https://github.com/satnaing/shadcn-admin.git
```

Vá para o diretório do projeto

```bash
  cd shadcn-admin
```

Instale as dependências

```bash
  pnpm install
```

Inicie o servidor

```bash
  pnpm run dev
```

## Patrocinando este projeto ❤️

Se você achar este projeto útil ou usá-lo em seu próprio trabalho, considere [me patrocinar](https://github.com/sponsors/satnaing) para apoiar o desenvolvimento e manutenção. Você também pode [me pagar um café](https://buymeacoffee.com/satnaing). Não se preocupe, cada centavo ajuda. Obrigado! 🙏

Para perguntas ou consultas sobre patrocínio, sinta-se à vontade para entrar em contato em [contact@satnaing.dev](mailto:contact@satnaing.dev).

### Patrocinador Atual

- [Clerk](https://go.clerk.com/GttUAaK) - por apoiar a implementação do Clerk neste projeto

## Autor

Criado com 🤍 por [@satnaing](https://github.com/satnaing)

## Licença

Licenciado sob a [Licença MIT](https://choosealicense.com/licenses/mit/)
