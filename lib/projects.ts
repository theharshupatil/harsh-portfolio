export type Project = {
  slug: string;
  number: string;
  title: string;
  discipline: string;
  summary: string;
  problem: string;
  build: string;
  implementation: string;
  engineeringNotes: string;
  verifiedOutcome: string;
  technologies: string[];
  repository: string | null;
};

export const projects: Project[] = [
  {
    slug: "automated-bode-plot-measurement",
    number: "01",
    title: "Automated Bode Plot Measurement",
    discipline: "INSTRUMENTATION / AUTOMATION",
    summary:
      "Software for automating frequency-response measurements with oscilloscopes and function generators.",
    problem:
      "Measuring a system's frequency response involves coordinating a signal source, an oscilloscope, and a sweep of input frequencies. The project description identifies this measurement workflow as the part to automate.",
    build:
      "A measurement tool intended to control lab instruments, collect frequency-response data, and generate Bode plots.",
    implementation:
      "The available project notes list Python, SCPI, MATLAB, and laboratory instrumentation. They do not specify instrument models, command sequences, sweep configuration, or the division of work between Python and MATLAB.",
    engineeringNotes:
      "The central engineering concern is keeping instrument control, data acquisition, and plot generation consistent across a frequency sweep. The supplied notes do not document the specific synchronization or error-handling decisions.",
    verifiedOutcome:
      "Automated Bode-plot generation is the stated project goal. No accuracy, timing, or measurement results were supplied.",
    technologies: ["Python", "SCPI", "MATLAB", "Instrumentation"],
    repository: null,
  },
  {
    slug: "reasoninglab",
    number: "02",
    title: "ReasoningLab",
    discipline: "LLM SYSTEMS / RESEARCH",
    summary:
      "An exploration of how to allocate computation at inference time to improve the reasoning process of large language models.",
    problem:
      "A model can spend different amounts of computation on a response. The project investigates how that inference-time budget can be allocated across reasoning strategies.",
    build:
      "A research-oriented software project focused on inference-time computation allocation for large language models.",
    implementation:
      "The existing project notes mention self-consistency, verification, search, and adaptive compute allocation. Python and large language models are the listed tools; model details and evaluation setup were not included.",
    engineeringNotes:
      "The core question is how to compare strategies that use different amounts of inference compute. The available notes do not identify a benchmark, allocation algorithm, or experimental protocol.",
    verifiedOutcome:
      "The project scope is documented, but no comparative findings or performance results were supplied.",
    technologies: ["Python", "LLMs", "Inference-time compute"],
    repository: null,
  },
  {
    slug: "instruction-rrip",
    number: "03",
    title: "Instruction-RRIP Cache Policy",
    discipline: "COMPUTER ARCHITECTURE",
    summary:
      "An instruction-aware cache replacement policy implemented in ChampSim.",
    problem:
      "Cache replacement decisions influence which data remains available to a processor. This project explores an instruction-aware variation on RRIP in the ChampSim simulator.",
    build:
      "An Instruction-RRIP cache replacement policy for experimentation within ChampSim.",
    implementation:
      "The current notes identify C++ and ChampSim. They do not include the policy's exact state, insertion or promotion rules, workload configuration, or baseline comparison.",
    engineeringNotes:
      "The policy's behavior depends on how instruction context influences replacement state and how that state is evaluated against existing policies. The implementation details and experimental methodology were not supplied.",
    verifiedOutcome:
      "The implementation is described as a ChampSim project. No cache-performance results or benchmark numbers were supplied.",
    technologies: ["C++", "ChampSim", "Cache replacement"],
    repository: null,
  },
  {
    slug: "sky130-standard-cell-design",
    number: "04",
    title: "Sky130 Standard-Cell Design",
    discipline: "VLSI / CIRCUIT DESIGN",
    summary:
      "Digital standard-cell design and simulation using the Sky130 process design kit.",
    problem:
      "Standard cells are the reusable building blocks of digital circuits. This project explores their design and simulation within the Sky130 process design kit.",
    build:
      "Digital standard-cell work involving transistor sizing, timing characterization, and physical-design considerations.",
    implementation:
      "The supplied project description names Sky130, NGSpice, Magic, and CMOS circuit design. It does not specify the cells, schematics, characterization conditions, or layout results.",
    engineeringNotes:
      "Cell design brings together transistor-level behavior, timing, and physical constraints. The available notes do not include sizing trade-offs, simulation setup, or verification details.",
    verifiedOutcome:
      "Standard-cell design and simulation are documented as the project scope. No area, timing, power, or fabrication results were supplied.",
    technologies: ["Sky130", "NGSpice", "Magic", "CMOS"],
    repository: null,
  },
  {
    slug: "digital-communications",
    number: "05",
    title: "Digital Communications",
    discipline: "SIGNAL PROCESSING / SOFTWARE RADIO",
    summary:
      "A technical exploration identified in the project brief as involving GNU Radio and digital communications.",
    problem:
      "The supplied brief names GNU Radio and digital communications as an area of project work, but does not describe a specific communication problem or system.",
    build:
      "The available material does not identify a particular GNU Radio flowgraph, transmitter, receiver, or experiment.",
    implementation:
      "GNU Radio and digital communications are the only supplied technical details. Modulation, channel, hardware, and implementation specifics are not documented.",
    engineeringNotes:
      "A meaningful technical case study needs the signal chain, design constraints, and validation approach. Those details were not present in the supplied files, so they are intentionally not inferred here.",
    verifiedOutcome:
      "This entry records the project area from the brief only. No implementation or results were supplied.",
    technologies: ["GNU Radio", "Digital communications"],
    repository: null,
  },
];
