// Internal workspace sites can read the authenticated OpenAI user from the
// forwarded request headers:
//
// import { headers } from "next/headers";
//
// export default async function Home() {
//   const requestHeaders = await headers();
//   const email = requestHeaders.get("oai-authenticated-user-email");
//   const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
//   const fullName =
//     encodedFullName &&
//     requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
//       "percent-encoded-utf-8"
//       ? decodeURIComponent(encodedFullName)
//       : null;
//   const displayName = fullName ?? email;
//   // ...
// }

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, CheckCircle2, CloudSnow, CreditCard, MapPin, Snowflake } from "lucide-react";
import { Footer, Header, PlanCard, PriceSchedule, SeasonalPlanCard, TrustStrip } from "./components";
import { DrivewayForm } from "./driveway-form";
import { siteConfig } from "./site-config";

export default function Home() {
  return <>
    <Header />
    <main>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow light">RESIDENTIAL SNOW REMOVAL · WESTERN MA</p>
            <h1>We watch the weather.<br /><em>You enjoy the winter.</em></h1>
            <p className="hero-lead">No late-night calls. No guessing who will show up. Send your address, let Dr. Snow confirm your property, and join the route before the first storm.</p>
            <p className="micro"><CheckCircle2 size={15} /> Service automatically begins at 2 inches of accumulation.</p>
          </div>
          <div className="hero-visual">
            <div className="logo-frame"><Image src="/dr-snow-primary-logo.png" alt="Dr. Snow — Snow Removal and Ice Control" width={900} height={900} priority sizes="(max-width: 900px) 90vw, 42vw" /></div>
            <div className="hero-badge"><Snowflake /><b>LIMITED ROUTE SPOTS</b><span>Reserve early for winter</span></div>
          </div>
        </div>
      </section>
      <TrustStrip />

      <section className="section" id="how-it-works">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">SIMPLE, DEPENDABLE SERVICE</p><h2>Snow removal without the scramble.</h2><p>Submit your property information, let Dr. Snow confirm the driveway classification, and securely enroll through Square.</p></div>
          <div className="steps">
            <article><span>01</span><MapPin /><h3>Request service</h3><p>Use the Jotform to send your address, contact information, estimated driveway size, and ice-control choice.</p></article>
            <article><span>02</span><Camera /><h3>Property review</h3><p>Dr. Snow reviews the property and confirms or adjusts the driveway classification before enrollment.</p></article>
            <article><span>03</span><CloudSnow /><h3>Weather monitoring</h3><p>We monitor each storm and determine the appropriate service window after the 2-inch trigger is reached.</p></article>
            <article><span>04</span><Snowflake /><h3>We clear the driveway</h3><p>A standard storm receives one scheduled clearing. Timing is based on conditions, safety, and route efficiency.</p></article>
            <article><span>05</span><CreditCard /><h3>Automatic payment</h3><p>After written authorization, Square securely charges the saved payment method each month according to the seasonal agreement.</p></article>
          </div>
          <div className="square-flow"><CreditCard /><div><p className="eyebrow">SECURE SQUARE BILLING</p><h3>Square handles the payment information.</h3><p>After the property and plan are approved, Dr. Snow sends a secure Square link. The customer enters card information directly through Square and provides written authorization for automatic monthly seasonal-membership charges according to the Square agreement. Dr. Snow’s website and Jotform never collect or store card numbers. Square sends a payment receipt after each monthly charge, and customers receive a service receipt after each visit.</p></div></div>
          <div className="preparation-callout">
            <div><p className="eyebrow">BEFORE THE NEXT STORM</p><h3>Get your property ready.</h3><p>Know what to clear from your driveway and review our service terms.</p></div>
            <Link className="button button-primary" href="/prepare-for-snow-removal">How to prepare before snow removal <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="section plans-section" id="plans">
        <div className="shell">
          <div className="section-heading split"><div><p className="eyebrow">SEASONAL PLAN · BEST VALUE</p><h2>Priority service all winter.</h2></div><p>Each seasonal membership includes up to 15 standard storm services for snowfall totals of 2–7.9 inches. Unused visits are nonrefundable.</p></div>
          <div className="plans-grid seasonal-grid">{siteConfig.plans.map((plan) => <SeasonalPlanCard key={plan.key} plan={plan} />)}</div>
          <div className="seasonal-details"><b>Seasonal membership benefits</b><span>2-inch service trigger</span><span>Automatic weather monitoring</span><span>No need to call</span><span>Priority route placement</span><span>Rate locked in</span><span>Automatic monthly Square billing</span><span>Service receipt after each visit</span></div>
          <div className="pricing-subheading"><p className="eyebrow">PAY-PER-STORM OPTION</p><h3>Pricing follows the final snowfall total.</h3><p>Pay-per-storm rates remain available. The customer provides an estimated driveway size, and Dr. Snow confirms the classification after reviewing the property.</p></div>
          <div className="plans-grid pay-per-storm-grid">{siteConfig.plans.map((plan) => <PlanCard key={plan.key} plan={plan} compact />)}</div>
          <PriceSchedule />
        </div>
      </section>

      <section className="section area-section" id="service-area">
        <div className="shell availability-grid">
          <div className="area-copy">
            <p className="eyebrow light">SNOW REMOVAL SERVICE AREAS</p>
            <h2>Local snow removal across Greater Springfield.</h2>
            <p>Dr. Snow provides residential snow removal and optional ice control in Springfield, Wilbraham, East Longmeadow, Longmeadow, Chicopee, Westfield, Agawam, and nearby Western Massachusetts communities. Every address is reviewed before service is confirmed.</p>
            <h3>Springfield neighborhoods served</h3>
            <div className="area-list neighborhood-list">{siteConfig.springfieldNeighborhoods.map((area) => <span key={area}><Snowflake /> {area}</span>)}</div>
            <h3>Surrounding communities</h3>
            <div className="area-list">{siteConfig.primaryServiceAreas.filter((area) => area !== "Springfield").map((area) => <span key={area}><Snowflake /> {area}</span>)}<span><Snowflake /> Nearby towns</span></div>
          </div>
          <DrivewayForm />
        </div>
      </section>

      <section className="final-cta"><div className="shell"><p className="eyebrow">DON’T WAIT FOR THE FIRST STORM</p><h2>Request a driveway review.</h2><p>Send your address first. Dr. Snow may ask for a driveway photo and will confirm route availability before sending the correct Square payment link.</p><div className="button-row centered"><a className="button button-outline" href={siteConfig.phoneHref}>Call {siteConfig.phoneDisplay}</a></div></div></section>
    </main>
    <Footer />
  </>;
}
