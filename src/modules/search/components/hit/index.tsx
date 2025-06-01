import { Container, Text } from "@medusajs/ui"

import Thumbnail from "@modules/products/components/thumbnail"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

export type ProductHit = {
  id: string
  title: string
  handle: string
  description: string | null
  thumbnail: string | null
  variants: HttpTypes.StoreProductVariant[]
  collection_handle: string | null
  collection_id: string | null
}

type HitProps = {
  hit: ProductHit
}

const Hit = ({ hit }: HitProps) => {
  return (
    <LocalizedClientLink
      href={`/products/${hit.handle}`}
      data-testid="search-result"
    >
      <Container
        key={hit.id}
        className="flex sm:flex-col gap-2 w-full p-4 bg-dark-light/95 border border-dark-lighter/50 rounded-lg shadow-lg hover:shadow-xl hover:bg-dark-light items-center sm:justify-center transition-all duration-300"
      >
        <Thumbnail
          thumbnail={hit.thumbnail}
          size="square"
          className="group h-12 w-12 sm:h-full sm:w-full rounded-lg overflow-hidden"
        />
        <div className="flex flex-col justify-between group">
          <div className="flex flex-col">
            <Text
              className="text-dark-text font-medium hover:text-[#A78BFA] transition-colors duration-300"
              data-testid="search-result-title"
            >
              {hit.title}
            </Text>
          </div>
        </div>
      </Container>
    </LocalizedClientLink>
  )
}

export default Hit
