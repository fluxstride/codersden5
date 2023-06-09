import Link from "next/link";
import Head from "next/head";

const Login = () => {
  return (
    <div>
      <Head>
        <title>Log in to Sciccors</title>
        <meta name="description" content="Log in with Google or Apple" />
      </Head>
      <Link href="/">Go back home</Link>
      <div>
        <p>Log in with:</p>
        <div>
          <button>Google</button>
          <button>Apple</button>
        </div>
        <div className="flex items-center justify-center space-x-10">
          <hr className="w-80" />
          <span>Or</span>
          <hr className="w-80" />
        </div>
        <form>
          <input type="email" placeholder="Email address or username" />
          <input type="password" placeholder="Password" />
          <span>Forgot your password?</span>
          <button>Log in</button>
        </form>
        <p>
          Don't have an account? <Link href="/">Sign Up</Link>
        </p>
        <p>
          By signing in with an account, you agree to <br /> Sciccor's{" "}
          <strong>Terms of Service, Privacy Policy </strong>and{" "}
          <strong>Acceptable Use Policy. </strong>
        </p>
      </div>
    </div>
  );
};

export default Login;
