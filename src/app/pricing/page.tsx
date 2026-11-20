import TopNav from "../components/TopNav/TopNav";
import { Button } from "@heroui/button";
import { IoAddCircleOutline } from "react-icons/io5";

const Pricing = () => {
  const webPricing = [
    {
      pages: "1 - 14 Pages",
      features: ["Landing page", "About", "Services", "Contact", "Gallery", "Blog", "etc."],
      price: 4000,
    },
    {
      pages: "15 - 20 Pages",
      features: ["More sections", "Advanced Animations", "Basic CMS", "API Integrations"],
      price: 5500,
    },
    {
      pages: "21+ Pages",
      features: ["eCommerce", "Booking System", "Membership Features", "Custom Web Apps"],
      price: 7500,
    }
  ];

  const appPricing = [
    {
      complexity: "Basic App",
      features: ["Simple UI", "Static Content", "No Backend"],
      price: 7000,
    },
    {
      complexity: "Standard App",
      features: ["User Authentication", "Basic Database", "API Integration"],
      price: 9000,
    },
    {
      complexity: "Advanced App",
      features: ["Real-time Features", "Complex UI", "Admin Panel", "Payment Integration"],
      price: 12000,
    }
  ];


  return (
    <main>
      <TopNav />

      <section id="hor" className="grid gap-10">
        <section className="grid  gap-5 mob-screen:gap-3">
          <strong className="text-4xl mob-screen:text-2xl">Website Pricing</strong>

          <section className="gap-10 mob-screen:gap-3" id="items">
            {webPricing.map((el) => (
              <section className="bg-white p-5 grid gap-5 rounded-3xl border" key={el.pages}>
                <header className="flex justify-between flex-col">
                  <span className="text-lg">{el.pages}</span>

                  <div className="text-2xl bg-green-50 py-2 px-3 text-primary rounded-md font-semibold">GHS {el.price.toLocaleString()}</div>
                </header>

                <hr />

                <article className="grid gap-2">
                  {el.features.map((f) => (
                    <legend key={f} className="flex items-center gap-2">
                      <IoAddCircleOutline />
                      <span>{f}</span>
                    </legend>
                  ))}
                </article>

              </section>
            ))}
          </section>
        </section>

        <section className="grid  gap-5 mob-screen:gap-3">
          <strong className="text-4xl mob-screen:text-2xl">Mobile App Pricing</strong>

          <section className="gap-10 mob-screen:gap-3" id="items">
            {appPricing.map((el) => (
              <section className="bg-white p-5 grid gap-5 rounded-3xl border" key={el.complexity}>
                <header className="flex justify-between flex-col">
                  <span className="text-lg">{el.complexity}</span>

                  <div className="text-2xl bg-green-50 py-2 px-3 text-primary rounded-md font-semibold">GHS {el.price.toLocaleString()}</div>
                </header>

                <hr />

                <article className="grid gap-2">
                  {el.features.map((f) => (
                    <legend key={f} className="flex items-center gap-2">
                      <IoAddCircleOutline />
                      <span>{f}</span>
                    </legend>
                  ))}
                </article>

              </section>
            ))}
          </section>
        </section>
      </section>
    </main>
  );
}

export default Pricing;