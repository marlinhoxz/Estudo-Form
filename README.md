# 📝 Estudo Form

Estudo desenvolvido com **Next.js e TypeScript** com o objetivo de praticar a criação, tipagem e manipulação de formulários.

Neste projeto, os dados preenchidos pelo usuário são controlados através do `useState` e enviados para uma API utilizando `fetch`.

O foco principal do projeto foi trabalhar com **TypeScript de forma mais segura**, reduzindo possíveis erros durante o desenvolvimento.

## 🚀 Tecnologias

- **Next.js**
- **React**
- **TypeScript**
- **CSS**
- **Fetch API**

## 📚 Conceitos praticados

Durante o desenvolvimento deste projeto, foram praticados conceitos como:

- `useState`
- Formulários controlados
- `onChange`
- `onSubmit`
- Eventos tipados com TypeScript
- `keyof`
- Tipagem de objetos
- `reduce`
- Funções assíncronas
- `fetch`
- Requisições `POST`
- Manipulação de respostas da API
- API Routes do Next.js

## 🔐 Tipagem

O formulário utiliza um tipo `FormType` para definir a estrutura dos dados:

```ts

type FormType = {
  nome: string;
  email: string;
  senha: string;
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
};
```

Os campos também utilizam `keyof FormType`, garantindo que os IDs definidos na configuração do formulário correspondam às propriedades existentes no tipo principal.

```ts

type InputsTypes = "email" | "password" | "text";

type FieldTypes = {
  id: keyof FormType;
  label: string;
  type: InputsTypes;
};
```

Dessa forma, o TypeScript ajuda a evitar referências a campos que não existem no formulário.

## 🔄 Funcionamento

O estado inicial do formulário é criado dinamicamente utilizando `reduce()` a partir da configuração dos campos.

```ts
FormField.reduce<FormType>((acc, field) => {
  return {
    ...acc,
    [field.id]: "",
  };
}, {} as FormType);
```

As alterações dos inputs são controladas através do `onChange`, enquanto o envio do formulário é tratado pelo `onSubmit`.

Após o envio, os dados são encaminhados para a API através de uma requisição `POST`.

## 📁 Estrutura

```text
src/
├── app/
│   ├── api/
│   │   └── route.ts
│   ├── layout.tsx
│   └── page.tsx
├── public/
└── ...
```

## ⚙️ Como executar

Clone o repositório:

```bash
git clone https://github.com/marlinhoxz/Estudo-Form.git
```

Entre na pasta:

```bash
cd Estudo-Form
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Abra no navegador:

```text
http://localhost:3000
```

## 🎯 Objetivo

Este projeto faz parte dos meus estudos de **React, Next.js e TypeScript**, com foco em compreender melhor a tipagem de formulários e a comunicação com APIs.

## 👨‍💻 Autor

**Marlon**

[GitHub](https://github.com/marlinhoxz)
