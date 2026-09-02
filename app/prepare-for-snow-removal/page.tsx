import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Car, ClipboardCheck, Clock3, Snowflake, TriangleAlert } from "lucide-react";
import { Footer, Header } from "../components";

export const metadata: Metadata = {
  title: "How to Prepare for Residential Snow Removal",
  description: "Prepare your Springfield-area driveway for snow removal and review access, hidden hazards, service timing, and customer responsibilities.",
  alternates: { canonical: "/prepare-for-snow-removal" },
  openGraph: {
    title: "How to Prepare for Residential Snow Removal | Dr. Snow MA",
    description: "A practical preparation guide for Dr. Snow customers in Greater Springfield and Western Massachusetts.",
    url: "/prepare-for-snow-removal",
  },
};

export default function PreparationPage() {
  return <>
    <Header />
    <main>
      <section className="page-hero preparation-hero">
        <div className="shell">
          <Link className="back-link" href="/"><ArrowLeft size={16} aria-hidden="true" /> Back to home</Link>
          <p className="eyebrow light">PREPARATION & SERVICE TERMS</p>
          <h1>How to prepare<br /><em>before snow removal.</em></h1>
          <p>A little preparation helps us access your service area. Review what to clear, what to point out, and what to expect during winter weather.</p>
        </div>
      </section>

      <section className="section preparation-checklist" aria-labelledby="checklist-heading">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">BEFORE THE CREW ARRIVES</p><h2 id="checklist-heading">Make room for snow removal.</h2><p>Keep the contracted service area clear and let us know about hazards that snow or ice could hide.</p></div>
          <div className="preparation-grid">
            <article><Car aria-hidden="true" /><h3>Move vehicles & trailers</h3><p>Keep vehicles and trailers out of the contracted service area.</p></article>
            <article><ClipboardCheck aria-hidden="true" /><h3>Clear away obstacles</h3><p>Remove basketball hoops, toys, hoses, decorations, and other obstacles from the service area.</p></article>
            <article><TriangleAlert aria-hidden="true" /><h3>Identify hidden hazards</h3><p>Point out hazards that may not be visible beneath snow or ice before service.</p></article>
          </div>
        </div>
      </section>

      <section className="section service-terms-section" aria-labelledby="terms-heading">
        <div className="shell terms-shell">
          <div className="section-heading"><p className="eyebrow">WHAT TO EXPECT</p><h2 id="terms-heading">Service terms.</h2></div>
          <article className="service-term" aria-labelledby="snow-conditions-heading">
            <Snowflake aria-hidden="true" />
            <div><h3 id="snow-conditions-heading">Snow & ice conditions / No guarantee of ice-free surfaces</h3>
              <p>Customer acknowledges that snow, ice, freezing temperatures, refreezing, sleet, freezing rain, and other winter conditions can create hazardous conditions even after snow removal and/or ice-control treatment. Dr. Snow will perform the contracted services in a reasonable manner but does not guarantee that the serviced area will remain completely free of snow or ice or that the property will be free from slip-and-fall hazards.</p>
            </div>
          </article>
          <article className="service-term" aria-labelledby="service-timing-heading">
            <Clock3 aria-hidden="true" />
            <div><h3 id="service-timing-heading">Service timing</h3>
              <p>Service timing is determined by Dr. Snow based on snowfall, weather conditions, forecast, safety, and route efficiency. During prolonged or heavy storms, additional clearing may be necessary.</p>
            </div>
          </article>
          <article className="service-term" aria-labelledby="customer-responsibilities-heading">
            <ClipboardCheck aria-hidden="true" />
            <div><h3 id="customer-responsibilities-heading">Customer responsibilities</h3>
              <p>Customer agrees to keep vehicles, trailers, basketball hoops, toys, hoses, decorations, and other obstacles out of the contracted service area and to identify hidden hazards that may not be visible beneath snow or ice.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="final-cta"><div className="shell"><p className="eyebrow">READY FOR THE NEXT STEP?</p><h2>Tell us about your driveway.</h2><p>Request service and we’ll confirm pricing and route availability.</p><Link className="button button-primary" href="/#request-service">Request Service <ArrowRight size={18} aria-hidden="true" /></Link></div></section>
    </main>
    <Footer />
  </>;
}
