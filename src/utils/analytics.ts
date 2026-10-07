type DataLayerWindow = Window & {
  dataLayer?: Record<string, unknown>[];
};

export function pushLeadSubmitted(formName: string): void {
  if (typeof window === "undefined") return;

  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: "lead_submitted",
    form_name: formName,
    form_location: window.location.pathname,
  });
}
