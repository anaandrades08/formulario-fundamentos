import React, { useState } from "react";
import Input from "./Input";
import { FormValidations } from "./index.validations";
import useValidation from "../../hooks/useValidation";

const initialFormState = {
  nomeCompleto: "",
  cpf: "",
  dataNascimento: null,
  estadoCivil: "",
  email: "",
  celular: "",
  endereco: "",
  bairro: "",
  cidade: "",
  numero: "",
  uf: "",
  cep: "",
  login: "",
  senha: "",
  interesses: [],
};

const formatInput = (name, value) => {
  switch (name) {
    case "cpf":
      return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    case "cep":
      return value.replace(/\D/g, "").replace(/(\d{5})(\d{1,3})$/, "$1-$2");
    case "celular":
      return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d{4})$/, "$1-$2");
    default:
      return value;
  }
};

const UserForm = ({ setFormData }) => {
  const [form, setForm] = useState(initialFormState);

  const setInput = (inputName) => (e) => {
    let newValue =
      e.target.type === "checkbox"
        ? e.target.checked
          ? [...form.interesses, e.target.value]
          : form.interesses.filter((item) => item !== e.target.value)
        : e.target.value;

    // Se for o campo dataNascimento, garantir que seja uma data válida
    if (inputName === "dataNascimento") {
      // Caso o valor seja uma string vazia, manter como null ou vazio
      newValue = newValue ? new Date(newValue).toISOString().split("T")[0] : "";
    } else {
      // Aplica a formatação nos campos apropriados
      newValue = formatInput(inputName, newValue);
    }
    setForm((form) => ({ ...form, [inputName]: newValue }));
  };

  const handleReset = () => {
    setForm(initialFormState);
    setErrors({}); // Limpa os erros
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(form); // Atualiza os dados no App.js
  };

  // Usando o hook useValidation para validação dos dados do formulário
  const { errors } = useValidation(form, FormValidations);

  return (
    <>
      <h3>Cadastro de Usuário</h3>
      <form className="form-container" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <Input
            name="nomeCompleto"
            label="Nome Completo"
            onChange={setInput("nomeCompleto")}
            value={form.nomeCompleto}
            error={errors.nomeCompleto}
            required
          />
          <Input
            name="cpf"
            label="CPF"
            onChange={setInput("cpf")}
            value={form.cpf}
            error={errors.cpf}
            required
          />
          <Input
            type="date"
            name="dataNascimento"
            label="Data de Nascimento"
            onChange={setInput("dataNascimento")}
            value={form.dataNascimento}
            error={errors.dataNascimento}
            required
          />
          <label>Estado Civil:</label>
          <select
            name="estadoCivil"
            onChange={setInput("estadoCivil")}
            value={form.estadoCivil}
            error={errors.estadoCivil}
            required
          >
            <option value="">Selecione</option>
            <option value="Solteiro">Solteiro</option>
            <option value="Casado">Casado</option>
            <option value="Viuvo">Viúvo</option>
            <option value="Divorciado">Divorciado</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>Dados de Contato</legend>
          <Input
            type="email"
            name="email"
            label="E-mail"
            onChange={setInput("email")}
            value={form.email}
            error={errors.email}
            required
          />
          <Input
            name="celular"
            label="Celular"
            onChange={setInput("celular")}
            value={form.celular}
            error={errors.celular}
            required
          />
          <Input
            name="endereco"
            label="Endereço"
            onChange={setInput("endereco")}
            value={form.endereco}
            error={errors.endereco}
            required
          />
          <Input
            name="numero"
            label="Número"
            onChange={setInput("numero")}
            value={form.numero}
            error={errors.numero}
            required
          />
          <Input
            name="bairro"
            label="Bairro"
            onChange={setInput("bairro")}
            value={form.bairro}
            error={errors.bairro}
            required
          />
          <Input
            name="cidade"
            label="Cidade"
            onChange={setInput("cidade")}
            value={form.cidade}
            error={errors.cidade}
            required
          />
          <Input
            name="uf"
            label="UF"
            onChange={setInput("uf")}
            value={form.uf}
            error={errors.uf}
            required
          />
          <Input
            name="cep"
            label="CEP"
            onChange={setInput("cep")}
            value={form.cep}
            error={errors.cep}
            required
          />
        </fieldset>

        <fieldset>
          <legend>Dados de Cadastro</legend>
          <Input
            name="login"
            label="Login"
            onChange={setInput("login")}
            value={form.login}
            error={errors.login}
            required
          />
          <Input
            type="password"
            name="senha"
            label="Senha"
            onChange={setInput("senha")}
            value={form.senha}
            error={errors.senha}
            required
          />
        </fieldset>

        <fieldset className="interests-container">
          <legend>Interesses</legend>
          {[
            "tecnologia",
            "esportes",
            "automoveis",
            "culinaria",
            "politica",
            "policial",
            "tempo",
            "cultura",
            "economia",
          ].map((interesse) => (
            <div key={interesse}>
              <input
                type="checkbox"
                id={interesse}
                name="interesses"
                value={interesse}
                onChange={setInput("interesses")}
                checked={form.interesses.includes(interesse)}
              />
              <label htmlFor={interesse}>{interesse.toUpperCase()}</label>
            </div>
          ))}
        </fieldset>

        <div className="form-buttons">
          <button type="submit" className="btn-primary">
            Enviar
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={handleReset}
            style={{ marginLeft: "10px" }}
          >
            Limpar
          </button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
