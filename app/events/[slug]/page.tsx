import { notFound } from "next/navigation";
import { events } from "@/app/lib/data";
import Navbar from "@/app/components/shared/Navbar";
import Footer from "@/app/components/shared/Footer";
import EventDetailContent from "./EventDetailContent";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return notFound();

  const related = events.filter((e) => e.slug !== slug && e.category === event.category).slice(0, 2);

  return (
    <>
      <Navbar />
      <EventDetailContent event={event} related={related} />
      <Footer />
    </>
  );
}
