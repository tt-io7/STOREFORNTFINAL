"use client"

import { useFormState } from "react-dom"

import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { signup } from "@lib/data/customer"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signup, null)

  return (
    <div
      className="bg-dark-light/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-dark-lighter/50 relative overflow-hidden"
      data-testid="register-page"
    >
      {/* Gradient overlay for visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-2xl"></div>
      
      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4 font-heading">
            Join AndMore Tech
          </h1>
          <p className="text-gray-300 text-base leading-relaxed">
            Create your member profile and get access to an enhanced shopping experience.
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-6" action={formAction}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Input
                label="First name"
                name="first_name"
                required
                autoComplete="given-name"
                data-testid="first-name-input"
              />
            </div>
            <div>
              <Input
                label="Last name"
                name="last_name"
                required
                autoComplete="family-name"
                data-testid="last-name-input"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <Input
                label="Email"
                name="email"
                required
                type="email"
                autoComplete="email"
                data-testid="email-input"
              />
            </div>
            <div>
              <Input
                label="Phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                data-testid="phone-input"
              />
            </div>
            <div>
              <Input
                label="Password"
                name="password"
                required
                type="password"
                autoComplete="new-password"
                data-testid="password-input"
              />
            </div>
          </div>

          {/* Error Message */}
          {message && (
            <div className="mt-4">
              <ErrorMessage error={message} data-testid="register-error" />
            </div>
          )}

          {/* Terms and Conditions */}
          <div className="text-center text-xs text-gray-400 leading-relaxed p-4 bg-dark/20 rounded-lg">
            By creating an account, you agree to AndMore Tech's{" "}
            <LocalizedClientLink
              href="/content/privacy-policy"
              className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors duration-300"
            >
              Privacy Policy
            </LocalizedClientLink>{" "}
            and{" "}
            <LocalizedClientLink
              href="/content/terms-of-use"
              className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors duration-300"
            >
              Terms of Use
            </LocalizedClientLink>
            .
          </div>

          {/* Join Button */}
          <div className="pt-4">
            <SubmitButton 
              className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-purple-400/50" 
              data-testid="register-button"
            >
              Create Account
            </SubmitButton>
          </div>
        </form>

        {/* Footer Section */}
        <div className="mt-8 pt-6 text-center border-t border-dark-lighter/30">
          <p className="text-gray-400 text-sm">
            Already a member?{" "}
            <button
              onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
              className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300 underline underline-offset-2"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
