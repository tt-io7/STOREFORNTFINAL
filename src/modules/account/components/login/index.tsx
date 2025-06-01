import { useFormState } from "react-dom"

import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import Input from "@modules/common/components/input"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import { login } from "@lib/data/customer"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(login, null)

  return (
    <div
      className="max-w-sm w-full flex flex-col items-center bg-dark-light rounded-xl p-8 shadow-2xl border border-dark-lighter"
      data-testid="login-page"
    >
      <h1 className="text-large-semi uppercase mb-6 text-dark-text font-bold text-center">Welcome back</h1>
      <p className="text-center text-base-regular text-dark-muted mb-8 leading-relaxed">
        Sign in to access an enhanced shopping experience.
      </p>
      <form className="w-full" action={formAction}>
        <div className="flex flex-col w-full gap-y-4">
          <Input
            label="Email"
            name="email"
            type="email"
            title="Enter a valid email address."
            autoComplete="email"
            required
            data-testid="email-input"
            className="bg-dark border-dark-lighter text-dark-text focus:border-[#A78BFA] focus:ring-[#A78BFA]"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            data-testid="password-input"
            className="bg-dark border-dark-lighter text-dark-text focus:border-[#A78BFA] focus:ring-[#A78BFA]"
          />
        </div>
        <ErrorMessage error={message} data-testid="login-error-message" />
        <SubmitButton 
          data-testid="sign-in-button" 
          className="w-full mt-6 bg-gradient-to-r from-[#A78BFA] to-[#C4B5FD] hover:from-[#9333EA] hover:to-[#A78BFA] text-white font-semibold border-none transition-all duration-300 transform hover:scale-105"
        >
          Sign in
        </SubmitButton>
      </form>
      <span className="text-center text-dark-muted text-small-regular mt-6">
        Not a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline text-[#A78BFA] hover:text-[#C4B5FD] transition-colors duration-300 font-medium"
          data-testid="register-button"
        >
          Join us
        </button>
        .
      </span>
    </div>
  )
}

export default Login
