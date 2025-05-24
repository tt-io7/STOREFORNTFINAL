import { Text } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { getProductsById } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const [pricedProduct] = await getProductsById({
    ids: [product.id!],
    regionId: region.id,
  })

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
  })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div data-testid="product-wrapper" className="flex flex-col h-full overflow-hidden rounded-lg border border-grey-10 hover:border-primary transition-colors duration-200 hover:shadow-md">
        <div className="relative overflow-hidden">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-200"></div>
        </div>
        <div className="flex flex-col justify-between p-4 flex-grow">
          <Text className="font-medium text-ui-fg-base mb-1" data-testid="product-title">
            {product.title}
          </Text>
          <div className="flex items-center justify-between mt-2">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
            <span className="text-sm text-secondary-dark px-2 py-1 rounded-full bg-secondary bg-opacity-10 font-medium">
              New
            </span>
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
