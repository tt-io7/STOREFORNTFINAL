import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t border-ui-border-base w-full bg-grey-5">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-12 md:py-24">
          <div className="flex flex-col gap-y-4">
            <LocalizedClientLink
              href="/"
              className="font-heading font-semibold text-xl text-primary hover:text-primary-dark transition-colors"
            >
              AndMore<span className="text-secondary">Tech</span>
            </LocalizedClientLink>
            <p className="text-ui-fg-subtle max-w-xs">
              Your trusted source for cutting-edge technology and innovative solutions. Part of AndMore LLC.
            </p>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base font-medium">
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
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-primary transition-colors",
                            children && "txt-small-plus"
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
                                    className="hover:text-primary transition-colors"
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
                <span className="txt-small-plus txt-ui-fg-base font-medium">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-primary transition-colors"
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
              <span className="txt-small-plus txt-ui-fg-base font-medium">
                Company
              </span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full mb-8 md:mb-12 justify-between text-ui-fg-muted border-t border-ui-border-base pt-6">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} AndMore Tech. All rights reserved.
          </Text>
          <div className="flex gap-x-6 mt-4 md:mt-0">
            <a href="#" className="text-ui-fg-subtle hover:text-primary transition-colors">
              Facebook
            </a>
            <a href="#" className="text-ui-fg-subtle hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="text-ui-fg-subtle hover:text-primary transition-colors">
              Instagram
            </a>
            <a href="#" className="text-ui-fg-subtle hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
