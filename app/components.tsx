"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Check, Menu, Phone, X } from "lucide-react";
import { siteConfig } from "./site-config";

export function Brand() {
  return <Link className="brand" href="/" aria-label="Dr. Snow home"><Image className="brand-logo" src="/dr-snow-primary-logo.webp" alt="Dr. Snow" width={160} height={160} priority /></Link>;
}

const navigation = [
  { href: "/", label: "Home" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#request-service", label: "Request Service" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/terms", label: "Terms" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <a href={siteConfig.phoneHref}>Call Now</a>
          <Link className="button button-small button-primary" href="/#request-service">Schedule Now</Link>
        </nav>
        <button className="menu-toggle" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-menu" className={`mobile-menu${open ? " is-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!open}>
        <div className="shell mobile-menu-inner">
          {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <a href={siteConfig.phoneHref} onClick={() => setOpen(false)}><Phone aria-hidden="true" /> Call Now</a>
          <Link className="button button-primary" href="/#request-service" onClick={() => setOpen(false)}>Schedule Now</Link>
        </div>
      </nav>
    </header>
  );
}

type Plan = (typeof siteConfig.plans)[number];

export function PlanCard({ plan, compact = false }: { plan: Plan; compact?: boolean }) {
  const startingPrice = plan.rates["2–5.9″"];
  return <article className={`plan-card plan-${plan.accent}`}><p className="eyebrow">{plan.name} driveway</p><h3>{plan.driveway}</h3><div className="price"><sup>$</sup>{startingPrice}<small> / storm</small></div><p className="muted">Starting price for 2–5.9 inches</p><p className="service-inclusion"><strong>Included:*</strong> Driveway, primary walkway, and front steps.</p>{!compact && <ul className="check-list"><li><Check aria-hidden="true" /> Driveway cleared</li><li><Check aria-hidden="true" /> Primary walkway and front steps when conditions permit</li><li><Check aria-hidden="true" /> Service begins at 2 inches</li></ul>}<p className="classification-note">Reference only. Dr. Snow confirms the driveway size before payment.</p></article>;
}

export function SeasonalPlanCard({ plan }: { plan: Plan }) {
  return <article className={`seasonal-card plan-${plan.accent}`}><p className="eyebrow">{plan.name} driveway</p><h3>{plan.driveway}</h3><div className="seasonal-price"><sup>$</sup>{plan.seasonalPrice}</div><p className="seasonal-label">Seasonal membership</p><p className="service-inclusion"><strong>Included:*</strong> Driveway, primary walkway, and front steps.</p><ul className="check-list"><li><Check aria-hidden="true" /> Up to 15 standard storm services</li><li><Check aria-hidden="true" /> Standard storm: 2–7.9 inches</li><li><Check aria-hidden="true" /> Automatic weather monitoring</li><li><Check aria-hidden="true" /> Priority route placement</li><li><Check aria-hidden="true" /> Locked seasonal rate</li></ul><p className="classification-note">Reference only. Dr. Snow confirms the driveway size and membership before payment.</p></article>;
}

export function PriceSchedule() {
  const snowfallTiers = ["2–5.9″", "6–7.9″", "8–11.9″", "12″+"] as const;
  return <div className="schedule-wrap"><div className="schedule-label"><b>Pay-per-storm reference pricing</b><span>Dr. Snow confirms the driveway size.</span></div><div className="table-scroll"><table className="pricing-table"><caption className="sr-only">Dr. Snow pay-per-storm pricing by snowfall total and driveway size</caption><thead><tr><th scope="col">Snowfall total</th>{siteConfig.plans.map((plan) => <th scope="col" key={plan.key}>{plan.name}<small>{plan.driveway}</small></th>)}</tr></thead><tbody>{snowfallTiers.map((tier) => <tr key={tier}><th scope="row">{tier}</th>{siteConfig.plans.map((plan) => <td key={plan.key}>${plan.rates[tier]}</td>)}</tr>)}</tbody><tfoot><tr><th scope="row">Optional ice control</th>{siteConfig.plans.map((plan) => <td key={plan.key}>+${plan.icePrice}</td>)}</tr></tfoot></table></div><p className="schedule-disclaimer"><strong>*Included service:</strong> Driveway snow removal plus the primary walkway and front steps, subject to the safety, access, weather, and route-timing limitations in the Terms &amp; Conditions. The customer estimates driveway size; Dr. Snow confirms it. The final measured snowfall determines the pay-per-storm tier.</p></div>;
}

export function Footer() {
  const areaLinks = [["Springfield", "/service-areas/springfield-ma"], ["Wilbraham", "/service-areas/wilbraham-ma"], ["East Longmeadow", "/service-areas/east-longmeadow-ma"], ["Longmeadow", "/service-areas/longmeadow-ma"], ["Chicopee", "/service-areas/chicopee-ma"], ["West Springfield", "/service-areas/west-springfield-ma"]] as const;
  return <footer><div className="shell footer-grid"><div className="footer-brand"><Brand /><p>A division of Dr. Sheds.<br />Local. Trusted. Year-round.</p></div><div><b>Contact &amp; Information</b><p><a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a><br /><a href={siteConfig.emailHref}>{siteConfig.email}</a><br />{siteConfig.domain}</p><p><Link href="/plans">Pricing</Link><br /><Link href="/prepare-for-snow-removal">Prepare for service</Link><br /><Link href="/terms">Terms &amp; Conditions</Link></p></div><div className="footer-areas"><b>Areas We Serve</b><div className="footer-area-links">{areaLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div><p>Selected Springfield neighborhoods and approved nearby Western Massachusetts routes.</p></div></div><p className="shell footer-service-note"><strong>*Service limitation:</strong> Driveway snow removal is the primary contracted service. The primary walkway and front steps are included when safely accessible and route conditions permit. Walkway or step clearing may be delayed or omitted when conditions are unsafe, blocked, inaccessible, or when completing those secondary areas would materially delay the remaining route. Driveway service may be delayed or omitted only when the property is unsafe, blocked, inaccessible, or cannot be serviced without unreasonable risk. See the <Link href="/terms">Terms &amp; Conditions</Link> for full details.</p></footer>;
}
