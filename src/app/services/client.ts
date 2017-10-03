export class Client{
    name: string;
    legalName?: string;
    code: number;
    address?: string;
    att?: string; // attention
    mobile?: string;
    contractName?: string; // Premier Consultancy Services Agreement
    contractStartDate?: Date; 
    psSubCompany?: string; // PC, PS
    paymentInAdvance?: boolean; // yes, no    
    paymentTerm?: number; // number of days
    paymentTermDesc?: string // starting from payment, from invoice date, from receiving date
    vatApplicable?: boolean;
    currency?: string;
    language?: string;
    email?: string;
    emailCc?: string;
    subCompany?: string;
}