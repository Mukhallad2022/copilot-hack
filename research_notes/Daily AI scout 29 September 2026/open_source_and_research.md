# Open-source AI and AI research: trending snapshot, Tue 29 Sep 2026

*Hugging Face listings were pulled with the HF MCP connector at 2026-09-29 12:06 UTC (the connector stamps `observed_at: 2026-09-29T12:06:07Z`). Primary window: Fri 25 Sep to Tue 29 Sep 2026. Anything dated earlier is labelled "context". Action flags: TRY NOW / READ / WATCH / NO ACTION. HF like and upvote counts are as of the pull time and keep changing.*

## 1. What are the top trending models, datasets and Spaces on Hugging Face right now, and what are today's daily and trending papers?

### Takeaway
Two waves lead the Hub. The first is the "System One" typed-decision model trend: open Apache-2.0 copies of TypeSafe AI's closed Jev API (launched 15 Sep, context). Laya is the #1 trending model. The second is the Qwen-Image-2.1 ecosystem of GGUF, turbo and "uncensored" derivatives. Behind them sit strong local and edge releases: the ternary Bonsai 2 27B, Audio8 streaming ASR and Nemotron-3 diarization. Very few top-trending repos were created inside the 25–29 Sep window. The notable in-window open-weight drops are Naive-N0.5-Flash (27 Sep, MIT), H Company's Holo4 (28 Sep) and several Jev distillations (26–27 Sep). Today's daily papers are led by multi-teacher on-policy distillation (DN-MOPD), YuE2 music generation and a "behavioral shadows" capability-transfer result.

### Cited Findings

**Trending models (HF global rank at 12:06 UTC; "created" date from the HF search API)**

| # | Repo (owner) | What it is | Size / license | Created | Why trending | Flag |
|---|---|---|---|---|---|---|
| 1 | [convaiinnovations/laya](https://hf.co/convaiinnovations/laya) | Non-autoregressive "System 1" decision model. Takes a state plus typed questions and returns calibrated probabilities in one forward pass (~33 ms), in 100+ languages. Trained with RL against proper scoring rules (RLCD). `pip install laya`, with MCP and LangChain extras. | 421.3M (ModernBERT-large) / Apache-2.0 | 18 Sep (context) | 4,420 likes. The open answer to TypeSafe's closed Jev. The [Laya site](https://laya.convaiinnovations.com/) lists 3 checkpoints: English 421M, multilingual 322M (up to 8k context), typed-decisions 421M (0.766 acc). | TRY NOW (routing, moderation, triage) |
| 2 | [Edge0/Audio8-ASR-Infinite](https://hf.co/Edge0/Audio8-ASR-Infinite) | Native streaming ASR for zh and en. Selectable 80/120/160 ms clock and 240–560 ms delay. A rolling KV cache keeps memory and latency constant for 24/7 transcription on an adapted vLLM build. Includes semantic VAD. | 4.09B / Apache-2.0 | 21 Sep (context) | 1,460 likes. Unlimited-length streaming is claimed in the [card](https://hf.co/Edge0/Audio8-ASR-Infinite). The arXiv paper is "coming soon". | TRY NOW (zh/en speech) |
| 3 | [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://hf.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | Uncensored GGUF quant of Qwen-Image-2.1 for ComfyUI | GGUF / "other" (inherits Qwen) | 20 Sep | 1.15M downloads, 2,348 likes | NO ACTION (note safety trend) |
| 4 | [Qwen/Qwen-Image-2.1](https://hf.co/Qwen/Qwen-Image-2.1) | Text-to-image and image-editing diffusion model with RGBA output | 7.1B / "other" | 14 Sep (context) | Base of the whole image-generation cluster: 100+ demo Spaces, [Comfy-Org repack](https://hf.co/Comfy-Org/Qwen-Image-2.1) with 4.7M downloads, [unsloth GGUF](https://hf.co/unsloth/Qwen-Image-2.1-GGUF) with 252K downloads | WATCH |
| 5 | [XingChen-AGI/TeleOCR](https://hf.co/XingChen-AGI/TeleOCR) | Parser for digital and camera-captured documents (qwen2_5_vl architecture). arXiv:2608.12898. | 1.4B / Apache-2.0 | 14 Aug (context) | Repo updated 29 Sep. The trigger for the renewed interest is not documented. | WATCH |
| 6 | [XingChen-AGI/Xing4.0-29B-A4B](https://hf.co/XingChen-AGI/Xing4.0-29B-A4B) | China Telecom's model (formerly TeleChat). mHC + MLA + MTP MoE with 256K context, extendable to 512K. Its card calls it "the first model of this scale trained entirely on the Ascend NPU platform with MindSpore". Supports vLLM, SGLang and KTransformers. | 29B total / 4B active (31.2B listed) / Apache-2.0 | 16 Sep (context) | 1,803 likes. A domestic-hardware training claim ([card](https://hf.co/XingChen-AGI/Xing4.0-29B-A4B)). | WATCH |
| 7 | [Contrastive-LM/CLM-v0.1-8B](https://hf.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive LM verifier and reranker for agents, fine-tuned from Qwen3-8B | 8B / Apache-2.0 | 21 Sep | Listed on the Jev index. An [OpenDecider blog](https://huggingface.co/blog/manjunathshiva/opendecider-beats-laya-and-jev) attributes it to "Stanford and NVIDIA" (UNVERIFIED) | WATCH |
| 8 | [nvidia/Nemotron-3-Diarization](https://hf.co/nvidia/Nemotron-3-Diarization) | Streaming Sortformer speaker diarization, with a live [Space](https://hf.co/spaces/nvidia/nemotron-diarization) | 99M / OpenMDW-1.1 | 1 Sep (context) | 30.9K downloads | TRY NOW (speech pipelines) |
| 9 | [prism-ml/Ternary-Bonsai-2-27B-gguf](https://hf.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | Ternary {−1,0,+1} quantization of Qwen3.8-27B at 1.72 true bits per weight. 5.9 GB versus 54 GB FP16. 262K context. Needs PrismML's llama.cpp and MLX forks. | 27.4B / Apache-2.0 | 16–17 Sep (context) | 3.6M downloads. Claims 98.2% of FP16 retained (84.78 vs 86.32 thinking avg), against 72.59 for IQ2_XXS. About 47 tok/s on an M5 Max ([card](https://hf.co/prism-ml/Ternary-Bonsai-2-27B-gguf)) and 143 tok/s on an RTX 5090 ([PrismML](https://prismml.com/news/prismml-launches-bonsai-2-27b), 17 Sep). | TRY NOW |
| 10 | [TaichuAI/ZDTaichu5.0-9B](https://hf.co/TaichuAI/ZDTaichu5.0-9B) | VLM for spatial reasoning, agents and video | 9.8B / license not in metadata | 4 Sep (context) | 1,861 likes | NO ACTION |
| 11 | [Viggle/Qwen-Image-2.1-viggle-turbo](https://hf.co/Viggle/Qwen-Image-2.1-viggle-turbo) | 6-step DMD-distilled LoRA for Qwen-Image-2.1 (T2I and editing) | LoRA on 7.1B / "other" | 22 Sep | 190K downloads | TRY NOW (fast image generation) |
| 12 | [Qwen/Qwen3.8-27B](https://hf.co/Qwen/Qwen3.8-27B) | Qwen 3.8 dense multimodal model | 27.8B / Apache-2.0 | 5 Aug (context; weights 14 Aug per [OpenRouter](https://openrouter.ai/blog/insights/qwen-3-8/)) | 16.5K likes. Base for Bonsai 2, Hemmingway-1, JEV-27B and Holo4-27B. | NO ACTION (known) |
| 13 | [Lightricks/LTX-2.5](https://hf.co/Lightricks/LTX-2.5) | Joint audio and video generation | Gated / "other" | 23 Jul (context) | 5.5K likes | NO ACTION |
| 14 | [inclusionAI/Ming-Image-0.1-Design](https://hf.co/inclusionAI/Ming-Image-0.1-Design) | T2I aimed at graphic design and text rendering, RGBA output | 6.2B / MIT | 17 Sep | Permissive design-oriented image model | TRY NOW (design use) |
| 15 | [Altworld/Hemmingway-1](https://hf.co/Altworld/Hemmingway-1) | Creative-writing fine-tune of Qwen3.8-27B | 26.9B / CC-BY-NC-4.0 | 20 Sep | 768 likes | NO ACTION |
| 17 | [akhilaaa3/Jev-Omni](https://hf.co/akhilaaa3/Jev-Omni) | Multimodal Jev-style decision model on Gemma-4-12B-it | 12B / Apache-2.0 | 20 Sep | Part of the Jev repro wave | NO ACTION |
| 18 | [XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://hf.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | Agentic and tool-use distillation onto Qwen3.5-9B | 9.4B / MIT | 21 Sep | Ships alongside the #1 trending dataset, MiMo-V2.6-RL-oss | TRY NOW |
| 20 | [pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://hf.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF) | "Abliterated" text encoder for Qwen-Image-2.1 | GGUF / Apache-2.0 | 20 Sep | 168K downloads. Made with p-e-w/heretic, which is also GitHub-trending (Q2). | NO ACTION |

Source for rank and counts: `ls hf://models/trending` via the [HF MCP](https://huggingface.co/models?sort=trending). Size and license come from `hub_repo_details`, and created dates from `hub_repo_search` sorted by trendingScore.

**Context for the #1 trend, "System One" decision models:**
- TypeSafe AI launched Jev on 15 Sep 2026 as a closed early-access API. They call it "a new class of frontier models built to make fast, structured decisions". It is trained with "Reinforcement Learning for Calibrated Decisions (RLCD)", responds end to end in 70–500 ms, and costs $0.042/Mtok input with free output — [TypeSafe blog](https://typesafe.ai/blog/introducing-system-one-models-and-jev). The current model is `jev-1.13.0` (64k context, text only) — [TypeSafe docs](https://docs.typesafe.ai/models).
- LangChain covered Jev on 18 Sep ("a System One model… doesn't generate text") — [LangChain blog](https://www.langchain.com/blog/building-a-harness-with-jev).
- The trending Space [multimodalart/jev-decision-index](https://hf.co/spaces/multimodalart/jev-decision-index) is #1 at 314 likes and was updated 28 Sep. It tracks 60+ open "repros", including internlm/Intern-Decision-0.8B/2B/4B, fastino/GLiNER2.5-Decide, jaredpalmer/kev-0.8b/4b/9b, llm-semantic-router/Decision-1.0-*, Mapika/decider-35b-a3b and google/diffusiongemma-26B-A4B-it — [Space README](https://hf.co/spaces/multimodalart/jev-decision-index).
- In-window Jev follow-ons:
  - [autotrust/JEV-27B](https://hf.co/autotrust/JEV-27B) (Apache-2.0, Qwen3.8-27B plus a LoRA decision head served from a single vLLM engine) is distilled from Jev 1.13 output distributions. It claims +0.22 pp over Jev 1.13 on six decision benchmarks, a self-reported figure — [autotrust blog, 27 Sep](https://huggingface.co/blog/autotrust/autotrustjev-27b-fast-calibrated-decisions-and-ful).
  - OpenDecider (Apache-2.0; ~400M "nano" and 4B Qwen3-4B LoRA "small") claims 0.792 on typed-decisions, beating Laya and Jev (self-reported) — [blog, 27 Sep](https://huggingface.co/blog/manjunathshiva/opendecider-beats-laya-and-jev); [model](https://hf.co/manjunathshiva/opendecider-small).
  - The trending dataset [LocalLLaMA/typed-decisions](https://hf.co/datasets/LocalLLaMA/typed-decisions) was updated 29 Sep.

**Other open-weight releases inside the window (not top-20 trending but new):**
- [NaiveAI/Naive-N0.5-Flash](https://hf.co/NaiveAI/Naive-N0.5-Flash): created 27 Sep, MIT license (HF-confirmed), trending score 97. The model is built on Xiaomi's MiMo-V2.5 base. [TechBooky, 28 Sep](https://www.techbooky.com/naiveai-releases-open-weight-model-built-with-ai-researchers/) describes it as a 309B MoE with 15.5B active, aimed at coding and AI research, with "AI systems helped design, test and optimise the model". The parameter count and the AI-designed claim are single-source (UNVERIFIED). FP8 and community NVFP4 and MLX quants appeared on 27–28 Sep ([HF search](https://huggingface.co/models?search=Naive-N0.5-Flash)). **WATCH**
- H Company Holo4, for computer-use agents: [Holo4-27B](https://hf.co/Hcompany/Holo4-27B) is 27.4B on a Qwen3.8-27B base under **CC-BY-NC-4.0**, and [Holo4-35B-A3B](https://hf.co/Hcompany/Holo4-35B-A3B) is 35.1B MoE on a Qwen3.6-35B-A3B base under **Apache-2.0**. Weights come in BF16, FP8, NVFP4 and GGUF, plus Holotron4 Nano — [HF blog, 28 Sep](https://huggingface.co/blog/Hcompany/holo4). **WATCH / TRY NOW for GUI agents**
- Huawei Ascend Tribe released the openPangu-2.0 pretraining, SFT and RL training code — [TechNode, 28 Sep](https://technode.com/2026/09/28/huawei-open-sources-openpangu-2-0-pretraining-sft-and-rl-code/) (single source, UNVERIFIED). **NO ACTION**

**Trending datasets (12:06 UTC)**

| # | Dataset | What / license | Updated | Flag |
|---|---|---|---|---|
| 1 | [XiaomiMiMo/MiMo-V2.6-RL-oss](https://hf.co/datasets/XiaomiMiMo/MiMo-V2.6-RL-oss) | Agentic RL environments for code (exec tests), cyber (vuln reproduction), general knowledge work (rubric judge), webdev (visual grading) and symbolic music. Docker images and a [verl fork](https://github.com/XiaomiMiMo/verl) included. Apache-2.0. 531 likes, 40K downloads. | 26 Sep | TRY NOW (agent RL) |
| 2 | [secemp9/arxiv-complete](https://hf.co/datasets/secemp9/arxiv-complete) | Full arXiv corpus. 500 likes, 104K downloads. | 19 Sep | WATCH |
| 3 | [MoreThought/Fable-5.1-Max-Reasoning-Filtered-10000x](https://hf.co/datasets/MoreThought/Fable-5.1-Max-Reasoning-Filtered-10000x) | By its name, filtered reasoning traces from Claude Fable 5.1 Max (card not read; provenance and ToS UNVERIFIED). 203 likes. | 24 Sep | NO ACTION |
| 4 | [nisten/opus5-5-doctor-patient-conversations-all-human-diseases](https://hf.co/datasets/nisten/opus5-5-doctor-patient-conversations-all-human-diseases) | By its name, synthetic medical dialogues generated with Claude Opus 5.5 (card not read). | 27 Sep | NO ACTION |
| 6 | [espnet/yodas3](https://hf.co/datasets/espnet/yodas3) | Large multilingual speech corpus (ASR, TTS, translation). CC-BY-3.0. 17.8K downloads. | 28 Sep | WATCH (speech) |
| 7 | [FineEnvs/SmolDataEnvs](https://hf.co/datasets/FineEnvs/SmolDataEnvs) | "5.5K+ RL tasks for hill-climbing small models in code and data science". Card shows a 2B model over 1,119 GRPO steps. MIT. | 27 Sep | TRY NOW (small-model RL) |
| 8 | [LocalLLaMA/typed-decisions](https://hf.co/datasets/LocalLLaMA/typed-decisions) | Typed-decision benchmark and data behind the Jev/Laya comparisons. 17.9K downloads. | 29 Sep | WATCH |
| 10 | [genrobot2025/Gen-HumanEgo](https://hf.co/datasets/genrobot2025/Gen-HumanEgo) | Egocentric human data for robotics (gated). 251K downloads. | 25 Sep | WATCH (robotics) |
| 11 | [openbmb/UltraData-SFT-Agent-2609](https://hf.co/datasets/openbmb/UltraData-SFT-Agent-2609) | Agent SFT data. 257 likes. | 6 Sep (context) | NO ACTION |

Also trending: [ZefanCai/Open-Jev](https://hf.co/datasets/ZefanCai/Open-Jev), [LightwheelAI/EgoDemo](https://hf.co/datasets/LightwheelAI/EgoDemo), [AxiomicLabs/Tiny_Theory_of_Mind](https://hf.co/datasets/AxiomicLabs/Tiny_Theory_of_Mind) and [eidon-ai/tracker-pov](https://hf.co/datasets/eidon-ai/tracker-pov) — [HF trending datasets](https://huggingface.co/datasets?sort=trending).

**Trending Spaces (12:06 UTC)**, from [HF trending Spaces](https://huggingface.co/spaces?sort=trending):
1. [multimodalart/jev-decision-index](https://hf.co/spaces/multimodalart/jev-decision-index): benchmarks and news on Jev repros (314 likes). WATCH.
2. [Pepe104/MiniMax-H3-Turbo-Lora-UNCENSORED](https://hf.co/spaces/Pepe104/MiniMax-H3-Turbo-Lora-UNCENSORED): video with a synced soundtrack (852 likes; created 14 Aug, context).
3. [Qwen/Qwen-Image-2.1](https://hf.co/spaces/Qwen/Qwen-Image-2.1): official demo. TRY NOW.
4. [convaiinnovations/laya-demo](https://hf.co/spaces/convaiinnovations/laya-demo). TRY NOW.
5. [Viggle/Qwen-Image-2.1-viggle-turbo](https://hf.co/spaces/Viggle/Qwen-Image-2.1-viggle-turbo): 6-step versus base comparison.
6. Several Qwen-Image-Edit and "uncensored GGUF" studios, plus Krea 2 Turbo.
7. [nvidia/nemotron-diarization](https://hf.co/spaces/nvidia/nemotron-diarization): live speaker diarization.
8. [Mothersuperior/yue2-hum-to-song](https://hf.co/spaces/Mothersuperior/yue2-hum-to-song): hum a melody and get a song (created 16 Sep; the YuE2 paper hit arXiv 27–29 Sep, below).

**Today's HF Daily Papers (29 Sep 2026, top by upvotes at 12:06 UTC)**, from [hf://papers/daily/latest](https://huggingface.co/papers/date/2026-09-29):
1. 2609.35347 DN-MOPD (95)
2. 2609.33757 YuE2 (73)
3. 2609.29233 Behavioral Shadows (70)
4. 2609.33295 TraceDance (53)
5. 2609.35457 Encoder-free scaling laws (47)
6. 2609.32712 MassAlloc Attention (47)
7. 2609.35432 Self-Evolving Coding Agents for the physical world (44)
8. 2609.35748 Adaptive Looped Transformers (39)
9. 2609.31948 Duplex-MPE (36)
10. 2609.35767 Native Reflection in Unified Models (30)
11. 2609.28236 EmbodiedMemory-Bench (29)
12. 2609.33665 CompoWorld (27)

Other 29 Sep entries include 2609.34327, 2609.32577, 2609.33378, 2609.33781, 2609.35560 (WorldPlay2), 2609.32534 (DepthBench), 2609.33642, 2609.33772 (Skill2Env), 2609.33803 (Diffusion Reward Models), 2609.33848 (QwenGyre), 2609.33382 (WideSWE) and 2609.32704 (CoWindow Attention). Details are in Q3.

**Mon 28 Sep daily top** ([HF](https://huggingface.co/papers/date/2026-09-28)): 2609.31620 FuseReg (118), 2609.26333 Disaggregated Quantization (61), 2609.18703 RayOrch (47), 2609.31093 Block Sparse Attention with Log-Linear Complexity (21), 2609.31394 InternW0-Δ (18), 2609.31473 Kaggle Game Arena.

**Fri 25 Sep daily top** ([HF](https://huggingface.co/papers/date/2026-09-25)): 2609.28654 Training Object Permanence in World Models (219), 2609.29845 Linear Superposition in LLMs (87), 2609.30221 WanPE (40), 2609.28416 Agent-Editing World Model (31), 2609.29421 Rufus-Air (28), 2609.30199 ExplorationBench (21), 2609.28603 Learning to Discover Interesting Mathematics (14).

**HF global trending papers (observed 12:06 UTC)** ([hf://papers/trending](https://huggingface.co/papers/trending)): this list is dominated by older classics. The top 20 includes:
- TradingAgents 2412.20138 (#1)
- SPEED-Bench 2604.09557
- RRSI: Regularized Recursive Self-Improvement of Agent Harnesses, 2609.24972 (212 upvotes; 22 Sep, context)
- OpenDevin 2407.16741, PagedAttention 2309.06180, SkillOpt 2605.23904, Mem0 2504.19413, SmolDocling 2503.11576, YuE 2503.08638, TimesFM 2310.10688
- NeoHorse-1 2609.08183 (325; 9 Sep, context)
- **Training Object Permanence in World Models 2609.28654** (220; the only in-window paper in the top 20)
- WorldCrafter 2609.24984 (156; 22 Sep), GAE 2609.24981 (70; 23 Sep), GameHorizon Suite 2609.25001 (130; 22 Sep)
- FreeToken 2608.16157

### Inferences
- The typed-decision / calibrated-classifier trend is the week's dominant open-source story. A closed API launch (Jev, 15 Sep) triggered dozens of open distillations and repros within two weeks, and several now claim to match or beat it on self-run benchmarks. Expect a benchmark shake-out; none of the "beats Jev" claims are independently verified.
- The Qwen 3.8 / Qwen-Image-2.1 generation has become the default base for community derivatives: quantization (Bonsai 2), agents (Holo4-27B), decisions (JEV-27B) and writing (Hemmingway-1).
- Many trending image and video repos are "uncensored" or "abliterated" derivatives with very high download counts (for example 1.15M for one GGUF), and the abliteration tool heretic is also GitHub-trending. That is a safety-relevant pattern worth a sentence in the report.
- Edge and local deployment is the other strong current: 1.7-bit 27B models, 24/7 streaming ASR and a 99M diarizer.

### Gaps
- HF trending shows current rank but not when each repo started trending, so I could not tell which movers rose specifically during 25–29 Sep.
- I did not read the dataset cards for the Fable-5.1 and Opus-5.5 synthetic datasets. Their provenance, and whether they comply with provider terms, are unknown.
- Why TeleOCR (created 14 Aug) is trending now is not documented.
- ZDTaichu5.0-9B has no license in its metadata.
- I did not find benchmark numbers for Holo4 or Naive-N0.5-Flash beyond the blog and news framing.

## 2. What notable open-source AI repos or tools gained traction on GitHub in the window?

### Takeaway
GitHub's weekly trending list is led by agent "skills" and multi-agent apps: archify (+24K stars/week), OpenMAIC, K-Dense scientific-agent-skills and minimind. The abliteration tool heretic and TimesFM also appear. I could not verify any inference-engine release (vLLM, SGLang, llama.cpp, Ollama, transformers) dated 25–29 Sep. GitHub's API and Atom feeds are blocked in this session, and the cached release pages I could retrieve date from early Sep or late Aug, so the latest releases I can cite are context.

### Cited Findings
**GitHub trending, weekly** ([github.com/trending?since=weekly](https://github.com/trending?since=weekly), fetched 29 Sep via Exa; the cache timestamp is not shown, so treat the stars/week figures as approximate):

| Repo | What | Stars (total / this week) | Flag |
|---|---|---|---|
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | Agent skill for verifiable architecture, workflow, sequence and data-flow diagrams, exported as self-contained HTML | 45,934 / +24,227 | TRY NOW (agent skill) |
| [bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view) | Browser spy-satellite simulator on real data; "open source spatial intelligence" on a 3D globe | 16,962 / +10,485 | NO ACTION |
| [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) | Open Multi-Agent Interactive Classroom | 31,082 / +10,023 | WATCH |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 165 validated Agent Skills and 100+ science databases (bio, chem, medicine, drug discovery); open Agent Skills standard | 42,390 / +7,370 | TRY NOW (AI for science) |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | "Train a 64M-parameter LLM from scratch in just 2h" | 58,253 / +3,122 | TRY NOW (education) |
| [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi) | One /v1 endpoint over "34 free LLM providers, 635 free model endpoints" | 24,120 / +3,194 | NO ACTION |
| [google-research/timesfm](https://github.com/google-research/timesfm) | Time-series foundation model; its paper 2310.10688 is also HF-trending | 30,714 / +2,324 | WATCH |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | "Fully automatic censorship removal for language models" | 30,322 / +2,146 | NO ACTION (safety signal) |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | Fully local ElevenLabs alternative (cloning, dubbing, transcription) | n/a | WATCH |
| [JetBrains/go-modern-guidelines](https://github.com/JetBrains/go-modern-guidelines) | Guidelines that help AI coding agents write modern Go | 3,111 / +1,213 | NO ACTION |

Out of scope and excluded: cursor/plugins (IDE), omarchy, zod, nitter, open-seo, awesome-gpt-image-2, openclaude.

**Other open-source tooling seen on the Hub:**
- `laya` pip package with HTTP-server, MCP-server, LangChain/LangGraph, ONNX and TileLang extras — [Laya card](https://hf.co/convaiinnovations/laya); code at [NandhaKishorM/laya](https://github.com/NandhaKishorM/laya).
- PrismML's ternary llama.cpp and MLX forks: [PrismML-Eng/llama.cpp](https://github.com/PrismML-Eng/llama.cpp) and [Bonsai-demo](https://github.com/PrismML-Eng/Bonsai-demo) — [Bonsai card](https://hf.co/prism-ml/Ternary-Bonsai-2-27B-gguf).
- Xiaomi's [verl fork](https://github.com/XiaomiMiMo/verl) for the MiMo-V2.6 RL environments — [dataset card](https://hf.co/datasets/XiaomiMiMo/MiMo-V2.6-RL-oss).

**Latest inference and fine-tuning releases I could retrieve (all context, before the window):**
- **vLLM v0.29.0**, 9 Sep 2026 — [release](https://github.com/vllm-project/vllm/releases):
  - 594 commits from 277 contributors
  - Model Runner V2 is now the default for all models
  - New models: Tencent Hy4-preview (770B / 49B active MoE), Qwen3.8-Flash-Next, Kimi K3 NVFP4
  - RL weight sync via a `sharded_rdt` P2P backend
  - Mamba prefix-caching TTFT improves 9–25%
  - Breaking: `python -m vllm.entrypoints.openai.api_server` is deprecated in favour of `vllm serve`
- **SGLang v0.5.18**, 22 Aug — [release](https://github.com/sgl-project/sglang/releases): 710 PRs; overlapped checkpoint staging (2.38x faster startup); NVFP4 checkpoints run on AMD via MXFP4 requantization; Kimi K3 tuned for MI355X.
- **Ollama v0.33.3**, 2 Sep — [release](https://github.com/ollama/ollama/releases): gemma4 images and audio on the MLX engine; cached prompt tokens reported. An earlier 26 Aug release added Qwen3.8-Flash-Next on MLX.
- **transformers v5.16.1**, 26 Aug — [release](https://github.com/huggingface/transformers/releases): adds GLM-5.3-Flash (320B / 18B active). v5.16.0 added Qwen4-Exp (GatedResidual + Qwen Sparse Attention + Per-Layer Embedding) and GraniteSpeech5.
- **llama.cpp**: the cached page showed build b10793 from 3 Sep ([releases](https://github.com/ggml-org/llama.cpp/releases)). llama.cpp publishes builds continuously, so this is stale.

### Inferences
- "Agent Skills" packages (archify, K-Dense scientific skills, JetBrains guidelines) are the fastest-growing open-source category on GitHub this week, more than new agent frameworks or inference engines.
- vLLM, SGLang, Ollama and transformers releases are clustered around Qwen 3.8/4, Kimi K3, DeepSeek V4 and GLM-5.x support plus Blackwell/AMD FP4 paths. Any release in the window would likely continue that pattern, but this is unverified.

### Gaps
- The GitHub API (`api.github.com`), the GitHub MCP (the session is scoped to mukhallad2022/copilot-hack) and the `releases.atom` feeds were all blocked. I therefore could not confirm whether vLLM, SGLang, llama.cpp, Ollama, transformers, Unsloth or TRL shipped releases on 25–29 Sep. The report writer should treat inference-engine news for the window as unknown.
- The GitHub trending snapshot's capture time is unknown (Exa cache), so exact stars-this-week may be off by a day or more.

## 3. Which research papers from Fri 25 Sep to Tue 29 Sep 2026 stand out, and why?

### Takeaway
The window's research is dominated by five threads:
- post-training mechanics: multi-teacher on-policy distillation, capability transfer through unrelated text, diffusion reward models, and an open 8-stage post-training recipe;
- agent RL infrastructure and environments: QwenGyre, CompoWorld, Skill2Env, TraceDance;
- world models: object permanence, WorldPlay2, InternW0-Δ;
- efficient attention and quantization: MALA, CoWindow, log-linear block-sparse attention, disaggregated quantization;
- AI for math and science: interestingness-driven theorem discovery, ExplorationBench.

The most-upvoted in-window paper is "Training Object Permanence in World Models" (220 upvotes, globally trending). The strongest alignment and interpretability items are "Behavioral Shadows" (capability transfer via single words) and "Linear Superposition in LLMs".

### Cited Findings
Dates below are arXiv v1 publication times, taken from the arXiv HTML metadata returned by the HF connector. Authors come from HF paper pages. An affiliation is given only where the page showed one.

**Reasoning, post-training and alignment**

| arXiv ID / date | Title / authors | One-line finding | Why it matters | Flag |
|---|---|---|---|---|
| [2609.35347](https://arxiv.org/abs/2609.35347), 29 Sep | *Beyond Teacher Assignment: Domain-Normalized Multi-Teacher On-Policy Distillation*. Xin Li, Hao Jiang, Xin Gao, …, Chau Yuen ([HF](https://huggingface.co/papers/2609.35347)) | In Qwen3.5 at three sizes, a multi-teacher OPD student does not beat one taught by the best single specialist. Instruction-following feedback is "several times more spread out" than math feedback and dominates the updates. Rescaling each domain's feedback (DN-MOPD) improves the average on six benchmarks at every size and recovers most of the math gain. | A cheap fix for the now-standard "RL specialists → one student" merge recipe. #1 HF daily paper today (95 upvotes). | READ |
| [2609.29233](https://arxiv.org/abs/2609.29233), 25 Sep | *Post-Training Leaves Behavioral Shadows on Unrelated Decisions*. Ziyang Zhang, Yubin Jing, Yuanhao Zeng, Yuyao Li, Haofan Wang, Yichen Gong ([HF](https://huggingface.co/papers/2609.29233)) | "Active Taskless Distillation" transfers capability using a single word from the teacher per prompt, on prompts where the shared ancestor is indifferent between two words. On Qwen2.5-1.5B coding it gives +5.34 pp on HumanEval+ over a matched control, with no code shown. | Extends "subliminal learning" from traits to capabilities. Relevant to distillation security, data provenance and the containment of hidden behaviours. | READ |
| [2609.33803](https://arxiv.org/abs/2609.33803), 29 Sep | *Diffusion Reward Models*. Xiangyang Wang, Bingxiang He, …, Zhiyuan Liu, Chaojun Xiao, Chun Yu ([HF](https://huggingface.co/papers/2609.33803)) | Recasts reward modeling as conditional density estimation: a lightweight DiT, conditioned on a frozen LLM encoder, denoises to reward vectors. It represents multimodal preferences and yields a variance and quantiles. Matches or beats baselines on 5 benchmarks. | Reward models that express disagreement and uncertainty. | READ |
| [2609.29421](https://arxiv.org/abs/2609.29421), 25 Sep | *Rufus-Air: An Open LLM Post-Training Recipe*. Chia-Yuan Chang, …, Bing Yin, …, Tuo Zhao ([HF](https://huggingface.co/papers/2609.29421)) | An 8-stage serial pipeline (SFT → reasoning, coding and IF RL → general, coding and search agent → RLHF) on GLM-4.5-Air-Base (106B-A12B), using only public data with no in-house teacher. It improves over the official GLM-4.5-Air post-trained model. | A fully documented, reproducible frontier-ish post-training recipe. The "Rufus" name suggests Amazon, but the affiliation is not shown (UNVERIFIED). | READ |
| [2609.35748](https://arxiv.org/abs/2609.35748), 29 Sep | *Improving Test-Time Scaling with Adaptive Looped Transformers*. Yichen You, Tianyu Fu, Aosong Feng, Xingtai Lv, Xuefei Ning, Ning Ding, Yu Wang ([HF](https://huggingface.co/papers/2609.35748)) | Fixed-depth looped transformers show steeper accuracy-per-FLOP-doubling slopes but underperform at matched compute. TaH2 learns per-token iteration decisions and improves both efficiency and attainable accuracy on AIME. | Latent-compute reasoning as a real alternative to longer chains of thought. | READ |
| [2609.33781](https://arxiv.org/abs/2609.33781), 29 Sep | *Surprising Success, Repeated Failure: Entropy-Guided Credit Assignment for Exploration in LLM Reasoning* ([HF](https://huggingface.co/papers/2609.33781)) | RLVR credit assignment without auxiliary models (HF summary only) | Incremental RLVR improvement | NO ACTION |
| [2609.34327](https://arxiv.org/abs/2609.34327), 29 Sep | *Knowing When Thinking Is Not Enough: Teaching Small Reasoning Models to Reason Beyond Their Parametric Knowledge* ([HF](https://huggingface.co/papers/2609.34327)) | For small reasoning models, more thinking is not always the right operation (HF summary only) | Small-model test-time compute versus retrieval | NO ACTION |

**Interpretability**
- [2609.29845](https://arxiv.org/abs/2609.29845), 25 Sep: *Your Transformer Can Hold Two Thoughts at Once: Evidence of Linear Superposition in LLMs*, by Pavel Tikhonov, Anton Korznikov, …, Anton Razzhigaev, Ivan Oseledets, Elena Tutubalina ([HF](https://huggingface.co/papers/2609.29845)). **READ**
  - Finding: linearly combining the input embeddings of two text streams makes the model output a superposition of the two next-token distributions. The authors argue this is intrinsic to the architecture. It diminishes during pretraining but can be restored by light fine-tuning. A guided decoder then generates two coherent continuations in one forward pass.
  - Why it matters: 87 upvotes. It bears on mechanistic interpretability and on parallel decoding.
- [2609.29362](https://arxiv.org/abs/2609.29362), HF daily 25 Sep: *Parts-of-Speech as Emergent Categories in SAE Latent Space* ([HF](https://huggingface.co/papers/2609.29362)). A controlled test of the linguistic structure that SAE latents expose. **NO ACTION**

**Agents, agent RL and agent benchmarks**
- [2609.33848](https://arxiv.org/abs/2609.33848), 29 Sep: *QwenGyre: An Elastic RL Framework for Training xLong-Horizon Agents*, by Weiqi Wang, Yuxin Zhou, Mouxiang Chen, …, Chujie Zheng, JianWei Zhang ([HF](https://huggingface.co/papers/2609.33848)). **READ**
  - Finding: QwenGyre elastically reallocates GPUs between rollout and training without interrupting live executions, and deduplicates branching trajectories.
  - Results: scaled to "our flagship model, Qwen 3.8 2.4T" with 700K tokens per rollout, it raises NL2RepoBench from 52.5% to 58.5% in 48 steps. Speedups reach 1.85x over Colocate and 1.78x over Async.
  - Why it matters: rare infrastructure detail from a frontier open-weight lab on RL with rollouts of up to about 1M tokens.
- [2609.33295](https://arxiv.org/abs/2609.33295), 29 Sep: *TraceDance*, by Dehai Min, …, Wei Xu, Philip S. Yu ([HF](https://huggingface.co/papers/2609.33295)). **READ (agent evals)**
  - Finding: builds targeted behaviour benchmarks from real deployment traces using "decision-point continuation" scoring, with no environment replay. From 252,557 sessions it produced 107 benchmarks with 4,125 instances and fulfilled 95.3% of build requests.
  - Why it matters: a practical route from production traces to regression tests for undesirable agent behaviour.
- [2609.33382](https://arxiv.org/abs/2609.33382), 29 Sep: *WideSWE: Can Coding Agents Coordinate Changes Across Repositories?*, by Baoyi Wang, Xingliang Wang, Jinyang Wu, Keming Wu, Chen Zhi, Jianwei Yin ([HF](https://huggingface.co/papers/2609.33382)). **WATCH**
  - Finding: 120 cross-repo tasks (60 bug fixes, 60 features) from 103 ecosystems. Full success ranges from 10.83% to 42.50% across 7 agent configurations; the best is Codex CLI with GPT-5.6-sol.
  - Why it matters: a new, clearly unsaturated coding-agent benchmark.
- [2609.33665](https://arxiv.org/abs/2609.33665) *CompoWorld: Compositional Environment Scaling for General Agents* and [2609.33772](https://arxiv.org/abs/2609.33772) *Skill2Env: Capability-Oriented Environment Synthesis from Skills*, both 29 Sep ([HF daily](https://huggingface.co/papers/date/2026-09-29)). Both scale synthetic executable environments for agent post-training. **WATCH**
- [2609.32577](https://arxiv.org/abs/2609.32577) *Groupwise Agentic Grading and Advantage Redistribution for Code Agent RL* (29 Sep) goes beyond binary test rewards in GRPO. [2609.33378](https://arxiv.org/abs/2609.33378) *Recursive Harness Distillation across Agents for Robot Manipulation* and [2609.35432](https://arxiv.org/abs/2609.35432) *Self-Evolving Coding Agents: From Digital Programs to Physical-World Intelligence* are both 29 Sep ([HF daily](https://huggingface.co/papers/date/2026-09-29)). **NO ACTION**
- [2609.31473](https://arxiv.org/abs/2609.31473), 28 Sep: *Game Arena: Strategic LLM Evaluation in Competitive Environments* (Kaggle Game Arena tech report; Bovard Doerschuk-Tiberi et al., 62 authors, [HF](https://huggingface.co/papers/2609.31473)). An open, ever-expanding head-to-head evaluation over Chess, Poker and Werewolf, designed not to saturate. **WATCH**
- [2609.31590](https://arxiv.org/abs/2609.31590) *AgentWorld: Benchmarking Long-Horizon Collaboration of Multi-agent LLMs* (arXiv 25 Sep; HF daily 28 Sep) and [2609.28236](https://arxiv.org/abs/2609.28236) *EmbodiedMemory-Bench* (HF daily 29 Sep) — [HF daily 28 Sep](https://huggingface.co/papers/date/2026-09-28). **NO ACTION**
- Decision-model research: [2609.29429](https://arxiv.org/abs/2609.29429) *Just Ask Jev: RL for Calibrated Decisions as a Zero-Shot Detector of AI Alignment Failures* (HF daily 25 Sep) and [2609.30216](https://arxiv.org/abs/2609.30216) *Jev in the Wild* (HF daily 28 Sep) — [HF](https://huggingface.co/papers/2609.29429). **WATCH**

**Efficiency (attention, quantization, architecture)**
- [2609.32712](https://arxiv.org/abs/2609.32712), 29 Sep: *MassAlloc Attention (MALA)*, by Jingze Shi, …, Guang Liu, Yuyu Luo ([HF](https://huggingface.co/papers/2609.32712)). A fused attention primitive that keeps score access to every causal pair but skips low-contribution post-score work. Under matched work, mean omitted mass is 0.0188% against an oracle's 0.0182%, tested at 1K–32K. **WATCH**
- [2609.32704](https://arxiv.org/abs/2609.32704) *CoWindow Attention: Full Causal Coverage Is a Collective Property* (29 Sep) and [2609.31093](https://arxiv.org/abs/2609.31093) *Block Sparse Attention with Log-Linear Complexity* (arXiv 25 Sep; HF daily 28 Sep) — [HF daily](https://huggingface.co/papers/date/2026-09-29). **WATCH**
- [2609.26333](https://arxiv.org/abs/2609.26333), arXiv 23 Sep (context; HF daily 28 Sep, 61 upvotes): *Disaggregated Quantization: Specializing LLM Prefill and Decode*, by Andrei Panferov, Maximilian Kleinegger, Sweta Priyadarshi, Tijmen Blankevoort, Dan Alistarh ([HF](https://huggingface.co/papers/2609.26333)). **READ / TRY NOW for local inference**
  - Finding: use separate formats and weights for prefill and decode. With released Qwen3.8-27B GGUF decoders, adding an NVFP4 prefiller improves 1-bit accuracy by +32.5 on MMLU-Pro and +35.3 on MMMU-Pro. Offloaded prefill from SSD gives a 1.78x TTFT speedup at 8K.
  - Why it matters: directly relevant to the ternary/1-bit local-model trend (Bonsai 2).
- [2609.35457](https://arxiv.org/abs/2609.35457), 29 Sep: *How Far Are We from Removing the Visual Encoder? Scaling Laws for Encoder-Free Multimodal Pretraining*, by Lin Chen, Bolin Ni, …, Shiming Xiang ([HF](https://huggingface.co/papers/2609.35457)). **READ**
  - Finding: encoder-free MLLMs underperform at small scale but are predicted to catch up at about 10^22 FLOPs. Removing the encoder shifts compute-optimal allocation toward larger models, and the LLM takes over the vision role through earlier-layer processing and more concentrated expert routing.
  - Why it matters: an architecture roadmap for unified multimodal models.
- [2609.32534](https://arxiv.org/abs/2609.32534) *DepthBench: Measuring How Residual Connections Enable More Computational Depth* (29 Sep) — [HF daily](https://huggingface.co/papers/date/2026-09-29). **NO ACTION**

**Multimodal, generative and world models**
- [2609.28654](https://arxiv.org/abs/2609.28654), 25 Sep: *Training Object Permanence in World Models*, by Haotian Zhang, Fengyuan Yu, Dezhi Luo, …, Freda Shi, Chandra Sripada (+9) ([HF](https://huggingface.co/papers/2609.28654)). **READ**
  - What they built: WROP, 150 cognitive-science tasks with Blender generators, a 1.5M-sample training corpus and a 300-question exam.
  - Results: of 14 video models evaluated, their 16B PWM-WROP ranks first among continuation models and third overall in a blind Elo study.
  - Releases: data, weights and a native-PyTorch training stack for AWS Trainium2.
  - Why it matters: 220 upvotes, the top in-window paper and globally trending. It is an open recipe for core-cognition priors in video world models.
- [2609.33757](https://arxiv.org/abs/2609.33757), 29 Sep: *YuE2: Unifying Symbolic and Audio Music Generation at Frontier Quality*, by Ruibin Yuan, Jiahao Pan, …, Ge Zhang, … (35 authors; HF org tag "Multimodal Art Projection") ([HF](https://huggingface.co/papers/2609.33757)). **WATCH** (weight release not verified)
  - Finding: a single AR-NAR Mixture-of-Transformers writes a readable score, then semantic tokens, then full-song audio. It scores 6.73 on WildSongBench (6.96 best-of-8). Experts favoured best-of-8 over Suno v4.5, with near-balanced preferences against Suno v5.
  - Why it matters: open music generation approaching proprietary quality.
- [2609.31620](https://arxiv.org/abs/2609.31620), 28 Sep: *FuseReg*, by Hongyang Du, …, Randall Balestriero, Yue Wang ([HF](https://huggingface.co/papers/2609.31620)). Trains representation-autoencoder decoders over random subsets of encoder layers (ImageNet-256, DINOv3-L), easing the reconstruction-versus-generation trade-off. 118 upvotes, #1 on 28 Sep. **WATCH**
- [2609.35560](https://arxiv.org/abs/2609.35560) *WorldPlay2* (real-time interactive world model, 29 Sep), [2609.31394](https://arxiv.org/abs/2609.31394) *InternW0-Δ* (world action model trained on "20K+ Hours of Open Data", 28 Sep), [2609.35767](https://arxiv.org/abs/2609.35767) *Learning Native Reflection in Unified Models with Interleaved RL* (29 Sep) and [2609.34972](https://arxiv.org/abs/2609.34972) *Just MLPs* (visual state reconstruction, 29 Sep) — [HF daily](https://huggingface.co/papers/date/2026-09-29). **WATCH**
- [2609.31948](https://arxiv.org/abs/2609.31948) *Duplex-MPE: Benchmarking Multi-Party Interaction in Full-Duplex Dialogue* (25 Sep; HF daily 29 Sep) — [HF](https://huggingface.co/papers/2609.31948). **NO ACTION**

**AI for math and science**
- [2609.28603](https://arxiv.org/abs/2609.28603), 25 Sep: *Learning to Discover Interesting Mathematics*, by Niket Patel, Ahmad Rammal, Amaury Hayat, Remi Munos, Julia Kempe ([HF](https://huggingface.co/papers/2609.28603)). **READ**
  - Finding: defines a theorem's intrinsic interestingness as proof length divided by statement length, and shows it correlates with downstream utility. A 27B proof-difficulty predictor beats frontier general models. Optimizing for the metric cuts overlap with Mathlib from 91.9% to 30.6% and builds a self-expanding library.
  - Why it matters: moves automated math from solving problems to choosing what is worth proving.
- [2609.30199](https://arxiv.org/abs/2609.30199), 25 Sep: *ExplorationBench: Measuring AI Systems' Exploration in Verifiable Alien Worlds*, by Ming Zhang, …, Xuanjing Huang, … (HF org tag "Tencent Hunyuan") ([HF](https://huggingface.co/papers/2609.30199)). Executable "alien" rules that conflict with prior knowledge, so recall cannot solve them: AlienCode (31 discovery targets, 70 tasks) and AlienLogic (24 targets, 70 tasks). **WATCH**

### Inferences
- Harness engineering and self-improvement are the meta-theme. The trending RRSI and NeoHorse-1 papers (context) join in-window harness distillation, RoboFoundry and self-evolving coding agents, alongside synthetic environments (CompoWorld, Skill2Env, MiMo-V2.6-RL-oss, SmolDataEnvs). Labs and the community are investing in the scaffolding around frozen models and in RL environment supply.
- Two in-window papers point to under-appreciated channels by which training signal moves between models: capability via single-word choices (Behavioral Shadows) and domain imbalance in OPD (DN-MOPD). Both matter for anyone distilling from frontier models, which is exactly what the Jev-repro and "Fable/Opus traces" datasets on the Hub are doing.
- Efficiency work is converging on adaptive compute (MALA, TaH2, CoWindow, log-linear block-sparse attention) and phase-specialized quantization (DQ). That pairs naturally with the on-device model trend.

### Gaps
- HF paper pages do not show institutional affiliations for most papers. Only YuE2 (Multimodal Art Projection) and ExplorationBench (Tencent Hunyuan) carried org tags, and QwenGyre's Qwen origin is inferred from the title and content. I did not open arXiv PDFs to confirm affiliations.
- The arXiv listing pages for cs.CL, cs.LG and cs.AI, AlphaXiv, and lab research blogs (Anthropic, OpenAI, DeepMind, FAIR, AI2) were not checked directly because of search rate limits (the Parallel free tier was exhausted). There may be notable lab papers in the window that did not reach HF Daily Papers.
- Code and weight availability for YuE2, DN-MOPD, TaH2 and MALA was not verified.

## 4. Did any notable leaderboard or benchmark results change in the window?

### Takeaway
The only dated in-window leaderboard move I found is Claude Opus 5.5 debuting at #1 on LMArena Text at 1509±12. That comes from one news report (26 Sep) and could not be confirmed on lmarena.ai, which is blocked here; the cached copy is from 2 Sep. It is a flagship closed-model launch, so it is noted briefly. Third-party aggregators disagree sharply on ARC-AGI-3, SWE-bench Verified and HLE numbers, so no leaderboard figure should be reported without its specific source and harness. METR's time-horizon page shows no update since May 2026. New benchmarks released in the window (WideSWE, Kaggle Game Arena, ExplorationBench, TraceDance, AgentWorld, EmbodiedMemory-Bench) matter more for open research than rank changes.

### Cited Findings
- **LMArena Text**: [CryptoBriefing, 26 Sep](https://cryptobriefing.com/claude-opus-5-5-text-arena-number-one/) reports Claude Opus 5.5 (launched 22 Sep) debuting at #1 with 1509±12. The same article reports 66.4% on Terminal-Bench 4.0, 1846 Elo on GDPval-AA v2.1, 57.8% on CursorBench 4.0 and an Intelligence Index of 58. **UNVERIFIED (single source).**
- The last LMArena snapshot I could retrieve was dated 2 Sep 2026 (7,999,020 votes, 400 models) — [lmarena.ai/leaderboard/text](https://lmarena.ai/leaderboard/text), via the Exa cache:
  - #1 claude-fable-5 at 1507±5, #2 claude-opus-4-6-high at 1505±4, #3 claude-fable-5.1-max at 1504±11
  - Top open-licence entries: kimi-k3-max #12 at 1489±5 (Kimi K3 licence) and glm-5.3-max #20 at 1482±7 (MIT)
- **Terminal-Bench 4.0**: [ModelCap](https://modelcap.ai/benchmarks) (snapshot 17 Sep) lists GPT-6 Astra leading at 58.2%, published 3 Sep. If Opus 5.5's 66.4% is on the same harness, it would be a new top score, but that is UNVERIFIED.
- **ARC-AGI-3**: the sources conflict.
  - [ModelCap](https://modelcap.ai/benchmarks) and [LLMLearner](https://llmlearner.com/rankings/arc-agi-3) list GPT-6 Astra as SOTA at 62.7% (3–4 Sep).
  - [BenchLeader](https://www.benchleader.com/benchmarks/arc_agi_3) (19 Sep) lists GPT-6 Astra (high) at 99.9% and Claude Opus 5 (high) at 30.2%.
  - [arcprize.org/leaderboard](https://arcprize.org/leaderboard) did not render scores in my fetch. No in-window change was found.
- **SWE-bench Verified**: the sources conflict.
  - [LLMBoard](https://www.llmboard.ai/benchmarks/swe-bench-verified-581) (updated 18 Sep) has Claude Fable 5 at 95.0%, Claude Mythos Preview at 93.9% and Claude Opus 4.8 at 88.6%. Its top open-weight entries are DeepSeek-V4-Pro-Max at 80.6%, MiniMax M3 at 80.5% and Qwen3.7 Max at 80.4%.
  - [BenchLeader (any scaffold)](https://www.benchleader.com/benchmarks/swe_bench_verified_any) (18 Sep) has Claude Opus 4.5 at 79.2%.
  - [swebench.com](https://www.swebench.com/) did not render its table in my fetch. No in-window change was found.
- **Humanity's Last Exam**: the sources conflict.
  - [LLMBoard](https://www.llmboard.ai/benchmarks/humanity-s-last-exam-264) (18 Sep): Fable 5.1 at 65.0%.
  - [PricePerToken](https://pricepertoken.com/leaderboards/benchmark/hle) (20 Sep): Fable 5.1 at 59.1%.
  - [BenchLeader / Epoch Hub](https://www.benchleader.com/benchmarks/hle) (18 Sep): Fable 5.1 at 46.5%.
  - [modelgrep](https://modelgrep.com/benchmarks/humanitys-last-exam) (undated "September 2026"): Claude Opus 5.5 leads at 61.4% ahead of Fable 5.1 at 59.1%. UNVERIFIED; if accurate, this is an in-window change on the Artificial Analysis-style run.
- **METR time horizons**: the page shows "May 8, 2026, Time Horizon 1.1 (Current)" with no newer measurement visible — [METR](https://metr.org/time-horizons/). No in-window update found.
- **New in-window benchmark results (open research):**
  - WideSWE: best 42.50% (Codex CLI + GPT-5.6-sol), worst 10.83% — [2609.33382](https://huggingface.co/papers/2609.33382).
  - QwenGyre: NL2RepoBench 52.5% → 58.5% on Qwen 3.8 2.4T — [2609.33848](https://huggingface.co/papers/2609.33848).
  - YuE2: WildSongBench 6.73, or 6.96 best-of-8 — [2609.33757](https://huggingface.co/papers/2609.33757).
  - Kaggle Game Arena tech report (Chess, Poker, Werewolf) — [2609.31473](https://huggingface.co/papers/2609.31473).
- **Community leaderboards for decision models on the Hub:** [jev-decision-index](https://hf.co/spaces/multimodalart/jev-decision-index) and [typed-decision-leaderboard](https://hf.co/spaces/mayafree/typed-decision-leaderboard) (the latter listed as a demo Space on the [Laya card](https://hf.co/convaiinnovations/laya)).

### Inferences
- The frontier (closed) leaderboards appear to have moved in the window only through the Opus 5.5 debut (Arena, possibly Terminal-Bench 4.0 and HLE). All of that is single-source and outside this researcher's core scope.
- The spread between aggregators (for example ARC-AGI-3 at 62.7% vs 99.9%, HLE at 46.5–65.0% for the same model) most likely reflects different harnesses, subsets or stale data. The report should cite primary boards only, or clearly label aggregator numbers.
- For open weights, the relevant signals are: Kimi K3 and GLM-5.3 remain the top open-licence entries on Arena (as of 2 Sep), DeepSeek-V4-Pro-Max, MiniMax M3 and Qwen3.7 Max sit around 80% on SWE-bench Verified in aggregator tables, and Qwen 3.8 2.4T now has an agentic-RL result published (NL2RepoBench 58.5%).

### Gaps
- lmarena.ai is blocked by the egress proxy, and arcprize.org and swebench.com did not render tables, so no primary-source confirmation of any in-window leaderboard change was possible.
- Epoch AI's Benchmarking Hub and Artificial Analysis were not fetched directly. Figures attributed to them come via aggregators.
- I found no dated Terminal-Bench (tbench.ai) or ARC Prize announcement inside 25–29 Sep.
