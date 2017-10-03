export class Invoice{
    docType?: string;
    docSubType?: string;
    docNumber: string;
    client?: string;
    user?: string;
    supervisor?: string;
    docDate?: Date;
    PO?: string;
    CC?: string;
    costOfService?: number;
    fees?: number;
    vate?: number;
    totalAmount?: number;
    address?: string;
    att?: string; // attention
    mobile?: string;
    contractName?: string; // Premier Consultancy Services Agreement
    contractStartDate?: Date; 
    isPaid?: boolean; // yes, no
    collectDate?: Date;
    collectAmount?: number;
    paymentType?: string; // transfer, CHQ, cash
    paymentBank?: string;
    note?: string;
    diffInCollection?: number;
    due?: number;
    isDue?: boolean;
    paymentStatus?: string;
}