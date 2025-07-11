import { createBrowserRouter } from "react-router-dom";
import PageHome from "./pages/page-home";
import PagePaymentSuccess from "./pages/nagorik-pay/page-payment-success";
import PagePaymentFailed from "./pages/nagorik-pay/page-payment-failed";

export const routes = createBrowserRouter([
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
  }
])