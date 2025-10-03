import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const pricing = fetch('/public/pricing.json')
.then(res => res.json());
const PricingCards = () => {
    const prices = use(pricing);
    console.log(pricing);
    // const {name, price, id, description, features} = pricing;
    return (
        <div>
            {/* Custom */}
            <div>
                <h1>Pricing Info</h1>
                {
                    prices.map(price =>
                        <PricingCard pricing={price} key={price.id}></PricingCard>
                    )
                }

            </div>
        </div>
    );
};

export default PricingCards;