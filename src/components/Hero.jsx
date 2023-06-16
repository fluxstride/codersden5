import Image from "next/image";
import links from '../assets/link-img.png'

const Hero = () => {
  return (
    <div className=" w-full">
      <div className="bg-[url('../assets/hero-bg.png')] bg-no-repeat bg-cover bg-center w-full py-20">
        <div className="pt-10 w-full max-w-4xl mx-auto text-center">
          <h1 className="text-main-text text-4xl font-bold w-10/12 mx-auto leading-relaxed">
            Optimize Your Online Experience with Our Advanced{" "}
            <span className="text-primary-400">URL Shortening</span> Solution
          </h1>
          <p className="w-3/4 mx-auto">
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs, branded links, and domain customization
            options to reinforce your brand presence and enhance user
            engagement.
          </p>
          <div className="flex w-1/3 mx-auto space-x-4 my-8 ">
            <button className="text-white bg-primary-300 hover:bg-white hover:text-primary-300 hover:border hover:border-primary-300 py-2 rounded-full w-1/2">
              Sign up
            </button>
            <button className="text-primary-300 hover:border hover:border-primary-300 py-2 rounded-full w-1/2">
              Learn more
            </button>
          </div>
          <div className="flex flex-col items-center w-1/2 mx-auto bg-bg-light border border-primary-100 rounded-xl p-8">
            <Image src={links} alt="links" className="w-auto h-auto" />
            <p>
              Seamlessly transform your long URLs into concise and{" "}
              <strong>shareable links</strong> with just few clicks.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-bg-light w-full flex justify-evenly items-center py-10">
        <p className="font-bold text-2xl">
          One Stop.
          <br /> Four{" "}
          <span className="font-bold text-primary-400">Possibilities.</span>
        </p>
        <p className="flex flex-col justify-center items-left">
          <span className="font-bold text-xl">3M</span>
          <span>Active users</span>
        </p>
        <p className="flex flex-col justify-center items-left">
          <span className="font-bold text-xl">60M</span>
          <span>
            Links & QR <br /> codes created
          </span>
        </p>
        <p className="flex flex-col justify-center items-left">
          <span className="font-bold text-xl">1B</span>
          <span>
            Clicked & Scanned <br /> connections
          </span>
        </p>
        <p className="flex flex-col justify-center items-left">
          <span className="font-bold text-xl">300k</span>
          <span>App Integrations</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
