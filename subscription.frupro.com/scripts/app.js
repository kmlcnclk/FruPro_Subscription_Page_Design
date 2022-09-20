let currency = 'GBP',
  frequency = 'Monthly';

function changeCurrency(cur) {
  currency = cur;
}

function changeFrequency(fre) {
  const annual = document.getElementById('annual-button');
  const monthly = document.getElementById('monthly-button');

  if (fre === 'Annual') {
    annual.style.backgroundColor = '#E77228';
    monthly.style.backgroundColor = 'transparent';
    monthly.style.color = 'rgba(255, 255, 255, 0.5);';
  } else if (fre === 'Monthly') {
    monthly.style.backgroundColor = '#E77228';
    annual.style.backgroundColor = 'transparent';
    annual.style.color = 'rgba(255, 255, 255, 0.5);';
  }

  frequency = fre;
}

function getPriceData(plan) {
  for (const c of plan.price) {
    if (c.currency === currency) {
      for (const f of c.frequency) {
        if (f.frequency === frequency || f.frequency === 'Yearly') {
          return {
            currency: c.currency,
            currencySign: c.currencySign,
            frequency: f.frequency,
            price: f.price,
          };
        }
      }
    }
  }
}

function setPrices(priceData, element) {
  const newH4 = document.createElement('h4');
  const newP = document.createElement('p');

  newH4.className = 'plan-price';
  newH4.innerHTML = `${priceData.currencySign}${priceData.price}`;

  newP.className = 'plan-frequency';

  if (frequency === 'Annual') {
    newP.innerHTML = `/year`;
  } else if (frequency === 'Monthly') {
    newP.innerHTML = `/month`;
  }
  element.replaceChildren(newH4, newP);
}

function getAndSetPriceData(basicPlan, proPlan, superPlan) {
  const basicPlanPriceDiv = document.getElementById('basic-plan');
  const proPlanPriceDiv = document.getElementById('pro-plan');
  const superPlanPriceDiv = document.getElementById('super-plan');
  const basicPlanCards = document.querySelectorAll('.basic-plan');
  const proPlanCards = document.querySelectorAll('.pro-plan');
  const superPlanCards = document.querySelectorAll('.super-plan');

  const basicPriceData = getPriceData(basicPlan);
  const proPriceData = getPriceData(proPlan);
  const superPriceData = getPriceData(superPlan);
  setPrices(basicPriceData, basicPlanPriceDiv);
  setPrices(proPriceData, proPlanPriceDiv);
  setPrices(superPriceData, superPlanPriceDiv);

  basicPlanCards.forEach((basicPlanCard) => {
    let newBasicPlanID = basicPlan.id
      .replace('[CURRENCY]', currency)
      .replace('[FREQUENCY]', frequency === 'Annual' ? 'Yearly' : 'Monthly');
    basicPlanCard.setAttribute('data-cb-item-0', newBasicPlanID);
  });
  proPlanCards.forEach((basicPlanCard) => {
    let newProPlanID = proPlan.id
      .replace('[CURRENCY]', currency)
      .replace('[FREQUENCY]', frequency === 'Annual' ? 'Yearly' : 'Monthly');

    basicPlanCard.setAttribute('data-cb-item-0', newProPlanID);
  });
  superPlanCards.forEach((basicPlanCard) => {
    let newSuperPlanID = superPlan.id
      .replace('[CURRENCY]', currency)
      .replace('[FREQUENCY]', frequency === 'Annual' ? 'Yearly' : 'Monthly');
    basicPlanCard.setAttribute('data-cb-item-0', newSuperPlanID);
  });
}

function main() {
  window.addEventListener('DOMContentLoaded', () => {
    const [basicPlan, proPlan, superPlan] = subscriptionPlans;
    const currencyClasses = document.querySelectorAll('.currency');
    const annualButton = document.getElementById('annual-button');
    const monthlyButton = document.getElementById('monthly-button');

    getAndSetPriceData(basicPlan, proPlan, superPlan);

    currencyClasses.forEach((c) => {
      c.addEventListener('click', () => {
        getAndSetPriceData(basicPlan, proPlan, superPlan);
      });
    });

    annualButton.addEventListener('click', () => {
      getAndSetPriceData(basicPlan, proPlan, superPlan);
    });

    monthlyButton.addEventListener('click', () => {
      getAndSetPriceData(basicPlan, proPlan, superPlan);
    });
  });
}

main();
