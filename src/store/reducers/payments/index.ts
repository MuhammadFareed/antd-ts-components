import {
  PaymentActionTypes,
  PAID_INVOICES,
  UNPAID_INVOICES,
  INVOICE_SUMMARY,
  INVOICE_SUMMARY_LOADING,
  PAID_INVOICES_LOADING,
  UNPAID_INVOICES_LOADING,
  PENDING_INVOICES,
  PENDING_INVOICES_LOADING,
} from "src/store/action-types/payments";
import { IInvoice, IInvoiceSummary } from "@type/payments";
import { DefaultPagination } from "@type/index";
import { actionTypes } from "src/store/action-types";

type PaymentState = {
  paidInvoices: DefaultPagination<IInvoice[]> | undefined;
  unPaidInvoices: DefaultPagination<IInvoice[]> | undefined;
  pendingInvoices: DefaultPagination<IInvoice[]> | undefined;
  paidInvoicesLoading: boolean;
  unPaidInvoicesLoading: boolean;
  pendingInvoicesLoading: boolean;
  invoiceSummary: IInvoiceSummary;
  invoiceSummaryLoading: boolean;
};

const initialState: PaymentState = {
  paidInvoices: undefined,
  unPaidInvoices: undefined,
  pendingInvoices: undefined,
  invoiceSummary: {
    total_invoices: 0,
    total_paid: "0",
    total_unpaid: "0",
    total_earnings_pkr: 0,
    total_earnings_usd: 0,
    pending: "0",
  },
  invoiceSummaryLoading: false,
  paidInvoicesLoading: false,
  unPaidInvoicesLoading: false,
  pendingInvoicesLoading: false,
};

const paymentState: PaymentState = {
  ...initialState,
};

const paymentReducer = (state: PaymentState = paymentState, action: PaymentActionTypes): PaymentState => {
  switch (action.type) {
    case PAID_INVOICES: {
      return {
        ...state,
        paidInvoices: action.payload,
      };
    }

    case UNPAID_INVOICES: {
      return {
        ...state,
        unPaidInvoices: action.payload,
      };
    }

    case PENDING_INVOICES: {
      return {
        ...state,
        pendingInvoices: action.payload,
      };
    }

    case INVOICE_SUMMARY: {
      return {
        ...state,
        invoiceSummary: action.payload,
      };
    }

    case INVOICE_SUMMARY_LOADING: {
      return {
        ...state,
        invoiceSummaryLoading: action.payload,
      };
    }

    case PAID_INVOICES_LOADING: {
      return {
        ...state,
        paidInvoicesLoading: action.payload,
      };
    }

    case UNPAID_INVOICES_LOADING: {
      return {
        ...state,
        unPaidInvoicesLoading: action.payload,
      };
    }

    case PENDING_INVOICES_LOADING: {
      return {
        ...state,
        pendingInvoicesLoading: action.payload,
      };
    }

    case actionTypes.LOG_OUT: {
      return {
        ...state,
        ...initialState,
      };
    }

    default: {
      return state;
    }
  }
};

export default paymentReducer;
