import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, CreditCard, MapPin, Snowflake } from "lucide-react";
import { Footer, Header } from "../../components";
import { serviceAreas, type ServiceAreaSlug } from "../../service-area-data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(serviceAreas).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreas[slug as ServiceAreaSlug];
  if (!area) return {};

  const path = `/service-areas/${slug}`;
  return {
    title: area.title,
    description: area.description,
    alternates: { canonical: path },
    openGraph: {
      title: `${area.title} | Dr. Snow`,
      description: area.description,
      url: path,
    },
  };
}

export default async function ServiceAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = serviceAreas[slug as ServiceAreaSlug];
  if (!area) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://drsnowma.com/service-areas/${slug}#service`,
    name: `Residential Snow Removal in ${area.city}, MA`,
    serviceType: "Residential snow removal and ice control",
    provider: { "@id": "https://drsnowma.com/#business" },
    areaServed: { "@type": "City", name: `${area.city}, Massachusetts` },
    url: `https://drsnowma.com/service-areas/${slug}`,
    description: area.description,
  };

  return <>
    <Header />
    <main>
      <section className="page-hero location-hero">
        <div className="shell">
          <Link className="back-link" href="/#service-area"><ArrowLeft size={16} aria-hidden="true" /> All service areas</Link>
          <p className="eyebrow light">DR. SNOW SERVICE AREA</p>
          <h1>Residential snow removal<br /><em>in {area.city}, MA.</em></h1>
          <p>{area.intro}</p>
        </div>
      </section>

      <section className="section location-section">
        <div className="shell location-layout">
          <div className="location-main">
            <p className="eyebrow">LOCAL ROUTE-BASED SERVICE</p>
            <h2>Snow removal planned around your property.</h2>
            <p>{area.localDetails}</p>
            <h3>What residential service includes*</h3>
            <ul className="location-checks">
              <li><CheckCircle2 /> Driveway snow removal after the applicable 2-inch service trigger</li>
              <li><CheckCircle2 /> Primary walkway and front steps when safely accessible and route conditions permit</li>
              <li><CheckCircle2 /> Optional ice control applied after snow removal when selected</li>
              <li><CheckCircle2 /> Seasonal membership or published pay-per-storm pricing</li>
              <li><CheckCircle2 /> Square-secured payment after property and service approval</li>
            </ul>
            <p className="location-note">*Walkway and step service is subject to the safety, access, weather, and route conditions explained in the <Link href="/terms">Terms &amp; Conditions</Link>.</p>
          </div>

          <aside className="location-card">
            <MapPin aria-hidden="true" />
            <p className="eyebrow">AREA REVIEW</p>
            <h2>{area.city}, Massachusetts</h2>
            <p>Route space is limited and every address requires approval. Listed service areas do not guarantee availability at every property.</p>
            <div className="location-tags">{area.communities.map((community) => <span key={community}><Snowflake /> {community}</span>)}</div>
            <Link className="button button-primary full" href="/#route-form">Request a property review <ArrowRight size={18} aria-hidden="true" /></Link>
          </aside>
        </div>
      </section>

      <section className="section location-process">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">HOW ENROLLMENT WORKS</p><h2>Property review first. Secure payment second.</h2></div>
          <div className="location-steps">
            <article><MapPin /><h3>Submit the address</h3><p>Send the service address, contact information, estimated driveway size, and ice-control preference.</p></article>
            <article><Snowflake /><h3>Dr. Snow reviews it</h3><p>The property and available route capacity are reviewed. A driveway photo may be requested.</p></article>
            <article><CreditCard /><h3>Enroll through Square</h3><p>After approval, enter payment information directly through the secure Square link and complete the required authorization.</p></article>
          </div>
        </div>
      </section>

      <section className="final-cta"><div className="shell"><p className="eyebrow">CHECK ROUTE AVAILABILITY</p><h2>Request snow removal in {area.city}.</h2><p>Dr. Snow will review the address before confirming service or payment.</p><Link className="button button-primary" href="/#route-form">Start the property review <ArrowRight size={18} /></Link></div></section>
    </main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
  </>;
}

