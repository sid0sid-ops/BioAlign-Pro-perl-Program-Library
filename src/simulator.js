window.App.Simulator = {
        // =========================================================================
        // 🖥️ SIMULATED PERL INTERPRETER OUTPUTS
        // =========================================================================
        // This object maps the exact filename (e.g., '1_hello_world.pl') to its 
        // expected console output string.
        // 
        // HOW TO MODIFY OR FIX ERRORS:
        // 1. Find the exact filename in the list below.
        // 2. Change the text to the right of the colon (inside the quotes).
        // 3. Use \n to represent a new line (Enter key) in the terminal.
        // 4. IMPORTANT: Always run `python builder.py` after saving this file 
        //    to re-bundle the application!
        // =========================================================================
        exactOutputs: {
        "1_hello_world.pl":        "Hello, world\n\n--- BioAlign-Pro ---",
        "2_variables.pl":          "Age = 23\nName = Sagar\nSalary = 440.5\n\n--- BioAlign-Pro ---",
        "3_user_input.pl":         "Enter the first value \nEnter the second value \nThe Sum is- 30\n\n--- BioAlign-Pro ---",
        "4_arrays.pl":             "$ages[0] = 25\n$ages[1] = 28\n$ages[2] = 31\n$names[0] = Mohan\n$names[1] = Ekansh\n$names[2] = Henna\n\n--- BioAlign-Pro ---",
        "5_hashes.pl":             "$emp_data{'Danish'} = 28\n$emp_data{'Raju'}   = 40\n$emp_data{'Ritesh'} = 25\n\n--- BioAlign-Pro ---",
        "6_string_concat.pl":      "potatohead\nttttt\nabd\n\n--- BioAlign-Pro ---",
        "9_string_split.pl":       "welcome to bioinformatics Dept.\nFirst element (space split): welcome\n\nwelcome to, bioinformatics Dept.\nFirst element (comma split): welcome to\n\n--- BioAlign-Pro ---",
        "10_conditionals.pl":       "Employee is Manager\na is greater than 20\n\n--- BioAlign-Pro ---",
        "12_loops.pl":              "Value of a: 10\nValue of a: 11\nValue of a: 12\nValue of a: 13\nValue of a: 14\nValue of a: 15\nValue of a: 16\nValue of a: 17\nValue of a: 18\nValue of a: 19\nvalue of a: 10\nvalue of a: 11\nvalue of a: 12\nname of employee: Ragav\nname of employee: Yogita\nname of employee: Ankit\nValue of a: 5\nValue of a: 6\nValue of a: 7\nValue of a: 8\nValue of a: 9\nValue of a: 10\n\n--- BioAlign-Pro ---",
        "13_subroutines.pl":       "Average is: 20\n\n--- BioAlign-Pro ---",
        "15_grep_pattern.pl":      "Vivek Vikram\nEnds with a-z: reet jacob aryan arav rani\nContains a digit: 1234 666 326\nEnds with 'i': rani\nStarts with '3': 326\n\n--- BioAlign-Pro ---",
        "17_regex_match_sub.pl":   "Matched: by\nFinal string: Punjab online platform University\n\n--- BioAlign-Pro ---",
        "20_bioinformatics_regex.pl": "--- Q1: Sequence starts with ATG and ends with TAA ---\nSequence: ATGCGTTAA\nResult  : Valid! Starts with ATG and ends with TAA.\n\n--- Q2: Sequence contains ONLY A, T, G, C ---\nSequence: ATGCATGC\nResult  : Valid DNA sequence (only ATGC nucleotides).\nSequence: ATGXCATT -> Invalid! Contains non-nucleotide characters.\n\n--- Q3: Start codon ATG + any Stop codon (TAA|TAG|TGA) ---\nSequence: ATGCGTTAA -> MATCH! Stop codon: TAA\nSequence: ATGCCCTAG -> MATCH! Stop codon: TAG\nSequence: ATGGCATGA -> MATCH! Stop codon: TGA\nSequence: ATGCGCATC -> No match (missing valid stop codon).\n\n--- BioAlign-Pro ---",
        "21_file_handling.pl":     "Simulating FASTA read...\nHeader found\n\n--- BioAlign-Pro ---",
        "22_reverse_number.pl":    "Enter a number to reverse: 12345\n\n--- Method 1: Using reverse() function ---\nOriginal number  : 12345\nReversed number  : 54321\n\n--- Method 2: Using while loop ---\nOriginal number  : 12345\nReversed number  : 54321\n\n--- BioAlign-Pro ---",
        "23_odd_even.pl":          "Enter a number: 7\nThe number 7 is Odd.\n\n--- BioAlign-Pro ---",
        "24_dna_sequence_match.pl":"Enter a DNA sequence: ATGCGTAA\nValid DNA Sequence!\nMatch Found! This sequence contains a start codon (ATG) and a stop codon.\n\n--- BioAlign-Pro ---",
        "7_string_multiply.pl":   "abc * 2 = 0\n12P34 * 2 = 24\nabc++ = abd\nt x 5 = ttttt\nz++ = aa\n1.2P34++ = 2.2P34\n\n--- BioAlign-Pro ---",
        "8_lists.pl":             "Character list: a b c d\nInteger list  : 1 2 3 4\nString list   : this is a list\n\nElement at index 4 : Uma\nLast element ([-1]): Suresh\nSliced names: Satish, Manju, Vipin\n\n--- BioAlign-Pro ---",
        "11_switch.pl":            "Matched: number in array list\n\n--- BioAlign-Pro ---",
        "14_subroutine_input.pl":  "Enter three numbers separated by space: 10 20 30\nAverage is: 20\n\n--- BioAlign-Pro ---",
        "16_grep_advanced.pl":     "Original array: Jacob Radheshyam Vivek Vikram Alexander Jyoti 9873 4523 5787\n\nEnds with a-z      : Jacob Radheshyam Vivek Vikram Alexander Jyoti\nEnds with 'm'      : Radheshyam Vikram\nStarts with 'V'    : Vivek Vikram\nEnds with 'k'      : Vivek Vikram\n\n--- BioAlign-Pro ---",
        "18_match_operator.pl":    "String  : perl tutorials by VLSI academy\nBefore  : perl tutorials \nMatched : by\nAfter   :  VLSI academy\n\n--- DNA Pattern Match ---\nSequence  : ATGCGTACGT\nMatched   : ACGT\nBefore    : ATGCGT\nAfter     : \n\n--- BioAlign-Pro ---",
        "19_substitution_operator.pl": "Initial string: VLSI Academy is university\nFinal string  : VLSI Academy is online platform\n\nBefore: I love Python for bioinformatics. Python is great.\nAfter : I love Perl for bioinformatics. Perl is great.\n\nInitial: Punjab bioinformatics University bioinformatics\nFinal  : Punjab ABBGCFDG University XYZEF\n\n--- BioAlign-Pro ---"
},



        resetTerminal: function () {
                const term = document.getElementById('terminalOutput');
                if (term) term.innerHTML = `<span class="text-gray-600 dark:text-gray-500">Ready to compile. Press <span class="text-emerald-600 dark:text-emerald-400"><i class="fa-solid fa-play"></i> Run</span> to test current program.</span>`;

                if (window.App.UI && window.App.UI.expandConsole) {
                        window.App.UI.hasRunSimulation = false;
                        window.App.UI.expandConsole(false);
                }
        },
        runCompiler: function () {
                const term = document.getElementById('terminalOutput');
                const fileId = window.currentActiveHash.substring(1);
                if (!term || !fileId) return;

                if (window.App.UI && window.App.UI.expandConsole) {
                        window.App.UI.hasRunSimulation = true;
                        window.App.UI.expandConsole(true);
                }

                // Authentic MSYS2 bash prompt
                const prompt = `<span class="text-emerald-600 dark:text-emerald-400 font-bold">sid@BioAlign</span> <span class="text-fuchsia-600 dark:text-fuchsia-400">MINGW64</span> <span class="text-yellow-600 dark:text-yellow-300">~/Desktop/Perl</span>\n<span class="text-black dark:text-white font-bold">$</span>`;

                // 1. Initial compile and execution chained step
                term.innerHTML = `${prompt} <span class="text-gray-700 dark:text-gray-300">perl ${fileId}</span>\n\n`;

                setTimeout(() => {
                        const outStr = this.exactOutputs[fileId] || `Program executed successfully.\nOutput dynamically generated for ${fileId}`;

                        // 2. Colorizing output explicitly to make it beautiful
                        let finalStr = outStr;
                        finalStr = finalStr.replace(/(Enter .*?:|Enter .*?$)/gm, '<span class="text-cyan-600 dark:text-cyan-400 font-semibold">$1</span>');
                        finalStr = finalStr.replace(/--- BioAlign-Pro ---/g, '<span class="text-blue-600 dark:text-blue-400 font-bold px-1 bg-blue-500/10 rounded">--- BioAlign-Pro ---</span>');
                        finalStr = finalStr.replace(/(Exception|Error|Div by 0)/gi, '<span class="text-red-600 dark:text-red-400 font-bold">$1</span>');

                        term.innerHTML += `<span class="text-gray-800 dark:text-gray-200">${finalStr}</span>\n\n`;

                        // End terminal execution with a waiting prompt
                        term.innerHTML += `${prompt} <span class="animate-pulse">_</span>`;
                        term.scrollTop = term.scrollHeight; // Auto-scroll to bottom

                        // Dynamically size the terminal to fit the output content
                        if (window.App.UI && window.App.UI.expandConsole) {
                                window.App.UI.expandConsole(true);
                        }
                }, 800);
        }
};
