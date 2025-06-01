import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t border-dark-lighter w-full bg-dark-light">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-12 md:py-24">
          <div className="flex flex-col gap-y-4">
            <LocalizedClientLink
              href="/"
              className="font-heading font-bold text-xl text-[#A78BFA] hover:text-[#C4B5FD] transition-colors duration-300"
            >
              AndMore<span className="text-[#F59E0B]">Tech</span>
            </LocalizedClientLink>
            <p className="text-dark-muted max-w-xs leading-relaxed">
              Your trusted source for cutting-edge technology and innovative solutions. Part of AndMore LLC.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-dark-muted hover:text-[#A78BFA] transition-colors duration-300 text-sm font-medium">
                Facebook
              </a>
              <a href="#" className="text-dark-muted hover:text-[#A78BFA] transition-colors duration-300 text-sm font-medium">
                Twitter
              </a>
              <a href="#" className="text-dark-muted hover:text-[#A78BFA] transition-colors duration-300 text-sm font-medium">
                Instagram
              </a>
              <a href="#" className="text-dark-muted hover:text-[#A78BFA] transition-colors duration-300 text-sm font-medium">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-dark-text font-semibold">
                  Categories
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-dark-muted txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-[#A78BFA] transition-colors duration-300",
                            children && "txt-small-plus font-medium"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-[#A78BFA] transition-colors duration-300"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-dark-text font-semibold">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-dark-muted txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-[#A78BFA] transition-colors duration-300"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus text-dark-text font-semibold">
                Company
              </span>
              <ul className="grid grid-cols-1 gap-y-2 text-dark-muted txt-small">
                <li>
                  <LocalizedClientLink
                    href="/about"
                    className="hover:text-[#A78BFA] transition-colors duration-300"
                  >
                    About Us
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/contact"
                    className="hover:text-[#A78BFA] transition-colors duration-300"
                  >
                    Contact
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/careers"
                    className="hover:text-[#A78BFA] transition-colors duration-300"
                  >
                    Careers
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus text-dark-text font-semibold">
                Legal
              </span>
              <ul className="grid grid-cols-1 gap-y-2 text-dark-muted txt-small">
                <li>
                  <LocalizedClientLink
                    href="/terms-and-conditions"
                    className="hover:text-[#A78BFA] transition-colors duration-300"
                  >
                    Terms & Conditions
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/privacy-policy"
                    className="hover:text-[#A78BFA] transition-colors duration-300"
                  >
                    Privacy Policy
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/return-policy"
                    className="hover:text-[#A78BFA] transition-colors duration-300"
                  >
                    Return Policy
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/shipping-policy"
                    className="hover:text-[#A78BFA] transition-colors duration-300"
                  >
                    Shipping Policy
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/account-terms"
                    className="hover:text-[#A78BFA] transition-colors duration-300"
                  >
                    Account Terms
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/modern-slavery-statement"
                    className="hover:text-[#A78BFA] transition-colors duration-300"
                  >
                    Modern Slavery Statement
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full mb-8 md:mb-12 justify-between text-dark-muted border-t border-dark-lighter pt-6">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} AndMore Tech. All rights reserved.
          </Text>
          <div className="flex gap-x-4 mt-4 md:mt-0">
            <span className="text-sm text-dark-muted">
              Built with <span className="text-[#A78BFA]">♥</span> for modern commerce
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
