import { Dispatch } from "redux";
import { paymentServices } from "src/services";
import { ApiDefaultResponse, DefaultPagination } from "@type/index";
import { IInvoiceSummary, IInvoice, UploadReceiptData } from "@type/payments";
import {
  PaymentActionTypes,
  INVOICE_SUMMARY_LOADING,
  INVOICE_SUMMARY,
  PAID_INVOICES_LOADING,
  PAID_INVOICES,
  UNPAID_INVOICES,
  UNPAID_INVOICES_LOADING,
  PENDING_INVOICES_LOADING,
  PENDING_INVOICES,
} from "../../action-types/payments";

type PaymentStatus = "paid" | "unpaid" | "pending";
interface Params {
  [key: string]: string;
}

export const getInvoiceSummary = () => {
  return (dispatch: Dispatch<PaymentActionTypes>) => {
    dispatch({ type: INVOICE_SUMMARY_LOADING, payload: true });

    void paymentServices
      .getInvoiceSummary()
      .then(response => {
        const apiResponse = response.data as ApiDefaultResponse<IInvoiceSummary>;

        dispatch({ type: INVOICE_SUMMARY, payload: apiResponse.data });
        dispatch({ type: INVOICE_SUMMARY_LOADING, payload: false });
      })
      .catch(() => {
        dispatch({ type: INVOICE_SUMMARY_LOADING, payload: false });
      });
  };
};

export const getTeacherPayments = (payment_status: PaymentStatus, params?: object) => {
  return (dispatch: Dispatch<PaymentActionTypes>) => {
    const getParams: Params = {
      ...params,
    };

    getParams.payment_status = payment_status;

    if (payment_status === "paid") {
      dispatch({ type: PAID_INVOICES_LOADING, payload: true });
    } else if (payment_status === "unpaid") {
      dispatch({ type: UNPAID_INVOICES_LOADING, payload: true });
    } else {
      dispatch({ type: PENDING_INVOICES_LOADING, payload: true });
    }

    void paymentServices
      .getPayments(getParams)
      .then(response => {
        const apiResponse = response.data as ApiDefaultResponse<DefaultPagination<IInvoice[]>>;
        dispatch({ type: PAID_INVOICES_LOADING, payload: false });
        dispatch({ type: UNPAID_INVOICES_LOADING, payload: false });
        dispatch({ type: PENDING_INVOICES_LOADING, payload: false });

        if (payment_status === "paid") {
          dispatch({ type: PAID_INVOICES, payload: apiResponse.data });
        } else if (payment_status === "unpaid") {
          dispatch({ type: UNPAID_INVOICES, payload: apiResponse.data });
        } else {
          dispatch({ type: PENDING_INVOICES, payload: apiResponse.data });
        }
      })
      .catch(() => {
        dispatch({ type: PAID_INVOICES_LOADING, payload: false });
        dispatch({ type: UNPAID_INVOICES_LOADING, payload: false });
        dispatch({ type: PENDING_INVOICES_LOADING, payload: false });
      });
  };
};

export const uploadReceipt = async (data: UploadReceiptData) => {
  return new Promise((resolve, reject) => {
    void paymentServices
      .uploadReceipt(data)
      .then(response => {
        resolve(response.data.message);
      })
      .catch(err => {
        reject(err);
      });
  });
};
