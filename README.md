# Consulta CEP

Projeto simples que consulta a API ViaCEP através de um backend Spring Boot e exibe no frontend React + Tailwind.

## Como rodar

### Backend

```powershell
cd c:\Users\Everton\Desktop\Cursos\Curso Nortetech\Backend\consulta-cep
.\mvnw spring-boot:run
```

A API ficará disponível em `http://localhost:8080/api/cep/{cep}`.

Exemplo de chamada curl:

```powershell
curl http://localhost:8080/api/cep/21250560
```

### Frontend

```powershell
cd c:\Users\Everton\Desktop\Cursos\Curso Nortetech\Backend\consulta-cep\frontend
npm install
npm run dev
```

Abra `http://localhost:5173` no navegador.

## Tratamento de erros

- Quando o CEP não é encontrado, o backend retorna HTTP 404 com JSON contendo `timestamp`, `status`, `error`, `message` e `path`.
- Mensagens do backend estão em PT-BR para consistência com o frontend.

## Observações

- O `RestTemplate` é registrado como `@Bean` no `ConsultaCepApplication`.
- O frontend detecta respostas 404 e renderiza uma página dedicada "Nada foi encontrado".
