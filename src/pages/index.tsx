import Form from "@/components/Form";
import Link from "next/link";
import Head from "next/head";

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
        <Link href="/login">Go to Login</Link>
        <Form />
      </main>
    </>
  );
}
