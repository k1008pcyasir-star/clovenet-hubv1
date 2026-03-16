import Layout from "./components/Layout";
import AppRoutes from "./app/routes";

export default function App() {
  return (
    <div className="min-h-screen bg-clovenet-bg text-slate-900">
      <Layout>
        <AppRoutes />
      </Layout>
    </div>
  );
}