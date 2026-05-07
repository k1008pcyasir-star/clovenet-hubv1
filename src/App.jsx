import Layout from "./components/Layout";
import AppRoutes from "./app/routes";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-clovenet-bg text-slate-900">
      <ScrollToTop />
      <Layout>
        <AppRoutes />
      </Layout>
    </div>
  );
}