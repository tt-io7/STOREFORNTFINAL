import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SignInPrompt = () => {
  return (
    <div className="bg-dark border border-dark-lighter rounded-xl flex items-center justify-between p-6 shadow-lg">
      <div>
        <Heading level="h2" className="txt-xlarge text-dark-text font-bold">
          Already have an account?
        </Heading>
        <Text className="txt-medium text-dark-muted mt-2">
          Sign in for a better experience.
        </Text>
      </div>
      <div>
        <LocalizedClientLink href="/account">
          <Button 
            variant="secondary" 
            className="h-10 bg-gradient-to-r from-[#A78BFA] to-[#C4B5FD] hover:from-[#9333EA] hover:to-[#A78BFA] text-white font-semibold border-none transition-all duration-300 transform hover:scale-105" 
            data-testid="sign-in-button"
          >
            Sign in
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
