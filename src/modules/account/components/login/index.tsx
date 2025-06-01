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
      className="w-full bg-dark-light/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-dark-lighter/50 relative overflow-hidden"
      data-testid="login-page"
    >
      {/* Gradient overlay for visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 rounded-2xl"></div>
      
      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-3 font-heading">Welcome Back</h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            Sign in to access an enhanced shopping experience.
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-6" action={formAction}>
          <div className="space-y-4">
            <div className="relative">
              <Input
                label="Email"
                name="email"
                type="email"
                title="Enter a valid email address."
                autoComplete="email"
                required
                data-testid="email-input"
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300"
              />
            </div>
            <div className="relative">
              <Input
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                data-testid="password-input"
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300"
              />
            </div>
          </div>

          {/* Error Message */}
          {message && (
            <ErrorMessage error={message} data-testid="login-error-message" />
          )}

          {/* Sign In Button */}
          <SubmitButton 
            data-testid="sign-in-button" 
            className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-purple-400/50"
          >
            Sign in
          </SubmitButton>
        </form>

        {/* Footer Section */}
        <div className="mt-8 text-center">
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
