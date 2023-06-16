import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Price = () => {
  return (
    <div id="pricing" className="w-full">
      <h2 className="font-bold text-4xl text-center text-main-text mb-3">
        A <span className="text-primary-400">price perfect</span> for your
        needs.
      </h2>
      <p className="w-1/3 mx-auto text-center">
        From catering for your personal, business, event, socials needs, you can
        be rest assured we have you in mind in our pricing.
      </p>
      <div className="flex justify-center items-center mt-10 w-full max-w-5xl mx-auto mb-16">
        <div className="flex flex-col justify-center items-center w-1/3 border border-primary-400 rounded-2xl hover:rounded hover:bg-gradient-to-b from-[#1E3448] to-[#1E3448] hover:text-white hover:scale-110 group">
          <div className="space-y-4 px-10 pb-8 pt-4">
            <span className="text-2xl">Basic</span>
            <h4 className="font-bold text-3xl">Free</h4>
            <p className="text-xl">Free plan for all users</p>
            <p className="flex items-center">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2 group-hover:text-white" />{" "}
              Free plan for all users
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2 group-hover:text-white" />{" "}
              Unlimited URL Shortening
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2 group-hover:text-white" />{" "}
              Basic Link Analytics
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2 group-hover:text-white" />{" "}
              Customizable Short Links
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2 group-hover:text-white" />{" "}
              FStandard Support
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2 group-hover:text-white" />{" "}
              Ad-supported
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/3 rounded bg-gradient-to-b from-[#1E3448] to-[#1E3448] text-white scale-110 group">
          <div className="space-y-4 p-10">
            <span className="text-2xl">Professional</span>
            <h4 className="font-bold text-3xl">$15/month</h4>
            <p className="text-xl">Ideal for business creators</p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="mr-2 text-white" />{" "}
              Ideal for business creators
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="mr-2 text-white" />{" "}
              Enhanced Link Analytics
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="mr-2 text-white" />{" "}
              Custom Branded Domains
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="mr-2 text-white" />{" "}
              Advanced Link Customization
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="mr-2 text-white" />{" "}
              Priority Support
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="mr-2 text-white" />{" "}
              Ad-free Experience
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/3 border border-primary-400 rounded-2xl hover:rounded hover:bg-gradient-to-b from-[#1E3448] to-[#1E3448] hover:text-white hover:scale-110 group">
          <div className="space-y-4 px-10 pb-8 pt-4">
            <span className="text-2xl">Teams</span>
            <h4 className="font-bold text-3xl">$25/month</h4>
            <p className="text-xl">Share with up to 10 users</p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2 group-hover:text-white" />{" "}
              Share with up to 10 users
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2 group-hover:text-white" />{" "}
              Team Collaboration
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2 group-hover:text-white" />{" "}
              User Roles and Permissions
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2 group-hover:text-white" />{" "}
              Enhanced Security
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2 group-hover:text-white" />{" "}
              API Access
            </p>
            <p className="flex items-center space-x-3">
              <IoMdCheckmarkCircleOutline className="text-primary-400 mr-2 group-hover:text-white" />{" "}
              Dedicated Account Manager
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mb-8 flex items-center max-w-md mx-auto space-x-4">
        <button className="text-primary-300 border border-primary-300 hover:border-0 hover:bg-primary-300 hover:text-white py-2 rounded-full w-1/2 text-base">
          Get Custom Pricing
        </button>
        <button className="text-white bg-primary-300 hover:bg-white hover:text-primary-300 hover:border hover:border-primary-300 py-2 rounded-full w-1/2 text-base">
          Select Pricing
        </button>
      </div>
    </div>
  );
};

export default Price;
