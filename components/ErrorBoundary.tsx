"use client";

import { Component, ReactNode } from "react";
import Icon from "@mdi/react";
import { mdiCoffeeOutline } from "@mdi/js";

interface Props { children: ReactNode; compact?: boolean; }
interface State { hasError: boolean; }

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    if (this.props.compact) {
      return (
        <div
          className="flex items-center justify-center gap-2 rounded-2xl p-6"
          style={{ background: "#091810", border: "1px solid #142a1c", color: "#506458" }}
        >
          <Icon path={mdiCoffeeOutline} size={1.2} color="#506458" aria-hidden="true" />
          <p className="text-xs">Something went wrong. Please refresh.</p>
        </div>
      );
    }

    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center"
        style={{ background: "#030e07" }}
      >
        <Icon path={mdiCoffeeOutline} size={2} color="#506458" aria-hidden="true" />
        <div>
          <h2 className="text-lg font-semibold mb-2" style={{ color: "#f0eae5", fontFamily: "var(--font-dm-sans)" }}>
            Something went wrong.
          </h2>
          <p className="text-sm" style={{ color: "#8a9e8f" }}>
            Please refresh the page or try again later.
          </p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2.5 text-sm font-semibold transition-all duration-200"
          style={{ background: "#d1de47", color: "#030e07", borderRadius: "50px", fontFamily: "var(--font-dm-sans)" }}
        >
          Refresh Page
        </button>
      </div>
    );
  }
}
