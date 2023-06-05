import { ImMagicWand } from 'react-icons/im';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="form-gradient w-full">
        <div className="form-image w-full flex items-center justify-center py-20">
          <div className="bg-white rounded-xl p-10 w-1/3 text-primary-100 space-y-6 text-sm">
            <form className="flex flex-col justify-between space-y-4">
              <input type="text" placeholder='Paste URL here...' className="border border-primary-100 placeholder:text-primary-100 placeholder:text-xs p-4 rounded-xl focus:outline-none" />
              <button className="flex items-center justify-center space-x-4 bg-primary-400 rounded-full w-full text-white py-4 hover:bg-white hover:text-primary-400 hover:border hover:border-primary-400 transition ease-in-out">Trim URL <span><ImMagicWand /></span></button>
            </form>
            <p>By clicking TrimURL, I agree to the <strong>Terms of Service, Privacy Policy</strong> and Use of Cookies.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
