import React from "react";

const formatCPF = (cpf) => {
  if (!cpf || cpf.length < 11) return "Não informado";
  return cpf
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

const formatCelular = (celular) => {
  if (!celular || celular.length < 10) return "Não informado";
  return celular
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
};

const formatCEP = (cep) => {
  if (!cep || cep.length < 8) return "Não informado";
  return cep.replace(/\D/g, "").replace(/(\d{5})(\d{3})/, "$1-$2");
};

const formatData = (data) => {
  return data && data.match(/^\d{4}-\d{2}-\d{2}$/)
    ? data.split("-").reverse().join("/")
    : "Não informado";
};

const maskPassword = (senha) => {
  return senha
    ? senha[0] + "*".repeat(senha.length - 2) + senha.slice(-1)
    : "Não informado";
};

const UserDataDisplay = ({ formData }) => {
  const isEmpty =
    !formData ||
    Object.values(formData).every(
      (value) => value === "" || (Array.isArray(value) && value.length === 0)
    );

  return (
    <>
      <h3>Dados do Usuário</h3>
      {isEmpty && <p>Preencha o formulário para ver os dados aqui.</p>}
      {!isEmpty && (
        <div className="user-data">
          <p>
            <strong>Nome Completo:</strong>{" "}
            {formData.nomeCompleto || "Não informado"}
          </p>
          <p>
            <strong>CPF:</strong> {formatCPF(formData.cpf)}
          </p>
          <p>
            <strong>Data de Nascimento:</strong>{" "}
            {formatData(formData.dataNascimento)}
          </p>
          <p>
            <strong>Estado Civil:</strong>{" "}
            {formData.estadoCivil || "Não informado"}
          </p>
          <p>
            <strong>E-mail:</strong> {formData.email || "Não informado"}
          </p>
          <p>
            <strong>Celular:</strong> {formatCelular(formData.celular)}
          </p>
          <p>
            <strong>Endereço:</strong> {formData.endereco || "Não informado"}
          </p>
          <p>
            <strong>Número:</strong> {formData.numero || "Não informado"}
          </p>
          <p>
            <strong>Bairro:</strong> {formData.bairro || "Não informado"}
          </p>
          <p>
            <strong>Cidade:</strong> {formData.cidade || "Não informado"}
          </p>
          <p>
            <strong>UF:</strong> {formData.uf || "Não informado"}
          </p>
          <p>
            <strong>CEP:</strong> {formatCEP(formData.cep)}
          </p>
          <p>
            <strong>Login:</strong> {formData.login || "Não informado"}
          </p>
          <p>
            <strong>Senha:</strong> {maskPassword(formData.senha)}
          </p>
          <p>
            <strong>Interesses:</strong>{" "}
            {formData.interesses?.length > 0
              ? formData.interesses.join(", ")
              : "Nenhum selecionado"}
          </p>
        </div>
      )}
    </>
  );
};

export default UserDataDisplay;
