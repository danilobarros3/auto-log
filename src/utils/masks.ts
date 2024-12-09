export function PhoneMask(e: any) {
  let value = e;

  value = value?.replace(/\D/g, "");
  value = value
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
    .replace(/(-\d{4})\d+?$/, "$1");
  return value;
}

export const maskCpfCnpj = (v: string) => {
  v = v.replace(/\D/g, "");

  if (v.length <= 11) {
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  } else {
    v = v.replace(/^(\d{2})(\d)/, "$1.$2");
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
    v = v.replace(/(\d{4})(\d)/, "$1-$2");
  }

  return v;
};

export function CpfMask(e: any) {
  let value = e;
  value = value?.replace(/\D/g, "");
  value = value?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
  return value;
}

export function dateMask(e: any) {
  let value = e;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "$1/$2");
  value = value.replace(/(\d{2})(\d)/, "$1/$2");

  return value;
}

export function formatCreditCardNumber(cardNumber: any) {
  const cleanedNumber = cardNumber.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  const chunks = cleanedNumber.match(/.{1,4}/g); // Divide em grupos de 4 dígitos

  if (chunks) {
    return chunks.join(" ");
  } else {
    return cleanedNumber;
  }
}

export function formatCEP(cep: any) {
  cep = cep.replace(/\D/g, "");

  // Aplica a máscara
  cep = cep.replace(/^(\d{5})(\d{3})$/, "$1-$2");

  return cep;
}

export function FormatMoneyDynamic(v: any) {
  if (typeof v !== "string") {
    v = String(v);
  }
  v = v.replace(".", "").replace(",", "").replace(/\D/g, "");

  const options = { minimumFractionDigits: 2 };
  const result = new Intl.NumberFormat("pt-BR", options).format(
    parseFloat(v) / 100,
  );

  return "R$ " + result;
}

export function FormatMoneyDynamicWithoutSymbol(v: any) {
  if (typeof v !== "string") {
    v = String(v);
  }
  v = v.replace(".", "").replace(",", "").replace(/\D/g, "");

  const options = { minimumFractionDigits: 2 };
  const result = new Intl.NumberFormat("pt-BR", options).format(
    parseFloat(v) / 100,
  );

  return result;
}

export function removingFormatMoneyDynamicMask(v: any) {
  if (typeof v !== "string") {
    v = String(v);
  }
  v = v.replace(".", "").replace(",", "").replace(/\D/g, "");
  return Number(v);
}

export function formatCurrencyMoneyDouble(value: any) {
  if (isNaN(value)) return "";

  let formattedValue = parseFloat(value).toFixed(2).toString();

  let parts = formattedValue.split(".");

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return parts.join(",");
}

export function parseCurrency(value: any) {
  const valueReplaced = String(value).replace(/[^0-9s]/g, "");
  let valueDouble = (Number(valueReplaced) / 100).toFixed(2);

  return Number(valueDouble).toFixed(2);
}
