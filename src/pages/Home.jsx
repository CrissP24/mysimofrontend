import DoctorSearchBar from '../components/DoctorSearchBar'
import HowItWorks from '../components/HowItWorks'
import FeaturedDoctors from '../components/FeaturedDoctors'
import GadgetSection from '../components/GadgetSection'

export default function Home(){
  return (
    <>
      <section className="bg-gradient-to-br from-primary/20 to-white">
        <div className="container py-14 md:py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[color:var(--text)]">Encuentra al médico que necesitas cerca de ti</h1>
            <p className="mt-3 text-gray-700">Reserva tu cita médica online sin complicaciones.</p>
            <div className="mt-6"><DoctorSearchBar /></div>
          </div>
          <div className="hidden md:block">
            <div className="w-full h-72 rounded-3xl bg-white shadow-card border relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-primary/20 rounded-full" />
              <div className="absolute -left-8 -top-8 w-48 h-48 bg-accent/20 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center text-primary text-3xl font-bold">MySimo</div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <FeaturedDoctors />
      <GadgetSection />
    </>
  )
}
