import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookCatalog from "@/components/BookCatalog";
import TopAuthors from "@/components/TopAuthors";
import RewardsSection from "@/components/RewardsSection";
import PlatformRevenue from "@/components/PlatformRevenue";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BookCatalog />
      <TopAuthors />
      <RewardsSection />
      <PlatformRevenue />
      <Footer />
    </div>
  );
};

export default Index;
