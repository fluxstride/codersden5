import Image from "next/image";
import logo from "../assets/logo-black.png";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-white w-full">
      <div className="footer-bg-img w-full py-20">
        <div className="flex justify-between w-full max-w-7xl gap-4 mx-auto ">
          <div className="w-1/5 flex flex-col items-center space-y-4">
            <Image src={logo} alt="scissor" />
            <div className="flex w-full justify-evenly">
              <AiOutlineTwitter className="text-2xl" />
              <AiOutlineInstagram className="text-2xl" />
              <AiFillLinkedin className="text-2xl" />
              <AiFillFacebook className="text-2xl" />
            </div>
          </div>
          <div className="flex w-3/5 flex-col items-center justify-between gap-8">
            <div className="w-full flex items-start justify-between">
              <div className="w-1/3">
                <h4 className="font-bold">Why Scissor ?</h4>
                <div>
                  <p>Scissor 101</p>
                  <p>Integrations & API</p>
                  <p>Pricing</p>
                </div>
              </div>
              <div className="w-1/3">
                <h4 className="font-bold">Solutions</h4>
                <div>
                  <p>Social Media</p>
                  <p>Digital Marketing </p>
                  <p>Customer Service</p>
                  <p>For Developers</p>
                </div>
              </div>
              <div className="w-1/3">
                <h4 className="font-bold">Products</h4>
                <div>
                  <p>Link Management</p>
                  <p>QR Codes</p>
                  <p>Link-in-bio</p>
                </div>
              </div>
            </div>
            <div className="w-full flex items-start justify-between">
              <div className="w-1/3">
                <h4 className="font-bold">Resources</h4>
                <p>Blog</p>
                <p>Resource Library</p>
                <p>Developers</p>
                <p>App Connectors</p>
                <p>Support</p>
                <p>Trust Center</p>
                <p>Browser Extension</p>
                <p>Mobile App</p>
              </div>
              <div className="w-1/3">
                <h4 className="font-bold">Features</h4>
                <div>
                  <p>Branded Links</p>
                  <p>Mobile Links</p>
                  <p>Campaign</p>
                  <p>Management & Analytics</p>
                  <p>QR Code generation</p>
                </div>
              </div>
              <div className="w-1/3">
                <h4 className="font-bold">Legal</h4>
                <div>
                  <p>Privacy Policy</p>
                  <p>Cookie Policy</p>
                  <p>Terms of Service</p>
                  <p>Acceptable Use Policy</p>
                  <p>Code of Conduct</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/5">
            <h4 className="font-bold">Company</h4>
            <div>
              <p>About Scissor</p>
              <p>Careers</p>
              <p>Partners</p>
              <p>Press</p>
              <p>Contact</p>
              <p>Reviews</p>
            </div>
          </div>
        </div>
        <aside className="flex items-end justify-evenly w-[296px] ml-auto mr-20 text-xs font-medium">
          <span>Term of Service</span>
          <span className="px-3 border-x border-x-main-text">Security</span>
          <span>Scissor {new Date().getFullYear()}</span>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
