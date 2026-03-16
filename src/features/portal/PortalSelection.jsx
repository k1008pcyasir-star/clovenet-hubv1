import { useNavigate } from "react-router-dom";

export default function PortalSelection() {
  const navigate = useNavigate();

  const portals = [
    {
      name: "ZanAjira",
      description:
        "Mfumo wa ajira wa Serikali ya Mapinduzi Zanzibar.",
      path: "/portal/zanajira",
      color: "bg-blue-600",
    },
    {
      name: "Ajira Portal",
      description:
        "Mfumo wa Ajira wa Serikali ya Jamhuri ya Muungano wa Tanzania.",
      path: "/portal/ajira",
      color: "bg-teal-600",
    },
  ];

  return (
    <div className="space-y-12">

      {/* HEADER */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800">
          Chagua Mfumo wa Ajira
        </h2>
        <p className="text-gray-500 mt-2">
          Chagua portal unayotaka kujiandaa nayo kabla ya ku-apply.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">

        {portals.map((portal, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 space-y-4 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {portal.name}
            </h3>

            <p className="text-gray-600 text-sm">
              {portal.description}
            </p>

            <button
              onClick={() => navigate(portal.path)}
              className={`mt-4 px-6 py-2 text-white rounded-lg ${portal.color} hover:opacity-90 transition`}
            >
              Anza Maandalizi
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}