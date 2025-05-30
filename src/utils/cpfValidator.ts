import { cpf } from 'cpf-cnpj-validator';

export const isValidCPF = (cpfNumber: string): boolean => {
    // Check if the CPF number is provided and has exactly 11 digits
    if (!cpfNumber || cpfNumber.length !== 11) {
        return false;
    }
    return cpf.isValid(cpfNumber);
};