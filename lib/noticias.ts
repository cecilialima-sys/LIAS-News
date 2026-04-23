export interface Noticia {
  id: string
  categoria: "ai-news" | "ai-health"
  rotulo: string
  area: string
  titulo: string
  resumo: string
  data: string
  fonte?: string
  referencia?: string
  fonteUrl?: string
  conteudo?: string[]
}

export const noticias: Noticia[] = [
  {
    id: "gpt-5-5-openai-2026",
    categoria: "ai-news",
    rotulo: "Lançamento",
    area: "Modelos frontier",
    titulo: "GPT-5.5 é lançado como o modelo mais poderoso da OpenAI até agora",
    resumo: "A OpenAI apresentou o GPT-5.5 para ChatGPT e Codex com foco em programação agêntica, uso de computador, trabalho de conhecimento e pesquisa científica.",
    data: "23 de abril de 2026",
    fonte: "OpenAI / The Rundown AI",
    fonteUrl: "https://openai.com/index/introducing-gpt-5-5/",
    conteudo: [
      "O Radar IA da semana de 21 a 23 de abril destaca o GPT-5.5 como a atualização mais relevante da OpenAI em 2026. Segundo o relatório, o modelo promete concluir tarefas de engenharia com menos tentativas e menor custo operacional, reforçando a disputa direta com Anthropic e Kimi no mercado de agentes de software."
    ]
  },
  {
    id: "chatgpt-images-2-2026",
    categoria: "ai-news",
    rotulo: "Imagem",
    area: "Geração visual",
    titulo: "ChatGPT Images 2.0 inaugura geração de imagens com planejamento e autocorreção",
    resumo: "A nova geração de imagens da OpenAI busca referências, planeja antes de criar e verifica seus resultados, assumindo a liderança em benchmark de texto para imagem.",
    data: "23 de abril de 2026",
    fonte: "The Rundown AI",
    fonteUrl: "https://www.therundown.ai/p/openai-reclaims-the-image-crown",
    conteudo: [
      "O relatório interpreta o lançamento como uma mudança de paradigma: em vez de apenas gerar imagens, o sistema passa a agir como agente visual, com capacidade de buscar contexto e corrigir saídas. Para comunicação, design e marketing, isso tende a reduzir etapas manuais do fluxo criativo."
    ]
  },
  {
    id: "kimi-k2-6-open-source-2026",
    categoria: "ai-news",
    rotulo: "Open source",
    area: "Programação agêntica",
    titulo: "Kimi K2.6 pressiona modelos proprietários com alto desempenho e baixo custo",
    resumo: "A Moonshot AI liberou o Kimi K2.6 como código aberto com 1 trilhão de parâmetros totais, contexto de 256K e preço agressivo de API.",
    data: "20 de abril de 2026",
    fonte: "Roborhythms / Moonshot AI / The Rundown AI",
    fonteUrl: "https://www.roborhythms.com/kimi-k2-6-release/",
    conteudo: [
      "Para o portal, o principal sinal é econômico e estratégico: um modelo open source com esse nível de desempenho pode reconfigurar o mercado de agentes de codificação para pequenos times, pressionando OpenAI e Anthropic em preço, contexto e abertura."
    ]
  },
  {
    id: "meta-rastreia-funcionarios-ia-2026",
    categoria: "ai-news",
    rotulo: "Mercado",
    area: "Dados de treinamento",
    titulo: "Meta quer monitorar telas e teclados de funcionários para treinar IA",
    resumo: "A empresa sinalizou uso de dados de comportamento no trabalho como insumo para IA interna, em meio a forte aumento de investimento e reorganização da força de trabalho.",
    data: "21 de abril de 2026",
    fonte: "Fortune",
    fonteUrl: "https://fortune.com/2026/04/21/meta-will-start-tracking-employees-screens-and-keystrokes-to-train-ai/",
    conteudo: [
      "A leitura do Radar IA é que a disputa por modelos mais capazes está elevando o valor de dados proprietários de comportamento humano real. Isso amplia o debate sobre privacidade no trabalho e sobre os limites aceitáveis da coleta de dados para treinamento corporativo."
    ]
  },
  {
    id: "sergey-brin-strike-team-2026",
    categoria: "ai-news",
    rotulo: "Estratégia",
    area: "Corrida por código",
    titulo: "Sergey Brin assume frente no DeepMind para tentar superar Anthropic em código",
    resumo: "O cofundador do Google voltou à operação para liderar um time especial focado em desempenho de programação com Gemini e automação interna.",
    data: "22 de abril de 2026",
    fonte: "The Rundown AI / The Information",
    fonteUrl: "https://www.therundown.ai/",
    conteudo: [
      "O relatório trata o movimento como um sinal forte de que a próxima grande disputa da IA passa pelo desenvolvimento de software autônomo. Se a aposta funcionar, o impacto não será apenas em produto, mas também na forma como grandes empresas usam IA para se reestruturar por dentro."
    ]
  },
  {
    id: "geoffrey-hinton-onu-regulacao-2026",
    categoria: "ai-news",
    rotulo: "Governança",
    area: "Regulação global",
    titulo: "Geoffrey Hinton e ONU reforçam apelo por regulação urgente da IA",
    resumo: "Em evento da ONU em Genebra, Hinton comparou a situação atual da IA a um carro sem freio e pediu marcos globais antes que o setor avance ainda mais sem supervisão.",
    data: "23 de abril de 2026",
    fonte: "UN News",
    fonteUrl: "https://news.un.org/en/story/2026/04/1167361",
    conteudo: [
      "Para o portal, a fala ganha peso porque conecta crescimento econômico acelerado, concentração de poder tecnológico e risco regulatório. O debate é especialmente relevante para o Brasil em um momento de expansão de deepfakes, eleições e discussões sobre arcabouço legal."
    ]
  },
  {
    id: "windsurf-2-0-agentes-nuvem-2026",
    categoria: "ai-news",
    rotulo: "Ferramenta",
    area: "Desenvolvimento",
    titulo: "Windsurf 2.0 aposta em delegação para agentes de codificação na nuvem",
    resumo: "A nova versão centraliza múltiplos agentes em um painel único e permite que eles continuem executando tarefas na nuvem mesmo após o usuário sair do computador.",
    data: "23 de abril de 2026",
    fonte: "Windsurf",
    fonteUrl: "https://windsurf.ai",
    conteudo: [
      "O Radar IA posiciona a ferramenta como camada de orquestração para equipes que querem operar fluxos de desenvolvimento com vários modelos em paralelo. Isso reforça a tendência de um trabalho mais baseado em supervisão de agentes do que em codificação manual contínua."
    ]
  },
  {
    id: "gepa-otimizador-prompts-2026",
    categoria: "ai-news",
    rotulo: "Pesquisa",
    area: "Prompt optimization",
    titulo: "GEPA propõe otimização de prompts por reflexão em linguagem natural",
    resumo: "Pesquisadores da Universidade de Hong Kong apresentaram um sistema que aprende a melhorar prompts com regras de alto nível e menos tentativas do que métodos concorrentes.",
    data: "23 de abril de 2026",
    fonte: "HuggingFace Papers",
    fonteUrl: "https://huggingface.co/papers/trending",
    conteudo: [
      "O relatório interpreta o GEPA como um indicativo de que modelos e pipelines podem se autoajustar com mais eficiência no futuro. Para produtos baseados em LLMs, isso sugere redução do tempo de ajuste fino e menor dependência de intervenção manual em prompt engineering."
    ]
  },
  {
    id: "chatgpt-for-clinicians-2026",
    categoria: "ai-health",
    rotulo: "TI clínica",
    area: "Fluxo assistencial",
    titulo: "OpenAI lança ChatGPT for Clinicians gratuito para profissionais de saúde nos EUA",
    resumo: "A versão adaptada para clínicos inclui documentação médica, pesquisa com busca confiável, fluxos reutilizáveis e recursos compatíveis com HIPAA.",
    data: "23 de abril de 2026",
    fonte: "OpenAI",
    fonteUrl: "https://releasebot.io/updates/openai",
    conteudo: [
      "No Radar IA, o lançamento aparece como marco de entrada mais direta da IA generativa no cuidado clínico cotidiano. O destaque fica para o volume de validação prévia com respostas revisadas por médicos e para o potencial de reduzir carga administrativa no atendimento."
    ]
  },
  {
    id: "oms-europa-ia-diagnostico-2026",
    categoria: "ai-health",
    rotulo: "Regulação",
    area: "Governança internacional",
    titulo: "Relatório da OMS mostra que 74% dos países da UE já usam IA em diagnóstico clínico",
    resumo: "O primeiro panorama da OMS/Europa sobre os 27 Estados-Membros da UE indica adoção ampla de IA em diagnóstico, mas com estratégia nacional formal ainda restrita a poucos países.",
    data: "20 de abril de 2026",
    fonte: "WHO/Europe",
    fonteUrl: "https://www.who.int/europe/news/item/20-04-2026-new-who-europe-report-provides-first-ever-snapshot-of-ai-in-health-care-across-european-union-member-states",
    conteudo: [
      "O relatório de IA na Saúde trata esse levantamento como um benchmark institucional importante: a adoção clínica já superou a fase experimental e agora exige capacitação, transparência pública e centros de excelência para padronizar governança e implementação."
    ]
  },
  {
    id: "comissao-europeia-63m-ia-saude-2026",
    categoria: "ai-health",
    rotulo: "Investimento",
    area: "Política pública",
    titulo: "Comissão Europeia abre €63,2 milhões para IA em saúde e segurança digital",
    resumo: "O Programa Europa Digital abriu sete chamadas com foco em imagem médica, serviços digitais de saúde e formação em competências avançadas.",
    data: "21 de abril de 2026",
    fonte: "European Commission",
    fonteUrl: "https://digital-strategy.ec.europa.eu/en/news/commission-makes-eu632-million-available-support-ai-innovation-health-and-online-safety",
    conteudo: [
      "Para o portal, o anúncio mostra que a discussão sobre IA em saúde não está mais só no campo conceitual. A existência de recursos dedicados para triagem por imagem, dados interoperáveis e capacitação sugere uma estratégia pública mais estruturada para transformar adoção em capacidade institucional."
    ]
  },
  {
    id: "bmj-open-chatbots-problematicos-2026",
    categoria: "ai-health",
    rotulo: "Segurança",
    area: "Informação médica",
    titulo: "Estudo no BMJ Open aponta respostas problemáticas em quase metade das consultas a chatbots",
    resumo: "Pesquisa citada no relatório semanal encontrou 30% de respostas moderadamente problemáticas e 19,6% altamente problemáticas em perguntas médicas comuns.",
    data: "21 de abril de 2026",
    fonte: "BMJ Open / HealthDay",
    fonteUrl: "https://www.usnews.com/news/health-news/articles/2026-04-21/study-finds-ai-chatbots-can-give-misleading-health-advice",
    conteudo: [
      "A leitura central é que o risco não está apenas no erro direto, mas também no falso equilíbrio entre tratamento validado e alternativas não comprovadas. Para a saúde, isso reforça a necessidade de orientar pacientes sobre os limites dos chatbots genéricos em decisões clínicas."
    ]
  },
  {
    id: "aha-shadow-ai-governanca-2026",
    categoria: "ai-health",
    rotulo: "TI clínica",
    area: "Governança hospitalar",
    titulo: "Painel da AHA coloca a shadow AI entre os maiores riscos de governança hospitalar",
    resumo: "Líderes de grandes sistemas de saúde discutiram privacidade, cibersegurança, equidade de acesso e uso informal de IA generativa fora da supervisão institucional.",
    data: "20 de abril de 2026",
    fonte: "American Hospital Association",
    fonteUrl: "https://www.aha.org/news/headline/2026-04-20-ai-health-care-experts-discuss-future-ai-practices-and-policies",
    conteudo: [
      "O relatório destaca que o desafio de 2026 deixou de ser apenas técnico e passou a ser organizacional. Hospitais sem políticas formais de IA correm risco regulatório e clínico, especialmente quando ferramentas generativas passam a circular informalmente entre equipes e setores."
    ]
  },
  {
    id: "stanford-ai-index-2026",
    categoria: "ai-news",
    rotulo: "Pesquisa",
    area: "Panorama global",
    titulo: "Relatório Stanford AI Index 2026 mostra empate técnico entre China e EUA",
    resumo: "O AI Index 2026 indica que China e Estados Unidos passaram a disputar a liderança em IA com diferença mínima de desempenho, enquanto a adoção corporativa e acadêmica segue acelerando.",
    data: "16 de abril de 2026",
    referencia: "Fonte: Stanford HAI / relatório consolidado no Radar IA de 10 a 16 de abril de 2026",
    conteudo: [
      "O relatório destacou que os modelos chineses e americanos estão tecnicamente empatados em vários benchmarks, reduzindo uma vantagem histórica dos EUA. O material também mostrou salto expressivo em indicadores como o SWE-bench e confirmou que a IA já está amplamente integrada ao estudo e ao trabalho em escala global."
    ]
  },
  {
    id: "llm-falham-diagnostico-diferencial-2026",
    categoria: "ai-health",
    rotulo: "Diagnóstico",
    area: "Raciocínio clínico",
    titulo: "LLMs falham em mais de 80% dos casos no raciocínio diagnóstico diferencial",
    resumo: "Estudo do Mass General Brigham publicado no JAMA Network Open mostrou que 21 grandes modelos de linguagem ainda erram com frequência quando precisam raciocinar com informações clínicas parciais.",
    data: "16 de abril de 2026",
    fonte: "JAMA Network Open / Mass General Brigham",
    fonteUrl: "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/10.1001/jamanetworkopen.2026.4003",
    conteudo: [
      "O relatório semanal de IA na saúde aponta que os modelos tiveram desempenho alto apenas quando receberam o caso praticamente completo, mas falharam no momento mais delicado da prática clínica: construir hipóteses diagnósticas progressivas a partir de dados incompletos. Isso reforça que o uso autônomo de chatbots em triagem clínica ainda exige muita cautela."
    ]
  },
  {
    id: "mount-sinai-sophia-ddm-2026",
    categoria: "ai-health",
    rotulo: "Oncologia",
    area: "Genômica clínica",
    titulo: "Mount Sinai adota plataforma com IA para acelerar testes genômicos em câncer",
    resumo: "O sistema SOPHiA DDM passa a apoiar a interpretação de variantes genômicas em cânceres hematológicos e tumores sólidos, reduzindo gargalos operacionais na oncologia de precisão.",
    data: "16 de abril de 2026",
    fonte: "Healthcare IT News / PRNewswire / BioSpace",
    fonteUrl: "https://www.healthcareitnews.com/news/mount-sinai-uses-ai-enhance-speed-genomic-testing",
    conteudo: [
      "Segundo o relatório, a adoção foi anunciada no AACR 2026 e busca encurtar o tempo entre coleta, análise e retorno clínico dos exames de nova geração. A plataforma já é usada em centenas de instituições e ajuda a consolidar um uso mais operacional da IA em laboratórios oncológicos de alta complexidade."
    ]
  },
  {
    id: "tse-ia-eleicoes-2026",
    categoria: "ai-news",
    rotulo: "Regulação",
    area: "Política pública",
    titulo: "TSE regulamenta o uso de IA nas eleições brasileiras de 2026",
    resumo: "As novas regras exigem identificação de conteúdo gerado ou alterado por IA e proíbem a divulgação de material sintético nos três dias anteriores ao pleito.",
    data: "16 de abril de 2026",
    referencia: "Fonte: TSE / IA Brasil Notícias, consolidado no Radar IA de 10 a 16 de abril de 2026",
    conteudo: [
      "O movimento brasileiro foi tratado como uma resposta antecipada ao avanço da desinformação sintética em contextos eleitorais. Para o portal, a matéria é relevante porque liga IA, democracia e responsabilidade institucional em um tema que terá impacto direto no debate público do país."
    ]
  },
  {
    id: "desinformacao-ia-lupa-2026",
    categoria: "ai-news",
    rotulo: "Sociedade",
    area: "Desinformação",
    titulo: "81% dos casos de desinformação com IA surgiram entre 2024 e 2026",
    resumo: "Levantamento citado pelo relatório mostra que a produção de conteúdo enganoso com IA cresceu rapidamente nos últimos dois anos, com destaque para eleições, guerras e golpes.",
    data: "16 de abril de 2026",
    referencia: "Fonte: Agência Lupa / IA Brasil Notícias, consolidado no Radar IA de 10 a 16 de abril de 2026",
    conteudo: [
      "A análise reuniu 1.294 checagens em dez idiomas e reforça que a capacidade de gerar fraude em escala está crescendo mais rápido do que os mecanismos de verificação. O relatório interpreta esse dado como um alerta para educação midiática, moderação e criação de ferramentas automáticas de checagem."
    ]
  },
  {
    id: "robotaxis-uber-moia-2026",
    categoria: "ai-news",
    rotulo: "Mobilidade",
    area: "Veículos autônomos",
    titulo: "Uber e MOIA testam robotáxis em Los Angeles e desafiam domínio da Waymo",
    resumo: "A parceria inicia testes públicos com vans autônomas ID. Buzz e prepara uma nova frente de competição no mercado de mobilidade autônoma.",
    data: "16 de abril de 2026",
    fonte: "The Rundown AI",
    conteudo: [
      "O relatório destacou que a entrada de um novo concorrente relevante em Los Angeles pressiona a liderança da Waymo e ajuda a mostrar que agentes físicos e sistemas autônomos já estão saindo do campo experimental para disputas comerciais concretas."
    ]
  },
  {
    id: "unitree-humanoide-6800-2026",
    categoria: "ai-news",
    rotulo: "Robótica",
    area: "Humanoides",
    titulo: "Humanoide da Unitree por US$ 6.800 abre nova fase da robótica acessível",
    resumo: "O preço do novo modelo coloca robôs humanoides mais próximos de laboratórios universitários, desenvolvedores independentes e novos experimentos fora das big techs.",
    data: "16 de abril de 2026",
    fonte: "The Rundown AI",
    conteudo: [
      "A leitura do Radar IA é que o mercado entrou numa fase em que hardware robótico deixa de ser exclusividade de grandes centros de pesquisa. Isso pode acelerar pilotos, testes acadêmicos e aplicações mais práticas em educação, indústria e assistência."
    ]
  },
  {
    id: "brasil-prioridades-ia-2026",
    categoria: "ai-news",
    rotulo: "Mercado",
    area: "Adoção empresarial",
    titulo: "59% das empresas brasileiras colocam IA entre prioridades para 2026",
    resumo: "Dados citados no relatório indicam amadurecimento da pauta de IA no ambiente corporativo brasileiro, com avanço também do uso cotidiano no estado de São Paulo.",
    data: "16 de abril de 2026",
    referencia: "Fonte: Amcham Brasil / Fundação Seade, consolidado no Radar IA de 10 a 16 de abril de 2026",
    conteudo: [
      "A notícia foi tratada como sinal de que o Brasil está deixando a fase de curiosidade e entrando em uma etapa de adoção mais estruturada. O desafio passa a ser formar equipes, governar risco e ampliar benefícios além das empresas maiores."
    ]
  },
  {
    id: "ia-ajuda-cuidador-cancer-2026",
    categoria: "ai-news",
    rotulo: "Aplicação real",
    area: "Cuidados em saúde",
    titulo: "Fluxo com IA ajuda cuidador a identificar erros e acompanhar tratamento de câncer",
    resumo: "Um tecnologista usou NotebookLM e Claude para organizar o prontuário da mãe com câncer estágio 4 e detectar falhas que exigiram intervenção.",
    data: "16 de abril de 2026",
    referencia: "Fonte: The Rundown AI / relato verificado, consolidado no Radar IA de 10 a 16 de abril de 2026",
    conteudo: [
      "O caso chamou atenção por mostrar a IA como parceira informacional de pacientes e famílias em sistemas complexos, sem substituir equipes médicas. O relatório trata o episódio como exemplo concreto de apoio à navegação clínica, revisão documental e tomada de decisão mais informada."
    ]
  },
  {
    id: "sibel-anne-maternal-fda-2026",
    categoria: "ai-health",
    rotulo: "Wearables",
    area: "Saúde materno-fetal",
    titulo: "Sibel Health recebe aprovação da FDA para monitoramento materno-fetal sem fio",
    resumo: "A ANNE Maternal foi descrita como a primeira plataforma totalmente sem fio para monitoramento simultâneo da mãe e do feto, com alertas clínicos integrados.",
    data: "16 de abril de 2026",
    fonte: "MobiHealthNews / BioSpace / PRNewswire",
    fonteUrl: "https://www.mobihealthnews.com/news/sibel-health-wins-fda-clearance-maternal-fetal-monitoring-platform",
    conteudo: [
      "O relatório destaca que a liberação da FDA abre caminho para modelos de cuidado mais móveis e menos dependentes de cabos e leitos tradicionais. Além do ganho tecnológico, o sistema foi apresentado como ferramenta com potencial para reduzir desigualdades no cuidado obstétrico."
    ]
  },
  {
    id: "qualified-health-serie-b-2026",
    categoria: "ai-health",
    rotulo: "Gestão",
    area: "Infraestrutura hospitalar",
    titulo: "Qualified Health levanta US$ 125 milhões para expandir IA generativa em hospitais",
    resumo: "A rodada reforça a migração do setor de saúde de pilotos isolados para plataformas de IA com governança, monitoramento e escala institucional.",
    data: "16 de abril de 2026",
    fonte: "MobiHealthNews / Fierce Healthcare / PRNewswire",
    fonteUrl: "https://www.mobihealthnews.com/news/qualified-health-raises-125m-scale-generative-ai-health-systems",
    conteudo: [
      "A empresa já atua em grandes sistemas de saúde dos EUA e reportou impacto financeiro relevante em uma das instituições atendidas. O relatório interpreta a rodada como evidência de que o mercado agora cobra ROI real, não só provas de conceito."
    ]
  },
  {
    id: "hospitais-pilotos-ehr-2026",
    categoria: "ai-health",
    rotulo: "TI clínica",
    area: "Prontuário eletrônico",
    titulo: "45% dos hospitais americanos seguem presos em pilotos de IA por dependência dos EHRs",
    resumo: "Hospitais que dependem fortemente dos roadmaps de grandes fornecedores de prontuário eletrônico enfrentam dificuldade para escalar iniciativas de IA.",
    data: "16 de abril de 2026",
    fonte: "Healthcare IT News",
    fonteUrl: "https://www.healthcareitnews.com/topics/artificial-intelligence",
    conteudo: [
      "O relatório aponta que modelos menores, especializados e conectados a fontes clínicas por protocolos mais abertos podem ser o próximo caminho para destravar adoção. A análise também destaca o MCP como tendência promissora para reduzir dependência dos fornecedores tradicionais."
    ]
  },
  {
    id: "anthropic-30b-google-broadcom-2026",
    categoria: "ai-news",
    rotulo: "Infraestrutura",
    area: "Mercado de IA",
    titulo: "Anthropic supera US$ 30 bilhões em receita anualizada e fecha megacordo de computação",
    resumo: "A empresa anunciou receita anualizada acima de US$ 30 bilhões e acesso futuro a 3,5 gigawatts de capacidade baseada em TPUs via Google e Broadcom.",
    data: "7 de abril de 2026",
    fonte: "The Register / Anthropic",
    fonteUrl: "https://www.theregister.com/2026/04/07/broadcom_google_chip_deal_anthropic_customer/",
    conteudo: [
      "O Radar IA da semana de 1 a 7 de abril tratou o acordo como um marco histórico na disputa por computação. Mais do que crescimento financeiro, a notícia mostra que a batalha central da IA agora envolve energia, chips e contratos de infraestrutura de longo prazo."
    ]
  },
  {
    id: "openai-anthropic-google-distilacao-2026",
    categoria: "ai-news",
    rotulo: "Segurança",
    area: "Geopolítica da IA",
    titulo: "OpenAI, Anthropic e Google passam a cooperar contra distilação adversária chinesa",
    resumo: "Rivais históricos começaram a compartilhar sinais de ataque e tentativas de clonagem ilegal de modelos via Frontier Model Forum.",
    data: "7 de abril de 2026",
    fonte: "Business Today / Bloomberg",
    fonteUrl: "https://www.businesstoday.in/technology/story/openai-anthropic-google-team-up-to-stop-chinese-ai-distillation-threat-524367-2026-04-07",
    conteudo: [
      "O relatório descreve o movimento como um evento sem precedentes: empresas concorrentes dividindo inteligência técnica para bloquear roubo de capacidades e remoção de salvaguardas. A leitura central é que a disputa por IA entrou definitivamente em uma fase geopolítica e de segurança nacional."
    ]
  },
  {
    id: "gemma-4-google-2026",
    categoria: "ai-news",
    rotulo: "Lançamento",
    area: "Open source",
    titulo: "Google lança Gemma 4 sob Apache 2.0 e reacende disputa open source",
    resumo: "A nova família aberta da Google DeepMind chega com suporte multimodal, contexto ampliado e licença mais permissiva para desenvolvedores.",
    data: "7 de abril de 2026",
    fonte: "Google Blog",
    fonteUrl: "https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/",
    conteudo: [
      "Segundo o Radar IA, o Gemma 4 funciona como uma resposta direta ao avanço recente de modelos abertos chineses. O destaque fica para a combinação entre desempenho competitivo, licenciamento permissivo e possibilidade de uso offline em dispositivos menores."
    ]
  },
  {
    id: "openai-adquire-tbpn-2026",
    categoria: "ai-news",
    rotulo: "Mídia",
    area: "Estratégia",
    titulo: "OpenAI compra o TBPN e faz sua primeira aquisição de mídia",
    resumo: "A aquisição do programa diário de tecnologia reforça a aposta da OpenAI em narrativa pública, influência cultural e comunicação direta com o ecossistema de startups.",
    data: "7 de abril de 2026",
    fonte: "OpenAI / The Rundown AI",
    fonteUrl: "https://openai.com/index/openai-acquires-tbpn/",
    conteudo: [
      "O relatório interpreta a compra como um movimento de reputação e distribuição de influência, não apenas de conteúdo. Ao manter a marca editorial e incorporar o time ao seu núcleo de estratégia, a OpenAI sinaliza que a disputa por confiança pública virou parte do jogo competitivo."
    ]
  },
  {
    id: "fundador-solo-medvi-2026",
    categoria: "ai-news",
    rotulo: "Empreendedorismo",
    area: "Agentes e automação",
    titulo: "Fundador solo usa pilha de IA e projeta startup de saúde em US$ 1,8 bilhão",
    resumo: "O caso Medvi viralizou ao mostrar como ferramentas de IA podem funcionar como infraestrutura operacional de uma empresa quase sem equipe.",
    data: "7 de abril de 2026",
    fonte: "The Rundown AI / New York Times",
    fonteUrl: "https://www.therundown.ai/p/ai-just-made-the-billion-dollar-solo-founder-real",
    conteudo: [
      "A leitura do Radar IA é que a previsão de 'empresa bilionária de uma pessoa' saiu do discurso e entrou no terreno da prova de conceito. O caso também chama atenção por acontecer numa startup de telemedicina, onde marketing, atendimento e operação foram fortemente automatizados."
    ]
  },
  {
    id: "ai-scribes-prontuario-2026",
    categoria: "ai-health",
    rotulo: "TI clínica",
    area: "Documentação médica",
    titulo: "Escribas de IA reduzem tempo de prontuário em estudo multicêntrico",
    resumo: "Pesquisa com milhares de clínicos mostrou queda mensurável no uso do prontuário eletrônico e no tempo gasto em documentação quando a tecnologia é usada com frequência.",
    data: "9 de abril de 2026",
    fonte: "Healthcare IT News",
    fonteUrl: "https://www.healthcareitnews.com/news/ai-scribes-can-reduce-ehr-charting",
    conteudo: [
      "O relatório de 3 a 9 de abril apresenta os escribas como uma das aplicações mais maduras de IA na saúde. Embora os ganhos absolutos sejam modestos, o material destaca o valor acumulado em produtividade, redução de burnout e recuperação de tempo para o contato com o paciente."
    ]
  },
  {
    id: "amie-google-diagnostico-2026",
    categoria: "ai-health",
    rotulo: "Diagnóstico",
    area: "IA conversacional",
    titulo: "AMIE, do Google, alcança acurácia diagnóstica equivalente à de médicos de atenção primária",
    resumo: "Em estudo prospectivo com pacientes reais, o sistema conversacional do Google demonstrou desempenho diagnóstico comparável ao de profissionais de atenção primária.",
    data: "8 de abril de 2026",
    fonte: "Google Research",
    fonteUrl: "https://research.google/blog/exploring-the-feasibility-of-conversational-diagnostic-ai-in-a-real-world-clinical-study/",
    conteudo: [
      "O relatório destaca que o estudo foi conduzido em cenário clínico real e sem interrupções de segurança durante as interações. A principal leitura é que a IA conversacional começa a mostrar viabilidade como camada pré-consulta, embora ainda existam limitações de amostra, praticidade e avaliação longitudinal."
    ]
  },
  {
    id: "unitedhealth-3b-ia-2026",
    categoria: "ai-health",
    rotulo: "Gestão",
    area: "Operadoras de saúde",
    titulo: "UnitedHealth investe US$ 3 bilhões em IA e amplia debate sobre transparência",
    resumo: "A maior operadora de saúde dos EUA acelera automação com IA em sinistros, documentação e cobrança, mas ainda sem clareza pública sobre impactos para pacientes.",
    data: "6 de abril de 2026",
    fonte: "STAT News",
    fonteUrl: "https://www.statnews.com/2026/04/06/unitedhealth-group-massive-artificial-intelligence-push-patient-implications/",
    conteudo: [
      "O relatório semanal trata a notícia como alerta de governança: ganhos operacionais podem coexistir com risco de opacidade e decisões automatizadas difíceis de auditar. Para o setor, isso reforça que escala tecnológica sem transparência pode ampliar vulnerabilidades em cobertura e acesso."
    ]
  },
  {
    id: "confianca-publica-ia-saude-2026",
    categoria: "ai-health",
    rotulo: "Sociedade",
    area: "Confiança pública",
    titulo: "Confiança pública em IA na saúde cai para 42% nos EUA",
    resumo: "Levantamento de opinião mostrou queda de 10 pontos percentuais em dois anos na confiança da população americana no uso de IA em saúde.",
    data: "7 de abril de 2026",
    fonte: "MedicalXpress / Ohio State University",
    fonteUrl: "https://medicalxpress.com/news/2026-04-ai-health-survey.html",
    conteudo: [
      "O relatório interpreta a queda como um sinal estratégico importante: mesmo ferramentas eficazes podem fracassar se pacientes não entenderem quando, como e por que a IA está sendo usada. Comunicação transparente e governança visível aparecem como requisitos centrais para adoção sustentável."
    ]
  },
  {
    id: "jrc-ia-cardiovascular-2026",
    categoria: "ai-health",
    rotulo: "Política científica",
    area: "Cardiologia",
    titulo: "Comissão Europeia propõe €20 milhões para acelerar IA cardiovascular",
    resumo: "O Joint Research Centre publicou um relatório sobre IA em cardiologia e sugeriu investimentos coordenados para validação, integração clínica e acesso equitativo.",
    data: "7 de abril de 2026",
    fonte: "Joint Research Centre / Comissão Europeia",
    fonteUrl: "https://joint-research-centre.ec.europa.eu/jrc-news-and-updates/artificial-intelligence-cardiovascular-care-promise-practice-2026-04-07_en",
    conteudo: [
      "A análise europeia foi tratada como um marco de política pública, não apenas de pesquisa. Para o portal, ela é importante por mostrar como governos podem estruturar adoção de IA em saúde com metas, financiamento e critérios de validação independentes."
    ]
  },
  {
    id: "medical-ai-scientist-v2-2026",
    categoria: "ai-news",
    rotulo: "Pesquisa",
    area: "Agentes científicos",
    titulo: "AI Scientist v2 produz artigo aceito por conferência revisada por pares",
    resumo: "O sistema foi descrito no Radar IA como a primeira IA a completar o ciclo de pesquisa e ter um artigo aceito em evento científico real.",
    data: "7 de abril de 2026",
    fonte: "HuggingFace Papers",
    fonteUrl: "https://huggingface.co/papers/trending",
    conteudo: [
      "A notícia aparece no relatório como um marco simbólico da automação científica. Mais do que gerar texto, o sistema foi apresentado como agente capaz de propor hipótese, executar experimento, analisar dados e redigir um paper completo."
    ]
  },
  {
    id: "canva-magic-layers-2026",
    categoria: "ai-news",
    rotulo: "Ferramenta",
    area: "Criação visual",
    titulo: "Canva Magic Layers transforma imagens geradas por IA em peças editáveis",
    resumo: "A ferramenta separa objetos, textos e fundos em camadas individuais, facilitando correções rápidas sem refazer a peça do zero.",
    data: "7 de abril de 2026",
    fonte: "The Rundown AI",
    fonteUrl: "https://www.canva.com/",
    conteudo: [
      "O Radar IA tratou o recurso como exemplo de como a IA está entrando em fluxos profissionais mais práticos. Em vez de gerar tudo novamente, a ferramenta acelera revisão e reaproveitamento de materiais visuais para comunicação, marketing e educação."
    ]
  }
]

export function getNoticiaById(id: string): Noticia | undefined {
  return noticias.find((n) => n.id === id)
}

export function getNoticiasByCategoria(categoria: "ai-news" | "ai-health"): Noticia[] {
  return noticias.filter((n) => n.categoria === categoria)
}

export function getLatestNoticias(limit: number = 3): Noticia[] {
  return noticias.slice(0, limit)
}
