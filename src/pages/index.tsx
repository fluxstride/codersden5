import Form from "@/components/Form";
import Head from "next/head";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Price from "@/components/Price";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Sciccors</title>
        <meta
          name="description"
          content=" Optimize Your Online Experience with Our Advanced URL Shortening Solution"
        />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between">
        {/* <Link href="/login">Go to Login</Link> */}
        <Hero />
        <WhyUs /> 
        <Price />
        <Form />
        <Faq />
        <Cta />
      </main>
    </>
  );
}
