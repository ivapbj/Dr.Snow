import Link from "next/link";
import { Check, MapPin, MessageSquareText, Phone, ShieldCheck, Snowflake } from "lucide-react";
import { siteConfig } from "./site-config";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Dr. Snow home">
      <span className="brand-mark"><Snowflake size={25} aria-hidden="true" /></span>
      <span><b>DR. SNOW</b><small>SNOW REMOVAL & ICE CONTROL</small></span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Brand />
        <nav aria-label="Main navigation">
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/plans">Plans</Link>
          <Link href="/#service-area">Service area</Link>
        </nav>
        <a className="button button-small button-outline" href={siteConfig.phoneHref}>
          <Phone size={17} aria-hidden="true" /> Call now
        </a>
      </div>
    </header>
  );
}

export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Service benefits">
      <div className="shell trust-grid">
        <div><Snowflake /><span><b>2-inch trigger</b><small>Automatic service</small></span></div>
        <div><ShieldCheck /><span><b>Reliable & insured</b><small>Local snow operations</small></span></div>
        <div><Check /><span><b>Route priority</b><small>For plan members</small></span></div>
        <div><MapPin /><span><b>Western MA</b><small>Local service area</small></span></div>
      </div>
    </section>
  );
}

type Plan = (typeof siteConfig.plans)[number];

export function PlanCard({ plan, compact = false }: { plan: Plan; compact?: boolean }) {
  const startingPrice = plan.rates["2–5.9″"];
  return (
    <article className={`plan-card plan-${plan.accent}`}>
      <p className="eyebrow">{plan.name} driveway</p>
      <h3>{plan.driveway}</h3>
      <div className="price"><sup>$</sup>{startingPrice}<small> / storm</small></div>
      <p className="muted">Starting price for 2–5.9 inches</p>
      <div className="ice-row"><Snowflake size={18} /> Add ice control <b>+${plan.icePrice}</b></div>
      {!compact && (
        <ul className="check-list">
          <li><Check /> Driveway cleared</li>
          <li><Check /> Primary walkway and front steps cleared when conditions are safe and route timing permits</li>
          <li><Check /> Service begins at 2 inches</li>
        </ul>
      )}
      <Link className="button button-dark full" href="/#route-form">
        <MessageSquareText size={17} /> Request driveway review
      </Link>
      <p className="classification-note">Reference only. Dr. Snow confirms the driveway size before payment.</p>
    </article>
  );
}

export function SeasonalPlanCard({ plan }: { plan: Plan }) {
  return (
    <article className={`seasonal-card plan-${plan.accent}`}>
      <p className="eyebrow">{plan.name} driveway</p>
      <h3>{plan.driveway}</h3>
      <div className="seasonal-price"><sup>$</sup>{plan.seasonalPrice}</div>
      <p className="seasonal-label">Seasonal membership</p>
      <ul className="check-list">
        <li><Check /> Up to 15 standard storm services</li>
        <li><Check /> Standard storm: 2–7.9 inches</li>
        <li><Check /> Automatic weather monitoring</li>
        <li><Check /> Priority route placement</li>
        <li><Check /> Locked seasonal rate</li>
      </ul>
      <Link className="button button-dark full" href="/#route-form">Request seasonal membership</Link>
    </article>
  );
}

export function PriceSchedule() {
  const snowfallTiers = ["2–5.9″", "6–7.9″", "8–11.9″", "12″+"] as const;
  return (
    <div className="schedule-wrap">
      <div className="schedule-label"><b>Pay-per-storm reference pricing</b><span>Final driveway size is confirmed by Dr. Snow.</span></div>
      <div className="table-scroll">
        <table className="pricing-table">
          <caption className="sr-only">Dr. Snow pay-per-storm pricing by snowfall total and driveway size</caption>
          <thead><tr><th scope="col">Snowfall total</th>{siteConfig.plans.map((plan) => <th scope="col" key={plan.key}>{plan.name}<small>{plan.driveway}</small></th>)}</tr></thead>
          <tbody>{snowfallTiers.map((tier) => <tr key={tier}><th scope="row">{tier}</th>{siteConfig.plans.map((plan) => <td key={plan.key}>${plan.rates[tier]}</td>)}</tr>)}</tbody>
          <tfoot><tr><th scope="row">Optional ice control</th>{siteConfig.plans.map((plan) => <td key={plan.key}>+${plan.icePrice}</td>)}</tr></tfoot>
        </table>
      </div>
      <p className="schedule-disclaimer">Prices are informational. The customer selects an estimated driveway size, and Dr. Snow confirms or adjusts the classification after reviewing the property. The final snowfall total determines the pay-per-storm tier. Primary walkway and front-step clearing is provided at no additional charge only when conditions are safe and route timing permits; it is not guaranteed. <Link className="inline-link" href="/terms">Review Snow & Ice Terms & Conditions</Link>.</p>
    </div>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div><Brand /><p>A division of Dr. Sheds.<br />Local. Trusted. Year-round.</p></div>
        <div><b>Serving Western MA</b><p>Springfield neighborhoods · Wilbraham · East Longmeadow · Longmeadow · Chicopee · Westfield · Agawam & nearby towns</p></div>
        <div><b>Ready for winter?</b><p><a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a><br /><a href={siteConfig.emailHref}>{siteConfig.email}</a><br />{siteConfig.domain}</p><p><Link className="footer-terms-link" href="/prepare-for-snow-removal">Preparation & service terms</Link><br /><Link className="footer-terms-link" href="/terms">Terms & Conditions</Link></p></div>
      </div>
    </footer>
  );
}
