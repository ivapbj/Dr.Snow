import Link from "next/link";
import { ArrowLeft, Camera, Check, CreditCard, Info, MessageSquareText } from "lucide-react";
import { Footer, Header, PriceSchedule, SeasonalPlanCard } from "../components";
import { siteConfig } from "../site-config";

export default function PlansPage() {
  return <>
    <Header />
    <main>
      <section className="page-hero"><div className="shell"><Link className="back-link" href="/"><ArrowLeft size={16} /> Back to home</Link><p className="eyebrow light">SEASONAL & PAY-PER-STORM OPTIONS</p><h1>Clear pricing.<br /><em>Professional property review.</em></h1><p>Choose a seasonal membership or pay-per-storm service. Dr. Snow confirms the final driveway classification after reviewing the property.</p></div></section>
      <section className="section plans-page"><div className="shell">
        <div className="section-heading"><p className="eyebrow">SEASONAL PLAN · BEST VALUE</p><h2>Up to 15 standard storm services.</h2><p>Standard storms total 2–7.9 inches. Seasonal members receive automatic weather monitoring, priority route placement, and a locked seasonal rate. Unused visits are nonrefundable.</p></div>
        <div className="plans-grid seasonal-grid">{siteConfig.plans.map((plan) => <SeasonalPlanCard key={plan.key} plan={plan} />)}</div>
        <div className="pricing-subheading"><p className="eyebrow">PAY-PER-STORM OPTION</p><h3>Rates based on final snowfall.</h3><p>The customer selects an estimated driveway size on the form. Dr. Snow confirms or adjusts the classification before service and payment.</p></div>
        <PriceSchedule />
        <div className="square-notice"><CreditCard /><div><b>Square securely handles payment after approval</b><p>Jotform collects the service request only. After Dr. Snow approves the property and plan, the customer receives a secure Square link, enters card information directly through Square, and provides written authorization for automatic monthly seasonal-membership charges according to the Square agreement. The website never collects card numbers.</p></div></div>
      </div></section>
      <section className="section details-section"><div className="shell details-grid">
        <article><Camera /><h2>Property review</h2><ul className="check-list large"><li><Check /> Submit the complete service address, email, and phone number</li><li><Check /> Select an estimated Small, Medium, or Large driveway</li><li><Check /> Choose Yes or No for ice control</li><li><Check /> Add an optional driveway photo and comments</li><li><Check /> Dr. Snow confirms or adjusts the classification</li></ul></article>
        <article><Info /><h2>Important details</h2><dl><div><dt>Standard storm</dt><dd>Seasonal membership covers up to 15 storm services totaling 2–7.9 inches.</dd></div><div><dt>Major storms</dt><dd>Storms of 8 inches or more fall outside the seasonal standard-storm definition and may be billed at the applicable rate.</dd></div><div><dt>Ice control</dt><dd>Optional and applied after snow removal when selected and conditions permit.</dd></div><div><dt>Walkway and front steps</dt><dd>Cleared as a complimentary courtesy only when conditions are safe and route timing permits. This service is not guaranteed.</dd></div><div><dt>Payment</dt><dd>Square securely stores the authorized payment method and processes the automatic monthly seasonal charge according to the customer’s written agreement.</dd></div></dl></article>
      </div></section>
      <section className="final-cta"><div className="shell"><p className="eyebrow">READY FOR A PROPERTY REVIEW?</p><h2>Send Dr. Snow your address.</h2><p>He may request a driveway photo, then confirms your category, route availability and next steps.</p><Link className="button button-primary" href="/#route-form"><MessageSquareText size={18} /> Check route availability</Link></div></section>
    </main><Footer />
  </>;
}
