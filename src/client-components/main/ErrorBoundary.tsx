// src/client-components/main/ErrorBoundary.tsx
"use client";
import React, { useState } from "react";

type ErrorBoundaryProps = { children: React.ReactNode };

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const [error, setError] = useState<Error | null>(null);

  try {
    return <>{children}</>;
  } catch (err) {
    setError(err as Error);
    return (
      <div className="p-4 text-white bg-red-800/50">
        <h2>Something went wrong</h2>
        <p>{error?.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 px-4 py-2 bg-blue-600 rounded"
        >
          Retry
        </button>
      </div>
    );
  }
};

export default ErrorBoundary;
