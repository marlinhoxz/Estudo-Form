"use client";

import { useState } from "react";

type InputsTypes = "email" | "password" | "text";

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

type FieldTypes = {
  id: keyof FormType;
  label: string;
  type: InputsTypes;
};

const FormField: FieldTypes[] = [
  {
    id: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "nome",
    label: "Nome",
    type: "text",
  },
  {
    id: "senha",
    label: "Senha",
    type: "password",
  },
  {
    id: "cep",
    label: "Cep",
    type: "text",
  },
  {
    id: "rua",
    label: "Rua",
    type: "text",
  },
  {
    id: "numero",
    label: "Numero",
    type: "text",
  },
  {
    id: "bairro",
    label: "Bairro",
    type: "text",
  },
  {
    id: "cidade",
    label: "Cidade",
    type: "text",
  },
  {
    id: "estado",
    label: "Estado",
    type: "text",
  },
];

export default function Home() {
  const [form, setForm] = useState<FormType>(
    FormField.reduce<FormType>((acc, field) => {
      return {
        ...acc,
        [field.id]: "",
      };
    }, {} as FormType),
  );
  const [sucess, setSucess] = useState(false);

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const body = await response.json();
      setSucess(true);
    } catch (err) {
      throw new Error("Erro ao envinar dados");
    }
  }

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = target;

    setForm({
      ...form,
      [id]: value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      {FormField.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange} />
        </div>
      ))}
      <button>Enviar</button>
      {sucess && <p>Dados Enviados com sucesso!!!!</p>}
    </form>
  );
}
