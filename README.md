# 🔍 Consulta CEP

[![Java](https://img.shields.io/badge/Java-17-blue?logo=java)](https://www.java.com)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5.16-green?logo=spring)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

Aplicação **FullStack** que consulta endereços brasileiros via API ViaCEP. Desenvolvida com **Spring Boot** no backend e **React + Tailwind** no frontend, com tratamento robusto de erros e experiência de usuário otimizada.

## 📱 Funcionalidades

✅ Busca de CEP em tempo real  
✅ Exibição detalhada do endereço  
✅ Validação de entrada (8 dígitos)  
✅ Tratamento de erros HTTP robusto  
✅ Interface responsiva e moderna  
✅ Página dedicada para CEP não encontrado  

## 🛠️ Stack Tecnológico

**Backend:** Java 17 • Spring Boot 3.5.16 • RestTemplate  
**Frontend:** React 18 • Tailwind CSS 3 • Vite  

## 🚀 Como rodar

### Backend

```powershell
cd c:\Users\Everton\Desktop\Cursos\Curso Nortetech\Backend\consulta-cep
.\mvnw spring-boot:run
```

API disponível em: `http://localhost:8080/api/cep/{cep}`

### Frontend

```bash
cd "c:\Users\Everton\Desktop\Cursos\Curso Nortetech\Backend\consulta-cep\frontend"
npm install
npm run dev
```

Acesse: `http://localhost:5173`

## 📚 Exemplos

### cURL
```bash
curl http://localhost:8080/api/cep/01001000
```

**Resposta 200:**
```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP"
}
```

**Resposta 404:**
```json
{
  "timestamp": "2026-07-04T15:42:12-03:00",
  "status": 404,
  "error": "Não encontrado",
  "message": "CEP não encontrado: 99999999",
  "path": "/api/cep/99999999"
}
```

## 🏗️ Arquitetura

**Backend:** Controller → Service → Domain (RestTemplate)  
**Frontend:** App → Componentes (hooks, estado)  
**Erro 404:** Redirect automático para `NotFoundPage`

## 📝 Tecnologias Aprendidas

- Arquitetura em camadas
- Tratamento centralizado de exceções
- REST API com validação
- React Hooks e componentes funcionais
- Git/GitHub para versionamento
