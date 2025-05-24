import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

export default function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <Text className="font-heading text-2xl font-medium text-grey-90">{collection.title}</Text>
          {collection.description && (
            <p className="text-ui-fg-subtle mt-1 max-w-xl">
              {collection.description}
            </p>
          )}
        </div>
        <InteractiveLink href={`/collections/${collection.handle}`} className="mt-2 md:mt-0">
          View all
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-1 xsmall:grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-4 md:gap-6">
        {products &&
          products.slice(0, 4).map((product) => (
            <li key={product.id} className="h-full">
              {/* @ts-ignore */}
              <ProductPreview product={product} region={region} isFeatured />
            </li>
          ))}
      </ul>
    </div>
  )
}
