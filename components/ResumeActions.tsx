"use client";

export default function ResumeActions() {
  return (
    <button className="text-link print-action" onClick={() => window.print()} type="button">
      Print this page <span aria-hidden="true">↗</span>
    </button>
  );
}
