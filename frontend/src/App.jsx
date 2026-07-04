import { useState } from 'react';
import NotFoundPage from './components/NotFoundPage';

function App() {
  const [cep, setCep] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [notFound, setNotFound] = useState(false);

  const handleSearch = async () => {
    setError('');
    setNotFound(false);
    setData(null);

    const cleanedCep = cep.replace(/\D/g, '');
    if (!/^\d{8}$/.test(cleanedCep)) {
      setError('Digite um CEP válido de 8 dígitos.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`http://localhost:8080/api/cep/${cleanedCep}`);

      if (response.status === 404) {
        setNotFound(true);
        return;
      }

      if (!response.ok) {
        throw new Error('Erro ao consultar o CEP');
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError('Não foi possível consultar o CEP. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setCep('');
    setData(null);
    setError('');
    setNotFound(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl space-y-6">
        {notFound ? (
          <NotFoundPage onBack={handleReset} />
        ) : (
          <div className="bg-white rounded-3xl shadow-soft border border-slate-200 p-8">
            <div className="text-center mb-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Consulta de CEP</p>
              <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-slate-900">Encontre seu endereço</h1>
              <p className="mt-2 text-slate-500">Digite um CEP de 8 dígitos para ver os dados completos.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
              <input
                value={cep}
                onChange={(event) => setCep(event.target.value)}
                placeholder="Digite o CEP sem traços"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
              />
              <button
                onClick={handleSearch}
                disabled={loading}
                className="rounded-2xl bg-sky-600 px-6 py-3 text-white font-semibold transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {loading ? 'Buscando...' : 'Buscar'}
              </button>
            </div>

            {error && (
              <div className="rounded-2xl border border-rose-100 bg-rose-50 p-4 text-rose-700 mt-6">
                {error}
              </div>
            )}

            {data && (
              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-soft">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-slate-500">Resultado para</p>
                    <p className="text-xl font-semibold text-slate-900">CEP {data.cep}</p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-slate-400"
                  >
                    Nova busca
                  </button>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Card label="Logradouro" value={data.logradouro} />
                  <Card label="Complemento" value={data.complemento} />
                  <Card label="Unidade" value={data.unidade} />
                  <Card label="Bairro" value={data.bairro} />
                  <Card label="Localidade" value={data.localidade} />
                  <Card label="UF" value={data.uf} />
                  <Card label="Estado" value={data.estado} />
                  <Card label="Região" value={data.regiao} />
                  <Card label="IBGE" value={data.ibge} />
                  <Card label="GIA" value={data.gia} />
                  <Card label="DDD" value={data.ddd} />
                  <Card label="SIAFI" value={data.siafi} />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Card({ label, value }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-base font-semibold text-slate-900">{value || '—'}</p>
    </div>
  );
}

export default App;
