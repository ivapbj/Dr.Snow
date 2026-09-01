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
    <section className="driveway-request" id="route-form" aria-labelledby="request-heading">
      <div className="request-intro">
        <p className="eyebrow">CHECK ROUTE AVAILABILITY</p>
        <h2 id="request-heading">Request a property review.</h2>
        <p>Enter your address, email, phone number, estimated driveway size, and whether you want ice control. Dr. Snow will review the property and confirm or adjust the driveway classification.</p>
        <p className="request-note">The required form fields are address, email, phone number, estimated driveway size, and a Yes or No ice-control selection. A driveway photo and additional comments are optional. Submitting the form does not charge you or guarantee route placement.</p>
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
    </section>
  );
}
