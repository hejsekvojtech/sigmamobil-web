import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { navigation } from "./data/Navigation";
import ScrollToTop from "./utils/ScrollToTop";
import TopBanner from "./components/page/TopBanner";
import Navbar from "./components/page/Navbar";
import Footer from "./components/page/Footer";
import PageContent from "./components/page/PageContent";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <TopBanner />
                <Navbar />
                <PageContent>
                    <Routes>
                        {navigation.map((item) => (
                            <Route
                                path={item.href}
                                element={item.component}
                                key={item.key}
                            />
                        ))}
                        <Route path="*" element={<Navigate to="/404" />} />
                    </Routes>
                </PageContent>
                <Footer />
            </ScrollToTop>
        </BrowserRouter>
    );
}

export default App;
