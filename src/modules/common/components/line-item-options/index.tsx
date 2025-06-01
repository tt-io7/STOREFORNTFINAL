import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

type LineItemOptionsProps = {
  variant: HttpTypes.StoreProductVariant
  "data-testid"?: string
  "data-value"?: HttpTypes.StoreProductVariant
}

const LineItemOptions = ({
  variant,
  "data-testid": dataTestid,
  "data-value": dataValue,
  ...props
}: LineItemOptionsProps) => {
  return (
    <Text
      data-testid={dataTestid}
      data-value={dataValue}
      className="inline-block txt-medium text-dark-muted w-full overflow-hidden text-ellipsis"
      {...props}
    >
      Variant: {variant.title}
    </Text>
  )
}

export default LineItemOptions
