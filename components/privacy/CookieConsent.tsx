"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { X } from "lucide-react";

type Preferences = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "charitr-cookie-preferences";
const defaultPreferences: Preferences = { essential: true, analytics: false, marketing: false };

function savePreferences(preferences: Preferences) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  window.dispatchEvent(new CustomEvent("charitr:consent", { detail: preferences }));
}

function AnalyticsLoader({ enabled }: { enabled: boolean }) {
  useEffect(() => {
    const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;
    if (!enabled || !analyticsId || document.querySelector("[data-charitr-analytics]")) return;
    const script = document.createElement("script");
    script.dataset.charitrAnalytics = "true";
    script.src = process.env.NEXT_PUBLIC_ANALYTICS_SCRIPT_URL || "";
    if (script.src) document.head.appendChild(script);
    return () => { script.remove(); };
  }, [enabled]);
  return null;
}

export function CookieSettingsButton() {
  return <button type="button" className="footer-cookie-button" onClick={() => window.dispatchEvent(new Event("charitr:cookie-settings"))}>Cookie settings</button>;
}

export function CookieConsent() {
  const ready = useSyncExternalStore(() => () => undefined, () => true, () => false);
  const [bannerOpen, setBannerOpen] = useState(() => typeof window !== "undefined" && !localStorage.getItem(STORAGE_KEY));
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [preferences, setPreferences] = useState<Preferences>(() => {
    if (typeof window === "undefined") return defaultPreferences;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return defaultPreferences;
    try { return { ...defaultPreferences, ...JSON.parse(saved) }; }
    catch { return defaultPreferences; }
  });

  useEffect(() => {
    const reopen = () => setSettingsOpen(true);
    window.addEventListener("charitr:cookie-settings", reopen);
    return () => window.removeEventListener("charitr:cookie-settings", reopen);
  }, []);

  if (!ready) return null;

  const commit = (next: Preferences) => {
    setPreferences(next);
    savePreferences(next);
    setBannerOpen(false);
    setSettingsOpen(false);
  };

  return (
    <>
      <AnalyticsLoader enabled={preferences.analytics} />
      {bannerOpen && (
        <section className="cookie-banner" aria-label="Cookie consent" aria-live="polite">
          <div>
            <p className="eyebrow">Your privacy choices</p>
            <h2>We use only the cookies you choose.</h2>
            <p>Essential storage keeps this consent choice. Analytics and marketing remain off unless you enable them.</p>
          </div>
          <div className="cookie-actions">
            <button className="button" type="button" onClick={() => commit({ essential: true, analytics: true, marketing: true })}>Accept All</button>
            <button className="button button--secondary" type="button" onClick={() => commit(defaultPreferences)}>Reject Non-Essential</button>
            <button className="text-button" type="button" onClick={() => setSettingsOpen(true)}>Manage Preferences</button>
          </div>
        </section>
      )}

      {settingsOpen && (
        <div className="modal-backdrop" role="presentation">
          <section className="cookie-modal" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
            <button className="modal-close" type="button" onClick={() => setSettingsOpen(false)} aria-label="Close cookie preferences"><X /></button>
            <p className="eyebrow">Cookie settings</p>
            <h2 id="cookie-title">Choose what you allow</h2>
            <div className="cookie-option">
              <div><h3>Essential</h3><p>Required to remember your privacy choice and provide core website functions.</p></div>
              <span className="always-on">Always on</span>
            </div>
            <label className="cookie-option">
              <div><h3>Analytics</h3><p>Helps understand website use. No analytics provider is active without configuration.</p></div>
              <input type="checkbox" checked={preferences.analytics} onChange={(event) => setPreferences({ ...preferences, analytics: event.target.checked })} />
            </label>
            <label className="cookie-option">
              <div><h3>Marketing</h3><p>Reserved for optional marketing tools. None are currently configured.</p></div>
              <input type="checkbox" checked={preferences.marketing} onChange={(event) => setPreferences({ ...preferences, marketing: event.target.checked })} />
            </label>
            <button className="button" type="button" onClick={() => commit(preferences)}>Save preferences</button>
          </section>
        </div>
      )}
    </>
  );
}
