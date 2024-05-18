"use client"
import Hero from "../components/layout/Hero";
import Contact from "@/components/layout/Contact"
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>

      <Hero />
      <HomeMenu />
      <section className="text-center my-18 mt-12" id="about">
        <SectionHeaders 
        subHeader={'Our Story'}
        mainHeader={'About Us'}/>
        <div className="text-gray-500 max-w-4xl max-auto mt-4 flex
      flex-col gap-4">
          <p className="">
            "Welcome to Flavors Bistro, where culinary excellence meets
            a warm and inviting atmosphere. At the heart of our kitchen is
            a passion for crafting delightful dishes that awaken your taste buds.
            With a dedication to using fresh, locally-sourced ingredients,
            our chefs artfully blend flavors to create a memorable dining experience.
          </p>
          <p>
            From intimate gatherings to lively celebrations,
            Flavors Bistro is the perfect destination for those
            who appreciate exceptional food, friendly service,
            and a touch of culinary magic. Join us as we invite you to savor the essence of
            good taste and create lasting memories with each flavorful bite.
          </p>
        </div>
      </section>
      <section className="text-center my-4" id="contact">
        <SectionHeaders
          subHeader={"Don\'t hasitate"}
          mainHeader={'Contact Us'}
        />
        
      <Contact id="contact"/>
      </section>
      
      
    </>
  );
}
