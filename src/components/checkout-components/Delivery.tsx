import React from "react";
import { RadioGroup, Radio } from "@blueprintjs/core"

export interface Delivery {
  name: string
  price: number
  days: number
}

export const deliveryAlternatives: Delivery[] = [{
  name: "PostNord",
  price: 49,
  days: 3
}, {
  name: "DHL",
  price: 149,
  days: 1
}, {
  name: "Express",
  price: 499,
  days: 0
}]



interface Props {
  selectedDelivery: Delivery
  setSelectedDelivey: (delivery: Delivery) => void
}

export default class DeliveryMethod extends React.Component<Props> {

  render() {
    const { selectedDelivery, setSelectedDelivey } = this.props
    return (
      <div>
        <>
          {deliveryAlternatives.map(delivery => {
            return (
              <Radio
                label={delivery.name}
                value={delivery.name}
                checked={delivery.name == selectedDelivery.name}
                onChange={() => setSelectedDelivey(delivery)}>
                <span>  {delivery.price} kr ({delivery.days} days)</span>
              </Radio>
            )
          })}
        </>
        <div>
          <span>You chose {selectedDelivery.name} as delivery method you will get your package {selectedDelivery.days === 0 ? "today" : "in " + selectedDelivery.days + " days"}</span>
        </div>

      </div>

    );
  }
}
