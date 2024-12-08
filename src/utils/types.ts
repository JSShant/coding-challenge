export type AccountEntry = {
  account_type: string;
  account_category: string;
  value_type: string;
  total_value: number;
  account_currency: string;
  account_name: string;
  account_code: string;
};

export type DataObject = {
  object_category: string;
  connection_id: string;
  user: string;
  object_creation_date: string;
  data: AccountEntry[];
};
