"use client";

import type { ToastType } from "@/lib/types";

interface ToastProps {
  message: string;
  type: ToastType;
  visible: boolean;
}

export function Toast({ message, type, visible }: ToastProps) {
  return (
    <div
      className={`toast ${type} ${visible ? "visible" : ""}`}
      role="status"
      aria-live="polite"
      hidden={!visible && !message}
    >
      <span className="toast-message">{message}</span>
    </div>
  );
}
