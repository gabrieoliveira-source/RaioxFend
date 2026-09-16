// Raio-X do Estrategista | FEND
// Estrutura do diagnóstico. Editar aqui reflete no quiz e no painel.

export const ESCALA = [
  { valor: 0, rotulo: '0', ajuda: 'nunca vi isso' },
  { valor: 1, rotulo: '1', ajuda: 'sei o conceito' },
  { valor: 2, rotulo: '2', ajuda: 'já apliquei' },
  { valor: 3, rotulo: '3', ajuda: 'domino' }
];

export const BLOCOS = [
  {
    id: 'visao',
    nome: 'Visão e estrutura',
    itens: [
      { id: 'visao_1', texto: 'Organograma e estrutura de um negócio digital' },
      { id: 'visao_2', texto: 'Habilidades que um estrategista precisa dominar' }
    ]
  },
  {
    id: 'fundamentos',
    nome: 'Fundamentos',
    itens: [
      { id: 'fund_1', texto: 'ICP, perfil de cliente ideal' },
      { id: 'fund_2', texto: 'Mapeamento de persona' },
      { id: 'fund_3', texto: 'Oferta' },
      { id: 'fund_4', texto: 'Narrativa' },
      { id: 'fund_5', texto: 'Precificação estratégica' },
      { id: 'fund_6', texto: 'Escada de valor vertical e horizontal' },
      { id: 'fund_7', texto: 'Planejamento de campanha' },
      { id: 'fund_8', texto: 'Briefing' },
      { id: 'fund_9', texto: 'Debriefing' }
    ]
  },
  {
    id: 'audiencia',
    nome: 'Audiência e conteúdo',
    itens: [
      { id: 'aud_1', texto: 'Construção de audiência no Instagram' },
      { id: 'aud_2', texto: 'Construção de audiência no TikTok' },
      { id: 'aud_3', texto: 'Construção de audiência no YouTube' },
      { id: 'aud_4', texto: 'Distribuição de conteúdo por canal' },
      { id: 'aud_5', texto: 'Nutrição de leads' },
      { id: 'aud_6', texto: 'Campanhas em múltiplos canais' }
    ]
  },
  {
    id: 'copy',
    nome: 'Copy e narrativa',
    itens: [
      { id: 'copy_1', texto: 'Fundamentos de copywriting' },
      { id: 'copy_2', texto: 'Estrutura de página de vendas' },
      { id: 'copy_3', texto: 'Estrutura de criativo para anúncio' },
      { id: 'copy_4', texto: 'Criação de big idea e narrativa' }
    ]
  },
  {
    id: 'trafego',
    nome: 'Tráfego',
    itens: [
      { id: 'traf_1', texto: 'Definição de público, verba e objetivo' },
      { id: 'traf_2', texto: 'Tipos de campanha e quando usar cada um' },
      { id: 'traf_3', texto: 'Análise de dados e tomada de decisão em tráfego' },
      { id: 'traf_4', texto: 'Escala em tráfego: quando e quanto reinvestir' }
    ]
  },
  {
    id: 'funis',
    nome: 'Funis',
    itens: [
      { id: 'funil_1', texto: 'Funil de lançamento gratuito tradicional' },
      { id: 'funil_2', texto: 'Funil lista VIP' },
      { id: 'funil_3', texto: 'Funil meteórico' },
      { id: 'funil_4', texto: 'Funil lançamento pago' },
      { id: 'funil_5', texto: 'Funil social selling' },
      { id: 'funil_6', texto: 'Funil isca' },
      { id: 'funil_7', texto: 'Funil aplicação direta' },
      { id: 'funil_8', texto: 'Funil diagnóstico' },
      { id: 'funil_9', texto: 'Funil de conteúdo' },
      { id: 'funil_10', texto: 'Funil sala secreta' },
      { id: 'funil_11', texto: 'Funil de estudo de caso' },
      { id: 'funil_12', texto: 'Funil de live semanal' },
      { id: 'funil_13', texto: 'Funil de indicação' },
      { id: 'funil_14', texto: 'Funil perpétuo com tráfego direto' },
      { id: 'funil_15', texto: 'Funil VSL' },
      { id: 'funil_16', texto: 'Funil webinário' },
      { id: 'funil_17', texto: 'Funil de desafio pago' },
      { id: 'funil_18', texto: 'Funil evento presencial' },
      { id: 'funil_19', texto: 'Funil quizz' },
      { id: 'funil_20', texto: 'Funil de ascensão' },
      { id: 'funil_21', texto: 'Funil de renovação de clientes' }
    ]
  },
  {
    id: 'comercial',
    nome: 'Comercial e vendas',
    itens: [
      { id: 'com_1', texto: 'Pitch de vendas: estrutura, direção e entrega' },
      { id: 'com_2', texto: 'Pitch presencial' },
      { id: 'com_3', texto: 'Funil de vendas do comercial' },
      { id: 'com_4', texto: 'Qualificação de lead, MQL vs. SQL' },
      { id: 'com_5', texto: 'Metas conjuntas entre marketing e comercial' }
    ]
  },
  {
    id: 'produto',
    nome: 'Produto',
    itens: [
      { id: 'prod_1', texto: 'Posicionamento de produto' },
      { id: 'prod_2', texto: 'Briefing de produto' }
    ]
  },
  {
    id: 'gestao',
    nome: 'Gestão e liderança',
    itens: [
      { id: 'gest_1', texto: 'Liderança e gestão de time' },
      { id: 'gest_2', texto: 'Feedbacks' },
      { id: 'gest_3', texto: 'Entrevistas de seleção de talentos' }
    ]
  }
];

export const NOTA_MAXIMA = BLOCOS.reduce((soma, b) => soma + b.itens.length * 3, 0); // 168

export const FAIXAS = [
  {
    id: 'junior',
    nome: 'Júnior',
    min: 0,
    max: 56,
    descricao: 'Repertório em formação. Você vê e opera pedaços soltos de um negócio digital.'
  },
  {
    id: 'pleno',
    nome: 'Pleno',
    min: 57,
    max: 112,
    descricao: 'Repertório amplo. Você executa bem, mas ainda não enxerga e opera o sistema inteiro com autonomia.'
  },
  {
    id: 'senior',
    nome: 'Sênior, estrategista',
    min: 113,
    max: NOTA_MAXIMA,
    descricao: 'Repertório de sistema. Você vê o todo e sabe decidir, não só executar.'
  }
];

export function faixaDe(total) {
  return FAIXAS.find(f => total >= f.min && total <= f.max) || FAIXAS[0];
}

export function calcular(respostas) {
  const porBloco = BLOCOS.map(bloco => {
    const pontos = bloco.itens.reduce((s, item) => s + (Number(respostas[item.id]) || 0), 0);
    const maximo = bloco.itens.length * 3;
    return {
      id: bloco.id,
      nome: bloco.nome,
      pontos,
      maximo,
      percentual: Math.round((pontos / maximo) * 100)
    };
  });
  const total = porBloco.reduce((s, b) => s + b.pontos, 0);
  return { total, maximo: NOTA_MAXIMA, porBloco, faixa: faixaDe(total) };
}

export const MAPA_ITENS = BLOCOS.reduce((mapa, bloco) => {
  bloco.itens.forEach(item => { mapa[item.id] = { ...item, bloco: bloco.nome }; });
  return mapa;
}, {});

export const TOTAL_ITENS = Object.keys(MAPA_ITENS).length;
