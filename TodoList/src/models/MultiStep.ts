interface DataStep1 {
  nome: String;
  sobrenome: String;
  idade: String;
}

interface DataStep2 {
  rua: String;
  numero: String;
  bairro: String;
}

interface DataStep3 {
  cidade: String;
  estado: String;
}

interface Step1 {
  completado: boolean;
  data: DataStep1;
}

interface Step2 {
  completado: boolean;
  data: DataStep2;
}

interface Step3 {
  completado: boolean;
  data: DataStep3;
}

export interface Form {
  step1: Step1;
  step2: Step2;
  step3: Step3;
}




