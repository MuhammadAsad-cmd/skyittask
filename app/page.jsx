import Header from "@/app/_components/Header/Header";
import Categories from "./_components/Categories/Categories";
import BreadCrumbs from "./_components/BreadCrumbs/BreadCrumbs";
import RecommendedProducts from "./_components/RecommendedProducts/RecommendedProducts";
import EventsProducts from "./_components/EventsProducts/EventsProducts";
import Reviews from "./_components/Reviews/Reviews";
import Blogs from "./_components/Blogs/Blogs";
import Description from "./_components/Description/Description";
import Subscription from "./_components/Subscription/Subscription";
import Footer from "./_components/Footer/Footer";
import DetailsSection from "./_components/DetailsSection/DetailsSection";

export default function Home() {
  return (
    <>
      <Header />
      <Categories />
      <BreadCrumbs />
      <DetailsSection />
      <RecommendedProducts />
      <EventsProducts />
      <Reviews />
      <Blogs />
      <Description />
      <Subscription />
      <Footer />
    </>
  );
}
