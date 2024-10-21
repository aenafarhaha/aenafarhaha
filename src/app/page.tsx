import Hero from "./fonts/components/hero";
import Riwayatpendidikan from "./fonts/components/riwayatpendidikan";
import Riwayatpekerjaan from "./fonts/components/riwayatpekerjaan";
import "./en-style.css";

export default function CVonline() {
  return (
    <section>
      <Hero />
      <Riwayatpendidikan />
      <Riwayatpekerjaan />
    </section>
  )
}