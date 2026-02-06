import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./scenes/components/layout/RootLayout";
import Homepage from "./scenes/pages/homepage/Homepage";
import Visas from "./scenes/pages/visas/Visas";
import VisasSingle from "./scenes/pages/visas/VisasSingle";
import Evisas from "./scenes/pages/visas/Evisas";
import EvisasSingle from "./scenes/pages/visas/EvisasSingle";
import Contact from "./scenes/pages/contact/Contact";
import VisaProcess from "./scenes/pages/visa-process/VisaProcess";
import UsPassport from "./scenes/pages/us-passport/UsPassport";
import Blog from "./scenes/pages/blog/BlogPage";
import BlogSinglePage from "./scenes/pages/blog/BlogSinglePage";
import PrivacyPolicy from "./scenes/pages/terms/PrivacyPolicy";
import TermsConditions from "./scenes/pages/terms/TermsConditions";
import RefundPolicy from "./scenes/pages/terms/RefundPolicy";
import UkEtaVisa from "./scenes/pages/visas/UkEtaVisa";
import NewPassport from "./scenes/pages/us-passport/NewPassport";
import PassportRenewal from "./scenes/pages/us-passport/PassportRenewal";
import ChildPassport from "./scenes/pages/us-passport/ChildPassport";
import LostPassport from "./scenes/pages/us-passport/LostPassport";
import PassportNameChange from "./scenes/pages/us-passport/PassportNameChange";
import SecondLimitedPassport from "./scenes/pages/us-passport/SecondLimitedPassport";
import AdditionalRequirements from "./scenes/pages/us-passport/AdditionalRequirements";
import PassportPhotoServices from "./scenes/pages/photo-services/PassportPhotoServices";
import VisaPhotoServices from "./scenes/pages/photo-services/VisaPhotoServices";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/visas", element: <Visas /> },
      { path: "/visas/:slug", element: <VisasSingle /> },
      { path: "/e-visas", element: <Evisas /> },
      { path: "/e-visas/:slug", element: <EvisasSingle /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/visa-process", element: <VisaProcess /> },
      {
        path: "/us-passport",
        element: <UsPassport />,
        children: [
          { path: "new-passport", element: <NewPassport /> },
          { path: "passport-renewal", element: <PassportRenewal /> },
          { path: "child-passport", element: <ChildPassport /> },
          { path: "lost-passport", element: <LostPassport /> },
          { path: "passport-name-change", element: <PassportNameChange /> },
          {
            path: "second-limited-passport",
            element: <SecondLimitedPassport />,
          },
          {
            path: "additional-requirements",
            element: <AdditionalRequirements />,
          },
        ],
      },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:slug", element: <BlogSinglePage /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/terms-conditions", element: <TermsConditions /> },
      { path: "/refund-policy", element: <RefundPolicy /> },
      { path: "/uk-eta-vise", element: <UkEtaVisa /> },
      { path: "/passport-photo-services", element: <PassportPhotoServices /> },
      { path: "/visa-photo-services", element: <VisaPhotoServices /> },
    ],
  },
]);

function App() {
  return (
    <div className="fl-page">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
