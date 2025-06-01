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
      className="max-w-sm flex flex-col items-center bg-dark-light rounded-xl p-8 shadow-2xl border border-dark-lighter"
      data-testid="register-page"
    >
      <h1 className="text-large-semi uppercase mb-6 text-dark-text font-bold text-center">
        Become an AndMore Tech Member
      </h1>
      <p className="text-center text-base-regular text-dark-muted mb-4 leading-relaxed">
        Create your AndMore Tech Member profile, and get access to an enhanced
        shopping experience.
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-4">
          <Input
            label="First name"
            name="first_name"
            required
            autoComplete="given-name"
            data-testid="first-name-input"
            className="bg-dark border-dark-lighter text-dark-text focus:border-[#A78BFA] focus:ring-[#A78BFA]"
          />
          <Input
            label="Last name"
            name="last_name"
            required
            autoComplete="family-name"
            data-testid="last-name-input"
            className="bg-dark border-dark-lighter text-dark-text focus:border-[#A78BFA] focus:ring-[#A78BFA]"
          />
          <Input
            label="Email"
            name="email"
            required
            type="email"
            autoComplete="email"
            data-testid="email-input"
            className="bg-dark border-dark-lighter text-dark-text focus:border-[#A78BFA] focus:ring-[#A78BFA]"
          />
          <Input
            label="Phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            data-testid="phone-input"
            className="bg-dark border-dark-lighter text-dark-text focus:border-[#A78BFA] focus:ring-[#A78BFA]"
          />
          <Input
            label="Password"
            name="password"
            required
            type="password"
            autoComplete="new-password"
            data-testid="password-input"
            className="bg-dark border-dark-lighter text-dark-text focus:border-[#A78BFA] focus:ring-[#A78BFA]"
          />
        </div>
        <ErrorMessage error={message} data-testid="register-error" />
        <span className="text-center text-dark-muted text-small-regular mt-6">
          By creating an account, you agree to AndMore Tech&apos;s{" "}
          <LocalizedClientLink
            href="/content/privacy-policy"
            className="underline text-[#A78BFA] hover:text-[#C4B5FD] transition-colors duration-300"
          >
            Privacy Policy
          </LocalizedClientLink>{" "}
          and{" "}
          <LocalizedClientLink
            href="/content/terms-of-use"
            className="underline text-[#A78BFA] hover:text-[#C4B5FD] transition-colors duration-300"
          >
            Terms of Use
          </LocalizedClientLink>
          .
        </span>
        <SubmitButton 
          className="w-full mt-6 bg-gradient-to-r from-[#A78BFA] to-[#C4B5FD] hover:from-[#9333EA] hover:to-[#A78BFA] text-white font-semibold border-none transition-all duration-300 transform hover:scale-105" 
          data-testid="register-button"
        >
          Join
        </SubmitButton>
      </form>
      <span className="text-center text-dark-muted text-small-regular mt-6">
        Already a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline text-[#A78BFA] hover:text-[#C4B5FD] transition-colors duration-300 font-medium"
        >
          Sign in
        </button>
        .
      </span>
    </div>
  )
}

export default Register
