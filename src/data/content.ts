export interface Room {
  id: string
  name: string
  englishName: string
  summary: string
  description: string
  note?: string
  features: string[]
  imageLabels: string[]
}

export interface Facility {
  id: string
  title: string
  description: string
  imageLabel: string
}

export interface Review {
  guest: string
  stay: string
  quote: string
}

export interface FaqItem {
  question: string
  answer: string
}

export const navItems = [
  { id: 'prologue', label: 'PROLOGUE' },
  { id: 'rooms', label: 'ROOMS' },
  { id: 'facilities', label: 'FACILITIES' },
  { id: 'reservation', label: 'RESERVATION' },
  { id: 'location', label: 'LOCATION' },
  { id: 'faq', label: 'FAQ' },
] as const

export const rooms: Room[] = [
  {
    id: 't',
    name: 'T동',
    englishName: 'House T',
    summary: '숲이 가장 가까이 보이는 조용한 독채',
    description:
      '창 밖으로 나뭇잎이 먼저 닿는 자리입니다. 침실 두 개와 넓은 거실을 두고, 하루의 속도는 숲이 정합니다. 실내 수영장과 불멍, 바비큐는 객실 안에서만 이어집니다.',
    features: ['침실 2', '넓은 거실', '실내 미온수 수영장', '야외 불멍 화로대', '실내 바비큐'],
    imageLabels: ['T동 외관', 'T동 거실과 숲'],
  },
  {
    id: 'r',
    name: 'R동',
    englishName: 'House R',
    summary: '거실의 개방감이 큰 독채',
    description:
      '거실의 긴 창이 숲의 폭을 그대로 들입니다. 앉아 있는 자리와 걷는 자리의 경계가 느슨해지도록, 공간은 낮고 길게 열립니다.',
    features: ['침실 2', '넓은 거실', '실내 미온수 수영장', '야외 불멍 화로대', '실내 바비큐'],
    imageLabels: ['R동 거실', 'R동 수영장'],
  },
  {
    id: 'v',
    name: 'V동',
    englishName: 'House V',
    summary: '10kg 미만 소형 반려견과 함께할 수 있는 독채',
    description:
      '세 동 가운데 V동만 작은 반려견과 머물 수 있습니다. 사람의 동선과 개의 자리가 서로 방해하지 않도록 거실을 넓게 두었습니다.',
    note: '10kg 미만 소형 반려견 동반 가능',
    features: [
      '침실 2',
      '넓은 거실',
      '실내 미온수 수영장',
      '야외 불멍 화로대',
      '실내 바비큐',
      '소형 반려견 동반',
    ],
    imageLabels: ['V동 외관', 'V동 거실'],
  },
]

export const facilities: Facility[] = [
  {
    id: 'pool',
    title: '실내 미온수 수영장',
    description: '각 독채의 수영장은 그 객실만 사용합니다. 물 위에 숲의 그림자가 머물도록 창을 낮게 두었습니다.',
    imageLabel: '실내 미온수 수영장',
  },
  {
    id: 'fire',
    title: '야외 불멍 화로대',
    description: '해가 내린 뒤의 시간은 화로 앞으로 모입니다. 불빛은 객실 마당 안에서만 번집니다.',
    imageLabel: '야외 불멍 화로대',
  },
  {
    id: 'grill',
    title: '실내 바비큐',
    description: '날씨와 상관없이 식사의 자리를 지킬 수 있도록, 바비큐는 객실 실내에 두었습니다.',
    imageLabel: '실내 바비큐',
  },
  {
    id: 'lounge',
    title: '통창 유리 라운지',
    description: '체크인에 맞춰 웰컴 드링크를 준비합니다. 유리 너머로 숲이 보이고, 머무는 첫 숨이 여기서 시작됩니다.',
    imageLabel: '통창 유리 라운지',
  },
  {
    id: 'trail',
    title: '프라이빗 산책로',
    description: '객실과 객실 사이를 잇지 않는 길입니다. 발소리만 남기고 돌아오면 됩니다.',
    imageLabel: '프라이빗 산책로',
  },
]

export const reviews: Review[] = [
  {
    guest: '김서연',
    stay: 'T동 · 2박',
    quote: '창을 여는 순간 숲의 습기가 먼저 들어왔습니다. 수영장도, 저녁의 불도 우리 객실 안에만 있어서 누구의 시간도 빌리지 않은 느낌이었습니다.',
  },
  {
    guest: '이하준',
    stay: 'R동 · 1박',
    quote: '거실이 예상보다 길고 낮았습니다. 앉아 있는 동안 밖에 나가 있는 것과 안에 있는 것의 구분이 흐려졌습니다.',
  },
  {
    guest: '박도윤',
    stay: 'V동 · 2박',
    quote: '작은 반려견과 함께 머물 수 있는 집이 필요했습니다. 동선이 넓고, 밤의 화로 앞에서도 개가 편하게 앉아 있었습니다.',
  },
  {
    guest: '정민아',
    stay: 'T동 · 1박',
    quote: '라운지의 웰컴 드링크 이후로는 서두를 일이 없었습니다. 체크아웃 직전까지 숲의 그림자만 세고 있었습니다.',
  },
]

export const faqs: FaqItem[] = [
  {
    question: '예약은 어떻게 하나요?',
    answer: '예약과 결제는 야놀자에서 진행됩니다. 이 페이지의 예약 버튼을 누르면 야놀자 페이지로 이어지도록 준비되어 있습니다.',
  },
  {
    question: '몇 명까지 머물 수 있나요?',
    answer: '전 객실 기준 인원은 2인이며, 최대 6인까지 머물 수 있습니다.',
  },
  {
    question: '체크인과 체크아웃 시간은 언제인가요?',
    answer: '체크인은 15:00, 체크아웃은 11:00입니다.',
  },
  {
    question: '반려견과 함께할 수 있나요?',
    answer: 'V동에 한해 10kg 미만 소형 반려견 동반이 가능합니다. T동과 R동은 반려견 동반이 어렵습니다.',
  },
  {
    question: '수영장과 바비큐, 불멍은 어떻게 이용하나요?',
    answer: '실내 미온수 수영장, 실내 바비큐, 야외 불멍 화로대는 각 독채에 개별적으로 있습니다. 다른 객실과 함께 쓰지 않습니다.',
  },
  {
    question: '머무르기 전에 무엇을 물어볼 수 있나요?',
    answer: '페이지 하단 문의 폼으로 질문을 남기시거나, 화면 오른쪽 아래의 카카오톡과 인스타그램 버튼을 이용해 주세요.',
  },
]

export const stayFacts = [
  { label: '체크인', value: '15:00' },
  { label: '체크아웃', value: '11:00' },
  { label: '기준 인원', value: '2인' },
  { label: '최대 인원', value: '6인' },
] as const

export const directions = [
  '서울에서 홍천 서면까지는 자가용으로 오시는 길이 가장 여유롭습니다.',
  '서면 중심에서 숲속길로 접어들면 표지판이 객실 입구까지 이어집니다.',
  '입구의 라운지에서 웰컴 드링크와 함께 체크인을 진행합니다.',
]
