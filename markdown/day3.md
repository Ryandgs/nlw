# :rocket: Day 3

<img src="image/nlw.jpg">

# :earth_americas: Criando nossa aplicação WEB utilizando **React** com TS

## Recapitulando

Para iniciar um projeto React, digite no terminal:
```bash
$ npx create-react-app web --template=typescript
```

Start do backend do projeto:
```bash
$ npm run dev
# ou
$ yarn dev
```

## Conceitos
JSX: Sintaxe de HTML dentro do JavaScript
Componentes: Componentes permitem você dividir a UI (User Interface) em partes independentes, reutilizáveis, ou seja, trata cada parte da aplicação como um bloco isolado, livre de outras dependências externas. 

Importante ver também **Imutabilidade**, Ex:

## Limpando a estrutura do React

Em *public/* deixar apenas o arquivo *index.html*
<br/>

Limpar *src/App.css*
<br/>

Em *src/* excluir os seguintes arquivos:
- App.test.tsx
- index.css
- logo.svg
- serviceWorker.ts
- setupTests.ts

<br/>
Remover também o arquivo *README.md*

**Obs:** Lembre-se de revisar os arquivos e remover as requisições feitas aos arquivos deletados 

## Para inicializar sua aplicação React
```bash
$ npm start
```

## Pacote de icones para React
```bash
$ npm install react-icons
```

## Troca de página (redirecionamento de rotas) REACT
```bash
$ npm install react-router-dom
```

Ao importar o pacote receberemos o erro de declaração de tipos. Para resolver isso utilize:
```bash
$ npm install @types/react-router-dom -D
```

## Integrando a API de mapa

Não utilizaremos o Google Maps devido a algumas regras de uso da API (cadastrar conta, cadastrar cartão de crédito...). Sendo assim, utilizaremos o Leaftlet, uma API de mapa gratuita! Para mais informações sobre o Leaftlet [clique aqui](https://leafletjs.com/). Para react-leaftlet [clique aqui](https://react-leaflet.js.org/)

Primeiramente vamos instala-la
```bash
$ npm install leaflet react-leaflet
# Não esqueça de instalar a tipagem (como dependencia de desenvolvimento)
$ npm install @types/react-leaflet -D
```

## Fazendo requisições para nossa API

Para isso utilizaremos o Axios
```bash
$ npm install axios
```

## Linux tips
Caso você esteja obtendo o seguinte erro: "System limit for number of file watchers reached" [clique aqui](https://stackoverflow.com/questions/55763428/react-native-error-enospc-system-limit-for-number-of-file-watchers-reached)

Ir para: [Day 4](day4.md)