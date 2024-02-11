import { DefaultPagination } from "@type/index";
import { IInvoice, IInvoiceSummary } from "@type/payments";

export const PAID_INVOICES = "PAID_INVOICES";
export const PAID_INVOICES_LOADING = "PAID_INVOICES_LOADING";
export const UNPAID_INVOICES = "UNPAID_INVOICES";
export const UNPAID_INVOICES_LOADING = "UNPAID_INVOICES_LOADING";
export const PENDING_INVOICES = "PENDING_INVOICES";
export const PENDING_INVOICES_LOADING = "PENDING_INVOICES_LOADING";
export const INVOICE_SUMMARY = "INVOICE_SUMMARY";
export const INVOICE_SUMMARY_LOADING = "INVOICE_SUMMARY_LOADING";

interface PaidInvoicesAction {
  type: typeof PAID_INVOICES;
  payload: DefaultPagination<IInvoice[]>;
}

interface UnPaidInvoicesAction {
  type: typeof UNPAID_INVOICES;
  payload: DefaultPagination<IInvoice[]>;
}

interface PendingInvoicesAction {
  type: typeof PENDING_INVOICES;
  payload: DefaultPagination<IInvoice[]>;
}

interface PendingInvoicesLoadingAction {
  type: typeof PENDING_INVOICES_LOADING;
  payload: boolean;
}

interface PaidInvoicesLoadingAction {
  type: typeof PAID_INVOICES_LOADING;
  payload: boolean;
}

interface UnPaidInvoicesLoadingAction {
  type: typeof UNPAID_INVOICES_LOADING;
  payload: boolean;
}

interface InvoiceSummaryAction {
  type: typeof INVOICE_SUMMARY;
  payload: IInvoiceSummary;
}

interface InvoiceSummaryLoadingAction {
  type: typeof INVOICE_SUMMARY_LOADING;
  payload: boolean;
}

export type PaymentActionTypes =
  | PaidInvoicesAction
  | UnPaidInvoicesAction
  | PendingInvoicesAction
  | PaidInvoicesLoadingAction
  | UnPaidInvoicesLoadingAction
  | PendingInvoicesLoadingAction
  | InvoiceSummaryAction
  | InvoiceSummaryLoadingAction;
