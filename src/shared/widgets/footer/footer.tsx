import Link from "next/link";
import FooterLogo from "./footer.logo";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-10">
      <div className="w-[95%] md:flex m-auto py-5">
        <div className="w-full md:w-[40%]">
          <Link href={"/"}>
            <FooterLogo />
          </Link>
          <p className="text-2xl py-2">
            Get SAST Plc updates and delivered directly to your inbox
          </p>

          <div className="flex items-center w-full">
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter your email address"
              className=" bg-transparent w-full md:w-[50%] border h-[42px] px-2 rounded rounded-r-0 outline-none"
            />
            <button className="w-[90px] cursor-pointer rounded-r bg-blue-500 h-[43px]">
              Subscribe
            </button>
          </div>
          <br />
          <p className="text-xs">
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from our company and products.
          </p>
        </div>
        <div className="w-full md:w-[60%] flex md:justify-end justify-center py-5 md:py-0">
          <div className="md:w-[50%] flex justify-around">
            <div>
              <ul>
                <li className="text-xl pb-4 cursor-pointer">Create</li>
                <li className="text-xl pb-4 cursor-pointer">Write</li>
                <li className="text-xl pb-4 cursor-pointer">Grow</li>
                <li className="text-xl pb-4 cursor-pointer">Monetize</li>
                <li className="text-xl pb-4 cursor-pointer">Analyze</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-xl pb-4 cursor-pointer">Careers</li>
                <li className="text-xl pb-4 cursor-pointer">Pricing</li>
                <li className="text-xl pb-4 cursor-pointer">Shop</li>
                <li className="text-xl pb-4 cursor-pointer">Compare</li>
                <li className="text-xl pb-4 cursor-pointer">Love</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="text-lg text-center pb-10">
        © 2024 SAST Plc, All rights reserved.
      </p>
    </footer>
  );
}
