# 🐪 Perl Script Library — BioAlign-Pro

> *"Decoding the logic, one line at a time."*

A self-contained, interactive **Perl learning platform** built for bioinformatics students. Browse, read, and simulate all 24 Perl programs directly in your browser — no installation required.

---

## 📖 About

This project is a dedicated **Perl edition** of the BioAlign-Pro educational engine.  
It provides a curated library of Perl programs covering core language features — from basic I/O and data structures through regular expressions, subroutines, and bioinformatics-specific DNA pattern matching.

The platform includes:
- 🖥️ **Live Output Simulator** — click *Run Code* to see the exact terminal output
- 🎨 **Perl Syntax Highlighting** — powered by Prism.js
- 💡 **Concept Panels** — every program explains the concept used and its bioinformatics application
- 🌙 **Dark / Light Theme** — toggle at any time

---

## 👩‍🏫 Guidance

> **Under the guidance of:**  
> **Ms. Aanchal Sharma**  
> *Research Scholar*  
> 

Her guidance and subject expertise shaped the curriculum, program selection, and bioinformatics context integrated throughout this library.

---

## 📚 Program Index

| No. | Program | Key Concept |
|-----|---------|-------------|
| 1 | Hello World | `print` statement |
| 2 | Scalar Variables | `$` scalars |
| 3 | User Input & Addition | `<STDIN>` + `chomp()` |
| 4 | Arrays | `@array` indexing |
| 5 | Hashes (Key-Value Pairs) | `%hash` lookup |
| 6 | String Concatenation | `.` operator |
| 7 | String Multiply & Increment | String coercion, `++` |
| 8 | Lists | List slicing, negative index |
| 9 | Split Function | `split()` |
| 10 | Conditionals (if/elsif/unless) | `if / elsif / unless` |
| 11 | Switch Statement | `use Switch` |
| 12 | Loops (while/for/foreach/until) | All loop types |
| 13 | Subroutines (Average) | `sub`, `@_`, `scalar(@_)` |
| 14 | Subroutine with User Input | `STDIN` + `split` + `sub` |
| 15 | Grep — Pattern Filtering | `grep()` with regex |
| 16 | Grep — Advanced Patterns | Multiple regex filters |
| 17 | Match & Substitution | `=~ m//` and `s///` |
| 18 | Match Operator ($&, $\`, $') | Pre/match/post variables |
| 19 | Substitution Operator | `s///` and `/g` modifier |
| 20 | Bioinformatics Regex *(Exam)* | DNA regex — 3 exam questions |
| 21 | File Handling (FASTA) | `open()` / `while` |
| 22 | Reverse a Number | `reverse()` + while loop |
| 23 | Odd or Even | Modulo `%` operator |
| 24 | DNA Sequence Matching | Comprehensive regex + `uc()` |

---


## 🛠️ Build System

After modifying any source file, regenerate the compiled output:

```bash
python builder.py
```

**What it does:**
- Reads all `*.pl` files in the root directory
- Bundles `src/data.js`, `src/simulator.js`, and all other modules into `script.js`
- Compiles all `modules/*.html` into a single `index.html`

**File structure:**
```
Perl/
├── builder.py              ← Build script
├── index.html              ← Compiled output (do not edit manually)
├── script.js               ← Compiled output (do not edit manually)
├── style.css               ← Stylesheet
├── 1_hello_world.pl        ← Perl source files (1–24)
├── ...
├── modules/                ← HTML layout modules
│   ├── head.html
│   ├── nav.html
│   ├── sidebar.html
│   ├── editor_layout.html
│   └── footer.html
└── src/                    ← JavaScript source modules
    ├── data.js             ← Program registry & metadata
    ├── simulator.js        ← Simulated terminal outputs
    ├── ui.js
    ├── viewer.js
    ├── main.js
    └── ...
```

---

## ➕ Adding a New Program

1. Create `25_your_program.pl` in the `Perl/` root directory
2. Add an entry to `src/data.js` in `cppFiles[]`
3. Add the simulated output to `src/simulator.js` in `exactOutputs{}`
4. Run `python builder.py`

---

## 🧬 Bioinformatics Context

Each program includes a **Bioinformatics Note** explaining how the Perl concept applies to real-world sequence analysis:

- **Regex** → Open Reading Frame (ORF) detection (`ATG` start + stop codons)
- **Hashes** → Codon-to-amino-acid lookup tables
- **grep()** → Filtering gene names or sequence headers from large datasets
- **split()** → Parsing FASTA, BED, or VCF file fields
- **Subroutines** → Reusable GC-content or quality score calculators

---

*Built with ❤️ for exam preparation and bioinformatics education.*
