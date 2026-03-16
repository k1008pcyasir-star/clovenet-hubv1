export default function ZanajiraFinalResult({
  registrationScore,
  profileScore,
}) {
  const overall = Math.round(
    (registrationScore + profileScore) / 2
  );

  return (
    <div className="space-y-8">

      <h2 className="text-3xl font-bold text-gray-800">
        ZanAjira Final Assessment
      </h2>

      <div className="border rounded-2xl p-6 space-y-4">

        <div>
          <p className="text-sm text-gray-500">
            Registration Readiness
          </p>
          <p className="font-semibold">
            {registrationScore}%
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Profile Completion
          </p>
          <p className="font-semibold">
            {profileScore}%
          </p>
        </div>

        <div className="pt-4 border-t">
          <p className="text-sm text-gray-500">
            Overall ZanAjira Readiness
          </p>
          <p className="text-xl font-bold">
            {overall}%
          </p>
        </div>

        {overall >= 70 ? (
          <p className="text-green-600 font-medium">
            Uko tayari ku-apply ZanAjira 🎉
          </p>
        ) : (
          <p className="text-red-600">
            Bado unahitaji maandalizi zaidi kabla ya ku-apply.
          </p>
        )}

      </div>
    </div>
  );
}