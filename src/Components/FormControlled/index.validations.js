import * as yup from "yup";

export const FormValidations = yup.object().shape({
  nomeCompleto: yup.string().required("Nome Completo é obrigatório"),
  cpf: yup
    .string()
    .matches(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/, "CPF inválido")
    .required("CPF é obrigatório"),
  dataNascimento: yup
    .date()
    .required("Data de Nascimento é obrigatória.")
    .nullable(), // Isso permite que o valor seja null, o que é útil para campos de data vazios
  estadoCivil: yup.string().required("Estado Civil é obrigatório."),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  celular: yup
    .string()
    .matches(
      /\(\d{2}\)\s\d{5}-\d{4}/,
      "Celular inválido, formato correto: (XX) XXXXX-XXXX"
    )
    .required("Celular é obrigatório"),
  endereco: yup.string().required("Endereço é obrigatório"),
  numero: yup.string().required("Número é obrigatório"),
  bairro: yup.string().required("Bairro é obrigatório"),
  cidade: yup.string().required("Cidade é obrigatória"),
  uf: yup.string().required("UF é obrigatória"),
  cep: yup
    .string()
    .matches(/^\d{5}-\d{3}$/, "CEP inválido, formato correto: XXXXX-XXX")
    .required("CEP é obrigatório"),
  login: yup.string().required("Login é obrigatório"),
  senha: yup
    .string()
    .min(8, "Senha deve ter no mínimo 8 caracteres")
    .max(20, "Senha deve ter no máximo 20 caracteres")
    .required("Senha é obrigatória"),
  interesses: yup
    .array()
    .min(1, "Selecione ao menos um interesse")
    .required("Interesses são obrigatórios"),
});
