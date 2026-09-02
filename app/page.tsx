import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  CloudSnow,
  CreditCard,
  MapPin,
  ShieldAlert,
  Snowflake,
} from "lucide-react";
import { Footer, Header, PriceSchedule, SeasonalPlanCard } from "./components";
import { DrivewayForm } from "./driveway-form";
import { siteConfig } from "./site-config";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow light">RESIDENTIAL SNOW REMOVAL · WESTERN MA</p>
              <h1>Dependable snow removal<br /><em>for Greater Springfield homes.</em></h1>
              <p className="hero-lead">Residential driveway snow removal and optional ice control with pay-per-storm and seasonal options. Dr. Snow reviews every property and confirms service before you are added to the route.</p>
              <p className="hero-pricing-note">Published prices are informational until your driveway size, address, selected services, and route availability are confirmed.</p>
              <div className="button-row">
                <Link className="button button-primary" href="/#request-service">Schedule Now</Link>
                <a className="button button-outline" href={siteConfig.phoneHref}>Call Now</a>
              </div>
              <div className="hero-facts" aria-label="Service highlights">
                <span><Snowflake aria-hidden="true" /> 2-inch service trigger</span>
                <span><MapPin aria-hidden="true" /> Local route-based service</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="logo-frame">
                <Image src="/dr-snow-primary-logo.webp" alt="Dr. Snow residential snow removal and ice control" width={900} height={900} priority sizes="(max-width: 960px) 78vw, 40vw" />
              </div>
            </div>
          </div>
        </section>

        <section className="section pricing-section" id="pricing" aria-labelledby="pricing-heading">
          <div className="shell">
            <div className="section-heading split">
              <div><p className="eyebrow">PRICING</p><h2 id="pricing-heading">Clear options for every storm.</h2></div>
              <p>Choose a seasonal membership or pay per storm. Dr. Snow confirms the property details and final arrangement before service begins.</p>
            </div>
            <div className="pricing-block">
              <div className="pricing-block-heading">
                <div><p className="eyebrow">SEASONAL PLAN · BEST VALUE</p><h3>Priority service all winter.</h3></div>
                <p>Each membership includes up to 15 standard storm services totaling 2–7.9 inches. Unused visits are nonrefundable.</p>
              </div>
              <div className="plans-grid seasonal-grid">{siteConfig.plans.map((plan) => <SeasonalPlanCard key={plan.key} plan={plan} />)}</div>
            </div>
            <div className="pricing-block pay-per-storm-block">
              <div className="pricing-block-heading">
                <div><p className="eyebrow">PAY-PER-STORM</p><h3>Rates based on the final snowfall.</h3></div>
                <p>You estimate the driveway size on the form. Dr. Snow confirms the classification; you do not need to choose the final snowfall tier.</p>
              </div>
              <PriceSchedule />
            </div>
            <div className="pricing-notice">
              <AlertTriangle aria-hidden="true" />
              <div>
                <h3>Prices are estimates until Dr. Snow confirms your property.</h3>
                <p>Final pricing depends on the approved driveway size, snowfall tier, selected services, route availability, and applicable terms. Driveway snow removal is the primary contracted service. The primary walkway and front steps are included when safely accessible and route conditions permit.*</p>
                <Link href="/terms">*See complete service limitations in the Terms &amp; Conditions.</Link>
              </div>
            </div>
            <div className="button-row pricing-actions">
              <Link className="button button-primary" href="/#request-service">Request Service</Link>
              <a className="button button-secondary" href={siteConfig.phoneHref}>Call Now</a>
            </div>
          </div>
        </section>

        <DrivewayForm />

        <section className="section process-section" id="how-it-works" aria-labelledby="process-heading">
          <div className="shell">
            <div className="section-heading centered-heading">
              <p className="eyebrow">HOW WE WORK</p>
              <h2 id="process-heading">A straightforward path to a clear driveway.</h2>
              <p>Submit the essentials once. Dr. Snow handles the property review, storm monitoring, and service coordination.</p>
            </div>
            <div className="steps">
              <article><span>01</span><MapPin aria-hidden="true" /><h3>Submit your request</h3><p>Send your contact details, service address, estimated driveway size, and ice-control choice.</p></article>
              <article><span>02</span><CheckCircle2 aria-hidden="true" /><h3>Route review</h3><p>Dr. Snow checks the address, property conditions, and current route availability.</p></article>
              <article><span>03</span><Snowflake aria-hidden="true" /><h3>Service confirmed</h3><p>Your driveway size and service arrangement are confirmed before enrollment.</p></article>
              <article><span>04</span><CloudSnow aria-hidden="true" /><h3>Weather monitored</h3><p>Dr. Snow follows the forecast and snowfall total to plan the appropriate service window.</p></article>
              <article><span>05</span><CreditCard aria-hidden="true" /><h3>Service and payment</h3><p>The property is serviced, and payment is handled through Square according to your authorization.</p></article>
            </div>
            <div className="section-action"><Link className="button button-primary" href="/#request-service">Schedule Now</Link></div>
          </div>
        </section>

        <section className="section service-info-section" id="terms" aria-labelledby="service-info-heading">
          <div className="shell">
            <div className="section-heading split">
              <div><p className="eyebrow light">IMPORTANT SERVICE INFORMATION</p><h2 id="service-info-heading">Know what to expect.</h2></div>
              <p>Winter conditions vary. These highlights summarize the full service terms that apply to every request.</p>
            </div>
            <div className="info-grid">
              <article><ShieldAlert aria-hidden="true" /><h3>Snow and ice conditions</h3><p>Treatment reduces hazards, but surfaces cannot be guaranteed completely free of snow, ice, refreezing, or slip risks.</p></article>
              <article><Clock3 aria-hidden="true" /><h3>Service timing</h3><p>Timing is based on snowfall, weather, safety, forecast, and efficient completion of the active route.</p></article>
              <article><AlertTriangle aria-hidden="true" /><h3>Customer responsibilities</h3><p>Keep vehicles and objects out of service areas and identify hidden hazards before winter weather arrives.</p></article>
              <article><Snowflake aria-hidden="true" /><h3>Walkways and front steps</h3><p>Secondary areas are included only when safely accessible and route conditions permit.</p></article>
              <article><CreditCard aria-hidden="true" /><h3>Square authorization</h3><p>Where applicable, automatic payments require written authorization and follow the customer’s Square agreement.</p></article>
              <article><CheckCircle2 aria-hidden="true" /><h3>Property access</h3><p>Driveway service may be delayed or omitted only when the property is unsafe, blocked, inaccessible, or presents unreasonable risk.</p></article>
            </div>
            <div className="service-limitation">
              <strong>Primary-service limitation</strong>
              <p>Driveway snow removal is the primary contracted service. The primary walkway and front steps are included when safely accessible and route conditions permit. Walkway or step clearing may be delayed or omitted when conditions are unsafe, blocked, inaccessible, or when completing those secondary areas would materially delay the remaining route.</p>
            </div>
            <Link className="text-link light-link" href="/terms">Read Full Terms &amp; Conditions</Link>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell final-cta-inner">
            <p className="eyebrow">READY FOR WINTER?</p>
            <h2>Request your property review today.</h2>
            <p>Dr. Snow serves approved homes in Springfield, Wilbraham, East Longmeadow, Longmeadow, Chicopee, West Springfield, and selected nearby Western Massachusetts routes.</p>
            <div className="button-row centered">
              <Link className="button button-primary" href="/#request-service">Request Service</Link>
              <a className="button button-secondary" href={siteConfig.phoneHref}>Call Now</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
