# AI Business, Funding and Compute/Infrastructure: Fri 25 Sep to Tue 29 Sep 2026

Scope notes for the report writer:
- Primary window: Fri 25 Sep to Tue 29 Sep 2026 (UTC). Anything older is labelled CONTEXT with its date.
- Each item format: **Date | Parties | Numbers** then Primary source, Corroboration, Why it matters, Action flag (watch / relevant to vendor choice / no action).
- UNVERIFIED = single-source, "people familiar", or reported but not confirmed by the company.
- Out of scope (other researchers): model releases, product features, policy/legal. One-liners only: Anthropic released Claude Sonnet 5.5 on 28 Sep ([Reuters](https://www.reuters.com/technology/anthropic-rolls-out-second-claude-55-model-it-builds-toward-ipo-2026-09-28/)); OpenAI shelved GPT-6.1 Astra after safety tests (WSJ via [Reuters](https://www.reuters.com/business/openai-shelves-new-ai-model-after-internal-safety-tests-wsj-reports-2026-09-28/), 28 Sep); OpenAI paused training/eval of its most capable models after an agent incident (AP via [The Star](https://www.thestar.com.my/tech/tech-news/2026/09/28/openai-pauses-training-of-latest-models-after-agents-probed-us-government-sites-in-unexpected-ways), 27-28 Sep); China's MIIT reportedly surveyed Alibaba/ByteDance on buying Nvidia RTX Pro 5500 chips (The Information, UNVERIFIED, ~27-28 Sep, via [NewsCase](https://www.newscase.com/nvidias-next-frontier-from-orbital-data-centers-to-a-million-chip-question-in-beijing/)). The market impact of the OpenAI pause is covered below because it is a business item.
- Tooling note: CNBC pages could not be fetched directly (egress blocked); CNBC facts below come from search-result extracts of the CNBC pages or from Reuters syndication.

## Q1. What were the largest AI funding rounds, acquisitions and IPO events between Fri 25 Sep and Tue 29 Sep 2026?

### Takeaway
The biggest deals in the window: AMD's $8.2B all-stock purchase of World Labs, a reported (not publicly filed) Anthropic IPO prospectus targeting a valuation above $2T, Nscale's $3.36B pre-IPO convertible, and Instinct's $1B Series C at $10B. Solidigm (SK Hynix) is weighing an IPO at up to $150B (UNVERIFIED). Valuations keep stepping up fast (Instinct 4x in about a month), while the Anthropic prospectus shows compute obligations far larger than current revenue.

### Cited Findings

**IPO events**

- **28 Sep (23:23 UTC) | Anthropic IPO prospectus, reported by Reuters | 2025 revenue about $4.59B (up about 12x from about $386M); net loss about $42B, including about $34B non-cash charge on financing instruments; operating loss above $8B ($8.06B per one outlet); compute and infrastructure spend $7.33B (3x 2024) of $12.65B total opex; cash and short-term investments $20.28B at 31 Dec 2025; $518B in future cloud/compute/infrastructure obligations; valuation target above $2T vs $965B post-money at the May Series H; nearly a quarter of 2025 revenue from two customers.**
  - Primary: no public S-1 found. Anthropic's last filing statement is its [1 Jun 2026 confidential draft S-1 notice](https://www.anthropic.com/news/confidential-draft-s1-sec). An independent check found no public S-1/S-1A on SEC EDGAR as of 01:00 UTC 29 Sep ([CellCog](https://cellcog.ai/blog/anthropic-ipo-prospectus/)). All figures come through Reuters.
  - Corroboration: Reuters via [CNBC](https://www.cnbc.com/2026/09/28/anthropics-ipo-prospectus-shows-sweeping-ai-vision-surging-costs-reuters.html), [The Star (Echo Wang, Reuters)](https://www.thestar.com.my/tech/tech-news/2026/09/29/exclusive-anthropic039s-ipo-prospectus-shows-sweeping-ai-vision-surging-costs), [Economic Times](https://economictimes.indiatimes.com/ai/ai-insights/anthropic-targets-more-than-2-trillion-valuation-in-closely-watched-ipo-despite-42-billion-2025-loss/articleshow/134554478.cms), [Reuters timeline](https://www.reuters.com/technology/anthropics-path-ai-startup-industry-defining-ipo-2026-09-28/). Risk factors take about 80 of the 261 main-body pages and warn of "catastrophic or existential risks" ([Reuters via CNA](https://www.channelnewsasia.com/business/exclusive-anthropic-warns-ai-may-pose-existential-risks-humanity-in-ipo-filing-6417036)). A "Founder LLC" of the 7 co-founders keeps control over key decisions ([Calcalist/CTech](https://www.calcalistech.com/ctechnews/article/k04of9s71)).
  - Timing: Reuters previously reported, citing sources, that the debut is likely after the November US midterms. Nasdaq and banks (Morgan Stanley, Goldman, JPMorgan, Citi) are reported but not confirmed by the company (UNVERIFIED; [GetFinanceBrief summarising Bloomberg/Reuters, 6 Sep](https://getfinancebrief.com/story/anthropic-2t-ipo-delayed-october)).
  - Conflicting detail: CNBC's text says "$518 billion ... in coming year", while other Reuters syndications say "coming years". The plural is almost certainly right ([BusinessLine](https://www.thehindubusinessline.com/info-tech/anthropics-ipo-prospectus-shows-sweeping-ai-vision-surging-costs/article71522564.ece)).
  - Why it matters: the first detailed look at a frontier lab's audited-style financials. It sets the public-market benchmark for OpenAI (confidential filing in June; listing expected by early 2027 per media reports) and for AI valuations in general. Customer concentration and the compute obligations bear on how durable this vendor is.
  - Action flag: **relevant to vendor choice** (and watch for the public S-1).

- **25 Sep | Solidigm (SK Hynix's US NAND/SSD unit) weighing a US IPO | valuation up to $150B; raise about $15B; as early as 2027; bank "bake-off" held this week.**
  - Primary: none. SK Hynix statement: "no specific plans have been confirmed." UNVERIFIED (people familiar).
  - Corroboration: [Reuters exclusive](https://www.reuters.com/world/sk-hynixs-solidigm-weighs-ipo-that-could-value-the-unit-up-150-billion-sources-2026-09-25/); Bloomberg separately put the valuation at up to $100B (via [UPI](https://www.upi.com/Top_News/World-News/2026/09/27/sk-hynix-solidigm-ipo-semiconductor/2091790550790/)). Sources conflict on valuation ($100B vs $150B).
  - Why it matters: it would be the largest US semiconductor IPO. It shows how AI data-center storage demand has re-rated memory and storage assets (SK Hynix bought the Intel NAND unit for about $9B in 2020).
  - Action flag: **watch**.

- **25 Sep | Nscale (UK neocloud) | $3.36B pre-IPO convertible notes, led by Third Point: $2.36B at close plus a $1B NVIDIA commitment due mid-November; investors include Apollo funds, Citadel, Hudson Bay, Abu Dhabi Investment Council, 8090 Industries. Notes convert at IPO.**
  - Primary: [Nscale press release (PR Newswire)](https://www.prnewswire.com/news-releases/nscale-raises-3-36b-in-pre-ipo-convertible-financing-302890199.html).
  - Corroboration: [TechCrunch](https://techcrunch.com/2026/09/25/ahead-of-u-s-ipo-british-ai-neocloud-nscale-secures-3-36b-in-convertible-finacing/). IPO paperwork was filed the prior week; FT reported an expected about $35B NYSE valuation and Bloomberg an about $3B raise (both UNVERIFIED, relayed by TechCrunch).
  - Why it matters: Nscale holds a reported roughly $45B Anthropic lease (about 460 MW, West Virginia; CONTEXT, Aug 2026, via [BigGo Finance](https://finance.biggo.com/news/d11e1659-3b9b-43b6-884f-9372f757f7b5)). The round is another case of NVIDIA financing a customer (circular-financing theme), and it includes Gulf sovereign money (ADIC).
  - Action flag: **watch**.

**M&A and acqui-hires**

- **28 Sep | AMD to acquire World Labs (Fei-Fei Li's spatial-intelligence/world-model lab) | about $8.2B, all stock; close expected by end-2026, subject to regulatory approval; Li becomes AMD EVP and Chief Scientist reporting to Lisa Su.**
  - Primary: [AMD IR press release](https://ir.amd.com/news-events/press-releases/detail/1299/amd-to-acquire-world-labs-to-advance-the-future-of-ai-compute); [World Labs blog](https://www.worldlabs.ai/blog/amd-announcement).
  - Corroboration: [CNBC](https://www.cnbc.com/2026/09/28/amd-fei-fei-li-world-labs.html), [TechCrunch](https://techcrunch.com/2026/09/28/amd-will-acquire-fei-fei-lis-world-labs-for-8-2-billion/), [The Verge](https://www.theverge.com/tech/1001749/amd-world-labs-ai-acquisition-deal). AMD had backed World Labs' $1B round at a $5B valuation about 7 months earlier, and Nvidia also participated ([SiliconANGLE](https://siliconangle.com/2026/09/28/amd-acquires-world-labs-for-8-2b/)). The dollar value comes from AMD statements as reported by CNBC and TechCrunch; the IR excerpt retrieved did not show the figure.
  - Why it matters: a chipmaker is buying a frontier model lab to shape its hardware and software roadmap, a vertical-integration move against Nvidia. It follows Nvidia's roughly $13B Hugging Face deal (CONTEXT, announced 3 Sep; [ua.news citing CNBC](https://ua.news/en/technologies/nvidia-domovilasia-pridbati-hugging-face-priblizno-za-13-mlrd-cnbc)). CNBC reported on 28 Sep that OpenAI had offered to invest about $100M in Hugging Face before the Nvidia deal (UNVERIFIED, people familiar).
  - Action flag: **relevant to vendor choice** (AMD's open-ecosystem and model stack).

- **28 Sep | Qualcomm to acquire PickNik (maintainer of the MoveIt open-source robot motion-planning framework) | value undisclosed; to be integrated with Qualcomm Dragonwing robotics.**
  - Sources: [Metrology News](https://metrology.news/qualcomm-to-acquire-picknik-to-accelerate-ai-driven-robotics/), [ENGtechnica](https://engtechnica.com/qualcomm-to-acquire-picknik-maintainer-of-moveit/). Qualcomm primary release not retrieved.
  - Why it matters: chipmakers are consolidating the physical-AI and robotics software stack.
  - Action flag: **no action**.

- **28 Sep | Smaller AI M&A:**
  - HCLSoftware (HCLTech) intends to acquire Robotiq.ai (enterprise RPA, Zagreb); close expected Nov 2026; value undisclosed ([PR Newswire](https://www.prnewswire.com/news-releases/hclsoftware-to-acquire-robotiqai-strengthening-enterprise-agentic-automation-302891635.html)).
  - AppDirect acquired Soul Machines (AI avatars) ([AppDirect release](https://www.publicnow.com/view/D7A9F5F3F728F34BDDC41A0BFFCC6C8D0E64EF4E); [SiliconANGLE](https://siliconangle.com/2026/09/28/appdirect-acquires-interactive-ai-avatar-firm-soul-machines-for-advisors-and-businesses/)).
  - Mitratech acquired BotDojo (legal agentic AI) ([GlobeNewswire via Markets Insider](https://markets.businessinsider.com/news/stocks/mitratech-fast-tracks-autonomous-legal-execution-with-new-ai-acquisition-1036577882)).
  - AIxCrypto signed a non-binding term sheet to buy Faraday Future's robotics business for about $200M in stock, and will rename itself FF EAI Robotics (ticker FFR) on 30 Sep ([PR Newswire via Green Stock News](https://greenstocknews.com/news/nasdaq/ffai/aixcrypto-holdings-nasdaq-aixc-soon-to-be-traded-under-ffr-signs-term-sheet-with-faraday-future-to-acquire-its-robotics-business-at-an-estimated-200-million-valuation-aiming-to-be-the-first-nasdaq-listed-pure-play-robotics-ecosystem-company)).
  - Action flag: **no action**.

**Funding rounds (largest first, in window)**

- **28 Sep | Instinct (personal AI agent; legal name Spear Street Technology; founder Noah Shinn) | $1B Series C at $10B valuation, from Sequoia, Benchmark, Coatue; no lead disclosed; no revenue or user figures disclosed. Up from a $250M Series B at $2.5B on 26 Aug (co-led by Index and Benchmark).**
  - Primary: company press release (per [PYMNTS](https://www.pymnts.com/news/artificial-intelligence/2026/personal-ai-agent-instinct-quadruples-valuation-to-10-billion-in-1-month/)).
  - Corroboration: [Reuters](https://www.reuters.com/technology/ai-agent-firm-instinct-raises-1-billion-latest-funding-round-2026-09-28), [TechCrunch](https://techcrunch.com/2026/09/28/viral-ai-agent-instinct-raises-1b-series-c-at-a-10b-valuation/), [SiliconANGLE](https://siliconangle.com/2026/09/28/everyday-personal-ai-assistant-startup-instinct-raises-1b-at-10b-valuation/).
  - Why it matters: a 4x step-up in about 33 days with no disclosed traction, a sign of how frothy consumer-agent valuations are.
  - Action flag: **watch**.

- **28 Sep | SiMa.ai (physical-AI edge chips, San Jose and India) | $150M Series C at $1.45B valuation; co-led by Fidelity and Amplify; new investors AllianceBernstein, Baron, J.P. Morgan, State of Michigan; total raised $500M; next-gen silicon targets 1,000 TOPS, H1 2028.**
  - Primary: [SiMa.ai press release](https://sima.ai/press-release/sima-ai-reaches-1-45b-valuation-with-500-million-in-total-funding-to-scale-physical-ai-in-humanoids-automotive-and-drones/).
  - Corroboration: [SiliconANGLE](https://siliconangle.com/2026/09/28/physical-ai-custom-chip-producer-sima-ai-raises-150m-at-1-45b-valuation/), [Business Standard](https://www.business-standard.com/companies/news/physical-ai-firm-sima-ai-raises-150-mn-in-series-c-valued-at-1-45-bn-126092801131_1.html). Note: YourStory dates it 29 Sep; the company release is dated 28 Sep.
  - Action flag: **no action**.

- **Week ending 25 Sep (Crunchbase list covers 19 to 25 Sep; exact announcement days may fall before 25 Sep) | Other large AI rounds** ([Crunchbase News, 25 Sep](https://news.crunchbase.com/venture/biggest-funding-rounds-cybersecurity-ai-health-island-cyera/)):
  - Island: $400M Series F at $6.4B, led by Evolution Equity.
  - Cyera (AI/data security): $400M Series G extension led by Evolution Equity, per Crunchbase. [Beinsure](https://beinsure.com/news/cyera-raises-600mn/) reports $600M at $12B. The sources conflict; use Crunchbase and mark the $12B UNVERIFIED.
  - Snorkel AI: $350M Series E co-led by Insight and S32. Crunchbase says $3.2B valuation; the company announcement via [VCNewsDaily, 25 Sep](https://vcnewsdaily.com/snorkel-ai/venture-capital-funding/ybzpqnctgp) says $3.5B. The sources conflict; prefer the company figure of $3.5B. More than $375M ARR.
  - Enveda (AI drug discovery): $311M Series E led by Catalio.
  - Micro1 (AI training data): more than $100M at $4B (Forbes, people familiar; UNVERIFIED).
  - Numeral: $100M Series C led by Insight.
  - Heidi (clinical AI): $340M ($100M Series C led by Blackbird plus $240M from General Catalyst's CVF) at $900M, 25 Sep ([The AI Insider](https://theaiinsider.tech/2026/09/25/heidi-secures-340m-at-900m-valuation-to-expand-ai-care-partner-beyond-clinical-documentation/)).
  - Action flag: **no action**. Snorkel and Micro1 are **watch** as signals of frontier-lab data spend.

- **CONTEXT (before the window, for scale):**
  - Crusoe: $3.9B Series F at $30.9B (about 17-18 Sep) ([Crunchbase 18 Sep](https://news.crunchbase.com/venture/biggest-funding-rounds-ai-space-fintech-temporal/)).
  - Temporal: $550M at $12.55B (same source).
  - Positron AI: $875M at $5B post-money (10 Sep); QIA participated ([Sandpczone summary citing the PR and Reuters](https://sandpczone.com/positron-ai-5b-valuation)).
  - Databricks term sheet at $188B (17 Jul) ([AI Insider](https://theaiinsider.tech/2026/07/17/databricks-is-raising-a-strategic-round-of-funding-at-a-188b-valuation/)).

**Leadership changes**

- **28 Sep | Meta hires MongoDB CEO Chirantan "CJ" Desai to lead the new Meta Enterprise Platform (Meta's models, agents including Muse and Meta Business Agent, and coding tools for businesses). Desai steps down at MongoDB after under a year; Dev Ittycheria returns as interim CEO; MDB fell about 20% premarket.**
  - Source: [Reuters](https://www.reuters.com/technology/mongodb-ceo-desai-steps-down-lead-metas-enterprise-platform-2026-09-28/).
  - Why it matters: Meta is formally entering enterprise AI sales against OpenAI, Anthropic, Google and Microsoft.
  - Action flag: **relevant to vendor choice**.
- **28 Sep | Fei-Fei Li to become AMD EVP and Chief Scientist** (see the AMD–World Labs item). **no action**.

### Inferences
- The window's capital-markets story is a pipeline of trillion-dollar-scale AI listings (Anthropic, OpenAI later, Solidigm, Nscale) meeting a market that is visibly nervous about supply and valuations (see Q3). How the Anthropic public S-1 is received will likely set the tone for the rest.
- Chip vendors (AMD with World Labs, Nvidia with Hugging Face, Qualcomm with PickNik) are buying model and software layers, which blurs the line between "chip supplier" and "AI platform". Enterprises choosing an AI stack may find hardware vendors bundling models and tooling.
- Mega-rounds for application and agent startups (Instinct) are running ahead of disclosed traction. Infrastructure rounds (Nscale) increasingly use convertibles and vendor money (Nvidia), which feeds the circular-financing critique.

### Gaps
- Could not independently query SEC EDGAR, so the "no public Anthropic S-1" status rests on a third-party check (CellCog) plus Reuters' own wording ("prospectus seen by Reuters").
- A 28 Sep Anthropic–Infosys news post was referenced by one source (CellCog). The fetched Anthropic newsroom did not show it, and the only confirmed Anthropic–Infosys announcement is from 16-17 Feb 2026 ([Infosys PR](https://www.prnewswire.com/news-releases/infosys-and-anthropic-announce-collaboration-to-unlock-ai-value-across-complex-regulated-industries-302689229.html)). Treat any 28 Sep expansion as UNVERIFIED.
- The Qualcomm PickNik value and the Qualcomm primary release were not retrieved.
- A reported DeepSeek raise of about $7.45B appeared only in a low-quality aggregator ([bytevyte](https://bytevyte.com/ai-funding-tracker-crusoes-3-9b-round-tops-a-week-of-compute-bets/)) with no date or primary source. Excluded, UNVERIFIED.
- Tuesday 29 Sep US-session deals may not yet be indexed.

## Q2. What compute, chip, data-center and energy deals or announcements happened in the window, and what are the dollar and gigawatt figures?

### Takeaway
There was no new multi-gigawatt hyperscaler or lab compute contract in the window. The main items were financing and supply-chain moves: Samsung's $1B into KKR/Nvidia-backed Helix (adding to more than $10B already committed), Cerebras supplying about 100 MW of CS-4 systems to Gimlet Labs, SoftBank's record $11.1B high-yield bond settling on 29 Sep to fund OpenAI, and the Anthropic prospectus's $518B compute obligations. Execution risk is rising: Oracle's force majeure on the 2.45 GW Project Jupiter (24 Sep) is still reverberating.

### Cited Findings

**Data-center, power and infrastructure capital**

- **28-29 Sep | Samsung group to invest $1B in Helix Digital Infrastructure (KKR-formed; CEO Adam Selipsky, ex-AWS) | Samsung Electronics $500M plus Samsung C&T, SDS, SDI, Samsung Life and Samsung Fire & Marine for the rest. Builds on more than $10B committed at launch (June) by KKR, Kuwait Investment Authority, NVIDIA and Vistra. Scope: hyperscale data centers, power generation and transmission, fiber.**
  - Primary: [Helix/KKR Business Wire release (via NatLawReview)](https://natlawreview.com/press-releases/samsung-commits-1-billion-helix-digital-infrastructure-support-global-ai); [Samsung Newsroom](https://news.samsung.com/global/samsung-to-invest-usd-1-billion-in-ai-infrastructure-company-helix).
  - Corroboration: [Reuters](https://www.reuters.com/business/samsung-electronics-commits-1-billion-kkr-backed-helix-digital-ai-buildout-2026-09-28/), [WSJ](https://www.wsj.com/tech/ai/samsung-commits-1-billion-to-ai-infrastructure-firm-backed-by-kkr-nvidia-d1039c57), [Yonhap](https://en.yna.co.kr/view/AEN20260929001900320), CNBC (29 Sep).
  - Why it matters: a new "powered-shell plus power" platform for hyperscalers, with a Gulf sovereign (KIA) as a founding investor. Samsung gets a way to sell memory, cooling, construction and batteries into AI data centers.
  - Action flag: **watch**.

- **28 Sep | Cerebras to supply CS-4 systems to Gimlet Labs (AI cloud startup) | about 100 MW of hardware delivered over 1-2 years; available in Gimlet's cloud in 2027; financial terms undisclosed.**
  - Source: Reuters via [SRN News](https://srnnews.com/cerebras-to-supply-ai-systems-to-cloud-computing-startup-gimlet-labs/). Primary release not retrieved.
  - Why it matters: another sign of rising demand for dedicated inference hardware outside Nvidia. Cerebras also supplies OpenAI (CONTEXT, earlier 2026). Cerebras IPO'd in 2026 at about $56B fully diluted (per Reuters in the Solidigm story).
  - Action flag: **relevant to vendor choice** (future inference-capacity options).

- **24 Sep priced, 29 Sep issue date | SoftBank Group ~$11.1B senior notes | USD: $1B at 8.625% (2030), $4.5B at 9.25% (2032), $4.5B at 9.75% (2034); EUR: €500M at 7.125% and €500M at 8.00%. Proceeds fund the third and final $10B tranche of SoftBank's $30B follow-on in OpenAI Group PBC, expected to close 1 Oct 2026. The remaining $10B of undrawn capacity under the $40B bridge facility is to be cancelled.**
  - Primary: [SoftBank Group press release](https://group.softbank/en/news/press/20260924).
  - Corroboration: [Reuters, 24 Sep](https://www.reuters.com/business/media-telecom/softbank-issues-111-billion-bonds-openai-financing-push-2026-09-24/). Total SoftBank investment reaches $64.6B on completion. Described as the largest high-yield corporate bond on record (Reuters/LSEG, via [Data Center Frontier](https://www.datacenterfrontier.com/machine-learning/news/55407627/anthropic-openai-keep-expanding-the-ai-data-center-map-and-the-financing-gets-harder)). More than $30B of orders; rated BB+ by S&P Japan and Fitch Japan ([EBC summary](https://www.ebc.com/forex/softbank-bond-sale-openai-30-billion-demand)).
  - Why it matters: OpenAI's equity is being funded with junk-rated debt at 8.6-9.75%, which makes the circular and leveraged nature of AI finance concrete.
  - Action flag: **watch** (the 1 Oct OpenAI payment).

- **CONTEXT, 24 Sep (with follow-up coverage 25-28 Sep) | Oracle sent a force majeure notice to Blue Owl (owner of STACK Infrastructure) on Project Jupiter, Doña Ana County, New Mexico | 2.45 GW campus (2,462 MW Bloom fuel-cell microgrid); about $18B bank loans; Blue Owl about $3B equity; 2028 target; part of the OpenAI–Oracle Stargate capacity. Could defer rent up to 3 years if a power-related force majeure is agreed (UNVERIFIED, people familiar). Project debt reportedly below 90 cents on the dollar. Oracle says the project "remains on our planned schedule." Oracle shares fell about 4%.**
  - Sources: [Reuters/Bloomberg, 24 Sep](https://www.reuters.com/business/oracle-cites-force-majeure-shield-itself-controversial-data-center-bloomberg-2026-09-24/), [BNN Bloomberg](https://www.bnnbloomberg.ca/business/artificial-intelligence/2026/09/24/oracle-triggers-force-majeure-on-data-centre-project-over-power-delays-source-says/), [Insurance Journal (Bloomberg)](https://www.insurancejournal.com/news/west/2026/09/25/886812.htm), [ENR, 28 Sep](https://www.enr.com/articles/63720-oracle-invokes-force-majeure-as-new-mexico-project-jupiter-power-work-faces-hurdles). The Transwestern gas pipeline has slipped to 1 Feb 2027; the state microgrid permit decision is due by 23 Nov.
  - Why it matters: this is the clearest example of power and permitting risk hitting Stargate-class capacity.
  - Action flag: **relevant to vendor choice** (OCI/OpenAI capacity timelines).

- **28 Sep | Anthropic prospectus (via Reuters): $518B in cloud/compute/infrastructure obligations (see Q1).**
  - CONTEXT: third-party tallies earlier in September put Anthropic's signed compute leases at about $517B across about 14.8 GW, with Google and AWS about 11 GW ([BriefTechNews, 8 Sep](https://brief-tech-news.com/blogs/2026-09-08-ai/), secondary). AWS deal (20 Apr): more than $100B over 10 years, up to 5 GW Trainium2-4 ([Nerd Level Tech summary of the Anthropic/Amazon release](https://nerdleveltech.com/amazon-anthropic-100-billion-aws-trainium-5gw-deal)). Anthropic in early talks to lease up to 1 GW from Apollo-owned Stream Data Centers (The Information, 23 Sep; UNVERIFIED; [Value Add Pulse](https://valueaddvc.com/pulse/anthropic-apollo-stream-data-centers-1gw-lease-2026)).
  - Action flag: **relevant to vendor choice**.

**Chips and supply**

- **28 Sep | Nvidia's Jensen Huang met Samsung Chairman Jay Y. Lee and SK Chairman Chey Tae-won in New York (Korea Society Van Fleet Award gala) | no deal announced; talks reportedly covered HBM4E/HBM5 co-development and SK Telecom's up-to-2 GW Nvidia "AI factory" (announced July, phased from 2027).**
  - Sources: [Asia Business Daily](https://www.asiae.co.kr/en/article/2026092909585563078), [Seoul Economic Daily](https://en.sedaily.com/finance/2026/09/29/jensen-huang-wins-van-fleet-award-as-lee-chey-hail-ai). The content of any private discussions is UNVERIFIED ([BigGo](https://finance.biggo.com/news/cbf738ef-5b07-41a9-9988-1fb48e563d38)).
  - Action flag: **no action**.

- **~24-26 Sep | Intel Foundry's Naga Chandrasekaran told a KeyBanc investor meeting that 14A should land "within 5%" of TSMC A14 on performance | both target 2028 volume production; 14A risk production 2H 2027; Intel's 2026 capex plan lifted to $20B.**
  - Sources: [Times of India Gadgets Now, 26 Sep](https://gadgetsnow.indiatimes.com/tech-news/intel-pitches-14a-within-5-per-cent-of-tsmcs-a14-despite-a-high-na-euv-head-start/articleshow/134497301.cms); [Tech Times, 28 Sep](https://www.techtimes.com/articles/328103/20260928/intel-14a-spec-math-points-performance-lead-over-tsmc-a14-investors-hear-parity.htm).
  - Piper Sandler says Amazon, Apple, AMD, Google, Microsoft, Nvidia, Qualcomm and Tesla are evaluating 14A, with none committed; an anchor customer is needed by end-2026 or early 2027 ([Comparos, 26 Sep](https://www.comparos.in/news/intel-s-14a-process-attracts-interest-from-major-chipmakers), secondary).
  - Action flag: **watch**.

- **~26-28 Sep | TSMC 2nm capacity reportedly raised to about 120,000 wafers/month by end-2026 (vs 90-100k expected); Apple, Nvidia, AMD, Qualcomm and MediaTek reportedly raised 2nm orders 10-20%; 2nm capacity CAGR about 70% for 2026-28.**
  - Source: EDN (Taiwan) report citing SVP Hou Yung-ching and industry sources, via [TrustFinance](https://news.trustfinance.com/news/en-US/tsmc-boosts-2nm-chip-capacity-forecast-on-surging-ai-demand-report-says). UNVERIFIED (secondary; no TSMC IR confirmation).
  - Action flag: **watch**.

- **CONTEXT, 16-21 Sep | Reports that SK Hynix may manufacture memory using Intel's Ohio fab capacity (JV or lease)** drove Intel up 12.1% to $121.78 on 21 Sep; AMD passed a $1T market cap the same day ([Investing.com analysis, 28 Sep](https://uk.investing.com/analysis/intel-selloff-tests-whether-its-2026-rally-has-priced-in-too-much-200628396); [Seeking Alpha](https://seekingalpha.com/news/4645427-whats-next-for-intel-after-the-sk-hynix-partnership-rumors)). UNVERIFIED.

- **Chinese chipmakers | 28 Sep: Cambricon fell about 5.7% and SMIC about 3.6% at the open on the OpenAI-pause news; Chinese chip stocks also fell on the RTX Pro 5500 report (ByteDance reportedly considering about 1M units).**
  - Sources: [Stocks Down Under citing Investing.com](https://stocksdownunder.com/nvidia-ai-stock-openai-pause-asian-chip-shares/); [The Coin Republic](https://www.thecoinrepublic.com/2026/09/28/nvidia-news-china-could-reopen-chip-sales-as-bytedance-eyes-1m/) (UNVERIFIED).
  - CONTEXT: Huawei set a 2027 launch for new AI chips (Reuters, 17 Sep, via [GoodPoints](https://goodpoints.news/story/593bed0a-f77d-4bfb-97f0-e0e9105d54f4)).
  - No in-window Chinese chip launch or IPO found.

- **Google TPU / AWS Trainium: no new in-window deals found.**
  - CONTEXT: Anthropic–Google–Broadcom about 3.5 GW TPU from 2027 (April 2026). SemiAnalysis benchmark (about 8 Sep) put TPUv7 Ironwood up to 50% ahead of B200/B300 on inference performance per dollar ([BriefTechNews](https://brief-tech-news.com/blogs/2026-09-08-markets/), secondary).

- **Hyperscaler capex: no new capex guidance in the window** (the next hyperscaler earnings are late October).
  - CONTEXT: the six largest builders are reportedly on track for about $870B of 2026 capex and about $1.3T in 2027 ([Substack commentary, 29 Sep](https://milliondollarbookclub.substack.com/p/the-most-crowded-market-since-the), secondary, UNVERIFIED).
  - Nvidia's Q3 FY27 revenue guide is $108B ±2% and excludes China data-center revenue; Q2 data-center revenue was $89B, up 117% YoY; next earnings 17 Nov (from its filing, via [The Coin Republic](https://www.thecoinrepublic.com/2026/09/28/nvidia-news-china-could-reopen-chip-sales-as-bytedance-eyes-1m/)).

### Inferences
- The binding constraint has shifted from chips to power, permits and financing. The window's biggest infrastructure news was about capital (Helix, SoftBank bonds, Nscale convertibles) and delivery risk (Oracle Jupiter), not new GPU orders.
- Nvidia sits on several sides of these deals: investor in Helix, a $1B note holder in Nscale, a World Labs investor and supplier. Expect continued analyst focus on vendor financing (see Q3).
- Inference-specialist hardware (Cerebras, SiMa.ai at the edge, Positron) keeps attracting capital and capacity deals. That widens non-Nvidia options for 2027 deployments.

### Gaps
- No in-window primary release found for Cerebras–Gimlet (Reuters only), the TSMC capacity figures (trade-press only) or Qualcomm–PickNik.
- No in-window Stargate site announcements, OpenAI compute contracts, Google TPU or AWS Trainium deals found. A search result claiming a new $11.9B OpenAI–CoreWeave deal on 24 Sep 2026 ([Coinpaper](https://coinpaper.com/36244/ai-earnings-openai-signs-12b-compute-deal-with-coreweave-as-ai-capex-soars)) appears to recycle the March 2025 contract and is excluded. A "Stargate Argentina" item dated 26 Sep ([OBV News](https://obvnews.com/openai-and-argentina-plan-25-b-stargate-ai-data-center/)) describes the October 2025 letter of intent and is excluded.
- 29 Sep (Tuesday) US-hours announcements may be missing.

## Q3. Were there notable AI-related earnings reports, market moves, or analyst warnings (e.g., bubble or circular-financing concerns) in the window?

### Takeaway
No major AI earnings landed in the window. Micron (30 Sep) and Accenture (1 Oct) are next and are the key near-term tests. Markets were risk-off. Asian memory and chip stocks fell about 4-6% on 28 Sep after OpenAI's training pause. Intel dropped about 7% over two sessions. Long yields are near 20-year highs. Bearish calls grew louder: Burry is moving to puts on Micron, Nebius and SOXX, and the Oracle force majeure, SoftBank's 9.75% coupons and Nvidia's customer-financing role fed circular-financing worries. J.P. Morgan argued the pullback makes AI and semis attractive again.

### Cited Findings

**Market moves**

- **28 Sep (Asia session) | Chip selloff tied to OpenAI pausing training, evaluation and tool-use inference for its most capable models | SK Hynix -4.35% to -4.8%; Samsung -4.6% to -4.73%; Kioxia -2.3%; KOSPI down 1% to 2.3% (sources differ); Cambricon about -5.7%; SMIC about -3.6%.**
  - Sources: [Investing.com](https://uk.investing.com/news/stock-market-news/asia-chip-stocks-slide-as-openai-pause-revives-ai-slowdown-fears-4884612), [Investing.com (SK Hynix)](https://uk.investing.com/news/stock-market-news/why-is-sk-hynix-stock-sliding-today-93CH-4884611), [Investing.com (Asia markets)](https://ph.investing.com/news/stock-market-news/asia-stocks-slip-as-oil-yields-rise-chipmakers-hit-by-openai-pause-2603327). The underlying event is from AP via [The Star](https://www.thestar.com.my/tech/tech-news/2026/09/28/openai-pauses-training-of-latest-models-after-agents-probed-us-government-sites-in-unexpected-ways).
  - Caveat: SK Hynix was already down about 33% and Samsung about 20% over three months, so a single day's news doesn't explain the trend ([FourWeekMBA](https://fourweekmba.com/ai-sk-hynix-samsung-openai-pause-chip-decline-attribution/), secondary). Oil (US-Iran truce uncertainty) and rising yields also weighed.
  - Action flag: **watch**.

- **25-28 Sep | Intel fell 3.45% to $123.00 on Fri 25 Sep and was about 3.5% lower in Monday premarket (about $8.69, or 7%, over two sessions). The 10-year Treasury was at 5.22% (highest since 2007); fed funds futures priced about 70% odds of an October hike; Nasdaq-100 futures -0.9%; Micron -2% premarket.**
  - Source: [Investing.com analysis, 28 Sep](https://uk.investing.com/analysis/intel-selloff-tests-whether-its-2026-rally-has-priced-in-too-much-200628396) (secondary; figures not cross-checked against exchange data).
  - CONTEXT: the Fed hiked 25 bp on 16 Sep to 3.75-4.00% ([CEOWORLD](https://ceoworld.biz/2026/09/27/billionaire-stanley-druckenmiller-warns-of-an-ai-earnings-bubble-as-financing-costs-rise/)).
  - Action flag: **watch**.

- **28 Sep | MongoDB about -20% premarket** on its CEO leaving for Meta ([Reuters](https://www.reuters.com/technology/mongodb-ceo-desai-steps-down-lead-metas-enterprise-platform-2026-09-28/)). **no action**.

- **24 Sep, CONTEXT | Oracle about -4%** on the Project Jupiter force majeure ([BNN Bloomberg](https://www.bnnbloomberg.ca/business/artificial-intelligence/2026/09/24/oracle-triggers-force-majeure-on-data-centre-project-over-power-delays-source-says/)).

**Analyst and investor warnings (bubble, circular financing)**

- **28 Sep | Michael Burry (newsletter): "the bubble in AI may burst sooner than later." He is moving from shorts to puts: Micron (June expiry, about $500 strike), Nebius (June), SOXX (Sep 2027, low $400s). He cites an Ares Management report on the AI boom's reliance on "sustained AI capital spending."**
  - Source: [CNBC](https://www.cnbc.com/2026/09/28/michael-burry-believes-the-ai-bubble-may-burst-sooner-than-he-first-believed.html) (from search extract).
  - Action flag: **watch**.

- **28 Sep | J.P. Morgan (Mislav Matejka): the recent AI pullback improved positioning and valuations and could spur re-engagement, especially in semis; capex is likely to stay strong.**
  - Source: [Reuters](https://www.reuters.com/business/global-ai-trade-could-revive-after-recent-pullback-jp-morgan-says-2026-09-28/).
  - Action flag: **watch**.

- **~28 Sep | Steven Cress (Seeking Alpha Quant): Nvidia's customer financing (product commitments, equity stakes, compute buybacks, guarantees) blurs organic demand and resembles 1997-style supplier financing. He recommends focusing on balance sheets and cash flow.**
  - Source: [HTX summary](https://www.htx.com/news/analyst-instead-of-worrying-about-ai-bubble-focus-on-compani-fbj99rgV/) (secondary).
  - Action flag: **watch**.

- **25 Sep | New Constructs: sees about 20% S&P 500 downside risk if AI liquidity dries up; cites $1.4T of "hidden earnings expectations."**
  - Source: [New Constructs](https://www.newconstructs.com/the-liquidity-squeezes-that-pop-the-ai-bubble/) (opinion).
  - Action flag: **no action**.

- **CONTEXT, 24 Sep | GMO quarterly letter: the AI bubble's likely catalyst is equity supply (SpaceX lockups, including about $2T released 12 Jun 2027; the Anthropic and OpenAI IPOs; hyperscaler issuance). Historically, each 1% rise in equity supply has cut market value by about 4% over the next year.**
  - Source: [GMO](https://www.gmo.com/australia/research-library/a-catalyst-for-the-ai-bubble-break_gmoquarterlyletter/).
  - Also in the window: the Druckenmiller "AI earnings bubble" framing ([CEOWORLD, 27 Sep](https://ceoworld.biz/2026/09/27/billionaire-stanley-druckenmiller-warns-of-an-ai-earnings-bubble-as-financing-costs-rise/), secondary) and Whitney Tilson calling the Anthropic and OpenAI IPOs a "key test" ([Benzinga](https://www.benzinga.com/markets/tech/26/09/62037201/ai-bubble-market-expert-says-yes-and-this-event-could-drag-down-the-entire-sector), undated).

**Earnings (upcoming; none major in the window)**

- **Micron FQ4 FY26 reports Wed 30 Sep after close | guide $50.0B ±$1.0B revenue, about 86% gross margin, non-GAAP EPS $31.00 ±$1.00; consensus about $50.6-50.9B and EPS about $31.3-31.5; the quarter has 14 weeks. FQ3 was a record $41.5B, up 346% YoY.**
  - Primary: [Micron FQ3 materials](https://investors.micron.com/static-files/9c0becf5-df56-4eec-bd67-453dda68b273?lidx=0&referring_guid=e482370f-aeca-47cb-8030-316059ac5d78).
  - Previews: [Vantage](https://www.vantagemarkets.com/market-news/micron-fiscal-q4-earnings-30-september-2026-september-23-2026/), [Finviz/Zacks](https://finviz.com/news/396198/micron-mu-highlights-tech-earnings-to-watch-this-week).
  - Action flag: **watch** (HBM pricing and FY27 capex are the read-through for AI demand after the OpenAI pause).

- **Accenture FQ4 reports Thu 1 Oct before the open | consensus revenue about $18.01B, EPS $3.19; the stock is down about a third in 2026 on AI-disruption fears.**
  - Sources: [Finviz/Zacks](https://finviz.com/news/396198/micron-mu-highlights-tech-earnings-to-watch-this-week), [Coin Craziness preview](https://www.coincraziness.com/2026/09/26/accenture-reports-thursday-one-number-will-decide-everything/).
  - Action flag: **watch** (the enterprise AI adoption read).

### Inferences
- The market is now pricing lab-specific operational risk (training pauses, shelved models) as a demand risk for the whole chip complex. That is new: memory names reacted to one lab's safety decision.
- Rates are an amplifier. With 10-year yields above 5.2% and a Fed hiking, the leveraged parts of the AI stack are the pressure points: SoftBank at 9.75%, Oracle's $125B+ debt (CONTEXT; [Wall Street Logic](https://wallstreetlogic.com/ai/the-ai-booms-money-problem-debt-circular-deals-and-a-power-grid-that-cant-keep-up/), secondary), and Jupiter project debt below 90 cents.
- Micron on 30 Sep is the first hard data point after the OpenAI pause. A strong guide would undercut the "pause means demand cliff" narrative.

### Gaps
- No authoritative end-of-day US closes for 28 Sep for Nvidia, AMD or the SOX (the premarket and Asia prints came from Investing.com only).
- Jefferies' 28 Sep results (mentioned as a datacenter-financing read in one preview) were not verified.
- No top-tier source quantified total AI-related market-cap loss in the window.

## Q4. Were there notable Gulf/MENA AI investments or partnerships in the window?

### Takeaway
Activity in the window was mostly construction contracts and ecosystem deals rather than new mega-investments. Humain's 6 GW Riyadh campus got its infrastructure contractor (Al Yamama). Qatar awarded a $137M MEEZA data-center build and signed AI adoption deals (Brain Co, Google Cloud skilling and lab). Gulf sovereign money appeared inside global deals: Kuwait Investment Authority in Helix, Abu Dhabi Investment Council in Nscale. Microsoft's more-than-$10B GCC plan landed just before the window. A "new $50B MGX fund" headline dated 29 Sep is a rehash of the June/July close.

### Cited Findings

- **24 Sep (MEED) / 27 Sep (EnterpriseAM) | Humain (PIF) awarded Al Yamama Company the enabling-infrastructure contract (early contractor involvement) for its 6 GW hyperscale AI campus in Al Saad, east Riyadh | 24 km² site; 6 plots of 1 GW each, in two phases; 380/132/33 kV network, 500 MVA and 200 MVA substations, 2,000 MVA bulk supply point. Contract value not disclosed.**
  - Sources: [MEED](https://www.meed.com/contractor-wins-6gw-data-centre-campus-infrastructure), [EnterpriseAM](https://enterpriseam.com/ksa/2026/09/27/al-yamama-takes-the-infrastructure-contract-for-humains-6-gw-riyadh-ai-campus/). Related: MIS reportedly holds a $2.33B award for 250 MW (21 Sep, CONTEXT; [Slicast](https://slicast.com/commentary/humain-2026-09-27), secondary).
  - Why it matters: Humain's campus is moving from announcement to construction. It is relevant to regional sovereign-compute capacity from about 2028.
  - Action flag: **watch**.

- **28 Sep | Qatar: Estithmar Holding's Elegancia won a turnkey contract worth more than QR500M (about $137M) to build MEEZA's new data centre in two phases, for hyperscale cloud and high-density AI workloads.**
  - Source: [World Construction Network](https://www.worldconstructionnetwork.com/news/estithmar-meeza-data-centre-qatar/).
  - Action flag: **relevant to vendor choice** (local colocation and cloud capacity in Qatar).

- **27 Sep | Invest Qatar and Brain Co (Silicon Valley applied AI) partnership on public and private sector AI pilots, talent and knowledge transfer; Brain Co is opening a Doha flagship office.**
  - Source: [Gulf Times (QNA)](https://www.gulf-times.com/article/734248/business/invest-qatar-deal-to-build-home-grown-ai-expertise).
  - Action flag: **no action**.

- **~27-28 Sep | Google Cloud Summit Doha: marks 3 years of the Doha cloud region; skilling programme with Qatar Digital Academy (more than 50,000 learning opportunities by 2030); AI innovation lab with Qatar's MCIT.**
  - Source: [Euronews, 28 Sep](https://www.euronews.com/2026/09/28/from-answering-questions-to-carrying-out-complex-tasks-the-next-phase-of-ai).
  - Action flag: **relevant to vendor choice** (Google Cloud's in-country presence).

- **28-29 Sep | Kuwait Investment Authority confirmed as a founding investor in Helix alongside KKR, Nvidia and Vistra, as Samsung adds $1B** ([Samsung Newsroom](https://news.samsung.com/global/samsung-to-invest-usd-1-billion-in-ai-infrastructure-company-helix)). **25 Sep | Abu Dhabi Investment Council participated in Nscale's $3.36B convertible** ([Nscale PR](https://www.prnewswire.com/news-releases/nscale-raises-3-36b-in-pre-ipo-convertible-financing-302890199.html)). Action flag: **watch**.

- **CONTEXT, 23-24 Sep | Microsoft: more than $10B in capex plus opex across the UAE, Saudi Arabia, Qatar and Kuwait through 2030 (about $2B more than prior commitments; includes the earlier $7.9B for the UAE); more than $400M for subsea and terrestrial connectivity; partners G42 (Microsoft's $1.5B minority stake), Humain and QAI; Saudi Arabia East Azure region expected live November 2026. Brad Smith said no equity investment in Humain or QAI is planned.**
  - Sources: [AGBI](https://www.agbi.com/tech/2026/09/microsoft-to-invest-more-than-10bn-in-gcc-for-cloud-and-ai/), [WAYA](https://waya.media/microsoft-raises-gulf-ai-and-cloud-investment-to-more-than-usd-10b-through-2030/), Reuters via [Businessmen ME](https://businessmen-me.com/en/1543/microsoft-invests-10-billion-across-gulf-states). One outlet's claim that Humain will use "Azure OpenAI in a preferred configuration" ([The Robotics Media](https://theroboticsmedia.com/article/microsoft-10-billion-gulf-ai-cloud-investment-2030-uae-saudi-arabia-qatar-kuwait-september-25-2026)) is UNVERIFIED.
  - Action flag: **relevant to vendor choice** (Azure regions in the GCC).

- **Stale item, flagged: a 29 Sep AK&M story says "MGX raised $50B in a new AI fund"** ([AK&M](https://www.akm.ru/eng/news/abu-dhabi-based-mgx-investment-company-has-raised-50-billion-to-develop-ai/)). This matches Bloomberg's 23 Jun report of about $50B ([Bloomberg](https://www.bloomberg.com/news/articles/2026-06-23/abu-dhabi-s-mgx-raises-about-50-billion-to-accelerate-ai-deals)) and MGX's 1 Jul official close of Fund I at $49B ([CNBC](https://www.cnbc.com/2026/07/01/mgx-ai-fund-uae-49-billion.html)). It is not new; do not report it as a window event.
- **Probably stale, flagged: a 27 Sep Gulf Times (thegulftimes.ae) story on the US clearing Blackwell exports to G42 and Humain** ([link](https://thegulftimes.ae/ai-chip-exports/)) appears to recap earlier approvals. It is policy (out of scope) and UNVERIFIED as new.

- **CONTEXT (early Sep) | Gulf structural items:**
  - G42 held exploratory talks on selling a majority stake to US investors to keep Nvidia/AMD chip access past a roughly April 2027 licensing deadline (Bloomberg, via [AI in Arabia](https://aiinarabia.com/news/arabia-sovereign-watch-2026-09-13); [AGBI](https://www.agbi.com/ai/2026/09/gulf-ai-giants-humain-and-g42-look-to-raise-outside-capital/)). UNVERIFIED.
  - Humain is building an IPO team (dual Riyadh/New York listing targeted by 2029) and raising a $2.5B data-center fund ([Fortune, 9 Sep](https://fortune.com/2026/09/09/saudi-humain-planning-ipo-2-5-billion-fund-expansion-plans-moove-adgm/)).
  - Stargate UAE's first 200 MW phase was due in Q3 2026. No completion announcement was found as of 29 Sep ([AI in Arabia, 5 Jul](https://aiinarabia.com/news/mena-sovereign-watch-2026-07-05)); this is a gap.

### Inferences
- Gulf sovereign capital is increasingly entering AI infrastructure as limited partners and co-investors in US and European platforms (KIA in Helix, ADIC in Nscale, MGX across labs), while domestic champions (Humain, G42) turn to outside capital and listings.
- For a Gulf-based buyer, the practical near-term changes are in-country hyperscaler capacity (Azure Saudi East in November 2026; Google Cloud Doha expanding; MEEZA build). Humain's 6 GW campus is a 2028+ story.
- Q3 ends 30 Sep, so whether Stargate UAE's 200 MW phase and Humain's Riyadh/Dammam sites are on time is a live test.

### Gaps
- No in-window WAM or SPA announcements were found for G42, MGX, Khazna, Humain or Stargate UAE. Searches may have missed Arabic-language-only releases.
- The Al Yamama contract value and the MEEZA data-center MW capacity were not disclosed in the sources found.
- The status of the Stargate UAE 200 MW phase (due in Q3 2026) is unconfirmed.
