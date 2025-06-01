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
      <div data-testid="product-wrapper" className="flex flex-col h-full overflow-hidden rounded-xl border border-dark-lighter bg-dark-light hover:border-[#A78BFA] transition-all duration-300 hover:shadow-2xl hover:shadow-[#A78BFA]/20 transform hover:scale-105">
        <div className="relative overflow-hidden rounded-t-xl">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>
        <div className="flex flex-col justify-between p-6 flex-grow">
          <Text className="font-semibold text-dark-text mb-2 group-hover:text-[#A78BFA] transition-colors duration-300" data-testid="product-title">
            {product.title}
          </Text>
          <div className="flex items-center justify-between mt-3">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
            <span className="text-sm text-[#F59E0B] px-3 py-1 rounded-full bg-[#F59E0B]/10 font-medium border border-[#F59E0B]/20">
              New
            </span>
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
