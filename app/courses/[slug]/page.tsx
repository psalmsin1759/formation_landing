import Navbar from "@/app/components/shared/Navbar";
import Footer from "@/app/components/shared/Footer";
import { courses } from "@/app/lib/data";
import { notFound } from "next/navigation";
import CourseDetailContent from "./CourseDetailContent";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return notFound();

  const discount = Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100);

  return (
    <>
      <Navbar />
      <CourseDetailContent course={course} discount={discount} />
      <Footer />
    </>
  );
}
