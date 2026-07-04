export default function NotFoundPage({ onBack }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-10 shadow-soft text-center">
      <div className="mb-6 rounded-full bg-slate-100 px-6 py-5 text-5xl">😢</div>
      <h2 className="text-3xl font-semibold text-slate-900">Nada foi encontrado</h2>
      <p className="mt-3 text-slate-500">Tente outro CEP</p>
      <button
        onClick={onBack}
        className="mt-8 rounded-2xl bg-sky-600 px-6 py-3 text-white transition hover:bg-sky-700"
      >
        Voltar
      </button>
    </div>
  );
}
