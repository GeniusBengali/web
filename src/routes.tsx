import { createHashRouter } from "react-router-dom";
import PageHome from "./pages/page-home";
import PagePaymentSuccess from "./pages/nagorik-pay/page-payment-success";
import PagePaymentFailed from "./pages/nagorik-pay/page-payment-failed";
import PagePaymentPending from "./pages/nagorik-pay/page-payment-pending";

export const routes = createHashRouter([
  {
    path: "/",
    element: <PageHome />,
  },
  {
    path: "/payment-success",
    element: <PagePaymentSuccess />,
  },
  {
    path: "/payment-cancel",
    element: <PagePaymentFailed />,
  },
  {
    path: "/payment-pending",
    element: <PagePaymentPending />,
  }
])