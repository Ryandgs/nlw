# NextLevelWeek Day 01
O objetivo deste readme é anotar informações importantes destacadas durante o andamento das aulas. O arquivo sera distribuido nos canais de aprendizado.

#### *Sinta-se livre para colaborar ;)*
<br/>

## Iniciando o **Node.JS**
### Para iniciar um projeto node utilizar:
```bash
npm init -y
npm install express
```
<br/>

## Configurando e Utilizando **TypeScript**
### Tipagem para o *express*
```bash
npm install @types/express -D
```

**Obs:** "-D" para dependência de desenvolvimento! 

<br/>

### Instalando o TS
```bash
npm install ts-node -D
npm install typescript -D
```

<br/>

### Criando arquivo de configuração TS
```bash
npx tsc --init
```
<br/>

### Gerando JS
```bash
npx ts-node <dir>
```
<br/>

### Pacote para reiniciar o server automaticamente
```bash
npm install ts-node-dev -D
npx ts-node-dev ::dir
```
<br/>

## Configurando **ts-node-dev** no package.json
### Para reiniciar automaticamente o servidor ao salvar arquivos. 
Em *package.json*:
```json
"scripts": {
    "dev": "ts-node-dev ::dir"
}
```
```bash
npm run dev
```

<br/>

## Iniciando projeto React
```bash
npx create-react-app web --template=typescript
```

<br/>

### Sites interessantes:
- Whimsical: Fluxogramas

- Figma: Prototipação / Wireframe
