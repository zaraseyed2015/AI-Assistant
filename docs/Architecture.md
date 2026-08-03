# AI Assistant Platform Architecture

## Overview

The AI Assistant Platform follows a layered architecture that separates the user interface, API, business logic, and AI providers. This design makes the application easier to maintain, extend, and test.

---

# High-Level Architecture

```text
Frontend (React + TypeScript)
            │
            ▼
Express REST API
            │
            ▼
Chat Controller
            │
            ▼
Chat Service
            │
            ▼
Provider Factory
            │
      ┌─────┴────────────┐
      ▼                  ▼
 Ollama Provider    OpenAI Provider
```

---

# Backend Architecture

```text
src
│
├── config
│
├── controllers
│
├── middleware
│
├── providers
│
├── routes
│
├── services
│
├── types
│
└── server.ts
```

Each layer has a single responsibility.

---

# Request Flow

1. User sends a message from the React application.
2. Axios sends the request to `/api/chat`.
3. Express routes the request to the Chat Controller.
4. The controller validates the request.
5. The Chat Service builds the conversation history.
6. The Provider Factory selects the configured AI provider.
7. The selected provider communicates with the LLM.
8. The response is returned to the frontend.

---

# Provider Architecture

The provider pattern allows multiple AI providers to be used without changing the rest of the application.

Current implementation:

- Ollama

Planned providers:

- OpenAI
- Azure OpenAI
- Anthropic Claude
- Google Gemini

---

# Conversation Memory

Conversation history is currently maintained in memory on the client during an active chat session.

Each request includes the previous conversation so the AI provider can generate contextual responses.

Future releases will store conversations in PostgreSQL to support persistent chat sessions.

---

# Configuration

Application configuration is managed through environment variables.

Examples:

```env
AI_PROVIDER=ollama
OLLAMA_HOST=http://127.0.0.1:11434
OLLAMA_MODEL=llama3.2:3b
```

This approach allows providers and models to be switched without modifying the application code.

---

# Design Principles

The project follows several software engineering principles:

- Separation of Concerns
- Single Responsibility Principle
- Dependency Inversion
- Provider Abstraction
- Configuration over Hardcoding
- Extensibility
- Maintainability

---

# Future Architecture

The architecture has been designed to support future capabilities, including:

- Streaming AI responses
- Persistent conversation history
- User authentication
- Retrieval-Augmented Generation (RAG)
- AI Agents
- Docker deployment
- CI/CD pipelines
- Cloud-native deployment