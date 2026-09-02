"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const formUrl = "https://form.jotform.com/262416715447056";

export function DrivewayForm() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(1150);

  useEffect(() => {
    const resize = (event: MessageEvent) => {
      if (event.origin !== new URL(formUrl).origin || event.source !== frame.current?.contentWindow || typeof event.data !== "string") return;
      const [action, value] = event.data.split(":");
      if (action !== "setHeight") return;
      const nextHeight = Number(value);
      if (Number.isFinite(nextHeight) && nextHeight > 0) setHeight(Math.min(4000, Math.max(500, nextHeight + 24)));
    };
    window.addEventListener("message", resize);
    return () => window.removeEventListener("message", resize);
  }, []);

  return (
    <section className="driveway-request section" id="request-service" aria-labelledby="request-heading">
      <div className="shell driveway-request-grid">
      <div className="request-intro">
        <p className="eyebrow">REQUEST SERVICE</p>
        <h2 id="request-heading">Request Snow Removal Service</h2>
        <p>Tell us about your property and estimated driveway size. Dr. Snow will review the address, confirm or adjust the driveway classification, and check route availability.</p>
        <p className="request-note">Submitting this form is a request for route and property review. It does not guarantee service, route placement, or final pricing.</p>
        <p className="request-note">The form collects your name, service address, email, phone number, estimated Small, Medium, or Large driveway size, a required Yes or No ice-control choice, and optional comments.</p>
        <p className="request-note">Jotform collects only your service information. After approval, Dr. Snow sends a separate secure Square link for payment setup. Card information is entered directly into Square—not this website or Jotform. Automatic monthly seasonal-membership charges require written authorization and follow the schedule in the customer’s Square agreement.</p>
        <p className="request-note">Before submitting, review our <Link className="agreement-link" href="/terms" target="_blank" rel="noopener noreferrer">Snow & Ice Terms & Conditions</Link>, <Link className="agreement-link" href="/prepare-for-snow-removal" target="_blank" rel="noopener noreferrer">property preparation information</Link>, and <a className="agreement-link" href="https://squareup.com/us/en/legal/general/ua" target="_blank" rel="noopener noreferrer">Square’s terms</a>.</p>
      </div>
      <div className="request-form-panel">
        <iframe
          ref={frame}
          id="JotFormIFrame-262416715447056"
          title="Dr. Snow driveway service request form"
          src={formUrl}
          style={{ height }}
          className="request-form-frame"
        />
        <p className="form-fallback">Having trouble with the form? <a href={formUrl} target="_blank" rel="noopener noreferrer">Open the request form in a new tab</a>.</p>
      </div>
      </div>
    </section>
  );
}
