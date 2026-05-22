/* Mock article feed for the Samachar Lens demo.
   Each article carries bilingual (en/hi) title, summary and body, plus the
   multi-outlet `sources` list and `coverageGap` data that power the lens.
   Swap the `image` URLs for topical Unsplash links if desired — every
   article exposes a single `image` field. */

/* Drop matching photos into public/news/ — e.g. public/news/modi-iran.jpg.
   Missing files fall back to a tinted category panel automatically. */
const img = (id) => `/news/${id}.jpg`

export const ARTICLES = [
  {
    id: 'modi-iran',
    category: 'world',
    trending: true,
    readMins: 5,
    time: { en: '2h ago', hi: '2 घंटे पहले' },
    image: img('modi-iran'),
    primarySource: 'toi',
    title: {
      en: 'Modi Holds Talks with Iran on Chabahar Port Amid Regional Tensions',
      hi: 'क्षेत्रीय तनाव के बीच मोदी ने ईरान के साथ चाबहार बंदरगाह पर बातचीत की',
    },
    summary: {
      en: 'India and Iran reviewed a long-term operating deal for the strategic Chabahar port as renewed Gulf tensions threaten the project.',
      hi: 'खाड़ी क्षेत्र में बढ़ते तनाव के बीच भारत और ईरान ने रणनीतिक चाबहार बंदरगाह के दीर्घकालिक संचालन समझौते की समीक्षा की।',
    },
    body: {
      en: [
        'Prime Minister Narendra Modi held a round of talks with Iranian leadership on Thursday focused on the long-stalled expansion of the Chabahar port, as both countries sought to insulate the strategic project from a deteriorating security situation across the wider Gulf region.',
        'The discussions, conducted partly by video conference and partly through delegation-level meetings in New Delhi, centred on a fresh long-term operating agreement for the Shahid Beheshti terminal, which India has developed as an alternative trade gateway to Afghanistan and Central Asia that bypasses Pakistan.',
        'Officials familiar with the talks said the two sides reviewed pending investment commitments, rail connectivity to the Iranian interior, and mechanisms to keep the port functioning despite the renewed threat of secondary US sanctions on entities doing business with Tehran.',
        'Chabahar has long occupied an unusual place in India’s foreign policy. Washington has previously granted a narrow sanctions waiver recognising the port’s role in Afghan reconstruction, but that carve-out has grown increasingly fragile amid rising friction between Iran and the United States.',
        '“India is signalling that it will not let third-party pressure dictate a connectivity project it considers central to its access to Eurasia,” said one foreign-policy researcher in New Delhi, adding that the timing of the engagement appeared deliberate.',
        'The Iranian side framed the talks as evidence that Tehran retains reliable economic partners despite its regional isolation. State media in Iran described the meeting as “constructive” and pointed to agreed timelines for equipment delivery.',
        'No formal agreement was signed on Thursday. Both governments said working-level negotiations would continue, with the Ministry of External Affairs stating that India remained “committed to the full operationalisation of Chabahar as a regional connectivity hub.”',
      ],
      hi: [
        'प्रधानमंत्री नरेन्द्र मोदी ने गुरुवार को ईरानी नेतृत्व के साथ बातचीत की, जिसका केंद्र लंबे समय से रुकी हुई चाबहार बंदरगाह की विस्तार योजना रही। दोनों देश व्यापक खाड़ी क्षेत्र की बिगड़ती सुरक्षा स्थिति से इस रणनीतिक परियोजना को बचाना चाहते हैं।',
        'यह बातचीत आंशिक रूप से वीडियो कॉन्फ्रेंस और आंशिक रूप से नई दिल्ली में प्रतिनिधिमंडल स्तर की बैठकों के ज़रिए हुई। इसका मुख्य विषय शहीद बेहेश्ती टर्मिनल के लिए एक नया दीर्घकालिक संचालन समझौता रहा, जिसे भारत ने पाकिस्तान को दरकिनार कर अफ़ग़ानिस्तान और मध्य एशिया तक पहुँचने के वैकल्पिक व्यापार मार्ग के रूप में विकसित किया है।',
        'बातचीत से परिचित अधिकारियों ने बताया कि दोनों पक्षों ने लंबित निवेश प्रतिबद्धताओं, ईरान के भीतरी इलाकों तक रेल संपर्क और तेहरान के साथ कारोबार करने वाली संस्थाओं पर अमेरिकी प्रतिबंधों के नए ख़तरे के बावजूद बंदरगाह को चालू रखने के तरीकों की समीक्षा की।',
        'चाबहार हमेशा से भारत की विदेश नीति में एक असामान्य स्थान रखता रहा है। वॉशिंगटन ने पहले अफ़ग़ान पुनर्निर्माण में बंदरगाह की भूमिका को मान्यता देते हुए एक सीमित प्रतिबंध छूट दी थी, लेकिन ईरान और अमेरिका के बीच बढ़ते टकराव के बीच यह छूट कमज़ोर होती जा रही है।',
        'नई दिल्ली के एक विदेश-नीति शोधकर्ता ने कहा, “भारत यह संकेत दे रहा है कि वह यूरेशिया तक अपनी पहुँच के लिए अहम मानी जाने वाली संपर्क परियोजना को तीसरे पक्ष के दबाव से तय नहीं होने देगा।” उन्होंने जोड़ा कि इस बातचीत का समय सोच-समझकर चुना गया लगता है।',
        'ईरानी पक्ष ने इस बातचीत को इस बात का प्रमाण बताया कि क्षेत्रीय अलगाव के बावजूद तेहरान के पास भरोसेमंद आर्थिक साझेदार बने हुए हैं। ईरानी सरकारी मीडिया ने बैठक को “रचनात्मक” बताया और उपकरण आपूर्ति की तय समय-सीमा का उल्लेख किया।',
        'गुरुवार को कोई औपचारिक समझौता नहीं हुआ। दोनों सरकारों ने कहा कि कार्य-स्तरीय बातचीत जारी रहेगी। विदेश मंत्रालय ने कहा कि भारत “चाबहार को एक क्षेत्रीय संपर्क केंद्र के रूप में पूरी तरह चालू करने के लिए प्रतिबद्ध” है।',
      ],
    },
    sources: [
      {
        outlet: 'toi',
        paywalled: false,
        headline: {
          en: 'Modi, Iran discuss expanding Chabahar trade route as Gulf tensions rise',
          hi: 'खाड़ी तनाव बढ़ने के बीच मोदी और ईरान ने चाबहार व्यापार मार्ग के विस्तार पर चर्चा की',
        },
      },
      {
        outlet: 'bbc',
        paywalled: false,
        headline: {
          en: 'India and Iran reaffirm Chabahar port deal despite US sanctions pressure',
          hi: 'अमेरिकी प्रतिबंधों के दबाव के बावजूद भारत और ईरान ने चाबहार बंदरगाह समझौते को दोहराया',
        },
      },
      {
        outlet: 'thehindu',
        paywalled: true,
        headline: {
          en: 'Chabahar talks signal India’s renewed push for Central Asia access',
          hi: 'चाबहार वार्ता भारत के मध्य एशिया तक पहुँच के नए प्रयास का संकेत',
        },
      },
      {
        outlet: 'ie',
        paywalled: false,
        headline: {
          en: 'Delhi walks a diplomatic tightrope in renewed Chabahar engagement with Tehran',
          hi: 'तेहरान के साथ चाबहार पर नई बातचीत में दिल्ली कूटनीतिक रस्सी पर चल रही है',
        },
      },
      {
        outlet: 'ndtv',
        paywalled: false,
        headline: {
          en: 'Modi’s Iran outreach: a strategic win or a risky bet?',
          hi: 'मोदी का ईरान संपर्क: रणनीतिक जीत या जोखिम भरा दांव?',
        },
      },
    ],
    coverageGap: {
      covered: ['toi', 'bbc', 'thehindu', 'ie', 'ndtv'],
      missing: ['indiatoday'],
      note: {
        en: 'Five of six tracked outlets covered this story. India Today has not published on the Chabahar talks. Coverage is concentrated among English-language national dailies, with little reporting framed from a regional-language perspective.',
        hi: 'छह में से पाँच ट्रैक किए गए स्रोतों ने यह ख़बर दी। इंडिया टुडे ने चाबहार वार्ता पर कुछ नहीं छापा। कवरेज मुख्यतः अंग्रेज़ी राष्ट्रीय अख़बारों तक सीमित रही।',
      },
    },
  },

  {
    id: 'mamata-sir',
    category: 'politics',
    trending: true,
    readMins: 4,
    time: { en: '4h ago', hi: '4 घंटे पहले' },
    image: img('mamata-sir'),
    primarySource: 'indiatoday',
    title: {
      en: "Mamata Banerjee Slams SIR Exercise, Calls It a 'Backdoor NRC'",
      hi: "ममता बनर्जी ने एसआईआर प्रक्रिया की आलोचना की, इसे 'पिछले दरवाज़े से एनआरसी' बताया",
    },
    summary: {
      en: 'The former West Bengal CM alleged the electoral-roll revision unfairly burdens poor and migrant voters ahead of the state election.',
      hi: 'पश्चिम बंगाल की पूर्व मुख्यमंत्री ने आरोप लगाया कि मतदाता सूची संशोधन गरीब और प्रवासी मतदाताओं पर अनुचित बोझ डालता है।',
    },
    body: {
      en: [
        'Former West Bengal Chief Minister Mamata Banerjee on Thursday launched a sharp attack on the Special Intensive Revision (SIR) of electoral rolls under way in the state, describing the exercise as a “backdoor NRC” designed to strike genuine voters off the list ahead of next year’s assembly election.',
        'Addressing party workers in Kolkata, Banerjee alleged that the door-to-door verification drive placed an unfair burden of proof on poor and migrant families, many of whom, she said, lacked the documentation that booth-level officers were demanding.',
        'The Election Commission has maintained that the revision is a routine, legally mandated process intended to remove duplicate and ineligible entries and to enrol eligible young voters who have turned 18.',
        'The state’s opposition parties offered a mixed response, with some welcoming a cleaner roll while accusing the ruling Trinamool Congress of pre-emptively crying foul — a charge the party rejected.',
        'The controversy adds to an already tense pre-election atmosphere in West Bengal, where questions of citizenship and documentation have proven especially combustible since the debate over the National Register of Citizens.',
      ],
      hi: [
        'पश्चिम बंगाल की पूर्व मुख्यमंत्री ममता बनर्जी ने गुरुवार को राज्य में चल रहे मतदाता सूची के विशेष गहन पुनरीक्षण (एसआईआर) पर तीखा हमला बोला और इसे अगले साल के विधानसभा चुनाव से पहले असली मतदाताओं के नाम काटने के लिए बनाई गई “पिछले दरवाज़े से एनआरसी” बताया।',
        'कोलकाता में पार्टी कार्यकर्ताओं को संबोधित करते हुए बनर्जी ने आरोप लगाया कि घर-घर सत्यापन अभियान गरीब और प्रवासी परिवारों पर प्रमाण का अनुचित बोझ डालता है, जिनमें से कई के पास बूथ-स्तर के अधिकारियों द्वारा माँगे जा रहे दस्तावेज़ नहीं हैं।',
        'चुनाव आयोग का कहना है कि यह पुनरीक्षण एक नियमित और कानूनन अनिवार्य प्रक्रिया है, जिसका उद्देश्य दोहरी और अपात्र प्रविष्टियाँ हटाना और 18 वर्ष के हो चुके पात्र युवा मतदाताओं को जोड़ना है।',
        'राज्य के विपक्षी दलों की प्रतिक्रिया मिली-जुली रही; कुछ ने स्वच्छ मतदाता सूची का स्वागत किया, वहीं सत्तारूढ़ तृणमूल कांग्रेस पर पहले से ही हंगामा करने का आरोप लगाया, जिसे पार्टी ने खारिज कर दिया।',
        'इस विवाद ने पश्चिम बंगाल के पहले से तनावपूर्ण चुनाव-पूर्व माहौल को और गरमा दिया है, जहाँ राष्ट्रीय नागरिक रजिस्टर की बहस के बाद से नागरिकता और दस्तावेज़ों के सवाल विशेष रूप से संवेदनशील रहे हैं।',
      ],
    },
    sources: [
      {
        outlet: 'indiatoday',
        paywalled: false,
        headline: {
          en: "Mamata calls SIR a 'backdoor NRC', vows to fight roll revision",
          hi: "ममता ने एसआईआर को 'पिछले दरवाज़े से एनआरसी' बताया, सूची संशोधन से लड़ने का संकल्प",
        },
      },
      {
        outlet: 'ndtv',
        paywalled: false,
        headline: {
          en: 'EC defends roll revision as routine; Mamata disagrees',
          hi: 'चुनाव आयोग ने सूची संशोधन को नियमित बताया; ममता असहमत',
        },
      },
      {
        outlet: 'thehindu',
        paywalled: true,
        headline: {
          en: 'Roll revision in Bengal reopens citizenship anxieties',
          hi: 'बंगाल में सूची संशोधन ने नागरिकता की चिंताएँ फिर उभारीं',
        },
      },
      {
        outlet: 'ie',
        paywalled: false,
        headline: {
          en: 'Explained: what the Special Intensive Revision actually changes',
          hi: 'समझिए: विशेष गहन पुनरीक्षण से असल में क्या बदलता है',
        },
      },
    ],
    coverageGap: {
      covered: ['indiatoday', 'ndtv', 'thehindu', 'ie'],
      missing: ['toi', 'bbc'],
      note: {
        en: 'Four of six tracked outlets covered this story. Headlines diverge sharply: some lead with the former Chief Minister’s accusation, others with the Election Commission’s defence — a useful example of how framing shapes the same facts.',
        hi: 'छह में से चार स्रोतों ने यह ख़बर दी। शीर्षकों में स्पष्ट अंतर है: कुछ पूर्व मुख्यमंत्री के आरोप को प्रमुखता देते हैं तो कुछ चुनाव आयोग के बचाव को।',
      },
    },
  },

  {
    id: 'rbi-repo',
    category: 'business',
    trending: false,
    readMins: 3,
    time: { en: '5h ago', hi: '5 घंटे पहले' },
    image: img('rbi-repo'),
    primarySource: 'ie',
    title: {
      en: 'RBI Holds Repo Rate at 6.25% for Third Straight Review',
      hi: 'आरबीआई ने लगातार तीसरी समीक्षा में रेपो रेट 6.25% पर बरकरार रखा',
    },
    summary: {
      en: 'The Monetary Policy Committee kept rates steady, balancing easing inflation against the need to support growth.',
      hi: 'मौद्रिक नीति समिति ने ब्याज दरें स्थिर रखीं, घटती महँगाई और वृद्धि को सहारा देने की ज़रूरत के बीच संतुलन साधा।',
    },
    body: {
      en: [
        'The Reserve Bank of India kept its benchmark repo rate unchanged at 6.25% on Thursday, the third consecutive review at which the Monetary Policy Committee has opted to hold, citing a balance between cooling inflation and the need to support growth.',
        'Five of the six committee members voted in favour of the pause. The MPC retained its “neutral” stance, leaving the door open to a cut later in the year should inflation continue easing toward the central bank’s 4% target.',
        'The RBI Governor said retail inflation had moderated but warned that food prices remained a source of uncertainty, particularly with the monsoon outlook still developing.',
        'Markets had largely priced in the decision. Economists said a rate cut was now more likely at the August review, depending on how the monsoon and global commodity prices evolve.',
      ],
      hi: [
        'भारतीय रिज़र्व बैंक ने गुरुवार को अपनी प्रमुख रेपो दर 6.25% पर अपरिवर्तित रखी। यह लगातार तीसरी समीक्षा है जब मौद्रिक नीति समिति ने दरें स्थिर रखने का फैसला किया, और इसका कारण घटती महँगाई तथा वृद्धि को सहारा देने की ज़रूरत के बीच संतुलन बताया।',
        'समिति के छह में से पाँच सदस्यों ने दरें स्थिर रखने के पक्ष में मतदान किया। एमपीसी ने अपना “तटस्थ” रुख बनाए रखा और साल के अंत तक कटौती की संभावना खुली रखी, बशर्ते महँगाई 4% के लक्ष्य की ओर घटती रहे।',
        'आरबीआई गवर्नर ने कहा कि खुदरा महँगाई कम हुई है, लेकिन चेताया कि खाद्य कीमतें अनिश्चितता का स्रोत बनी हुई हैं, ख़ासकर मानसून की स्थिति अभी स्पष्ट न होने के कारण।',
        'बाज़ार ने इस फैसले का अनुमान पहले ही लगा लिया था। अर्थशास्त्रियों का कहना है कि अगस्त की समीक्षा में दर कटौती की संभावना अधिक है, जो मानसून और वैश्विक वस्तु कीमतों पर निर्भर करेगी।',
      ],
    },
    sources: [
      {
        outlet: 'ie',
        paywalled: false,
        headline: {
          en: 'RBI holds rates again; signals possible August cut',
          hi: 'आरबीआई ने फिर दरें स्थिर रखीं; अगस्त में कटौती के संकेत',
        },
      },
      {
        outlet: 'toi',
        paywalled: false,
        headline: {
          en: 'No relief on EMIs yet as RBI keeps repo rate unchanged',
          hi: 'ईएमआई पर राहत नहीं, आरबीआई ने रेपो रेट जस का तस रखा',
        },
      },
      {
        outlet: 'thehindu',
        paywalled: true,
        headline: {
          en: 'MPC stays neutral as inflation eases within comfort band',
          hi: 'महँगाई सहज दायरे में आते ही एमपीसी का तटस्थ रुख',
        },
      },
    ],
    coverageGap: {
      covered: ['ie', 'toi', 'thehindu', 'ndtv'],
      missing: ['bbc', 'indiatoday'],
      note: {
        en: 'Business desks led on the August-cut signal; consumer-facing outlets framed the same decision around home-loan EMIs. Both readings are accurate — they simply choose different audiences.',
        hi: 'व्यापार डेस्क ने अगस्त में कटौती के संकेत को प्रमुखता दी, जबकि उपभोक्ता-केंद्रित स्रोतों ने इसी फैसले को होम-लोन ईएमआई के इर्द-गिर्द रखा।',
      },
    },
  },

  {
    id: 'cyclone-odisha',
    category: 'environment',
    trending: true,
    readMins: 3,
    time: { en: '1h ago', hi: '1 घंटा पहले' },
    image: img('cyclone-odisha'),
    primarySource: 'ndtv',
    title: {
      en: 'Cyclone Warning Issued for Odisha and Andhra Coast as System Intensifies',
      hi: 'ओडिशा और आंध्र तट के लिए चक्रवात की चेतावनी, सिस्टम तेज़ हो रहा है',
    },
    summary: {
      en: 'The IMD expects the Bay of Bengal system to strengthen into a cyclonic storm within 48 hours.',
      hi: 'मौसम विभाग का अनुमान है कि बंगाल की खाड़ी का सिस्टम 48 घंटों में चक्रवाती तूफ़ान में बदल जाएगा।',
    },
    body: {
      en: [
        'The India Meteorological Department issued a cyclone warning for the Odisha and north Andhra Pradesh coast on Thursday, after a deep depression over the Bay of Bengal intensified and began tracking toward the coastline.',
        'The system is expected to strengthen into a cyclonic storm within 48 hours, with the IMD forecasting heavy to very heavy rainfall, sustained wind speeds of around 75–85 km/h, and a storm surge along low-lying coastal stretches.',
        'State authorities in Odisha said evacuation plans for vulnerable coastal districts had been activated and that fishermen had been advised not to venture into the sea until further notice.',
        'Disaster-response teams have been pre-positioned in the likely landfall zone. Officials urged residents to follow only official advisories and to avoid relying on unverified forecasts circulating on social media.',
      ],
      hi: [
        'भारत मौसम विज्ञान विभाग ने गुरुवार को ओडिशा और उत्तरी आंध्र प्रदेश के तट के लिए चक्रवात की चेतावनी जारी की, क्योंकि बंगाल की खाड़ी पर बना गहरा दबाव तेज़ होकर तट की ओर बढ़ने लगा है।',
        'अनुमान है कि यह सिस्टम 48 घंटों के भीतर चक्रवाती तूफ़ान में बदल जाएगा। मौसम विभाग ने भारी से अति भारी वर्षा, लगभग 75–85 किमी/घंटा की लगातार हवाओं और निचले तटीय इलाकों में तूफ़ानी लहरों की चेतावनी दी है।',
        'ओडिशा के राज्य अधिकारियों ने कहा कि संवेदनशील तटीय ज़िलों के लिए निकासी योजनाएँ सक्रिय कर दी गई हैं और मछुआरों को अगली सूचना तक समुद्र में न जाने की सलाह दी गई है।',
        'आपदा प्रतिक्रिया दल संभावित लैंडफॉल क्षेत्र में पहले से तैनात कर दिए गए हैं। अधिकारियों ने निवासियों से केवल आधिकारिक सलाह मानने और सोशल मीडिया पर फैल रहे असत्यापित पूर्वानुमानों से बचने का आग्रह किया।',
      ],
    },
    sources: [
      {
        outlet: 'ndtv',
        paywalled: false,
        headline: {
          en: 'Cyclone alert: Odisha activates evacuation plans for coastal districts',
          hi: 'चक्रवात अलर्ट: ओडिशा ने तटीय ज़िलों के लिए निकासी योजनाएँ सक्रिय कीं',
        },
      },
      {
        outlet: 'toi',
        paywalled: false,
        headline: {
          en: 'Bay of Bengal system to intensify; heavy rain forecast for east coast',
          hi: 'बंगाल की खाड़ी का सिस्टम तेज़ होगा; पूर्वी तट पर भारी बारिश का अनुमान',
        },
      },
      {
        outlet: 'bbc',
        paywalled: false,
        headline: {
          en: 'India braces as cyclone takes shape over the Bay of Bengal',
          hi: 'बंगाल की खाड़ी पर चक्रवात बनने के साथ भारत सतर्क',
        },
      },
      {
        outlet: 'indiatoday',
        paywalled: false,
        headline: {
          en: 'IMD warns of storm surge; fishermen told to stay ashore',
          hi: 'मौसम विभाग की तूफ़ानी लहरों की चेतावनी; मछुआरों को तट पर रहने को कहा',
        },
      },
    ],
    coverageGap: {
      covered: ['ndtv', 'toi', 'bbc', 'indiatoday', 'ie'],
      missing: ['thehindu'],
      note: {
        en: 'A fast-moving weather story with broad, consistent coverage. Outlets largely agree on the facts; the main difference is how prominently each plays the evacuation angle.',
        hi: 'तेज़ी से बदलती मौसम की ख़बर, जिसका कवरेज व्यापक और एक जैसा रहा। स्रोत तथ्यों पर सहमत हैं; अंतर सिर्फ़ इस बात का है कि निकासी पहलू को कितनी प्रमुखता दी गई।',
      },
    },
  },

  {
    id: 'isro-gaganyaan',
    category: 'science',
    trending: false,
    readMins: 4,
    time: { en: '8h ago', hi: '8 घंटे पहले' },
    image: img('isro-gaganyaan'),
    primarySource: 'thehindu',
    title: {
      en: 'ISRO Sets June Date for Gaganyaan Uncrewed Test Flight',
      hi: 'इसरो ने गगनयान की मानवरहित परीक्षण उड़ान के लिए जून की तारीख तय की',
    },
    summary: {
      en: 'The uncrewed mission will test the crew module and escape system ahead of India’s first human spaceflight.',
      hi: 'यह मानवरहित मिशन भारत की पहली मानव अंतरिक्ष उड़ान से पहले क्रू मॉड्यूल और एस्केप सिस्टम का परीक्षण करेगा।',
    },
    body: {
      en: [
        'The Indian Space Research Organisation has set a June date for the first uncrewed test flight of the Gaganyaan programme, a key milestone on the path to sending Indian astronauts into orbit.',
        'The mission will carry a humanoid test payload and is designed to validate the crew module, the crew escape system, and recovery operations at sea — all critical safety checks before a human flight is attempted.',
        'ISRO officials said the test followed an extended series of ground qualification trials, and that a second uncrewed mission would precede the crewed flight, now expected in 2027.',
        'A successful test would move India closer to becoming only the fourth country to develop an independent human spaceflight capability, after the Soviet Union and Russia, the United States, and China.',
      ],
      hi: [
        'भारतीय अंतरिक्ष अनुसंधान संगठन ने गगनयान कार्यक्रम की पहली मानवरहित परीक्षण उड़ान के लिए जून की तारीख तय की है, जो भारतीय अंतरिक्ष यात्रियों को कक्षा में भेजने की राह का एक अहम पड़ाव है।',
        'इस मिशन में एक ह्यूमनॉइड परीक्षण पेलोड भेजा जाएगा और इसका उद्देश्य क्रू मॉड्यूल, क्रू एस्केप सिस्टम तथा समुद्र में रिकवरी संचालन का सत्यापन करना है — ये सभी मानव उड़ान से पहले की अहम सुरक्षा जाँचें हैं।',
        'इसरो अधिकारियों ने कहा कि यह परीक्षण ज़मीनी योग्यता परीक्षणों की एक लंबी श्रृंखला के बाद हो रहा है, और मानव उड़ान से पहले एक दूसरा मानवरहित मिशन भी होगा। मानव उड़ान अब 2027 में अपेक्षित है।',
        'एक सफल परीक्षण भारत को सोवियत संघ/रूस, अमेरिका और चीन के बाद स्वतंत्र मानव अंतरिक्ष उड़ान क्षमता वाला चौथा देश बनने के क़रीब ले जाएगा।',
      ],
    },
    sources: [
      {
        outlet: 'thehindu',
        paywalled: true,
        headline: {
          en: 'Gaganyaan: ISRO firms up June window for first uncrewed flight',
          hi: 'गगनयान: इसरो ने पहली मानवरहित उड़ान के लिए जून की समय-सीमा तय की',
        },
      },
      {
        outlet: 'toi',
        paywalled: false,
        headline: {
          en: 'India’s human spaceflight programme clears key date',
          hi: 'भारत के मानव अंतरिक्ष कार्यक्रम ने अहम तारीख तय की',
        },
      },
      {
        outlet: 'indiatoday',
        paywalled: false,
        headline: {
          en: 'Gaganyaan test flight in June: what the mission will check',
          hi: 'जून में गगनयान परीक्षण उड़ान: मिशन क्या जाँचेगा',
        },
      },
    ],
    coverageGap: {
      covered: ['thehindu', 'toi', 'indiatoday', 'ie'],
      missing: ['bbc', 'ndtv'],
      note: {
        en: 'Coverage is uniformly positive and fact-led, with little variation in framing — a story where outlets largely converge rather than diverge.',
        hi: 'कवरेज एक समान रूप से सकारात्मक और तथ्य-आधारित रहा, फ़्रेमिंग में बहुत कम अंतर — एक ऐसी ख़बर जिस पर स्रोत आपस में सहमत दिखे।',
      },
    },
  },

  {
    id: 'u17-football',
    category: 'sports',
    trending: false,
    readMins: 3,
    time: { en: '11h ago', hi: '11 घंटे पहले' },
    image: img('u17-football'),
    primarySource: 'toi',
    title: {
      en: 'India Names U-17 Squad for AFC Asian Cup Qualifiers',
      hi: 'भारत ने एएफसी एशियाई कप क्वालीफायर के लिए अंडर-17 टीम घोषित की',
    },
    summary: {
      en: 'A 23-player squad drawing on youth-development graduates will begin a three-week camp before next month’s qualifiers.',
      hi: 'युवा विकास केंद्रों से निकले खिलाड़ियों वाली 23 सदस्यीय टीम अगले महीने के क्वालीफायर से पहले तीन सप्ताह का शिविर शुरू करेगी।',
    },
    body: {
      en: [
        'The All India Football Federation on Thursday announced a 23-player squad for the India U-17 team ahead of the AFC U-17 Asian Cup qualifiers, drawing heavily on graduates of the federation’s youth-development centres.',
        'The squad blends players from established academy sides with a handful of call-ups from state leagues, reflecting what the head coach described as a deliberate widening of the talent net.',
        'India have been drawn in a qualifying group that includes regional rivals, with only group winners and the best runners-up advancing to the final tournament.',
        'The team will assemble for a three-week preparatory camp, including friendly fixtures, before travelling for the qualifiers next month.',
      ],
      hi: [
        'अखिल भारतीय फुटबॉल महासंघ ने गुरुवार को एएफसी अंडर-17 एशियाई कप क्वालीफायर के लिए भारत की अंडर-17 टीम हेतु 23 खिलाड़ियों की सूची घोषित की, जिसमें महासंघ के युवा विकास केंद्रों से निकले खिलाड़ियों को प्रमुखता दी गई।',
        'टीम में स्थापित अकादमी क्लबों के खिलाड़ियों के साथ-साथ राज्य लीगों से चुने गए कुछ खिलाड़ी भी शामिल हैं, जिसे मुख्य कोच ने प्रतिभा का दायरा जान-बूझकर बढ़ाने का प्रयास बताया।',
        'भारत को एक ऐसे क्वालीफाइंग ग्रुप में रखा गया है जिसमें क्षेत्रीय प्रतिद्वंद्वी शामिल हैं; केवल ग्रुप विजेता और सर्वश्रेष्ठ उपविजेता ही अंतिम टूर्नामेंट के लिए आगे बढ़ेंगे।',
        'टीम अगले महीने क्वालीफायर के लिए रवाना होने से पहले तीन सप्ताह का तैयारी शिविर लगाएगी, जिसमें अभ्यास मैच भी शामिल होंगे।',
      ],
    },
    sources: [
      {
        outlet: 'toi',
        paywalled: false,
        headline: {
          en: 'AIFF names 23-man U-17 squad for Asian Cup qualifiers',
          hi: 'एआईएफएफ ने एशियाई कप क्वालीफायर के लिए 23 सदस्यीय अंडर-17 टीम चुनी',
        },
      },
      {
        outlet: 'indiatoday',
        paywalled: false,
        headline: {
          en: 'Young Blue Colts squad blends academy and state-league talent',
          hi: 'युवा ब्लू कोल्ट्स टीम में अकादमी और राज्य-लीग प्रतिभा का मिश्रण',
        },
      },
      {
        outlet: 'ie',
        paywalled: false,
        headline: {
          en: 'India U-17s eye final-round berth as camp begins',
          hi: 'शिविर शुरू, भारत की अंडर-17 टीम की नज़र अंतिम दौर पर',
        },
      },
    ],
    coverageGap: {
      covered: ['toi', 'indiatoday', 'ie'],
      missing: ['bbc', 'thehindu', 'ndtv'],
      note: {
        en: 'Only three of six tracked outlets covered the squad announcement — a reminder that youth sport routinely receives lighter coverage than senior or international fixtures.',
        hi: 'छह में से केवल तीन स्रोतों ने टीम की घोषणा को कवर किया — यह याद दिलाता है कि युवा खेलों को आम तौर पर कम कवरेज मिलता है।',
      },
    },
  },
]

export const articleById = (id) => ARTICLES.find((a) => a.id === id)
