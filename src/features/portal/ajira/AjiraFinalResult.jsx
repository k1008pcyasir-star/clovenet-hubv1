export default function AjiraFinalResult({
  registrationScore,
  profileScore,
}) {
  const overall = Math.round(
    (registrationScore + profileScore) / 2
  );

  return (
    <div className="space-y-6">

      <h2 className="text-3xl font-bold">
        Ajira Portal Final Assessment
      </h2>

      <div className="border rounded-2xl p-6 space-y-4">

        <p>Registration: {registrationScore}%</p>
        <p>Profile Completion: {profileScore}%</p>

        <div className="border-t pt-3">
          <p className="text-xl font-bold">
            Overall Readiness: {overall}%
          </p>
        </div>

        {overall >= 70 ? (
          <p className="text-green-600">
            Uko tayari ku-apply Ajira Portal 🎉
          </p>
        ) : (
          <p className="text-red-600">
            Bado unahitaji maandalizi zaidi.
          </p>
        )}

      </div>
    </div>
  );
}