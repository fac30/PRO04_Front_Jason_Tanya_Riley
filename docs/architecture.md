# Architecture Documentation

## Overview

Craft & Graft Frontend is built using a modern React architecture with TypeScript, leveraging Vite for fast development and optimized builds.

## Core Architecture Principles

- Component-based architecture
- Type safety with TypeScript
- State management using React Context
- Route-based code splitting
- Responsive design principles

## Directory Structure

```typescript
src/
├── components/ # Reusable UI components
├── pages/ # Page-level components
├── hooks/ # Custom React hooks
├── context/ # React Context providers
├── types/ # TypeScript type definitions
├── utils/ # Utility functions
└── assets/ # Static assets
```


## Key Components

1. **Layout Components**
   - Header
   - Footer
   - Navigation
   - Cart Drawer
2. **Feature Components**
   - Product Cards
   - Product Grid
   - Cart Management
   - Checkout Flow

## State Management

The application uses React Context for state management, with separate contexts for:

- User State
- UI state

## Security

- Input sanitization
- XSS prevention
- CSRF protection
- Secure authentication flow
