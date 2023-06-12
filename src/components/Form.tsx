import { ImMagicWand } from "react-icons/im";

const Form = () => {
  return (
    <div className="form-gradient w-full">
      <div className="form-bg-img w-full flex items-center px-6 justify-center py-20 md:px-0">
        <div className="bg-white rounded-xl p-10 sm:w-1/2 lg:w-1/3 text-primary-100 space-y-6 text-sm">
          <form className="flex flex-col justify-between space-y-4">
            <input
              type="text"
              placeholder="Paste URL here..."
              className="border border-primary-100 placeholder:text-primary-100 placeholder:text-xs p-4 rounded-xl focus:outline-none"
            />
            <button className="flex items-center justify-center space-x-4 bg-primary-400 rounded-full w-full text-white py-4 hover:bg-white hover:text-primary-400 hover:border hover:border-primary-400 transition ease-in-out">
              Trim URL{" "}
              <span>
                <ImMagicWand />
              </span>
            </button>
          </form>
          <p>
            By clicking Trim URL, I agree to the{" "}
            <strong>Terms of Service, Privacy Policy</strong> and Use of
            Cookies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
