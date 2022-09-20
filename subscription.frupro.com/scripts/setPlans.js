function addPromotion(promotion, element) {
  const newPromotionP = document.createElement('p');

  newPromotionP.className = 'plan-info-text';
  newPromotionP.innerHTML = promotion;
  element.appendChild(newPromotionP);
}

function addShortDescriptions(descriptions, element) {
  for (let i = 0; i < descriptions.length; i++) {
    const newObject = document.createElement('object');
    const newDiv = document.createElement('div');
    const newP = document.createElement('p');

    newObject.setAttribute('data', 'svgs/ic_check_ok.svg');
    newObject.setAttribute('type', 'image/svg+xml');

    newP.innerText = descriptions[i];

    newDiv.className = 'plan-properties-text';
    newDiv.appendChild(newObject);
    newDiv.appendChild(newP);
    element.appendChild(newDiv);
  }
}

function addTitle(title, elements) {
  elements.forEach((element) => {
    const newP = document.createElement('p');
    newP.innerHTML = title;
    element.appendChild(newP);
  });
}

function addDescriptions(descriptions, element) {
  for (let i = 0; i < descriptions.length; i++) {
    const newObject = document.createElement('object');
    const newDiv = document.createElement('div');
    const newP = document.createElement('p');

    if (descriptions[i].included) {
      newObject.setAttribute('data', 'svgs/ic_check_ok.svg');
    } else {
      newObject.setAttribute('data', 'svgs/Ellipse-2.svg');
    }

    newObject.setAttribute('type', 'image/svg+xml');

    newP.innerText = descriptions[i].desc;

    newDiv.className = 'plan-properties-text';
    newDiv.appendChild(newObject);
    newDiv.appendChild(newP);
    element.appendChild(newDiv);
  }
}

function main() {
  window.addEventListener('DOMContentLoaded', () => {
    const [basicPlan, proPlan, superPlan] = subscriptionPlans;

    const basicProperties = document.getElementById('basic-plan-properties');
    const proProperties = document.getElementById('pro-plan-properties');
    const superProperties = document.getElementById('super-plan-properties');
    const basicFullFeatures = document.getElementById(
      'basic-plan-full-feature'
    );
    const proFullFeatures = document.getElementById('pro-plan-full-feature');
    const superFullFeatures = document.getElementById(
      'super-plan-full-feature'
    );
    const basicTitleElements = document.querySelectorAll('.basic-title');
    const proTitleElements = document.querySelectorAll('.pro-title');
    const superTitleElements = document.querySelectorAll('.super-title');

    addPromotion(basicPlan.promotion, basicProperties);
    addPromotion(proPlan.promotion, proProperties);
    addPromotion(superPlan.promotion, superProperties);
    addShortDescriptions(basicPlan.shortDescr, basicProperties);
    addShortDescriptions(proPlan.shortDescr, proProperties);
    addShortDescriptions(superPlan.shortDescr, superProperties);
    addTitle(basicPlan.title, basicTitleElements);
    addTitle(proPlan.title, proTitleElements);
    addTitle(superPlan.title, superTitleElements);
    addDescriptions(basicPlan.descr, basicFullFeatures);
    addDescriptions(proPlan.descr, proFullFeatures);
    addDescriptions(superPlan.descr, superFullFeatures);
  });
}

main();
