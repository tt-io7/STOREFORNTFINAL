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
      className="bg-dark-light/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-dark-lighter/50 relative overflow-hidden"
      data-testid="login-page"
    >
      {/* Gradient overlay for visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-2xl"></div>
      
      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4 font-heading">Welcome Back</h1>
          <p className="text-gray-300 text-base leading-relaxed">
            Sign in to access an enhanced shopping experience.
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-6" action={formAction}>
          <div className="space-y-6">
            <div>
              <Input
                label="Email"
                name="email"
                type="email"
                title="Enter a valid email address."
                autoComplete="email"
                required
                data-testid="email-input"
              />
            </div>
            <div>
              <Input
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                data-testid="password-input"
              />
            </div>
          </div>

          {/* Error Message */}
          {message && (
            <div className="mt-4">
              <ErrorMessage error={message} data-testid="login-error-message" />
            </div>
          )}

          {/* Sign In Button */}
          <div className="pt-4">
            <SubmitButton 
              data-testid="sign-in-button" 
              className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-purple-400/50"
            >
              Sign in
            </SubmitButton>
          </div>
        </form>

        {/* Footer Section */}
        <div className="mt-8 pt-6 text-center border-t border-dark-lighter/30">
          <p className="text-gray-400 text-sm">
            Not a member?{" "}
            <button
              onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
              className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300 underline underline-offset-2"
              data-testid="register-button"
            >
              Join us
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
