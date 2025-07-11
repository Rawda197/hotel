// app/reservation/page.jsx
import ReservationForm from "../../components/ReservationForm";

const ReservationPage = () => {
  return (
    <section className="bg-gray-50 min-h-screen pt-32 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <ReservationForm />
      </div>
    </section>
  );
};

export default ReservationPage;
