"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { askAiHints } from "../data/content";

export function AskAI() {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);

  return (
    <div className="ask-ai">
      {open ? (
        <div className="ask-ai-panel" role="dialog" aria-label="Ask about Debayan">
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
            <h3>Ask about Debayan</h3>
            <button
              type="button"
              className="icon-button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              style={{ color: "var(--sc-ink)", border: "1px solid var(--line)" }}
            >
              <X size={16} />
            </button>
          </div>
          <p>Quick answers from the resume — no API call.</p>
          <div className="ask-ai-hints">
            {askAiHints.map((hint) => (
              <button key={hint.q} type="button" onClick={() => setAnswer(hint.a)}>
                {hint.q}
              </button>
            ))}
          </div>
          {answer ? <div className="ask-ai-answer">{answer}</div> : null}
        </div>
      ) : null}
      <button
        type="button"
        className="ask-ai-toggle"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <MessageCircle size={18} />
        Ask AI
      </button>
    </div>
  );
}
