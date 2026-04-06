import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Hero from "./components/home/Hero";
import Stats from "./components/home/Stats";
import Categories from "./components/home/Categories";
import FeaturedCourses from "./components/home/FeaturedCourses";
import InstructorHighlight from "./components/home/InstructorHighlight";
import Testimonials from "./components/home/Testimonials";
import CorporateCTA from "./components/home/CorporateCTA";
import BecomeInstructor from "./components/home/BecomeInstructor";
import EventsBlogPreview from "./components/home/EventsBlogPreview";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Categories />
        <FeaturedCourses />
        <InstructorHighlight />
        <EventsBlogPreview />
        <Testimonials />
        <BecomeInstructor />
        <CorporateCTA />
      </main>
      <Footer />
    </>
  );
}
