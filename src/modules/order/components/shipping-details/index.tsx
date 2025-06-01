import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"
import { convertToLocale } from "@lib/util/money"

import { Heading } from "@medusajs/ui"

import Divider from "@modules/common/components/divider"

type ShippingDetailsProps = {
  order: HttpTypes.StoreOrder
}

const ShippingDetails = ({ order }: ShippingDetailsProps) => {
  return (
    <div>
      <Text className="txt-medium-plus text-dark-text mb-1">
        Delivery
      </Text>
      <Text className="txt-medium text-dark-muted">
        {order.shipping_address?.first_name}{" "}
        {order.shipping_address?.last_name}
      </Text>
      <Text className="txt-medium text-dark-muted">
        {order.shipping_address?.address_1}{" "}
        {order.shipping_address?.address_2}
      </Text>
      <Text className="txt-medium text-dark-muted">
        {order.shipping_address?.postal_code}, {order.shipping_address?.city}
      </Text>
      <Text className="txt-medium text-dark-muted">
        {order.shipping_address?.country_code?.toUpperCase()}
      </Text>

      <div className="mt-4">
        <Text className="txt-medium-plus text-dark-text mb-1">Contact</Text>
        <Text className="txt-medium text-dark-muted">
          {order.shipping_address?.phone}
        </Text>
        <Text className="txt-medium text-dark-muted">{order.email}</Text>
      </div>

      <div className="mt-4">
        <Text className="txt-medium-plus text-dark-text mb-1">Method</Text>
        <Text className="txt-medium text-dark-muted">
          {order.shipping_methods?.[0]?.name} ({order.shipping_methods?.[0]?.amount && convertToLocale({
            amount: order.shipping_methods[0].amount,
            currency_code: order.currency_code,
          })})
        </Text>
      </div>
    </div>
  )
}

export default ShippingDetails
