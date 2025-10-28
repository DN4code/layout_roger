# CryptoPay - Layout de Apresentação

Um layout completo para apresentação de uma carteira digital/sistema de pagamentos desenvolvido em HTML, CSS e JavaScript puro, sem necessidade de backend.

## 📋 Funcionalidades

### 🏠 Página Inicial (`index.html`)
- Botões para "Criar Conta" e "Entrar"
- Modal de login
- Informações de contato no rodapé (telefone e email fictícios)
- Design responsivo com gradiente moderno

### 📝 Cadastro (`cadastro.html`)
- Formulário completo com todos os campos solicitados:
  - Nome completo
  - Telefone (com formatação automática)
  - Endereço completo
  - CNPJ (com formatação automática)
  - Upload de contrato social
  - Upload de documento do sócio
  - Upload de comprovante de endereço
  - Email e senha
- Validação de formulário
- Aceite de termos de uso

### 👨‍💼 Área Administrativa (`admin.html`)
- Lista de clientes com:
  - Número da conta
  - Nome do cliente
  - CNPJ
  - Data de cadastro
  - Status (Pendente, Aprovado, Rejeitado)
  - Ações (Ver detalhes, Aprovar, Rejeitar, Suspender)
- Filtros por status
- Campo de busca
- Modal com detalhes completos do cliente
- Paginação (interface)

### 💳 Dashboard do Cliente (`dashboard.html`)
- **Saldos:**
  - Saldo em BRL
  - Saldo em USDT
  - Cotação atual do USDT
- **Área PIX:**
  - Chave PIX
  - Botão para copiar chave
  - Área para QR Code
- **Wallet USDT:**
  - Formulário para enviar USDT
  - Campo para endereço da carteira
  - Confirmação com senha
  - Calculator de conversão USDT → BRL
- **Histórico de transações**

## 🎨 Design

- **Tema:** Moderno com gradientes e cards
- **Cores:** Azul, verde e gradientes roxo/azul
- **Ícones:** Font Awesome 6.0
- **Layout:** Responsivo (mobile-first)
- **Efeitos:** Glassmorphism, sombras e transições suaves

## 🚀 Como usar

1. Abra o arquivo `index.html` em qualquer navegador moderno
2. Navegue pelas diferentes páginas:
   - **Cadastro:** Clique em "Criar Conta"
   - **Login:** Clique em "Entrar"
     - Para área admin: use um email com "admin" (ex: admin@test.com)
     - Para dashboard cliente: use qualquer outro email
   - **Dashboard:** Após fazer login como cliente
   - **Admin:** Após fazer login como administrador

## 📁 Estrutura do Projeto

```
layout-roger/
├── index.html          # Página inicial
├── cadastro.html       # Formulário de cadastro
├── admin.html          # Área administrativa
├── dashboard.html      # Dashboard do cliente
├── css/
│   └── style.css       # Estilos principais
├── js/
│   └── script.js       # Funcionalidades JavaScript
└── images/             # Pasta para imagens (vazia)
```

## 🔧 Tecnologias Utilizadas

- **HTML5:** Estrutura semântica
- **CSS3:** Estilos avançados, gradientes, flexbox, grid
- **JavaScript:** Interatividade e funcionalidades
- **Font Awesome:** Ícones
- **Design Responsivo:** Compatível com mobile e desktop

## 📱 Responsividade

O layout foi desenvolvido para funcionar perfeitamente em:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Monitores grandes (1200px+)

## ⚡ Funcionalidades JavaScript

### Formatação Automática
- Telefone: (11) 99999-9999
- CNPJ: 12.345.678/0001-90

### Validações
- Confirmação de senha
- Validação de endereço de carteira
- Verificação de saldo para transações

### Simulações
- Login (admin/cliente)
- Aprovação/rejeição de cadastros
- Envio de USDT com confirmação de senha
- Conversão USDT para BRL
- Atualização de cotação em tempo real
- Cópia de chave PIX

## 🎯 Dados Fictícios

O projeto inclui dados fictícios para demonstração:
- Clientes pré-cadastrados na área admin
- Saldos e transações no dashboard
- Cotação do USDT com variação simulada
- Contatos: (11) 99999-8888 e contato@cryptopay.com.br

## 🔐 Credenciais de Teste

- **Admin:** Qualquer email contendo "admin" + qualquer senha
- **Cliente:** Qualquer email sem "admin" + qualquer senha

## 📈 Melhorias Futuras

Para uma implementação real, considere adicionar:
- Backend com API REST
- Banco de dados
- Autenticação JWT
- Integração com APIs de cotação
- Upload real de documentos
- Geração de QR Code PIX
- Integração com blockchain para USDT
- Notificações push
- Histórico completo de transações
- Relatórios e exportação

## 📄 Licença

Este é um projeto de demonstração/layout para apresentação. Livre para uso e modificação.

---

**Desenvolvido para demonstração de interface de carteira digital/sistema de pagamentos.**