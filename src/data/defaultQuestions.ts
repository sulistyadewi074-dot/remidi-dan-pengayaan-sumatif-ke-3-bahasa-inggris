import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN I: PILIHAN GANDA (10 BUTIR SOAL: NO. 1 - 10)
  // Setiap butir bernilai skor 1 (Total skor PG = 10)
  // Tingkat kesukaran: 5 Mudah (L1) & 5 Sedang (L2)
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'The Animal Kingdom - Mammals',
    difficulty: 'Mudah',
    text: 'Bats are nocturnal animals that can fly swiftly in the night sky. Although bats have wings and fly like birds, why do scientists classify bats into the MAMMAL group?',
    options: [
      { id: 'A', text: 'They have feathers and lay hard-shelled eggs in tree hollows' },
      { id: 'B', text: 'They have hair or fur, give birth to live babies, and produce milk' },
      { id: 'C', text: 'They are cold-blooded animals with moist slimy skin' },
      { id: 'D', text: 'They have dry waterproof scales and breathe with gills' },
    ],
    correctAnswer: 'B',
    explanation:
      'Bats are mammals because they have fur/hair, give birth to live young (viviparous), and female bats nurse their pups with milk from mammary glands. They are the only true flying mammals.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'The Animal Kingdom - Birds (Aves)',
    difficulty: 'Mudah',
    text: 'Look at the Animal Kingdom classification chart below!\n\nWhich animal is classified into the BIRD group (Aves), even though it cannot fly and is known as the largest, fastest-running bird in the world?',
    imageSvg: `<svg viewBox="0 0 540 200" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradMammalNew" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0284c7" />
          <stop offset="100%" stop-color="#0369a1" />
        </linearGradient>
        <linearGradient id="gradBirdNew" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#059669" />
          <stop offset="100%" stop-color="#047857" />
        </linearGradient>
        <linearGradient id="gradReptileNew" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#d97706" />
          <stop offset="100%" stop-color="#b45309" />
        </linearGradient>
        <linearGradient id="gradAmphibianNew" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#7c3aed" />
          <stop offset="100%" stop-color="#6d28d9" />
        </linearGradient>
        <linearGradient id="gradFishNew" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#e11d48" />
          <stop offset="100%" stop-color="#be123c" />
        </linearGradient>
      </defs>
      <rect width="540" height="200" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="270" y="22" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle" letter-spacing="0.5">THE ANIMAL KINGDOM - 5 VERTEBRATE GROUPS</text>
      
      <!-- Card 1: Mammals -->
      <g transform="translate(12, 34)">
        <rect width="98" height="150" rx="8" fill="url(#gradMammalNew)" />
        <circle cx="49" cy="26" r="14" fill="rgba(255,255,255,0.2)"/>
        <text x="49" y="31" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">M</text>
        <text x="49" y="54" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">MAMMALS</text>
        <text x="49" y="70" font-size="8" fill="#e0f2fe" text-anchor="middle">Hair / Fur</text>
        <text x="49" y="82" font-size="8" fill="#e0f2fe" text-anchor="middle">Lungs • Milk</text>
        <rect x="6" y="94" width="86" height="46" rx="4" fill="rgba(0,0,0,0.2)"/>
        <text x="49" y="110" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">Examples:</text>
        <text x="49" y="122" font-size="7.5" fill="#f0f9ff" text-anchor="middle">Bat, Horse, Cat</text>
        <text x="49" y="133" font-size="7.5" fill="#f0f9ff" text-anchor="middle">Dolphin, Whale</text>
      </g>

      <!-- Card 2: Birds -->
      <g transform="translate(116, 34)">
        <rect width="98" height="150" rx="8" fill="url(#gradBirdNew)" stroke="#34d399" stroke-width="2"/>
        <circle cx="49" cy="26" r="14" fill="rgba(255,255,255,0.25)"/>
        <text x="49" y="31" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">B</text>
        <text x="49" y="54" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">BIRDS</text>
        <text x="49" y="70" font-size="8" fill="#d1fae5" text-anchor="middle">Feathers • Wings</text>
        <text x="49" y="82" font-size="8" fill="#d1fae5" text-anchor="middle">Beaks • Hard Eggs</text>
        <rect x="6" y="94" width="86" height="46" rx="4" fill="rgba(0,0,0,0.25)"/>
        <text x="49" y="110" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">Examples:</text>
        <text x="49" y="122" font-size="7.5" fill="#ffffff" text-anchor="middle">Eagle, Owl, Duck</text>
        <text x="49" y="133" font-size="7.5" font-weight="bold" fill="#a7f3d0" text-anchor="middle">Ostrich (Aves)</text>
      </g>

      <!-- Card 3: Reptiles -->
      <g transform="translate(220, 34)">
        <rect width="98" height="150" rx="8" fill="url(#gradReptileNew)" />
        <circle cx="49" cy="26" r="14" fill="rgba(255,255,255,0.2)"/>
        <text x="49" y="31" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">R</text>
        <text x="49" y="54" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">REPTILES</text>
        <text x="49" y="70" font-size="8" fill="#fef3c7" text-anchor="middle">Dry Scales</text>
        <text x="49" y="82" font-size="8" fill="#fef3c7" text-anchor="middle">Cold-blooded</text>
        <rect x="6" y="94" width="86" height="46" rx="4" fill="rgba(0,0,0,0.2)"/>
        <text x="49" y="110" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">Examples:</text>
        <text x="49" y="122" font-size="7.5" fill="#fffbeb" text-anchor="middle">Lizard, Snake</text>
        <text x="49" y="133" font-size="7.5" fill="#fffbeb" text-anchor="middle">Chameleon, Turtle</text>
      </g>

      <!-- Card 4: Amphibians -->
      <g transform="translate(324, 34)">
        <rect width="98" height="150" rx="8" fill="url(#gradAmphibianNew)" />
        <circle cx="49" cy="26" r="14" fill="rgba(255,255,255,0.2)"/>
        <text x="49" y="31" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">A</text>
        <text x="49" y="54" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">AMPHIBIANS</text>
        <text x="49" y="70" font-size="8" fill="#ede9fe" text-anchor="middle">Moist Skin</text>
        <text x="49" y="82" font-size="8" fill="#ede9fe" text-anchor="middle">Water &amp; Land</text>
        <rect x="6" y="94" width="86" height="46" rx="4" fill="rgba(0,0,0,0.2)"/>
        <text x="49" y="110" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">Examples:</text>
        <text x="49" y="122" font-size="7.5" fill="#f5f3ff" text-anchor="middle">Frog, Toad</text>
        <text x="49" y="133" font-size="7.5" fill="#f5f3ff" text-anchor="middle">Salamander</text>
      </g>

      <!-- Card 5: Fish -->
      <g transform="translate(428, 34)">
        <rect width="98" height="150" rx="8" fill="url(#gradFishNew)" />
        <circle cx="49" cy="26" r="14" fill="rgba(255,255,255,0.2)"/>
        <text x="49" y="31" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">F</text>
        <text x="49" y="54" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">FISH</text>
        <text x="49" y="70" font-size="8" fill="#ffe4e6" text-anchor="middle">Gills &amp; Fins</text>
        <text x="49" y="82" font-size="8" fill="#ffe4e6" text-anchor="middle">Water Life</text>
        <rect x="6" y="94" width="86" height="46" rx="4" fill="rgba(0,0,0,0.2)"/>
        <text x="49" y="110" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">Examples:</text>
        <text x="49" y="122" font-size="7.5" fill="#fff1f2" text-anchor="middle">Tilapia, Salmon</text>
        <text x="49" y="133" font-size="7.5" fill="#fff1f2" text-anchor="middle">Goldfish, Tuna</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Ostrich (Burung Unta)' },
      { id: 'B', text: 'Kangaroo (Kanguru)' },
      { id: 'C', text: 'Giraffe (Jerapah)' },
      { id: 'D', text: 'Flying Squirrel (Tupai Terbang)' },
    ],
    correctAnswer: 'A',
    explanation:
      'The ostrich is a member of the bird class (Aves). It possesses feathers, wings, a beak, and lays hard-shelled eggs, despite being flightless. Kangaroos, giraffes, and flying squirrels are mammals.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'The Animal Kingdom - Amphibians',
    difficulty: 'Sedang',
    text: 'Salamanders live near damp freshwater streams and forest floors. They lay soft jelly-covered eggs in water. When adult salamanders grow, they breathe through both lungs and their smooth, moist skin. To which vertebrate group does the salamander belong?',
    options: [
      { id: 'A', text: 'Reptiles' },
      { id: 'B', text: 'Fish' },
      { id: 'C', text: 'Amphibians' },
      { id: 'D', text: 'Mammals' },
    ],
    correctAnswer: 'C',
    explanation:
      'Salamanders are amphibians. Like frogs and toads, they possess moist glandular skin without scales, undergo metamorphosis, and can absorb oxygen through their moist skin and lungs.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'The Animal Kingdom - Reptiles',
    difficulty: 'Mudah',
    text: 'A chameleon has dry scaly skin, sharp claws on its feet, and lays leathery-shelled eggs on dry land. It is cold-blooded and warms its body under morning sunshine. Which group does it belong to?',
    options: [
      { id: 'A', text: 'Amphibians' },
      { id: 'B', text: 'Reptiles' },
      { id: 'C', text: 'Mammals' },
      { id: 'D', text: 'Birds' },
    ],
    correctAnswer: 'B',
    explanation:
      'Chameleons belong to the reptile group (Reptilia), characterized by dry, waterproof scaly skin, breathing with lungs throughout their lives, and being cold-blooded (ectothermic).',
  },
  {
    id: 5,
    topic: 'The Animal Kingdom - Fish',
    type: 'pg',
    difficulty: 'Mudah',
    text: 'Tilapia, salmon, and goldfish swim gracefully in freshwater lakes and rivers. How do these fish absorb dissolved oxygen directly from the water while swimming?',
    options: [
      { id: 'A', text: 'Through their webbed feet' },
      { id: 'B', text: 'Through their waterproof feathers' },
      { id: 'C', text: 'Through their gills (insang)' },
      { id: 'D', text: 'Through their dry scales' },
    ],
    correctAnswer: 'C',
    explanation:
      'Fish absorb dissolved oxygen from the water through their gills (insang) as water flows across the gill filaments.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Mengenal Past Tense - Regular Verbs',
    difficulty: 'Sedang',
    text: 'Read the school project activity below!\n\n"Yesterday afternoon, Siti and her classmates _______ the animal cages in the school mini-zoo until everything was clean and tidy."\n\nWhich regular past tense verb (Verb 2) correctly completes the sentence?',
    imageSvg: `<svg viewBox="0 0 500 140" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="140" fill="#f0fdf4" rx="12" stroke="#22c55e" stroke-width="2" stroke-dasharray="6,4"/>
      <rect x="15" y="15" width="470" height="110" rx="8" fill="#ffffff" stroke="#86efac" stroke-width="1"/>
      <text x="35" y="42" font-size="14" font-weight="bold" fill="#15803d">SCHOOL MINI-ZOO CHORE LOG</text>
      <text x="35" y="62" font-size="10" fill="#64748b">Time: <tspan font-weight="bold" fill="#0f172a">Yesterday afternoon (Past Event)</tspan></text>
      <text x="35" y="80" font-size="10" fill="#64748b">Activity: <tspan font-weight="bold" fill="#0f172a">Cleaning rabbit and bird enclosures</tspan></text>
      <text x="35" y="98" font-size="10" fill="#64748b">Sentence: <tspan font-style="italic" fill="#059669">"We _______ (clean) the cages yesterday."</tspan></text>
      <circle cx="430" cy="70" r="28" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="430" y="68" font-size="9" font-weight="bold" fill="#14532d" text-anchor="middle">VERB 2</text>
      <text x="430" y="82" font-size="8" fill="#16a34a" text-anchor="middle">Regular -ed</text>
    </svg>`,
    options: [
      { id: 'A', text: 'clean' },
      { id: 'B', text: 'cleaned' },
      { id: 'C', text: 'cleaning' },
      { id: 'D', text: 'cleans' },
    ],
    correctAnswer: 'B',
    explanation:
      'Because "yesterday afternoon" marks a completed past action, we use Simple Past Tense. "Clean" is a regular verb whose past form (Verb 2) is "cleaned".',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Mengenal Past Tense - Irregular Verbs',
    difficulty: 'Sedang',
    text: '"Last Sunday morning, Made went to the deer sanctuary and _______ some fresh carrots to the friendly deer."\n\nWhat is the correct irregular past tense verb (Verb 2) of the verb "feed"?',
    options: [
      { id: 'A', text: 'fed' },
      { id: 'B', text: 'feeded' },
      { id: 'C', text: 'feeds' },
      { id: 'D', text: 'feeding' },
    ],
    correctAnswer: 'A',
    explanation:
      'The verb "feed" is an irregular verb. Its past tense form (Verb 2) is "fed", not "feeded" or "feeding".',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Mengenal Past Tense - To Be (Was)',
    difficulty: 'Sedang',
    text: 'Complete the sentence with the correct past form of to be:\n\n"The giant tortoise _______ very slow as it walked across the green grass yesterday."',
    options: [
      { id: 'A', text: 'were' },
      { id: 'B', text: 'was' },
      { id: 'C', text: 'are' },
      { id: 'D', text: 'is' },
    ],
    correctAnswer: 'B',
    explanation:
      '"The giant tortoise" is a singular third-person subject (it). In the Simple Past Tense, singular subjects take the past to be "was".',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Mengenal Past Tense - To Be (Were)',
    difficulty: 'Mudah',
    text: 'Complete the sentence with the correct past form of to be:\n\n"Last holiday, my cousins and I _______ excited to see the colorful clownfish in West Bali National Park."',
    options: [
      { id: 'A', text: 'was' },
      { id: 'B', text: 'were' },
      { id: 'C', text: 'is' },
      { id: 'D', text: 'am' },
    ],
    correctAnswer: 'B',
    explanation:
      '"My cousins and I" is a plural subject equivalent to "we". In Simple Past Tense, plural subjects take "were".',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Mengenal Past Tense - Interrogative Form (Did)',
    difficulty: 'Sedang',
    text: 'Look at the question sentence below:\n\n"_______ you see the majestic hornbill bird when you explored the forest last weekend?"\n\nWhich auxiliary verb correctly completes this Simple Past Tense question?',
    options: [
      { id: 'A', text: 'Do' },
      { id: 'B', text: 'Does' },
      { id: 'C', text: 'Did' },
      { id: 'D', text: 'Were' },
    ],
    correctAnswer: 'C',
    explanation:
      'To form an interrogative sentence (yes/no question) in Simple Past Tense with an action verb ("see"), we use "Did" + Subject + Verb 1: "Did you see...?".',
  },

  // =========================================================================
  // BAGIAN II: PILIHAN GANDA KOMPLEKS (5 BUTIR SOAL: NO. 11 - 15)
  // Setiap butir bernilai skor 1 (Pilih semua jawaban yang benar)
  // Tingkat kesukaran: 3 Mudah (L1) & 2 Sedang (L2)
  // =========================================================================
  {
    id: 11,
    type: 'pgk',
    topic: 'The Animal Kingdom - Birds Characteristics',
    difficulty: 'Mudah',
    text: 'Which of the following statements about BIRDS (Aves) are TRUE? (Select all correct answers)',
    options: [
      { id: 'A', text: 'All birds have feathers covering their bodies and toothless beaks.' },
      { id: 'B', text: 'Female birds lay hard-shelled eggs to hatch their chicks.' },
      { id: 'C', text: 'Eagles, owls, parrots, and peacocks belong to the bird group.' },
      { id: 'D', text: 'Birds breathe underwater using gills during the rainy season.' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Statements A, B, and C are true characteristics of birds (feathers, beaks, hard eggs, and examples). Statement D is false because birds breathe atmospheric air using lungs and air sacs, never gills.',
  },
  {
    id: 12,
    type: 'pgk',
    topic: 'The Animal Kingdom - Amphibians Examples',
    difficulty: 'Sedang',
    text: 'From the animal list below, which animals belong to the AMPHIBIAN group? (Select all correct answers)',
    options: [
      { id: 'A', text: 'Bullfrog (Katak Lembu)' },
      { id: 'B', text: 'Green Sea Turtle (Penyu Hijau)' },
      { id: 'C', text: 'Spotted Salamander (Salamander Berbintik)' },
      { id: 'D', text: 'Common Toad (Kodok Puru)' },
    ],
    correctAnswer: ['A', 'C', 'D'],
    explanation:
      'Bullfrogs, spotted salamanders, and common toads are amphibians with smooth moist skin that undergo metamorphosis. The green sea turtle is a reptile with a hard shell and dry scales.',
  },
  {
    id: 13,
    type: 'pgk',
    topic: 'Mengenal Past Tense - Irregular Verbs Pairs',
    difficulty: 'Mudah',
    text: 'Which of the following are correct IRREGULAR past tense verb pairs (Verb 1 ➔ Verb 2)? (Select all correct answers)',
    options: [
      { id: 'A', text: 'Buy ➔ Bought' },
      { id: 'B', text: 'Make ➔ Made' },
      { id: 'C', text: 'Find ➔ Found' },
      { id: 'D', text: 'Watch ➔ Watched' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Buy ➔ bought, make ➔ made, and find ➔ found are irregular verbs. "Watch ➔ watched" is a regular verb that ends with -ed.',
  },
  {
    id: 14,
    type: 'pgk',
    topic: 'Mengenal Past Tense - Negative Sentences',
    difficulty: 'Sedang',
    text: 'Which sentences follow the correct NEGATIVE grammar pattern of Simple Past Tense? (Select all correct answers)',
    options: [
      { id: 'A', text: 'We did not go to the reptile park yesterday.' },
      { id: 'B', text: 'Putu did not catch any butterfly in the garden this morning.' },
      { id: 'C', text: 'They didn\'t ate lunch at the zoo cafeteria last week.' },
      { id: 'D', text: 'The baby monkey was not afraid of the kind zookeeper.' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      'Sentences A, B, and D are grammatically correct in negative past tense. Sentence C is incorrect because after the auxiliary "didn\'t", the verb must be in base form (Verb 1: "didn\'t eat", not "didn\'t ate").',
  },
  {
    id: 15,
    type: 'pgk',
    topic: 'The Animal Kingdom - Mammals Characteristics',
    difficulty: 'Mudah',
    text: 'Which statements about MAMMALS are scientifically correct? (Select all correct answers)',
    options: [
      { id: 'A', text: 'Mammals are warm-blooded vertebrates with body hair or fur.' },
      { id: 'B', text: 'Mother mammals nourish their newborn babies with milk.' },
      { id: 'C', text: 'Bottlenose dolphins and humpback whales are mammals living in the sea.' },
      { id: 'D', text: 'All mammals have cold blood and breathe dissolved oxygen with gills.' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Statements A, B, and C are correct facts about mammals. Statement D is false because mammals are warm-blooded (endothermic) and breathe air using lungs, not gills.',
  },

  // =========================================================================
  // BAGIAN III: PGK KATEGORI / BENAR-SALAH (5 BUTIR SOAL: NO. 16 - 20)
  // Setiap butir memuat 4 pernyataan, bernilai skor 1
  // Tingkat kesukaran: 2 Mudah (L1) & 3 Sedang (L2)
  // =========================================================================
  {
    id: 16,
    type: 'pgk_kategori',
    topic: 'The Animal Kingdom - Vertebrate Classification Facts',
    difficulty: 'Mudah',
    categoryType: 'benar_salah',
    text: 'Determine whether each statement about vertebrate animal classification is Benar (True) or Salah (False):',
    statements: [
      {
        id: 's1',
        text: 'Blue whales breathe air through blowholes connected directly to their lungs.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's2',
        text: 'Goldfish have dry waterproof scales and lay leathery eggs on dry land.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's3',
        text: 'Reptiles are cold-blooded vertebrates whose body temperature depends on the environment.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's4',
        text: 'Tree frogs are classified as mammals because they have thick fur.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
    ],
    explanation:
      'Pernyataan 1 Benar (paus bernapas dengan paru-paru lewat lubang sembur). Pernyataan 2 Salah (ikan mas memiliki sisik basah berlendir dan bertelur di air). Pernyataan 3 Benar (reptil adalah hewan berdarah dingin/ektoterm). Pernyataan 4 Salah (katak pohon adalah amfibi berkulit lembap tanpa bulu).',
  },
  {
    id: 17,
    type: 'pgk_kategori',
    topic: 'Mengenal Past Tense - Grammar Rules',
    difficulty: 'Sedang',
    categoryType: 'benar_salah',
    text: 'Determine whether each grammar rule statement about Simple Past Tense is Benar (True) or Salah (False):',
    statements: [
      {
        id: 's1',
        text: 'Regular verbs form their past tense (Verb 2) by adding "-ed" or "-d" to the base verb.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's2',
        text: 'In Simple Past Tense, we use the to be "was" for plural subjects like "we" and "they".',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's3',
        text: 'The irregular past form (Verb 2) of the verb "swim" is "swam".',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's4',
        text: 'Time markers like "yesterday", "last weekend", and "two hours ago" indicate past actions.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
    ],
    explanation:
      'Pernyataan 1 Benar (regular verb berakhiran -ed/-d). Pernyataan 2 Salah (subjek jamak we/they menggunakan "were", bukan "was"). Pernyataan 3 Benar (swim ➔ swam). Pernyataan 4 Benar (merupakan penanda waktu Simple Past Tense).',
  },
  {
    id: 18,
    type: 'pgk_kategori',
    topic: 'The Animal Kingdom - Body Coverings & Features',
    difficulty: 'Mudah',
    categoryType: 'benar_salah',
    text: 'Determine whether each statement regarding animal body coverings is Benar (True) or Salah (False):',
    statements: [
      {
        id: 's1',
        text: 'Birds are the only animals in the world whose bodies are covered in true feathers.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's2',
        text: 'Snakes and crocodiles have dry, scaly skin that prevents moisture loss.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's3',
        text: 'Adult amphibians have thick woolly fur to keep them warm inside mud.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's4',
        text: 'Most fish bodies are covered in slimy scales and they swim using fins.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
    ],
    explanation:
      'Pernyataan 1 Benar (hanya kelompok aves/burung yang memiliki bulu unggas sejati). Pernyataan 2 Benar (sisik reptil kering dan kedap air). Pernyataan 3 Salah (amfibi tidak berambut/bulu wol, melainkan berkulit licin lembap). Pernyataan 4 Benar (ikan bersisik licin berlendir dan bersirip).',
  },
  {
    id: 19,
    type: 'pgk_kategori',
    topic: 'Mengenal Past Tense - Sentence Accuracy',
    difficulty: 'Sedang',
    categoryType: 'benar_salah',
    text: 'Analyze whether each sentence is grammatically CORRECT in Simple Past Tense (Benar) or INCORRECT (Salah):',
    statements: [
      {
        id: 's1',
        text: '"Kadek helped the injured sparrow in his garden two days ago."',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's2',
        text: '"The fierce lions was asleep under the rock yesterday afternoon."',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's3',
        text: '"Did you visit the elephant sanctuary last Sunday?"',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's4',
        text: '"I seen a colorful kingfisher diving into the pond yesterday."',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
    ],
    explanation:
      'Kalimat 1 Benar (helped + two days ago). Kalimat 2 Salah (subjek jamak "the fierce lions" seharusnya memakai "were", bukan "was"). Kalimat 3 Benar (struktur tanya did + S + V1). Kalimat 4 Salah (Verb 2 dari see adalah "saw", bukan "seen").',
  },
  {
    id: 20,
    type: 'pgk_kategori',
    topic: 'The Animal Kingdom - Respiration & Life Cycle',
    difficulty: 'Sedang',
    categoryType: 'benar_salah',
    text: 'Determine whether each statement about animal respiration and life cycles is Benar (True) or Salah (False):',
    statements: [
      {
        id: 's1',
        text: 'Young tadpoles use gills to breathe underwater before developing lungs as adult frogs.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's2',
        text: 'Dolphins can stay underwater forever without surfacing because they have fish gills.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's3',
        text: 'Female birds lay eggs with rigid shells made of calcium carbonate.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's4',
        text: 'Adult frogs can absorb oxygen directly through their smooth, moist skin.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
    ],
    explanation:
      'Pernyataan 1 Benar (kecebong bernapas dengan insang). Pernyataan 2 Salah (lumba-lumba adalah mamalia berparu-paru yang harus naik ke permukaan untuk bernapas). Pernyataan 3 Benar (telur burung bercangkang keras kapur). Pernyataan 4 Benar (kulit basah katak menyerap oksigen).',
  },

  // =========================================================================
  // BAGIAN IV: MENJODOHKAN (5 BUTIR SOAL: NO. 21 - 25)
  // Setiap butir memuat 4 premis dan 4 pilihan pasangan, bernilai skor 1
  // Tingkat kesukaran: 3 Mudah (L1) & 2 Sedang (L2)
  // =========================================================================
  {
    id: 21,
    type: 'menjodohkan',
    topic: 'The Animal Kingdom - Animal to Vertebrate Group',
    difficulty: 'Mudah',
    text: 'Match each animal in the left column with its correct Animal Kingdom vertebrate group in the right column:',
    matchingPairs: [
      { id: 'm1', premise: 'Platypus (Has fur and produces milk)', match: 'Mammal' },
      { id: 'm2', premise: 'Komodo Dragon (Dry scaly skin)', match: 'Reptile' },
      { id: 'm3', premise: 'Green Tree Frog (Smooth moist skin)', match: 'Amphibian' },
      { id: 'm4', premise: 'Hornbill / Rangkong (Feathers & beak)', match: 'Bird' },
    ],
    explanation:
      'Platypus adalah mamalia bertelur (monotremata) yang memiliki bulu dan menyusui; Komodo dragon adalah reptil; Green tree frog adalah amfibi; dan Hornbill (burung rangkong) adalah burung.',
  },
  {
    id: 22,
    type: 'menjodohkan',
    topic: 'Mengenal Past Tense - Irregular Verbs Pairs',
    difficulty: 'Mudah',
    text: 'Match each base verb (Verb 1) with its correct irregular past tense form (Verb 2):',
    matchingPairs: [
      { id: 'm1', premise: 'Take (Mengambil)', match: 'Took' },
      { id: 'm2', premise: 'Hear (Mendengar)', match: 'Heard' },
      { id: 'm3', premise: 'Run (Berlari)', match: 'Ran' },
      { id: 'm4', premise: 'Give (Memberi)', match: 'Gave' },
    ],
    explanation:
      'Pasangan Verb 1 ke Verb 2 tidak beraturan: Take ➔ Took, Hear ➔ Heard, Run ➔ Ran, Give ➔ Gave.',
  },
  {
    id: 23,
    type: 'menjodohkan',
    topic: 'Mengenal Past Tense - Subject & Past To Be',
    difficulty: 'Sedang',
    text: 'Match each subject phrase with the appropriate past to be (Was or Were):',
    matchingPairs: [
      { id: 'm1', premise: 'A playful dolphin (Singular)', match: 'Was' },
      { id: 'm2', premise: 'The two majestic eagles (Plural)', match: 'Were' },
      { id: 'm3', premise: 'You and your brother (Plural / You)', match: 'Were' },
      { id: 'm4', premise: 'The baby elephant (Singular)', match: 'Was' },
    ],
    explanation:
      'Subjek tunggal (A dolphin, The baby elephant) menggunakan "Was". Subjek jamak (The two eagles, You and your brother) menggunakan "Were".',
  },
  {
    id: 24,
    type: 'menjodohkan',
    topic: 'The Animal Kingdom - Respiration Methods',
    difficulty: 'Sedang',
    text: 'Match each animal with how it primarily breathes oxygen:',
    matchingPairs: [
      { id: 'm1', premise: 'Clownfish (In ocean water)', match: 'Gills' },
      { id: 'm2', premise: 'Sea Turtle (Surfaces to breathe)', match: 'Lungs' },
      { id: 'm3', premise: 'Young Tadpole (Underwater larva)', match: 'Gills' },
      { id: 'm4', premise: 'Adult Frog (On damp riverbank)', match: 'Lungs and moist skin' },
    ],
    explanation:
      'Ikan badut bernapas dengan insang; penyu laut bernapas dengan paru-paru; kecebong bernapas dengan insang; katak dewasa bernapas dengan paru-paru dan kulit lembap.',
  },
  {
    id: 25,
    type: 'menjodohkan',
    topic: 'The Animal Kingdom - Group to Outer Body Feature',
    difficulty: 'Mudah',
    text: 'Match each vertebrate group with its distinctive outer body covering:',
    matchingPairs: [
      { id: 'm1', premise: 'Mammals', match: 'Hair or fur' },
      { id: 'm2', premise: 'Birds (Aves)', match: 'Feathers and beak' },
      { id: 'm3', premise: 'Reptiles', match: 'Dry waterproof scales' },
      { id: 'm4', premise: 'Amphibians', match: 'Smooth moist skin' },
    ],
    explanation:
      'Mamalia memiliki rambut/bulu halus (hair/fur); burung memiliki bulu unggas (feathers); reptil memiliki sisik kering kedap air; amfibi memiliki kulit halus yang lembap tanpa sisik.',
  },

  // =========================================================================
  // BAGIAN V: ISIAN SINGKAT (5 BUTIR SOAL: NO. 26 - 30)
  // Setiap butir bernilai skor 1
  // Tingkat kesukaran: 3 Mudah (L1) & 2 Sedang (L2)
  // =========================================================================
  {
    id: 26,
    type: 'isian',
    topic: 'Mengenal Past Tense - Irregular Verb Fill-in',
    difficulty: 'Mudah',
    text: 'Fill in the blank with the correct past tense form (Verb 2) of the verb in brackets:\n\n"Yesterday morning, my sister and I _______ (see) a mother dolphin swimming near Lovina beach."',
    correctAnswer: 'saw',
    acceptedAnswers: ['saw', 'Saw', 'SAW'],
    explanation:
      'The past tense form (Verb 2) of the irregular verb "see" is "saw".',
  },
  {
    id: 27,
    type: 'isian',
    topic: 'The Animal Kingdom - Reptiles Group Name',
    difficulty: 'Mudah',
    text: 'Cold-blooded vertebrates that have dry skin covered with scales and lay leathery eggs on land (such as lizards, snakes, and turtles) are called _______.',
    correctAnswer: 'reptiles',
    acceptedAnswers: ['reptiles', 'Reptiles', 'reptile', 'Reptile', 'reptilia', 'Reptilia'],
    explanation:
      'Animals with dry scaly skin and cold blood that lay leathery eggs on land are called "reptiles" (reptilia).',
  },
  {
    id: 28,
    type: 'isian',
    topic: 'Mengenal Past Tense - Past To Be Fill-in',
    difficulty: 'Sedang',
    text: 'Fill in the blank with the correct past to be ("was" or "were"):\n\n"Last night, the noisy owl _______ perched silently on the highest branch of the mango tree."',
    correctAnswer: 'was',
    acceptedAnswers: ['was', 'Was', 'WAS'],
    explanation:
      '"The noisy owl" is a singular subject (it), so the correct past to be is "was".',
  },
  {
    id: 29,
    type: 'isian',
    topic: 'The Animal Kingdom - Amphibians Group Name',
    difficulty: 'Mudah',
    text: 'Vertebrates that can live both in water and on land, have smooth moist skin without scales, and undergo metamorphosis (such as frogs and toads) are called _______.',
    correctAnswer: 'amphibians',
    acceptedAnswers: ['amphibians', 'Amphibians', 'amphibian', 'Amphibian', 'amfibi', 'Amfibi'],
    explanation:
      'Animals that live a double life on land and water with smooth, scale-less moist skin are called "amphibians" (amfibi).',
  },
  {
    id: 30,
    type: 'isian',
    topic: 'Mengenal Past Tense - Regular Verb Fill-in',
    difficulty: 'Sedang',
    text: 'Fill in the blank with the correct past tense form (Verb 2) of the regular verb in brackets:\n\n"Three days ago, the students _______ (watch) an interesting documentary film about African wildlife."',
    correctAnswer: 'watched',
    acceptedAnswers: ['watched', 'Watched', 'WATCHED'],
    explanation:
      '"Watch" is a regular verb. In Simple Past Tense, we add -ed to make "watched".',
  },

  // =========================================================================
  // BAGIAN VI: URAIAN / ESSAY TERBUKA (5 BUTIR SOAL: NO. 31 - 35)
  // Setiap butir bernilai skor maksimal 2 (Total skor Uraian = 10)
  // Tingkat kesukaran: 2 Mudah (L1) & 3 Sedang (L2)
  // =========================================================================
  {
    id: 31,
    type: 'uraian',
    topic: 'The Animal Kingdom - Five Vertebrate Classes & Examples',
    difficulty: 'Mudah',
    text: 'Tuliskan 5 kelompok hewan (Animal Kingdom) dalam bahasa Inggris dan berikan 1 contoh hewannya masing-masing!\n(Write the 5 animal groups in English and 1 animal example for each!)\n\nContoh format jawaban:\n1. Mammals: Cat\n2. Birds: Eagle\n3. Reptiles: Snake\n4. Amphibians: Frog\n5. Fish: Goldfish',
    maxScore: 2,
    keyPoints: [
      '1. Mammals (contoh: cat, dog, lion, cow, horse, bat, dolphin, whale)',
      '2. Birds (contoh: eagle, duck, chicken, parrot, owl, penguin)',
      '3. Reptiles (contoh: snake, crocodile, turtle, lizard, chameleon)',
      '4. Amphibians (contoh: frog, toad, salamander)',
      '5. Fish (contoh: goldfish, shark, clownfish, salmon, tuna)',
    ],
    rubric:
      'Skor 2: Menuliskan kelima kelompok hewan (Mammals, Birds, Reptiles, Amphibians, Fish) beserta contoh hewannya dengan benar.\nSkor 1: Menuliskan 2 sampai 4 kelompok hewan beserta contohnya dengan benar.\nSkor 0: Hanya menuliskan 1 kelompok hewan atau jawaban tidak relevan.',
    explanation:
      'The 5 Animal Kingdom groups are: (1) Mammals (e.g. Cat), (2) Birds (e.g. Eagle), (3) Reptiles (e.g. Snake), (4) Amphibians (e.g. Frog), and (5) Fish (e.g. Goldfish).',
  },
  {
    id: 32,
    type: 'uraian',
    topic: 'The Animal Kingdom - Birds vs Fish',
    difficulty: 'Mudah',
    text: 'Sebutkan 2 perbedaan antara Burung (Birds) dan Ikan (Fish) berdasarkan:\na. Penutup tubuhnya (feathers atau scales)\nb. Organ pernapasannya (lungs atau gills)\n(Mention 2 differences between Birds and Fish: body covering and breathing organ!)',
    maxScore: 2,
    keyPoints: [
      'a. Penutup tubuh: Birds memiliki bulu (feathers), sedangkan Fish memiliki sisik basah/berlendir (scales).',
      'b. Organ pernapasan: Birds bernapas dengan paru-paru (lungs), sedangkan Fish menyerap oksigen dengan insang (gills).',
    ],
    rubric:
      'Skor 2: Menjawab kedua perbedaan (penutup tubuh: feathers vs scales; dan pernapasan: lungs vs gills) dengan tepat.\nSkor 1: Hanya menjawab satu perbedaan dengan tepat.\nSkor 0: Jawaban keliru atau tidak menjawab.',
    explanation:
      'Birds have feathers and breathe using lungs. Fish have scales and breathe using gills.',
  },
  {
    id: 33,
    type: 'uraian',
    topic: 'Mengenal Past Tense - Regular & Irregular Verbs Examples',
    difficulty: 'Mudah',
    text: 'Tuliskan masing-masing 2 contoh kata kerja bentuk lampau (Verb 2) untuk:\na. Regular verbs (kata kerja berakhiran -ed, contoh: played, visited, cleaned)\nb. Irregular verbs (kata kerja berubah bentuk, contoh: went, saw, ate)\n(Write 2 regular past verbs and 2 irregular past verbs!)',
    maxScore: 2,
    keyPoints: [
      'a. Contoh Regular verbs (Verb 2): played, visited, cleaned, watched, walked, climbed, opened, cooked, helped.',
      'b. Contoh Irregular verbs (Verb 2): went, saw, ate, drank, swam, flew, bought, made, took, fed, had.',
    ],
    rubric:
      'Skor 2: Menuliskan masing-masing 2 contoh regular verb (-ed) dan 2 contoh irregular verb dengan benar.\nSkor 1: Hanya menuliskan 1 contoh untuk masing-masing, atau hanya benar pada satu jenis kata kerja.\nSkor 0: Penjelasan dan contoh keliru.',
    explanation:
      'Regular past verbs end in -ed (e.g. played, cleaned, visited). Irregular past verbs change irregularly (e.g. go ➔ went, see ➔ saw, eat ➔ ate).',
  },
  {
    id: 34,
    type: 'uraian',
    topic: 'The Animal Kingdom - Whales as Mammals',
    difficulty: 'Sedang',
    text: 'Mengapa lumba-lumba (dolphins) dan paus (whales) disebut hewan mamalia (Mammals) dan bukan ikan? Tuliskan 2 alasannya!\n(Why are dolphins and whales mammals, not fish? Write 2 reasons!)\n\nPetunjuk bantuan: Pikirkan cara bernapasnya dan cara memberi minum/susu anaknya.',
    maxScore: 2,
    keyPoints: [
      '1. Bernapas menggunakan paru-paru (lungs) lewat blowhole, bukan dengan insang (gills).',
      '2. Melahirkan anak dan menyusui bayinya dengan air susu (nurse babies with milk).',
      '3. Berdarah panas (warm-blooded) dan menjaga suhu tubuh tetap stabil.',
    ],
    rubric:
      'Skor 2: Menuliskan 2 alasan ilmiah yang benar (misalnya: bernapas dengan paru-paru/lungs dan menyusui anaknya dengan susu/melahirkan).\nSkor 1: Menuliskan 1 alasan ilmiah yang benar.\nSkor 0: Jawaban tidak tepat atau menyebutkan ciri ikan.',
    explanation:
      'Dolphins and whales are mammals because: (1) they breathe air using lungs (via blowholes), and (2) mothers give birth to live calves and nurse them with milk.',
  },
  {
    id: 35,
    type: 'uraian',
    topic: 'Simple Past Tense - Simple Sentences about Animals',
    difficulty: 'Sedang',
    text: 'Buatlah 2 kalimat sederhana dalam bahasa Inggris menggunakan Simple Past Tense (lampau) tentang melihat atau mengamati hewan!\n(Write 2 simple sentences in Simple Past Tense about seeing or visiting animals!)\n\nContoh pola bantuan:\n- "Yesterday, I went to the zoo."\n- "I saw a big elephant and a colorful bird."\n- "Last Sunday, I visited my friend\'s cat."',
    maxScore: 2,
    keyPoints: [
      'Memuat kata kerja bentuk lampau (Verb 2) seperti: went, saw, visited, fed, watched, looked, played.',
      'Menyebutkan nama hewan dalam kalimat (misal: cat, elephant, bird, tiger, fish, monkey).',
      'Memuat penanda waktu lampau atau menyatakan kejadian yang sudah selesai (misal: yesterday, last Sunday, last week).',
      'Kalimat sederhana mudah dipahami dan bermakna.',
    ],
    rubric:
      'Skor 2: Menuliskan 2 kalimat sederhana dalam Simple Past Tense dengan kata kerja Verb 2 yang benar dan menyebutkan hewan.\nSkor 1: Hanya menuliskan 1 kalimat yang benar, atau ada sedikit kesalahan tata bahasa.\nSkor 0: Kalimat tidak menggunakan pola Simple Past Tense atau tidak menjawab.',
    explanation:
      'Contoh 2 kalimat sederhana: (1) "Yesterday, I went to the zoo." (2) "I saw a monkey eating bananas."',
  },
];
