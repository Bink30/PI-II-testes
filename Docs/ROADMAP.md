# 🗺️ Roadmap do Projeto - Dádiva Aromaterapia

Este documento detalha as fases de desenvolvimento da plataforma de e-commerce da Dádiva Aromaterapia. O objetivo é manter o foco, organizar as entregas e garantir que o escopo seja cumprido com alta qualidade.

---

## 🟢 Fase 1: Fundação e Autenticação (Status: Concluída na UI / Pendente Integração)
**Objetivo:** Estabelecer a base do projeto, identidade visual e fluxo de entrada do usuário.

- [x] Configuração inicial (Next.js, Tailwind CSS, TypeScript).
- [x] Definição de padrões de arquitetura (Código em Inglês, Interface em PT-BR).
- [x] Implementação de assets visuais otimizados (Logo nativa em SVG).
- [x] Criação de componentes UI globais reutilizáveis (`Button`, `Input`).
- [x] **UI:** Tela de Login (`/login`) com validação de formulário.
- [x] **UI:** Tela de Cadastro (`/register`) com validação de e-mail (Regex) e confirmação de senha.
- [ ] **Backend:** Configurar projeto no Firebase.
- [ ] **Backend:** Integrar Firebase Auth (Cadastro e Login reais).

---

## 🟡 Fase 2: Vitrine e Catálogo de Produtos (Status: Próxima)
**Objetivo:** Construir a interface principal onde os clientes navegam pelos produtos.

- [ ] **Backend:** Estruturar a coleção `products` no Firebase Firestore.
- [ ] **UI:** Criar o componente de Card de Produto (`ProductCard`).
- [ ] **UI:** Desenvolver a Página Inicial (`/`) com o feed de produtos.
- [ ] **Funcionalidade:** Implementar filtros por categorias (Ex: Aromaterapia, Cuidados Pessoais).
- [ ] **Funcionalidade:** Busca de produtos por nome.

---

## ⚪ Fase 3: Carrinho de Compras e Checkout (Status: Planejada)
**Objetivo:** Permitir que o cliente separe produtos e envie o pedido diretamente para o WhatsApp da loja.

- [ ] **Estado:** Configurar o gerenciamento de estado global para o carrinho (Context API ou Zustand).
- [ ] **Funcionalidade:** Adicionar, remover e alterar a quantidade de itens no carrinho.
- [ ] **UI:** Desenvolver a tela do Carrinho de Compras (`/cart`).
- [ ] **Funcionalidade:** Cálculo automático do valor total do pedido.
- [ ] **Integração:** Geração de mensagem estruturada e link dinâmico para redirecionamento ao WhatsApp da loja.

---

## ⚪ Fase 4: Painel Administrativo (Status: Planejada)
**Objetivo:** Dar autonomia aos donos da loja para gerenciar o catálogo sem precisar alterar o código.

- [ ] **Segurança:** Criar lógica de proteção de rota (Middlewares) para que apenas usuários com `role: 'admin'` acessem o painel.
- [ ] **UI:** Criar o layout base do Dashboard Administrativo (`/admin`).
- [ ] **Funcionalidade (CRUD):** Tela para adicionar novos produtos (com upload de imagem).
- [ ] **Funcionalidade (CRUD):** Tela para listar, editar e excluir produtos existentes.
- [ ] **Configurações:** Tela para alterar o número de WhatsApp recebedor e a mensagem padrão.

---

## ⚪ Fase 5: Otimização e Lançamento (Status: Futuro)
**Objetivo:** Garantir que a plataforma esteja rápida, segura e pronta para o público.

- [ ] Revisão completa de responsividade (Testes rígidos em telas de celulares).
- [ ] Refatoração e limpeza de código (remover logs, comentários desnecessários).
- [ ] Auditoria de performance e SEO (Lighthouse).
- [ ] Deploy em produção (Vercel).