# 🤖 AI Assistant Platform

> A production-inspired, multi-provider AI platform built with React, TypeScript, Express, and Ollama using clean architecture and modern software engineering practices.

---

## 📖 Overview

The AI Assistant Platform is a full-stack application designed to demonstrate how modern AI-powered applications can be built using scalable architecture, clean code principles, and enterprise development practices.

Unlike a simple chatbot, this project has been designed with extensibility in mind. The application uses a provider-based architecture that allows multiple Large Language Models (LLMs) to be integrated with minimal code changes.

The current implementation uses **Ollama** running locally with **Llama 3.2**, while the architecture is ready to support OpenAI and other providers in future releases.

---

# ✨ Current Features

## AI

- ✅ Ollama Integration
- ✅ Llama 3.2 Support
- ✅ Provider Factory Pattern
- ✅ Conversation Memory
- ✅ Multi-turn Conversations
- ✅ Configurable AI Provider

## Frontend

- ✅ React 19
- ✅ TypeScript
- ✅ Vite
- ✅ Axios
- ✅ Custom React Hooks
- ✅ Responsive Chat Interface

## Backend

- ✅ Express.js
- ✅ REST API
- ✅ TypeScript
- ✅ Environment Configuration
- ✅ Error Handling Middleware
- ✅ Layered Architecture

---

# 🏗 Architecture

```text
┌──────────────────────────────┐
│         React Frontend       │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│        Chat Hook             │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│      Chat API Service        │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│      Express REST API        │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│      Chat Controller         │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│       Chat Service           │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│      Provider Factory        │
└──────────────┬───────────────┘
               │
      ┌────────┴────────┐
      ▼                 ▼
┌────────────┐    ┌────────────┐
│  Ollama    │    │  OpenAI    │
│ Provider   │    │ Provider   │
└────────────┘    └────────────┘
```

---

# 🛠 Technology Stack

## Frontend

- React 19
- TypeScript
- Vite
- Axios

## Backend

- Node.js
- Express
- TypeScript

## AI

- Ollama
- Llama 3.2
- OpenAI Ready Architecture

## Development Tools

- pnpm
- Git
- GitHub
- VS Code

---

# 📁 Project Structure

```text
AI-Assistant
│
├── apps
│   ├── backend
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── providers
│   │   ├── routes
│   │   ├── services
│   │   ├── types
│   │   └── server.ts
│   │
│   └── frontend
│       ├── components
│       ├── features
│       ├── hooks
│       ├── lib
│       ├── pages
│       └── services
│
├── docs
│
└── README.md
```

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/zaraseyed2015/AI-Assistant.git
```

```bash
cd AI-Assistant
```

---

## Install Dependencies

```bash
pnpm install
```

---

## Install Ollama

Download and install Ollama:

https://ollama.com/download

Pull the required model:

```bash
ollama pull llama3.2:3b
```

Verify the model:

```bash
ollama list
```

---

## Configure Environment

Backend `.env`

```env
PORT=3000
NODE_ENV=development
API_PREFIX=/api

AI_PROVIDER=ollama
OLLAMA_HOST=http://127.0.0.1:11434
OLLAMA_MODEL=llama3.2:3b
```

---

## Run Backend

```bash
pnpm dev:backend
```

Backend API:

```
http://localhost:3000/api
```

---

## Run Frontend

```bash
pnpm dev:frontend
```

Application:

```
http://localhost:5173
```

---

# 💬 Conversation Memory

The application maintains conversation history during the active chat session.

Each request sends the previous conversation back to the selected AI provider, enabling contextual multi-turn conversations.

Future versions will persist conversations using PostgreSQL.

---

# 🗺 Engineering Roadmap

## Completed

- ✅ React Frontend
- ✅ Express Backend
- ✅ REST API
- ✅ Chat Integration
- ✅ Ollama Integration
- ✅ Provider Architecture
- ✅ Conversation Memory
- ✅ GitHub Integration

## Planned

- ⏳ Streaming Responses
- ⏳ PostgreSQL Persistence
- ⏳ Chat Sessions
- ⏳ User Authentication
- ⏳ OpenAI Provider
- ⏳ Azure OpenAI Provider
- ⏳ Claude Provider
- ⏳ Gemini Provider
- ⏳ RAG (Retrieval-Augmented Generation)
- ⏳ AI Agents
- ⏳ Docker Support
- ⏳ CI/CD Pipeline

---

# 🎯 Learning Objectives

This project demonstrates:

- Clean Architecture
- Full-Stack TypeScript Development
- AI Provider Abstraction
- REST API Design
- React Hooks
- Modern Backend Development
- Enterprise Software Design
- Git & GitHub Workflow

---

# 📸 Screenshots

Screenshots will be added as the application evolves.

---

# 👨‍💻 Author

**Zarzeeth Seyed Sakkaff**

Senior Database Architect | AI Platform Engineer | Cloud Data Platform Specialist

- GitHub: https://github.com/zaraseyed2015
- LinkedIn: https://www.linkedin.com/in/zarzeeth-seyed-sakkaff-a71b7713

---

# 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

If you find this project useful, please consider starring the repository and opening an issue for feature requests or improvements.

---

# 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.