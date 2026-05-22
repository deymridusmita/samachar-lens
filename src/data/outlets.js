/* Media outlets tracked by Samachar Lens.
   `ownership` powers the "who owns this?" transparency sheet.
   `ownership.premium` is the deeper breakdown unlocked by a subscription.
   `wordmark` drives a styled text approximation of each outlet's logo
   (real brand marks are intentionally not reproduced). */

export const OUTLETS = {
  toi: {
    id: 'toi',
    name: 'The Times of India',
    wordmark: { text: 'The Times of India', family: 'serif', weight: 700, color: '#1b3a5c', tracking: '0' },
    ownership: {
      owner: 'Sahu Jain family',
      parent: 'Bennett, Coleman & Co. Ltd — The Times Group',
      type: 'Private · family-controlled conglomerate',
      founded: 1838,
      hq: 'Mumbai, Maharashtra',
      funding: 'Advertising & subscriptions',
      reach: "India's largest-circulation English daily",
      alsoOperates: ['The Economic Times', 'Navbharat Times', 'Times Now', 'Mirror Now'],
      premium: {
        crossHoldings: ['Radio', 'Out-of-home advertising', 'Online classifieds', 'Education'],
        governance: 'Closely held by the founding family; no independent editorial board.',
        exposure: 'Broad advertiser base across consumer sectors may create commercial sensitivities.',
      },
    },
  },
  indiatoday: {
    id: 'indiatoday',
    name: 'India Today',
    wordmark: { text: 'INDIA TODAY', family: 'sans', weight: 800, color: '#d3273e', tracking: '0.02em' },
    ownership: {
      owner: 'Aroon Purie & family',
      parent: 'Living Media India Ltd — India Today Group',
      type: 'Private · family-controlled media group',
      founded: 1975,
      hq: 'Noida, Uttar Pradesh',
      funding: 'Advertising, subscriptions & events',
      reach: 'Multi-platform news magazine and TV network',
      alsoOperates: ['Aaj Tak', 'Business Today', 'TV Today Network'],
      premium: {
        crossHoldings: ['Television (Aaj Tak)', 'Radio (Ishq FM)', 'Books & magazines', 'Events'],
        governance: 'Family-controlled group with a promoter-led board.',
        exposure: 'Significant television-advertising revenue shapes commercial priorities.',
      },
    },
  },
  bbc: {
    id: 'bbc',
    name: 'BBC News',
    wordmark: { text: 'BBC NEWS', family: 'sans', weight: 800, color: '#101010', tracking: '0.04em', boxed: true },
    ownership: {
      owner: 'British public — held in trust',
      parent: 'British Broadcasting Corporation',
      type: 'Public service broadcaster · operates under Royal Charter',
      founded: 1922,
      hq: 'London, United Kingdom',
      funding: 'UK licence fee & commercial arm (BBC Studios)',
      reach: 'Global broadcaster; dedicated India coverage',
      alsoOperates: ['BBC World Service', 'BBC Hindi', 'BBC Studios'],
      premium: {
        crossHoldings: ['BBC Studios (commercial arm)', 'BBC World Service'],
        governance: 'Operates under a Royal Charter with an independent board and published editorial guidelines.',
        exposure: 'Licence-fee funded; limited direct advertiser pressure on news output.',
      },
    },
  },
  thehindu: {
    id: 'thehindu',
    name: 'The Hindu',
    wordmark: { text: 'The Hindu', family: 'serif', weight: 700, color: '#7a1f1f', tracking: '0' },
    ownership: {
      owner: 'Kasturi family',
      parent: 'Kasturi & Sons Ltd — The Hindu Group',
      type: 'Private · family-owned, employee-influenced',
      founded: 1878,
      hq: 'Chennai, Tamil Nadu',
      funding: 'Subscriptions & advertising',
      reach: 'National English daily known for in-depth reporting',
      alsoOperates: ['The Hindu BusinessLine', 'Frontline', 'Sportstar'],
      premium: {
        crossHoldings: ['Business journalism (BusinessLine)', 'Magazines (Frontline, Sportstar)'],
        governance: 'Family-owned; has historically maintained an editorial code and a readers’ editor.',
        exposure: 'Subscription-led model reduces dependence on any single advertiser.',
      },
    },
  },
  ie: {
    id: 'ie',
    name: 'The Indian Express',
    wordmark: { text: 'The Indian EXPRESS', family: 'serif', weight: 700, color: '#101820', tracking: '0' },
    ownership: {
      owner: 'Viveck Goenka & family',
      parent: 'The Indian Express Group',
      type: 'Private · family-controlled media group',
      founded: 1932,
      hq: 'Noida, Uttar Pradesh',
      funding: 'Subscriptions & advertising',
      reach: 'National daily known for investigative journalism',
      alsoOperates: ['The Financial Express', 'Loksatta', 'Jansatta'],
      premium: {
        crossHoldings: ['Financial journalism', 'Regional-language dailies'],
        governance: 'Family-controlled group that maintains a dedicated investigative desk.',
        exposure: 'Mixed subscription and advertising revenue.',
      },
    },
  },
  ndtv: {
    id: 'ndtv',
    name: 'NDTV',
    wordmark: { text: 'NDTV', family: 'sans', weight: 800, color: '#e0322f', tracking: '0.01em' },
    ownership: {
      owner: 'Adani Group',
      parent: 'AMG Media Networks Ltd — Adani Group',
      type: 'Public company · controlled by Adani conglomerate',
      founded: 1988,
      hq: 'New Delhi',
      funding: 'Advertising & subscriptions',
      reach: 'National news network; majority stake acquired by Adani in 2022',
      alsoOperates: ['NDTV 24x7', 'NDTV India', 'NDTV Profit'],
      premium: {
        crossHoldings: ['Multiple news channels', 'Parent conglomerate: ports, energy & infrastructure'],
        governance: 'Controlled by a large conglomerate following the 2022 acquisition.',
        exposure: 'Parent company has wide business interests that may intersect with news coverage.',
      },
    },
  },
}

export const outletById = (id) => OUTLETS[id]
export const outletList = () => Object.values(OUTLETS)
