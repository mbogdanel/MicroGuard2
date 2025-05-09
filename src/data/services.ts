export interface Service {
  id: string
  title: string
  subtitle: string
  description: string[]
  image: string
  images: string[]
  keyFeatures: string[]
}

export const services: Service[] = [
  {
    id: 'supraveghere-video',
    image: '/src/assets/images/servicii1.jpg',
    description: [
      'Furnizam solutii complete pentru sisteme de supraveghere video de la proiectare pana la executie. Contacteaza-ne fara ezitare un specialist si obtine o solutie pentru securitatea ta, fie ca este vorba despre supravegherea video a companiei tale sau ca doresti sa-ti stii familia in siguranta in caminul tau. ',
      'Avem in portofoliu peste 1000 de lucrari, de la supraveghere video stradala a localitatilor, a organizarilor de santier unde nu este disponibila o sursa de curent, spatii comerciale si birouri, pana la  un sistem de o camera in curtea de la tara ca sa-ti amintesti cum creste iarba.',
    ],
    title: 'Supraveghere Video',
    subtitle: 'Afla mai multe...',
    images: [],
    keyFeatures: [],
  },
  {
    id: 'automatizari-porti',
    image: '/src/assets/images/servicii2.jpg',
    description: [
      'Automatizarea portilor a devenit o necesitate si solutiile de automatizari sunt pe masura. Evita un deranj in plus chiar atunci cand te grabesti sa pleci spre serviciu sau cand ajungi acasa obosit… si ploua. Conacteaza-ne si beneficiaza de echipamente de calitate si o instalare adaptata la suportul dat. Toti clientii sau musafirii intra pe poarta, asa ca ne facem din estetica lucrarii o misiune.',
    ],
    title: 'Automatizari Porti',
    subtitle: 'Afla mai multe...',
    images: [],
    keyFeatures: [],
  },
  {
    id: 'detectie-efractie',
    image: '/src/assets/images/servicii3.jpg',
    description: [
      'Alege unul dintre sistemele de detectie profesionale ce te alarmeaza atunci cand cineva iti intra prin efractie in spatiul protejat. Sistemele pot fi de tip cablat sau wireless (fara fir) cu o senzoristica diversa de la detectia radiatiei termice, la detectia cu microunde, la detectia zgomotelor si vibratiilor pana la detectia inundatiei sau al incendiului. Compania noastra detine licenta de instalare, mentenanta si proiectare a sistemelor de securitate emisa de catre Inspectoratul General de Politie.',
    ],
    title: 'Detectie Efractie',
    subtitle: 'Afla mai multe...',
    images: [],
    keyFeatures: [],
  },
  {
    id: 'detectie-incendiu',
    image: '/src/assets/images/servicii4.jpg',
    description: [
      'Punem pret pe viata omului, asa ca atunci cand vine vorba de un incendiu este bine sa fim pregatiti. Proiectam si instalam sisteme de detectie, semnalizare si avertizare incendiu si suntem autorizati de Inspectoratul General de Situatii de Urgenta in acest sens. Sistemele detecteaza inceputul unui incendiu si semnaleaza necesitatea evacuarii personalului din fata pericolului.',
    ],
    title: 'Detectie Incendiu',
    subtitle: 'Afla mai multe...',
    images: [],
    keyFeatures: [],
  },
  {
    id: 'infrastructura-telecomunicatii',
    image: '/src/assets/images/servicii5.jpg',
    description: [
      'Furnizam solutii certificate de trasmisii telecomunicatii pe cablu cupru sau fibra optica. Ne ocupam si de managementul cablurilor si organizarea lor in dulapurile de telecomunicatii. Dispunem de aparatura specializata de sudura fibra optima, optimetrie, certificare prize de internet si testare nivel semnal wireless. Oferim solutii de comunicare wireless pe distante lungi de pana la 10 km cu latime de banda de invidiat.',
    ],
    title: 'Infrastructura Telecomunicatii',
    subtitle: 'Afla mai multe...',
    images: [],
    keyFeatures: [],
  },
  {
    id: 'video-interfonie',
    image: '/src/assets/images/servicii6.jpg',
    description: [
      'Automatizeaza accesul in cativa pasi simpli. Cu ajutorul unui videointerfon poti monitoriza acesul in unitate sau locuinta de pe un display montat fie pe birou sa perete sau chiar de pe telefon. Sistemul de control al accesului poate duce lucrurile chiar mai departe cu setari complexe de acces sau chiar rapoarte de pontaj. Contacteaza-ne si iti explicam cat de simplu este.',
    ],
    title: 'Video Interfonie',
    subtitle: 'Afla mai multe...',
    images: [],
    keyFeatures: [],
  },
]

export const companyInfo = {
  name: 'Microguard',
  description: 'Innovative security solutions for a safer tomorrow',
  contact: {
    phone: '+40 770 480 952',
    facebook: 'https://www.facebook.com/alex.microguard',
    address: 'Bacău, Bacau, Romania',
  },
}

export const whyChooseUs = [
  {
    icon: '🛡️',
    title: 'Advanced Technology',
    description: 'State-of-the-art security systems and equipment',
  },
  {
    icon: '👥',
    title: 'Expert Team',
    description: 'Highly trained security professionals at your service',
  },
  {
    icon: '⚡',
    title: 'Quick Response',
    description: 'Immediate action when you need it most',
  },
]
