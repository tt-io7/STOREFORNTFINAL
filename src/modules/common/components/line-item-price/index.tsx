import { clx } from "@medusajs/ui"

import { getPercentageDiff } from "@lib/util/get-precentage-diff"
import { getPricesForVariant } from "@lib/util/get-product-price"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

type LineItemPriceProps = {
  item: HttpTypes.StoreCartLineItem | HttpTypes.StoreOrderLineItem
  style?: "default" | "tight"
}

const LineItemPrice = ({ item, style = "default" }: LineItemPriceProps) => {
  const { currency_code, calculated_price_number, original_price_number } =
    getPricesForVariant(item.variant) ?? {}

  const adjustmentsSum = (item.adjustments || []).reduce(
    (acc, adjustment) => adjustment.amount + acc,
    0
  )

  const originalPrice = original_price_number * item.quantity
  const currentPrice = calculated_price_number * item.quantity - adjustmentsSum
  const hasReducedPrice = currentPrice < originalPrice

  return (
    <div className="flex flex-col text-dark-text justify-end h-full">
      {hasReducedPrice && (
        <>
          <p>
            {style === "default" && (
              <span className="text-dark-muted">Original: </span>
            )}
            <span
              className="line-through text-dark-muted"
              data-testid="product-unit-original-price"
            >
              {convertToLocale({
                amount: item.subtotal ?? 0,
                currency_code: item.currency_code,
              })}
            </span>
          </p>
          {style === "default" && (
            <span className="text-[#A78BFA] font-semibold">
              -{Math.round(((item.subtotal! - item.total!) / item.subtotal!) * 100)}%
            </span>
          )}
        </>
      )}
      <span
        className={clx("text-base-regular", {
          "text-[#A78BFA] font-semibold": hasReducedPrice,
        })}
        data-testid="product-unit-price"
      >
        {convertToLocale({
          amount: item.total ?? 0,
          currency_code: item.currency_code,
        })}
      </span>
    </div>
  )
}

export default LineItemPrice
