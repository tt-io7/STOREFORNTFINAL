import React from "react"

import UnderlineLink from "@modules/common/components/interactive-link"

import AccountNav from "../components/account-nav"
import { HttpTypes } from "@medusajs/types"

interface AccountLayoutProps {
  customer: HttpTypes.StoreCustomer | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  return (
    <div className="flex-1 small:py-12 bg-dark min-h-screen" data-testid="account-page">
      <div className="flex-1 content-container h-full max-w-5xl mx-auto bg-dark-light rounded-xl border border-dark-lighter flex flex-col shadow-2xl">
        <div className="grid grid-cols-1 small:grid-cols-[240px_1fr] py-12">
          <div>{customer && <AccountNav customer={customer} />}</div>
          <div className="flex-1">{children}</div>
        </div>
        <div className="flex flex-col small:flex-row items-end justify-between small:border-t border-dark-lighter py-12 gap-8">
          <div>
            <h3 className="text-xl-semi mb-4 text-dark-text font-bold">Got questions?</h3>
            <span className="txt-medium text-dark-muted">
              You can find frequently asked questions and answers on our
              customer service page.
            </span>
          </div>
          <div>
            <UnderlineLink href="/customer-service">
              Customer Service
            </UnderlineLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountLayout
