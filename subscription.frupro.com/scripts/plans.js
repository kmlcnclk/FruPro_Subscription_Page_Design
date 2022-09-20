const subscriptionPlanBasic = {
	id: "Basic-Plan-[CURRENCY]-[FREQUENCY]",
	title: "Basic Plan",
	promotion: "Save 30% on annual subscription",
	shortDescr: ["Short Description for Basic Plan 1", "Short Description for Basic Plan 2", "Short Description for Basic Plan 3", "Short Description for Basic Plan 4"],

	price: [
		{
			currency: "USD",
			currencySign: "$",
			frequency: [
				{
					frequency: "Monthly",
					price: 19,
				},
				{
					frequency: "Yearly",
					price: 190,
				},
			],
		},
		{
			currency: "EUR",
			currencySign: "€",
			frequency: [
				{
					frequency: "Monthly",
					price: 20,
				},
				{
					frequency: "Yearly",
					price: 200,
				},
			],
		},
		{
			currency: "GBP",
			currencySign: "£",
			frequency: [
				{
					frequency: "Monthly",
					price: 21,
				},
				{
					frequency: "Yearly",
					price: 210,
				},
			],
		},
	],

	descr: [
		{
			included: true,
			desc: "Description for Basic Plan 1",
		},
		{
			included: true,
			desc: "Description for Basic Plan 2",
		},
		{
			included: true,
			desc: "Description for Basic Plan 3",
		},
		{
			included: true,
			desc: "Description for Basic Plan 4",
		},
		{
			included: false,
			desc: "Description for Basic Plan 5",
		},
		{
			included: false,
			desc: "Description for Basic Plan 6",
		},
		{
			included: false,
			desc: "Description for Basic Plan 7",
		},
		{
			included: false,
			desc: "Description for Basic Plan 8",
		},
		{
			included: false,
			desc: "Description for Basic Plan 9",
		},
		{
			included: false,
			desc: "Description for Basic Plan 10",
		},
		{
			included: false,
			desc: "Description for Basic Plan 12",
		},
	],
};

const subscriptionPlanPro = {
	id: "Pro-Plan-[CURRENCY]-[FREQUENCY]",
	title: "Pro Plan",
	promotion: "Save 30% on annual subscription",
	shortDescr: ["Short Description for Pro Plan 1", "Short Description for Pro Plan 2", "Short Description for Pro Plan 3", "Short Description for Pro Plan 4"],

	price: [
		{
			currency: "USD",
			currencySign: "$",
			frequency: [
				{
					frequency: "Monthly",
					price: 29,
				},
				{
					frequency: "Yearly",
					price: 290,
				},
			],
		},
		{
			currency: "EUR",
			currencySign: "€",
			frequency: [
				{
					frequency: "Monthly",
					price: 30,
				},
				{
					frequency: "Yearly",
					price: 300,
				},
			],
		},
		{
			currency: "GBP",
			currencySign: "£",
			frequency: [
				{
					frequency: "Monthly",
					price: 31,
				},
				{
					frequency: "Yearly",
					price: 310,
				},
			],
		},
	],

	descr: [
		{
			included: true,
			desc: "Description for Pro Plan 1",
		},
		{
			included: true,
			desc: "Description for Pro Plan 2",
		},
		{
			included: true,
			desc: "Description for Pro Plan 3",
		},
		{
			included: true,
			desc: "Description for Pro Plan 4",
		},
		{
			included: true,
			desc: "Description for Pro Plan 5",
		},
		{
			included: true,
			desc: "Description for Pro Plan 6",
		},
		{
			included: true,
			desc: "Description for Pro Plan 7",
		},
		{
			included: true,
			desc: "Description for Pro Plan 8",
		},
		{
			included: false,
			desc: "Description for Pro Plan 9",
		},
		{
			included: false,
			desc: "Description for Pro Plan 10",
		},
		{
			included: false,
			desc: "Description for Pro Plan 11",
		},
	],
};

const subscriptionPlanSuper = {
	id: "Super-Plan-[CURRENCY]-[FREQUENCY]",
	title: "Super Plan",
	promotion: "Save 30% on annual subscription",
	shortDescr: ["Short Description for Super Plan 1", "Short Description for Super Plan 2", "Short Description for Super Plan 3", "Short Description for Super Plan 4"],

	price: [
		{
			currency: "USD",
			currencySign: "$",
			frequency: [
				{
					frequency: "Monthly",
					price: 39,
				},
				{
					frequency: "Yearly",
					price: 390,
				},
			],
		},
		{
			currency: "EUR",
			currencySign: "€",
			frequency: [
				{
					frequency: "Monthly",
					price: 40,
				},
				{
					frequency: "Yearly",
					price: 400,
				},
			],
		},
		{
			currency: "GBP",
			currencySign: "£",
			frequency: [
				{
					frequency: "Monthly",
					price: 41,
				},
				{
					frequency: "Yearly",
					price: 410,
				},
			],
		},
	],

	descr: [
		{
			included: true,
			desc: "Description for Super Plan 1",
		},
		{
			included: true,
			desc: "Description for Super Plan 2",
		},
		{
			included: true,
			desc: "Description for Super Plan 3",
		},
		{
			included: true,
			desc: "Description for Super Plan 4",
		},
		{
			included: true,
			desc: "Description for Super Plan 5",
		},
		{
			included: true,
			desc: "Description for Super Plan 6",
		},
		{
			included: true,
			desc: "Description for Super Plan 7",
		},
		{
			included: true,
			desc: "Description for Super Plan 8",
		},
		{
			included: true,
			desc: "Description for Super Plan 9",
		},
		{
			included: true,
			desc: "Description for Super Plan 10",
		},
		{
			included: true,
			desc: "Description for Super Plan 11",
		},
	],
};

const subscriptionPlans = [subscriptionPlanBasic, subscriptionPlanPro, subscriptionPlanSuper];
