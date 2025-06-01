import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div
      className="flex flex-col small:flex-row small:items-start py-8 content-container bg-dark min-h-screen"
      data-testid="category-container"
    >
      <div className="w-full small:w-1/4 small:pr-8 mb-8 small:mb-0">
        <RefinementList sortBy={sort} />
      </div>
      <div className="w-full small:w-3/4">
        <div className="mb-8">
          <h1 className="heading-2 text-dark-text font-bold" data-testid="store-page-title">Shop All Products</h1>
          <p className="text-dark-muted mt-2 text-lg">
            Discover the latest innovative technology from AndMore Tech
          </p>
        </div>
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default StoreTemplate
