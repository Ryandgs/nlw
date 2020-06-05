# :rocket: NextLevelWeek 1.0 

## **"O NLW é uma experiência online com muito conteúdo prático, desafios e hacks que vão te ajudar avançar para o próximo nível."**

<p align="center">
  <img src="markdown/image/nlw.png">
</p>

Oferecido por: **[Rocketseat](https://www.rocketseat.com.br)**

# :computer: Tecnologias

* React
* React Native
* Node.JS
* TypeScript

<br/>

# :green_book: O repositório
"Faaaaaala dev!"
Bom... O objetivo deste arquivo é anotar informações importantes destacadas durante o andamento das aulas. O arquivo será distribuído nos canais de aprendizado com o intuito de auxiliar devs após o fechamento das aulas, para que você possa continuar codando e desenvolvendo projetos Node.JS (pensando na experiência própria de esquecer diversas configurações, comandos ou conceitos semanas depois de uma semana omnistack), até o momento em que esteja tudo na memória. Algo totalmente pensado de dev para dev, um pouco trabalhoso (uma aula de 2 horas acaba durando umas 5/6 horas, alias, também estou aprendendo e por isso suas contribuições e correções são extremamente valiosas), mas uma iniciativa para realmente ajudar e motivar a comunidade, feito com muito carinho. 

## :bangbang: Chega de enrolação!
Não esqueça de configurar devidamente seu ambiente e vamos lá ;)

*Este conteúdo esta sendo desenvolvido com base nas aulas do modulo **Booster***

#### *Sinta-se livre para colaborar, toda ajuda é bem vinda ;)*
<br/>

# Day 1

## :camera: A aplicação

<p align="center">
  <img src="markdown/image/ecoleta_logo.png">
</p>

A aplicação desenvolvida na NLW será um Marketplace de coleta de resíduos com o objetivo de ajudar pessoas a encontrarem pontos de coleta de forma eficiente

<p align="center">
  <img src="markdown/image/web.png">
</p>

Para visualizar a prototipação completa do projeto [clique aqui](https://www.figma.com/file/9TlOcj6l7D05fZhU12xWT3/Ecoleta-(Booster)?node-id=0%3A1)

## Iniciando o **Node.JS**
### Para iniciar um projeto node utilizar:
```bash
$ npm init -y
$ npm install express
```
<br/>

## Configurando e Utilizando **TypeScript**
### Tipagem para o *express*
```bash
$ npm install @types/express -D
```

**Obs:** "-D" para dependência de desenvolvimento! 

<br/>

### Instalando o TS
```bash
$ npm install ts-node -D
$ npm install typescript -D
```

<br/>

### Criando arquivo de configuração TS
```bash
$ npx tsc --init
```
<br/>

### Gerando JS
```bash
$ npx ts-node <dir>
```
<br/>

### Pacote para reiniciar o server automaticamente
```bash
$ npm install ts-node-dev -D
$ npx ts-node-dev <dir>
```
<br/>

## Configurando **ts-node-dev** no package.json
### Para reiniciar automaticamente o servidor ao salvar arquivos. 
Em *package.json*:
```json
"scripts": {
  "dev": "ts-node-dev <dir>"
}
```
```bash
$ npm run dev
# ou
$ yarn dev
```

<br/>

## Iniciando projeto React
```bash
$ npx create-react-app web --template=typescript
```

<br/>

### Recomendações:
- Whimsical: Aplicação web para criação de Fluxogramas

- Figma: Aplicação web para Prototipação / Wireframe

- Notion: To-do List
<br/>

**Obs:** Para iniciantes, recomendo também criar seu próprio repositorio no github, iniciando assim seu portfólio além de ser uma ótima maneira de começar a aprender sobre essa ferramenta!

Ir para: [Day 2](markdown/day2.md)