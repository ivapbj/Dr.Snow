import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, AlertTriangle, Clock3, CreditCard, ShieldAlert, Snowflake } from "lucide-react";
import { Footer, Header } from "../components";

export const metadata: Metadata = {
  title: "Snow & Ice Service Terms",
  description: "Important snow removal, ice-control, service timing, and customer responsibility terms for Dr. Snow customers.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Snow & Ice Service Terms | Dr. Snow MA",
    description: "Review Dr. Snow's residential snow removal, ice control, service timing, safety, and customer responsibility terms.",
    url: "/terms",
  },
};

export default function TermsPage() {
  return <>
    <Header />
    <main>
      <section className="page-hero terms-hero"><div className="shell"><Link className="back-link" href="/"><ArrowLeft size={16} /> Back to home</Link><p className="eyebrow light">IMPORTANT SERVICE INFORMATION</p><h1>Snow & Ice<br /><em>Terms & Conditions</em></h1><p>Please review these conditions before requesting or purchasing service.</p></div></section>
      <section className="section terms-section"><div className="shell terms-layout">
        <article className="term-card"><ShieldAlert /><div><h2>Snow & Ice Conditions / No Guarantee of Ice-Free Surfaces</h2><p>Customer acknowledges that snow, ice, freezing temperatures, refreezing, sleet, freezing rain, and other winter conditions can create hazardous conditions even after snow removal and/or ice-control treatment. Dr. Snow will perform the contracted services in a reasonable manner but does not guarantee that the serviced area will remain completely free of snow or ice or that the property will be free from slip-and-fall hazards.</p></div></article>
        <article className="term-card"><Clock3 /><div><h2>Service Timing</h2><p>Service timing is determined by Dr. Snow based on snowfall, weather conditions, forecast, safety, and route efficiency. For a standard storm, Dr. Snow provides one scheduled clearing or service event. Service may occur after the storm ends or at an appropriate point during the storm to avoid unnecessarily clearing the same snowfall multiple times. During prolonged or heavy storms, additional clearing may be necessary.</p></div></article>
        <article className="term-card"><Snowflake /><div><h2>Included Areas and Service Limitations</h2><p>Pay-per-storm and seasonal prices include driveway snow removal as the primary contracted service. The primary walkway and front steps are also included when they are safely accessible and route conditions permit. Dr. Snow may delay or omit walkway or front-step clearing when extreme cold, weather, or other hazards make the work unsafe; when access is blocked; when vehicles, objects, snowbanks, or other obstructions have not been cleared; or when completing those secondary areas would materially delay service to the remaining route. Driveway service may be delayed or omitted only when the property is unsafe, blocked, inaccessible, or cannot be serviced without unreasonable risk.</p></div></article>
        <article className="term-card"><AlertTriangle /><div><h2>Property Classification and Unusual Circumstances</h2><p>The driveway size selected on the request form is an initial estimate. Dr. Snow will review the property and may confirm or adjust the classification. Properties with unusual access requirements, hazards, grades, layouts, or service needs may require additional pricing. Any adjusted price will be explained and confirmed before service.</p></div></article>
        <article className="term-card"><Snowflake /><div><h2>Seasonal Membership</h2><p>The seasonal membership includes up to 15 standard storm services. A standard storm is a total snowfall of 2–7.9 inches. Unused visits are nonrefundable. Storms totaling 8 inches or more fall outside the standard-storm definition and may be billed at the applicable published rate or require additional pricing communicated by Dr. Snow.</p></div></article>
        <article className="term-card"><CreditCard /><div><h2>Square Payment and Authorization</h2><p>Jotform collects service-request information only and does not collect card details or process payment. After the property and plan are approved, Dr. Snow sends a secure Square link. Customers enter payment information directly through Square and must provide written authorization before a saved payment method is charged. Seasonal membership charges are processed automatically each month according to the Square agreement. Square provides a payment receipt after each monthly charge, and the customer receives a service receipt after each visit.</p></div></article>
        <article className="term-card"><AlertTriangle /><div><h2>Customer Responsibilities</h2><p>Customer agrees to keep vehicles, trailers, basketball hoops, toys, hoses, decorations, and other obstacles out of the contracted service area and to identify hidden hazards that may not be visible beneath snow or ice.</p></div></article>
        <div className="terms-actions"><p>Questions about these conditions or your property?</p><Link className="button button-primary" href="/#route-form">Request an address review</Link></div>
      </div></section>
    </main>
    <Footer />
  </>;
}
