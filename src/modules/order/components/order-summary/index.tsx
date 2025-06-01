import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

type OrderSummaryProps = {
  order: HttpTypes.StoreOrder
}

const OrderSummary = ({ order }: OrderSummaryProps) => {
  const getAmount = (amount?: number | null) => {
    if (!amount) {
      return
    }

    return convertToLocale({
      amount,
      currency_code: order.currency_code,
    })
  }

  return (
    <div>
      <h2 className="text-base-semi text-dark-text font-bold">Order Summary</h2>
      <div className="text-small-regular text-dark-muted my-2">
        <div className="flex items-center justify-between text-base-regular text-dark-text mb-2 font-semibold">
          <span>Subtotal</span>
          <span>{getAmount(order.subtotal)}</span>
        </div>
        <div className="flex flex-col gap-y-1">
          {order.discount_total > 0 && (
            <div className="flex items-center justify-between text-dark-text">
              <span>Discount</span>
              <span className="text-[#A78BFA] font-semibold">- {getAmount(order.discount_total)}</span>
            </div>
          )}
          {order.gift_card_total > 0 && (
            <div className="flex items-center justify-between text-dark-text">
              <span>Gift Card</span>
              <span className="text-[#A78BFA] font-semibold">- {getAmount(order.gift_card_total)}</span>
            </div>
          )}
          <div className="flex items-center justify-between text-dark-text">
            <span>Shipping</span>
            <span>{getAmount(order.shipping_total)}</span>
          </div>
          <div className="flex items-center justify-between text-dark-text">
            <span>Taxes</span>
            <span>{getAmount(order.tax_total)}</span>
          </div>
        </div>
        <div className="h-px w-full border-b border-dark-lighter border-dashed my-4" />
        <div className="flex items-center justify-between text-base-regular text-dark-text mb-2 font-bold">
          <span>Total</span>
          <span className="text-[#A78BFA] font-bold">{getAmount(order.total)}</span>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
