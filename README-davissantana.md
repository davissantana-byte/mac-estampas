# 🛍️ MacEstampas - E-commerce de Estampas Personalizadas

Este é o projeto inicial (front-end estático em HTML) da MacEstampas, uma loja virtual especializada em produtos com estampas criativas e personalizadas. O foco principal deste projeto é a **estrutura**, **navegação** e **acessibilidade** (com a implementação do VLibras).

## 🚀 Visão Geral do Projeto

A MacEstampas oferece uma variedade de produtos estampados, incluindo Canecas, Agendas, Camisetas, Mochilas, e mais. O site foi estruturado com as páginas essenciais para o fluxo de compra online.

### Principais Funcionalidades (Estrutura Estática)

* **Catálogo de Produtos:** Exibição das categorias e produtos.
* **Fluxo de Compra:** Páginas dedicadas para Carrinho, Pagamento e Checkout.
* **Gestão de Conta:** Páginas de Login, Criação de Conta e Perfil do Usuário.
* **Comunicação:** Páginas de Contato e Suporte.
* **Acessibilidade:** Implementação do VLibras Widget em todas as páginas para tradução em Libras.

## 📁 Estrutura de Arquivos

O projeto é organizado com a página principal (`index.html`) e uma pasta dedicada para as demais páginas internas (`client/`).

| Arquivo/Caminho | Descrição |
| :--- | :--- |
| `index.html` | Página inicial e vitrine de produtos. |
| `client/` | Pasta contendo todas as páginas internas. |
| `client/acessibilidade.html` | Página sobre a importância da Acessibilidade em nosso site. |
| `client/carrinho-mercadoria.html` | Página do carrinho de compras com resumo e formulário de entrega. |
| `client/contato.html` | Formulário de contato e informações de localização. |
| `client/crie-sua-conta.html` | Formulário para registro de novo usuário. |
| `client/login.html` | Formulário de acesso (login). |
| `client/pagamento.html` | Tela de checkout e métodos de pagamento. |
| `client/pagamento2.html` | Formulário para adicionar um novo endereço de entrega. |
| `client/perfil.html` | Página do perfil do usuário com opções de conta. |
| `client/produtos.html` | Página de categorias de produtos. |
| `client/sobre.html` | Informações sobre a empresa (Missão, História e Equipe). |
| `client/suporte.html` | Central de Suporte e FAQ. |
| `client/termos_condicoes.html` | Documento de Termos e Condições de Uso. |
| `client/descricao_produtos/` | Pasta contendo todas as páginas de descrição de produtos. |
| `img/` | (Diretório) Onde estão armazenadas a logomarca e as fotos dos produtos. |
| `assets/` | Diretório para recursos estáticos, como imagens, ícones, fontes e outros arquivos de mídia. |
| `css/` | Diretório que armazena todas as folhas de estilo (CSS) do projeto. |
| `css/style.css` | Arquivo principal da folha de estilos (CSS) para a aparência e layout do site. |
| `js/` | Diretório que armazena todos os scripts JavaScript. |
| `js/main.js` | Arquivo principal de scripts JavaScript, usado para interatividade e lógica de front-end. |
| `docs/` | Diretório para documentação do projeto, manuais, guias ou especificações técnicas. |
| `docs/Documentação - Orçamento.docx` | Documento simulando uma hospedagem para nosso site. |
| `docs/MacEstampas - Diário de Bordo` | Documentação sobre nossos passos dia após dia, documentando nossas dúvidas e alterações de acordo com os commits. |


## ♿ Acessibilidade e VLibras

O projeto demonstra um forte compromisso com a acessibilidade, incorporando o **VLibras Widget** em todas as páginas principais. O VLibras é um tradutor automático de Português para Libras (Língua Brasileira de Sinais), tornando o conteúdo acessível para a comunidade surda.

**Código de Integração (Presente em todos os `<body>`):**

```html
<div vw class="enabled">
  <div vw-access-button class="active"></div>
  <div vw-plugin-wrapper>
    <div class="vw-plugin-top-wrapper"></div>
  </div>
</div>
<script src="[https://vlibras.gov.br/app/vlibras-plugin.js](https://vlibras.gov.br/app/vlibras-plugin.js)"></script>
<script>
  new window.VLibras.Widget('[https://vlibras.gov.br/app](https://vlibras.gov.br/app)');
</script>
