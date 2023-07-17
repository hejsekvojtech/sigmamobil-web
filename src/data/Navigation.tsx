import Home from "../pages/Home";
import Services from "../pages/Services";
import Process from "../pages/Process";
import Faq from "../pages/Faq";
import ErrorPage from "../pages/ErrorPage";

export const navigation = [
    {
        name: "Domů",
        href: "/",
        component: <Home />,
        key: "home",
        hidden: false,
    },
    {
        name: "FAQ",
        href: "/faq",
        component: <Faq />,
        key: "faq",
        hidden: false,
    },
    {
        name: "Servisní postup",
        href: "/process",
        component: <Process />,
        key: "process",
        hidden: false,
    },
    {
        name: "Služby",
        href: "/services",
        component: <Services />,
        key: "services",
        hidden: false,
    },
    {
        name: "Test",
        href: "/services/test",
        component: "Tohle nic nedělá, testovací text... Lorem ipsum",
        key: "test",
        hidden: true,
    },
    {
        name: "404",
        href: "/404",
        component: <ErrorPage origin={window.location.href} />,
        key: "404",
        hidden: true,
    },
];
