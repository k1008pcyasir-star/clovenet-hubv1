import { useState, useEffect } from "react";

export default function ZanajiraProfileSimulator({ setProfileScore }) {
  const [profile, setProfile] = useState({
    personal: false,
    academic: false,
    certificates: false,
    computer: false,
    referees: false,
    declaration: false,
  });

  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const completed = Object.values(profile).filter(Boolean).length;
    const percent = Math.round((completed / 6) * 100);

    setCompletion(percent);

    // 👇 Send score to parent
    if (setProfileScore) {
      setProfileScore(percent);
    }

  }, [profile, setProfileScore]);

  const toggle = (field) => {
    setProfile((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          ZanAjira Profile Completion
        </h2>
        <p className="text-gray-500 mt-1">
          Hakikisha profile yako imekamilika kabla ya ku-apply.
        </p>
      </div>

      {/* PROGRESS */}
      <div className="border rounded-2xl p-5 space-y-3">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">
            Profile Completion
          </span>
          <span className="font-semibold">{completion}%</span>
        </div>

        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              completion >= 70 ? "bg-green-600" : "bg-yellow-500"
            }`}
            style={{ width: `${completion}%` }}
          />
        </div>

        {completion >= 70 ? (
          <p className="text-green-600 text-sm font-medium">
            Umeruhusiwa ku-apply ZanAjira 🎉
          </p>
        ) : (
          <p className="text-yellow-600 text-sm">
            Lazima ufikie angalau 70% kukamilisha profile.
          </p>
        )}
      </div>

      {/* CHECKLIST */}
      <div className="border rounded-2xl p-6 space-y-4">

        {[
          { key: "personal", label: "Nimejaza Personal Details" },
          { key: "academic", label: "Nimejaza Academic Qualifications" },
          { key: "certificates", label: "Nime-upload Certificates (PDF <2MB)" },
          { key: "computer", label: "Nimejaza Computer Literacy" },
          { key: "referees", label: "Nimeweka Referees" },
          { key: "declaration", label: "Nimefanya Declaration ya Ukweli" },
        ].map((item) => (
          <div
            key={item.key}
            className="flex justify-between items-center border-b py-2"
          >
            <span className="text-sm">{item.label}</span>
            <input
              type="checkbox"
              checked={profile[item.key]}
              onChange={() => toggle(item.key)}
            />
          </div>
        ))}

      </div>
    </div>
  );
}