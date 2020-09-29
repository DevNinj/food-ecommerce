export class CustomersModelServer {
  id_customer: number;
  id_customer_fk: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  primaryPhone: string;
  address: string;
  city:string;
  region: string;
  additional_info:string
}

export interface CustomerResponse {
  count: number;
  customers: CustomersModelServer[];
}
