import repeat from "@lib/util/repeat"
import { HttpTypes } from "@medusajs/types"
import { Heading, Table } from "@medusajs/ui"

import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  items?: HttpTypes.StoreCartLineItem[]
}

const ItemsTemplate = ({ items }: ItemsTemplateProps) => {
  return (
    <div>
      <div className="pb-3 flex items-center">
        <Heading className="text-[2rem] leading-[2.75rem] text-dark-text font-bold">Cart</Heading>
      </div>
      <Table className="bg-transparent">
        <Table.Header className="border-t-0 bg-transparent">
          <Table.Row className="text-dark-muted txt-medium-plus bg-transparent border-b border-dark-lighter">
            <Table.HeaderCell className="!pl-0 text-dark-text font-semibold bg-transparent">Item</Table.HeaderCell>
            <Table.HeaderCell className="bg-transparent"></Table.HeaderCell>
            <Table.HeaderCell className="text-dark-text font-semibold bg-transparent">Quantity</Table.HeaderCell>
            <Table.HeaderCell className="hidden small:table-cell text-dark-text font-semibold bg-transparent">
              Price
            </Table.HeaderCell>
            <Table.HeaderCell className="!pr-0 text-right text-dark-text font-semibold bg-transparent">
              Total
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body className="bg-transparent">
          {items
            ? items
                .sort((a, b) => {
                  return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
                })
                .map((item) => {
                  return <Item key={item.id} item={item} />
                })
            : repeat(5).map((i) => {
                return <SkeletonLineItem key={i} />
              })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default ItemsTemplate
