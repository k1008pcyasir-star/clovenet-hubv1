import { useState, useEffect } from "react";

export default function AjiraProfileSimulator({ setProfileScore }) {
  const [profile, setProfile] = useState({
    personal: false,
    academic: false,
    professional: false,
    experience: false,
    referees: false,
    documents: false,
  });

  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const completed = Object.values(profile).filter(Boolean).length;
    const percent = Math.round((completed / 6) * 100);

    setCompletion(percent);

    if (setProfileScore) {
      setProfileScore(percent);
    }
  }, [profile, setProfileScore]);

  const toggle = (key) => {
    setProfile((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="space-y-8">

      <h2 className="text-2xl font-bold">
        Ajira Portal Profile Completion
      </h2>

      <div className="border rounded-2xl p-5 space-y-3">
        <div className="flex justify-between">
          <span>Profile Completion</span>
          <span className="font-semibold">{completion}%</span>
        </div>

        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-teal-600 h-2 rounded-full"
            style={{ width: `${completion}%` }}
          />
        </div>
      </div>

      <div className="border rounded-2xl p-6 space-y-4">

        {Object.keys(profile).map((key) => (
          <div key={key} className="flex justify-between">
            <span className="capitalize">{key}</span>
            <input
              type="checkbox"
              checked={profile[key]}
              onChange={() => toggle(key)}
            />
          </div>
        ))}

      </div>

    </div>
  );
}