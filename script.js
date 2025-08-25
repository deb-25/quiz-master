const quizData = {
  maths: {
    easy: [
      { question: "What is the derivative of $f(x) = 3x^2 - 5x + 2$?", options: ["A. $6x - 5$", "B. $3x - 5$", "C. $6x + 2$", "D. $3x^2 - 5$"], answer: "A. $6x - 5$" },
      { question: "Evaluate the integral: $\\int (2x + 3) dx$", options: ["A. $x^2 + 3x + C$", "B. $2x^2 + 3x + C$", "C. $x^2 + C$", "D. $2x + C$"], answer: "A. $x^2 + 3x + C$" },
      { question: "What is the value of $\\sin(\\pi/2)$?", options: ["A. 0", "B. 1", "C. -1", "D. $\\sqrt{2}/2$"], answer: "B. 1" },
      { question: "Solve for x: $2x - 7 = 3$", options: ["A. 3", "B. 4", "C. 5", "D. 6"], answer: "C. 5" },
      { question: "What is the determinant of a 2x2 identity matrix?", options: ["A. 0", "B. 1", "C. 2", "D. -1"], answer: "B. 1" },
    ],
    medium: [
      { question: "Find the limit: $\\lim_{x \\to 0} \\frac{\\sin(x)}{x}$", options: ["A. 0", "B. 1", "C. $\\infty$", "D. Does not exist"], answer: "B. 1" },
      { question: "What is the general solution to the differential equation $\\frac{dy}{dx} = 2x$?", options: ["A. $y = x^2 + C$", "B. $y = 2 + C$", "C. $y = 2x^2 + C$", "D. $y = x + C$"], answer: "A. $y = x^2 + C$" },
      { question: "If $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$, what is $A^{-1}$?", options: ["A. $\\frac{1}{2}\\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix}$", "B. $\\frac{1}{-2}\\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix}$", "C. $\\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix}$", "D. $\\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$"], answer: "B. $\\frac{1}{-2}\\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix}$" },
      { question: "What is the sum of the infinite geometric series $1 + 1/2 + 1/4 + ...$?", options: ["A. 1", "B. 2", "C. $\\infty$", "D. 0.5"], answer: "B. 2" },
      { question: "Find the critical points of $f(x) = x^3 - 6x^2 + 9x + 1$", options: ["A. x=1, x=3", "B. x=0, x=1", "C. x=3, x=9", "D. x=0, x=3"], answer: "A. x=1, x=3" },
    ],
    hard: [
      { question: "Evaluate the double integral $\\iint_R xy \\, dA$ where R is the region $0 \\le x \\le 1$, $0 \\le y \\le 2$", options: ["A. 1", "B. 2", "C. 0.5", "D. 4"], answer: "A. 1" },
      { question: "What is the Laplace transform of $f(t) = e^{at}$?", options: ["A. $\\frac{1}{s-a}$", "B. $\\frac{1}{s+a}$", "C. $\\frac{a}{s-a}$", "D. $\\frac{s}{s-a}$"], answer: "A. $\\frac{1}{s-a}$" },
      { question: "Solve the system of equations: $x + y = 5$, $2x - y = 1$", options: ["A. x=2, y=3", "B. x=3, y=2", "C. x=1, y=4", "D. x=4, y=1"], answer: "A. x=2, y=3" },
      { question: "What is the divergence of the vector field $\\mathbf{F}(x,y,z) = x^2\\mathbf{i} + y^2\\mathbf{j} + z^2\\mathbf{k}$?", options: ["A. $2x+2y+2z$", "B. $x+y+z$", "C. $x^2+y^2+z^2$", "D. $0$"], answer: "A. $2x+2y+2z$" },
      { question: "Find the Fourier series for $f(x) = x$ on $[-\\pi, \\pi]$", options: ["A. $\\sum_{n=1}^{\\infty} \\frac{2(-1)^{n+1}}{n} \\sin(nx)$", "B. $\\sum_{n=1}^{\\infty} \\frac{2(-1)^{n}}{n} \\cos(nx)$", "C. $\\sum_{n=1}^{\\infty} \\frac{1}{n} \\sin(nx)$", "D. $\\sum_{n=1}^{\\infty} \\frac{1}{n} \\cos(nx)$"], answer: "A. $\\sum_{n=1}^{\\infty} \\frac{2(-1)^{n+1}}{n} \\sin(nx)$" },
    ],
  },
  physics: {
    easy: [
      { question: "What is Newton's second law of motion?", options: ["A. $F=ma$", "B. $E=mc^2$", "C. $V=IR$", "D. $P=IV$"], answer: "A. $F=ma$" },
      { question: "What is the SI unit of force?", options: ["A. Joule", "B. Watt", "C. Newton", "D. Pascal"], answer: "C. Newton" },
      { question: "Which of the following is a scalar quantity?", options: ["A. Velocity", "B. Acceleration", "C. Mass", "D. Force"], answer: "C. Mass" },
      { question: "What is the formula for kinetic energy?", options: ["A. $mgh$", "B. $\\frac{1}{2}mv^2$", "C. $Pt$", "D. $Fd$"], answer: "B. $\\frac{1}{2}mv^2$" },
      { question: "What is the speed of light in a vacuum (approximately)?", options: ["A. $3 \\times 10^8$ m/s", "B. $3 \\times 10^5$ m/s", "C. $3 \\times 10^6$ m/s", "D. $3 \\times 10^7$ m/s"], answer: "A. $3 \\times 10^8$ m/s" },
    ],
    medium: [
      { question: "A car accelerates from rest to 20 m/s in 5 seconds. What is its acceleration?", options: ["A. 2 m/s$^2$", "B. 4 m/s$^2$", "C. 5 m/s$^2$", "D. 10 m/s$^2$"], answer: "B. 4 m/s$^2$" },
      { question: "What is the principle behind a hydraulic lift?", options: ["A. Archimedes' Principle", "B. Bernoulli's Principle", "C. Pascal's Principle", "D. Newton's Third Law"], answer: "C. Pascal's Principle" },
      { question: "Calculate the work done if a force of 10 N moves an object 5 meters in the direction of the force.", options: ["A. 2 J", "B. 5 J", "C. 50 J", "D. 100 J"], answer: "C. 50 J" },
      { question: "What is the phenomenon where light bends as it passes from one medium to another?", options: ["A. Reflection", "B. Diffraction", "C. Refraction", "D. Interference"], answer: "C. Refraction" },
      { question: "According to Ohm's Law, what is the relationship between voltage (V), current (I), and resistance (R)?", options: ["A. $V=IR$", "B. $I=VR$", "C. $R=VI$", "D. $V=I/R$"], answer: "A. $V=IR$" },
    ],
    hard: [
      { question: "Derive the formula for the period of a simple pendulum.", options: ["A. $T = 2\\pi\\sqrt{L/g}$", "B. $T = 2\\pi\\sqrt{g/L}$", "C. $T = \\sqrt{L/g}$", "D. $T = 2\\pi Lg$"], answer: "A. $T = 2\\pi\\sqrt{L/g}$" },
      { question: "Explain the photoelectric effect and its significance.", options: ["A. Emission of electrons when light shines on a material, proving light's particle nature.", "B. Bending of light around obstacles.", "C. Splitting of light into its constituent colors.", "D. The phenomenon of total internal reflection."], answer: "A. Emission of electrons when light shines on a material, proving light's particle nature." },
      { question: "What is the Heisenberg Uncertainty Principle?", options: ["A. It's impossible to know both the exact position and momentum of a particle simultaneously.", "B. Energy cannot be created or destroyed.", "C. For every action, there is an equal and opposite reaction.", "D. The speed of light is constant for all observers."], answer: "A. It's impossible to know both the exact position and momentum of a particle simultaneously." },
      { question: "Describe the concept of black holes in general relativity.", options: ["A. Regions of spacetime where gravity is so strong that nothing, not even light, can escape.", "B. Stars that have exhausted their nuclear fuel and collapsed.", "C. Regions of space with extremely low temperature.", "D. Hypothetical tunnels connecting different points in spacetime."], answer: "A. Regions of spacetime where gravity is so strong that nothing, not even light, can escape." },
      { question: "What is the difference between a conductor, insulator, and semiconductor?", options: ["A. Conductors allow free electron flow, insulators restrict it, semiconductors have intermediate conductivity.", "B. Conductors have high resistance, insulators have low resistance, semiconductors have zero resistance.", "C. Conductors are solids, insulators are liquids, semiconductors are gases.", "D. Conductors are magnetic, insulators are non-magnetic, semiconductors are diamagnetic."], answer: "A. Conductors allow free electron flow, insulators restrict it, semiconductors have intermediate conductivity." },
    ],
  },
  chemistry: {
    easy: [
      { question: "What is the chemical symbol for water?", options: ["A. $H_2O$", "B. $CO_2$", "C. $NaCl$", "D. $O_2$"], answer: "A. $H_2O$" },
      { question: "Which element has the atomic number 6?", options: ["A. Oxygen", "B. Nitrogen", "C. Carbon", "D. Hydrogen"], answer: "C. Carbon" },
      { question: "What is the pH of a neutral solution at 25°C?", options: ["A. 0", "B. 7", "C. 14", "D. 1"], answer: "B. 7" },
      { question: "What type of bond is formed when electrons are shared between atoms?", options: ["A. Ionic bond", "B. Metallic bond", "C. Covalent bond", "D. Hydrogen bond"], answer: "C. Covalent bond" },
      { question: "Which gas is most abundant in Earth's atmosphere?", options: ["A. Oxygen", "B. Carbon Dioxide", "C. Nitrogen", "D. Argon"], answer: "C. Nitrogen" },
    ],
    medium: [
      { question: "Balance the chemical equation: $CH_4 + O_2 \\to CO_2 + H_2O$", options: ["A. $CH_4 + O_2 \\to CO_2 + 2H_2O$", "B. $CH_4 + 2O_2 \\to CO_2 + 2H_2O$", "C. $CH_4 + O_2 \\to 2CO_2 + H_2O$", "D. $2CH_4 + O_2 \\to CO_2 + H_2O$"], answer: "B. $CH_4 + 2O_2 \\to CO_2 + 2H_2O$" },
      { question: "What is the molar mass of $H_2SO_4$ (Sulfuric Acid)? (Atomic masses: H=1, S=32, O=16)", options: ["A. 98 g/mol", "B. 64 g/mol", "C. 49 g/mol", "D. 128 g/mol"], answer: "A. 98 g/mol" },
      { question: "Describe the concept of electronegativity.", options: ["A. The ability of an atom to attract electrons in a chemical bond.", "B. The energy required to remove an electron from an atom.", "C. The energy released when an electron is added to an atom.", "D. The tendency of an atom to form positive ions."], answer: "A. The ability of an atom to attract electrons in a chemical bond." },
      { question: "What is an isotope?", options: ["A. Atoms of the same element with different numbers of neutrons.", "B. Atoms of different elements with the same number of protons.", "C. Ions with a positive charge.", "D. Molecules with the same chemical formula but different structures."], answer: "A. Atoms of the same element with different numbers of neutrons." },
      { question: "What is the primary function of a catalyst in a chemical reaction?", options: ["A. To increase the activation energy.", "B. To decrease the reaction rate.", "C. To provide an alternative reaction pathway with lower activation energy.", "D. To change the equilibrium position of a reaction."], answer: "C. To provide an alternative reaction pathway with lower activation energy." },
    ],
    hard: [
      { question: "Explain the concept of hybridization in organic chemistry with an example.", options: ["A. Mixing of atomic orbitals to form new hybrid orbitals, e.g., $sp^3$ in methane.", "B. The process of breaking down large molecules into smaller ones.", "C. The formation of polymers from monomers.", "D. The reaction of an acid with a base."], answer: "A. Mixing of atomic orbitals to form new hybrid orbitals, e.g., $sp^3$ in methane." },
      { question: "Calculate the pH of a 0.1 M solution of acetic acid ($CH_3COOH$) if its $K_a = 1.8 \\times 10^{-5}$.", options: ["A. 2.87", "B. 1.00", "C. 4.74", "D. 5.00"], answer: "A. 2.87" },
      { question: "Describe the main differences between SN1 and SN2 reaction mechanisms.", options: ["A. SN1 is unimolecular, SN2 is bimolecular; SN1 involves carbocation intermediate, SN2 is concerted.", "B. SN1 is faster than SN2.", "C. SN1 occurs in polar aprotic solvents, SN2 in polar protic solvents.", "D. SN1 leads to inversion of configuration, SN2 leads to racemization."], answer: "A. SN1 is unimolecular, SN2 is bimolecular; SN1 involves carbocation intermediate, SN2 is concerted." },
      { question: "What is the Nernst equation and what is it used for?", options: ["A. $E = E^\\circ - \\frac{RT}{nF} \\ln Q$, used to calculate cell potential under non-standard conditions.", "B. $\\Delta G = \\Delta H - T\\Delta S$, used to determine spontaneity of a reaction.", "C. $PV=nRT$, used to describe ideal gases.", "D. $A = \\epsilon bc$, used in spectrophotometry."], answer: "A. $E = E^\\circ - \\frac{RT}{nF} \\ln Q$, used to calculate cell potential under non-standard conditions." },
      { question: "Explain the concept of molecular orbital theory and its application to diatomic molecules.", options: ["A. Describes bonding as the combination of atomic orbitals to form molecular orbitals, explaining bond order and magnetism.", "B. Focuses on the overlap of atomic orbitals to form covalent bonds.", "C. Explains the geometry of molecules based on electron pair repulsion.", "D. Describes the distribution of electrons in atoms."], answer: "A. Describes bonding as the combination of atomic orbitals to form molecular orbitals, explaining bond order and magnetism." },
    ],
  },
   "digital and analog": {
    easy: [
      { question: "What is the binary equivalent of decimal 5?", options: ["A. 101", "B. 011", "C. 110", "D. 100"], answer: "A. 101" },
      { question: "Which of the following is an analog signal?", options: ["A. Square wave", "B. Sine wave", "C. Digital pulse", "D. Binary code"], answer: "B. Sine wave" },
      { question: "What is the output of an AND gate if both inputs are 1?", options: ["A. 0", "B. 1", "C. Undefined", "D. High impedance"], answer: "B. 1" },
      { question: "What does ADC stand for?", options: ["A. Analog Digital Converter", "B. Analog to Digital Converter", "C. Advanced Digital Circuit", "D. Automatic Data Control"], answer: "B. Analog to Digital Converter" },
      { question: "Which component is used to store a single bit of information in digital circuits?", options: ["A. Resistor", "B. Capacitor", "C. Flip-flop", "D. Diode"], answer: "C. Flip-flop" },
    ],
    medium: [
      { question: "Convert the hexadecimal number A5 to decimal.", options: ["A. 165", "B. 105", "C. 155", "D. 175"], answer: "A. 165" },
      { question: "What is the purpose of a low-pass filter in analog circuits?", options: ["A. To block low frequencies and pass high frequencies.", "B. To pass low frequencies and block high frequencies.", "C. To amplify all frequencies.", "D. To convert analog signals to digital."], answer: "B. To pass low frequencies and block high frequencies." },
      { question: "Simplify the Boolean expression: $A + \\bar{A}B$", options: ["A. A", "B. B", "C. $A+B$", "D. $A\\bar{B}$"], answer: "C. $A+B$" },
      { question: "What is the Nyquist-Shannon sampling theorem?", options: ["A. States that a signal must be sampled at a rate at least twice its highest frequency component to be accurately reconstructed.", "B. Describes the relationship between voltage, current, and resistance.", "C. Explains the behavior of semiconductors.", "D. Defines the maximum data rate over a noisy channel."], answer: "A. States that a signal must be sampled at a rate at least twice its highest frequency component to be accurately reconstructed." },
      { question: "Explain the operation of a full adder circuit.", options: ["A. Adds two single-bit binary numbers and a carry-in bit, producing a sum and a carry-out bit.", "B. Multiplies two binary numbers.", "C. Compares two binary numbers.", "D. Converts binary to decimal."], answer: "A. Adds two single-bit binary numbers and a carry-in bit, producing a sum and a carry-out bit." },
    ],
    hard: [
      { question: "Design a 4-bit ripple-carry adder using full adders.", options: ["A. Connect four full adders in series, with the carry-out of one feeding the carry-in of the next.", "B. Connect four full adders in parallel.", "C. Use a single full adder and multiplexers.", "D. Use a decoder and an encoder."], answer: "A. Connect four full adders in series, with the carry-out of one feeding the carry-in of the next." },
      { question: "Describe the characteristics and applications of an operational amplifier (Op-Amp).", options: ["A. High gain, high input impedance, low output impedance; used in amplifiers, filters, oscillators.", "B. Low gain, low input impedance, high output impedance; used as a switch.", "C. A digital logic gate used for memory.", "D. A device that converts light into electrical signals."], answer: "A. High gain, high input impedance, low output impedance; used in amplifiers, filters, oscillators." },
      { question: "Implement a 2-to-4 line decoder using basic logic gates.", options: ["A. Use two input lines and four output lines, with AND gates to activate each output based on specific input combinations.", "B. Use OR gates to combine inputs.", "C. Use XOR gates for decoding.", "D. Use flip-flops for decoding."], answer: "A. Use two input lines and four output lines, with AND gates to activate each output based on specific input combinations." },
      { question: "Explain the concept of pulse-width modulation (PWM) and its uses.", options: ["A. A modulation technique where the width of a pulse is varied, used for controlling power to inertial loads, dimming LEDs, etc.", "B. A technique for converting analog signals to digital.", "C. A method for transmitting data over long distances.", "D. A way to filter out noise from a signal."], answer: "A. A modulation technique where the width of a pulse is varied, used for controlling power to inertial loads, dimming LEDs, etc." },
      { question: "Analyze the frequency response of an RC low-pass filter.", options: ["A. The gain decreases as frequency increases, with a cutoff frequency determined by R and C.", "B. The gain increases as frequency increases.", "C. The gain is constant across all frequencies.", "D. The filter blocks all frequencies."], answer: "A. The gain decreases as frequency increases, with a cutoff frequency determined by R and C." },
    ],
  },
  technology: {
    easy: [
      { question: "What does CPU stand for?", options: ["A. Central Processing Unit", "B. Computer Personal Unit", "C. Central Power Unit", "D. Control Processing Unit"], answer: "A. Central Processing Unit" },
      { question: "Which programming language is often used for web development?", options: ["A. Python", "B. Java", "C. JavaScript", "D. C++"], answer: "C. JavaScript" },
      { question: "What is the primary function of an operating system?", options: ["A. To run applications directly.", "B. To manage computer hardware and software resources.", "C. To connect to the internet.", "D. To create documents."], answer: "B. To manage computer hardware and software resources." },
      { question: "What does HTTP stand for?", options: ["A. HyperText Transfer Protocol", "B. High-Tech Transfer Program", "C. Hyperlink Text Protocol", "D. Home Tool Transfer Protocol"], answer: "A. HyperText Transfer Protocol" },
      { question: "Which of these is a type of computer memory that is volatile (loses data when power is off)?", options: ["A. HDD", "B. SSD", "C. RAM", "D. ROM"], answer: "C. RAM" },
    ],
    medium: [
      { question: "Explain the concept of 'cloud computing'.", options: ["A. Delivering computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet ('the cloud').", "B. Storing data on a local hard drive.", "C. Using a single powerful computer for all tasks.", "D. A type of weather forecasting technology."], answer: "A. Delivering computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet ('the cloud')." },
      { question: "What is the difference between IPv4 and IPv6?", options: ["A. IPv4 uses 32-bit addresses, IPv6 uses 128-bit addresses, providing more unique addresses.", "B. IPv4 is faster than IPv6.", "C. IPv6 is only used for mobile devices.", "D. IPv4 supports more devices than IPv6."], answer: "A. IPv4 uses 32-bit addresses, IPv6 uses 128-bit addresses, providing more unique addresses." },
      { question: "Describe the main components of a relational database.", options: ["A. Tables, rows (records), columns (fields), and relationships.", "B. Files, folders, and documents.", "C. Nodes and edges.", "D. Objects and classes."], answer: "A. Tables, rows (records), columns (fields), and relationships." },
      { question: "What is the purpose of a firewall in network security?", options: ["A. To prevent unauthorized access to or from a private network.", "B. To speed up internet connection.", "C. To store user passwords.", "D. To create backups of data."], answer: "A. To prevent unauthorized access to or from a private network." },
      { question: "Explain the concept of 'object-oriented programming' (OOP).", options: ["A. A programming paradigm based on the concept of 'objects', which can contain data and code.", "B. A programming style that focuses on functions.", "C. A method for writing code in a linear fashion.", "D. A way to design user interfaces."], answer: "A. A programming paradigm based on the concept of 'objects', which can contain data and code." },
    ],
    hard: [
      { question: "Discuss the advantages and disadvantages of microservices architecture.", options: ["A. Advantages: scalability, fault isolation, technology diversity. Disadvantages: complexity, distributed data management, operational overhead.", "B. Advantages: simplicity, single deployment. Disadvantages: monolithic.", "C. Advantages: faster development, less testing. Disadvantages: slower performance.", "D. Advantages: no need for databases. Disadvantages: high cost."], answer: "A. Advantages: scalability, fault isolation, technology diversity. Disadvantages: complexity, distributed data management, operational overhead." },
      { question: "Explain the concept of 'blockchain' and its core principles.", options: ["A. A decentralized, distributed ledger technology that records transactions across many computers, secured by cryptography.", "B. A centralized database for financial transactions.", "C. A type of encrypted communication channel.", "D. A system for managing supply chains."], answer: "A. A decentralized, distributed ledger technology that records transactions across many computers, secured by cryptography." },
      { question: "Describe the different types of machine learning (supervised, unsupervised, reinforcement) and provide an example for each.", options: ["A. Supervised (labeled data, e.g., image classification), Unsupervised (unlabeled data, e.g., clustering), Reinforcement (agent learns through trial and error, e.g., game AI).", "B. Supervised (no data), Unsupervised (only text data), Reinforcement (only image data).", "C. Supervised (human intervention), Unsupervised (no human intervention), Reinforcement (random actions).", "D. Supervised (fast), Unsupervised (slow), Reinforcement (medium speed)."], answer: "A. Supervised (labeled data, e.g., image classification), Unsupervised (unlabeled data, e.g., clustering), Reinforcement (agent learns through trial and error, e.g., game AI)." },
      { question: "What is the CAP theorem in distributed systems?", options: ["A. States that a distributed data store cannot simultaneously provide more than two out of three guarantees: Consistency, Availability, and Partition tolerance.", "B. A theorem about the maximum capacity of a network.", "C. A principle for designing secure systems.", "D. A rule for optimizing database queries."], answer: "A. States that a distributed data store cannot simultaneously provide more than two out of three guarantees: Consistency, Availability, and Partition tolerance." },
      { question: "Explain the concept of 'containerization' (e.g., Docker) and its benefits in software development.", options: ["A. Packaging an application and its dependencies into a single, isolated unit that can run consistently across different environments, offering portability and efficiency.", "B. A method for encrypting data.", "C. A way to manage large codebases.", "D. A technique for optimizing database performance."], answer: "A. Packaging an application and its dependencies into a single, isolated unit that can run consistently across different environments, offering portability and efficiency." },
    ],
  },
};

let selectedSubject = "";
let selectedLevel = "easy";
let currentQuestionIndex = 0;
let score = 0;
let currentQuiz = [];

let totalTimerInterval;
let totalTimeLeft = 30;

const levels = ["easy", "medium", "hard"];
let currentLevelIndex = 0;
const levelScores = {};

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreListEl = document.getElementById("score-list");

document.getElementById("start-btn").addEventListener("click", () => {
  selectedSubject = document.getElementById("subject-dropdown").value;
  selectedLevel = document.getElementById("level-dropdown").value;

  if (!selectedSubject || !selectedLevel) {
    alert("Please select both subject and difficulty level!");
    return;
  }

  currentLevelIndex = levels.indexOf(selectedLevel);
  document.getElementById("subject-selection").classList.add("hidden");
  startLevel();
});

function startLevel() {
  selectedLevel = levels[currentLevelIndex];
  currentQuiz = quizData[selectedSubject][selectedLevel];
  currentQuestionIndex = 0;
  score = 0;

  if (!currentQuiz || currentQuiz.length === 0) {
    alert(`No questions available for ${selectedSubject} - ${selectedLevel}`);
    return;
  }

  document.getElementById("quiz-container").classList.remove("hidden");
  startTotalTimer();
  loadQuestion();
}

function loadQuestion() {
  const current = currentQuiz[currentQuestionIndex];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => {
      selectAnswer(li, current.answer);
    });
    optionsEl.appendChild(li);
  });
}

function startTotalTimer() {
  totalTimeLeft = 30;
  document.getElementById("total-time-left").textContent = totalTimeLeft;

  clearInterval(totalTimerInterval);
  totalTimerInterval = setInterval(() => {
    totalTimeLeft--;
    document.getElementById("total-time-left").textContent = totalTimeLeft;

    if (totalTimeLeft <= 0) {
      clearInterval(totalTimerInterval);
      disableAllOptions();
      showResult();
    }
  }, 1000);
}

function disableAllOptions() {
  document.querySelectorAll("#options li").forEach(li => {
    li.style.pointerEvents = "none";
  });
}

function selectAnswer(selectedLi, correctAnswer) {
  disableAllOptions();

  const allOptions = document.querySelectorAll("#options li");

  if (selectedLi.textContent === correctAnswer) {
    selectedLi.style.backgroundColor = "green";
    score++;
  } else {
    selectedLi.style.backgroundColor = "red";
    allOptions.forEach(option => {
      if (option.textContent === correctAnswer) {
        option.style.backgroundColor = "green";
      }
    });
  }
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuiz.length) {
    loadQuestion();
  } else {
    handleLevelProgression();
  }
});

function handleLevelProgression() {
  clearInterval(totalTimerInterval);

  levelScores[selectedLevel] = {
    score,
    total: currentQuiz.length,
    wrong: currentQuiz.length - score,
    skipped: 0,
    accuracy: Math.round((score / currentQuiz.length) * 100)
  };

  const passed = score >= Math.ceil(currentQuiz.length / 2);

  if (passed && currentLevelIndex < levels.length - 1) {
    alert(`✅ You passed ${selectedLevel.toUpperCase()} level! Moving to next level.`);
    currentLevelIndex++;
    startLevel();
  } else {
    showResult();
  }
}

function showResult() {
  clearInterval(totalTimerInterval);
  document.getElementById("quiz-container").classList.add("hidden");
  resultContainer.classList.remove("hidden");

  let resultHTML = "";

  for (let lvl of levels) {
    if (levelScores[lvl]) {
      const data = levelScores[lvl];
      resultHTML += `
        <div>
          <p><strong>Level:</strong> ${lvl.toUpperCase()}</p>
          <p><strong>Score:</strong> ${data.score}/${data.total}</p>
          <p><strong>Accuracy:</strong> ${data.accuracy}%</p>
          <p><strong>Right:</strong> ${data.score}</p>
          <p><strong>Wrong:</strong> ${data.wrong}</p>
          <p><strong>Skipped:</strong> ${data.skipped}</p>
        </div>
      `;
    }
  }

  scoreListEl.innerHTML = resultHTML;
}

document.getElementById("restart-btn").addEventListener("click", () => {
  resultContainer.classList.add("hidden");
  document.getElementById("subject-selection").classList.remove("hidden");
  document.getElementById("subject-dropdown").value = "";
  document.getElementById("level-dropdown").value = "";
  questionEl.textContent = "";
  optionsEl.innerHTML = "";
  scoreListEl.innerHTML = "";
});