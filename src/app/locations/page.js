import LocationsList from "../../components/LocationsList";

export default function LocationsPage() {
  return (
    <section className="min-h-screen bg-[#fdf8e7] pt-32 pb-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-black mb-16">
          Our Locations
        </h2>

        <LocationsList />
      </div>
    </section>
  );
}
