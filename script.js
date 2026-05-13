window.__CPP_CONTENTS__ = {"1_hello_world.pl": "#!/usr/bin/perl\nprint \"Hello, world\\n\";\n", "2_variables.pl": "#!/usr/bin/perl\n$employee_name = \"Sagar\"; \n$employee_age = 23;       \n$employee_salary = 440.5; \nprint \"Age = $employee_age\\n\";\nprint \"Name = $employee_name\\n\";\nprint \"Salary = $employee_salary\\n\";\n", "3_user_input.pl": "#!/usr/bin/perl\n$sum=0; \nprint \"Enter the first value \\n\"; \n$a = <STDIN>; \nprint \"Enter the second value \\n\"; \n$b = <STDIN>; \n$sum = $a + $b; \nprint \"The Sum is- $sum\";\n", "4_arrays.pl": "#!/usr/bin/perl\n# W.A.P. - Arrays in Perl\n# Program Name: Arrays\n# Description : Defining and accessing array elements in Perl\n# Concepts Used: Arrays (@), indexing with $, negative indexing\n\n@names = (\"Mohan\", \"Ekansh\", \"Henna\");\n@ages  = (25, 28, 31);\n\nprint \"\\$ages[0] = $ages[0]\\n\";\nprint \"\\$ages[1] = $ages[1]\\n\";\nprint \"\\$ages[2] = $ages[2]\\n\";\n\nprint \"\\$names[0] = $names[0]\\n\";\nprint \"\\$names[1] = $names[1]\\n\";\nprint \"\\$names[2] = $names[2]\\n\";\n", "5_hashes.pl": "#!/usr/bin/perl\n# W.A.P. - Hashes in Perl\n# Program Name: Hashes (Key-Value Pairs)\n# Description : Defining a hash and accessing values by key\n# Concepts Used: Hash (%), key-value pairs, accessing with $hash{key}\n\n%emp_data = ('Danish', 28, 'Raju', 40, 'Ritesh', 25);\n\nprint \"\\$emp_data{'Danish'} = $emp_data{'Danish'}\\n\";\nprint \"\\$emp_data{'Raju'}   = $emp_data{'Raju'}\\n\";\nprint \"\\$emp_data{'Ritesh'} = $emp_data{'Ritesh'}\\n\";\n", "6_string_concat.pl": "#!/usr/bin/perl\n# Concatenation\n$string1 = \"potato\";\n$string2 = \"head\";\n$newstring = $string1 . $string2; # results in \"potatohead\"\nprint \"$newstring\\n\";\n\n# Repeat Operation\n$newstring = \"t\" x 5; # results in \"ttttt\"\nprint \"$newstring\\n\";\n\n# Increment\n$stringvar = \"abc\";\n$stringvar++; # results in \"abd\"\nprint \"$stringvar\\n\";\n", "7_string_multiply.pl": "#!/usr/bin/perl\n# W.A.P. - String Multiply and Increment in Perl\n# Program Name: String Multiply & Increment\n# Description : Demonstrates multiplication of string-numbers and\n#               the auto-increment (++) operator on strings\n# Concepts Used: String * Number coercion, ++ operator, x repeat operator\n\n# --- Multiply Operation ---\n$stringvar = \"abc\";\nprint \"abc * 2 = \";\nprint($stringvar * 2);    # Non-numeric string treated as 0\nprint \"\\n\";\n\n$stringvar = \"12P34\";\nprint \"12P34 * 2 = \";\nprint($stringvar * 2);    # Numeric prefix 12 is used\nprint \"\\n\";\n\n# --- Increment Operation ---\n$stringvar = \"abc\";\n$stringvar++;\nprint \"abc++ = $stringvar\\n\";   # Results in \"abd\"\n\n$newstring = \"t\" x 5;\nprint \"t x 5 = $newstring\\n\";   # Results in \"ttttt\"\n\n$str = \"z\";\n$str++;\nprint \"z++ = $str\\n\";           # Results in \"aa\"\n\n$str = \"1.2P34\";\n$str++;\nprint \"1.2P34++ = $str\\n\";      # Numeric increment: 2.2P34\n", "8_lists.pl": "#!/usr/bin/perl\n# W.A.P. - Lists in Perl\n# Program Name: Lists (Definition, Access & Slicing)\n# Description : Defining lists of chars, integers and strings.\n#               Accessing elements by index and using negative index.\n# Concepts Used: Lists, array indexing, array slicing\n\n# Defining lists\n@list1 = ('a', 'b', 'c', 'd');         # list of characters\n@list2 = (1, 2, 3, 4);                 # list of integers\n@list3 = (\"this\", \"is\", \"a\", \"list\");  # list of strings\n\nprint \"Character list: @list1\\n\";\nprint \"Integer list  : @list2\\n\";\nprint \"String list   : @list3\\n\";\n\n# Accessing elements\n@names = ('Danish', 'Satish', 'Rajesh', 'Manju', 'Uma', 'Vipin', 'Suresh');\n\n$array_element = $names[4];     # 5th element (index 4)\n$last_name     = $names[-1];    # Last element (negative index)\n\nprint \"\\nElement at index 4 : $array_element\\n\";\nprint \"Last element ([-1]): $last_name\\n\";\n\n# Array slicing\n@new_names[0, 1, 2] = @names[1, 3, 5];   # Pick elements at positions 1,3,5\nprint \"Sliced names: $new_names[0], $new_names[1], $new_names[2]\\n\";\n", "9_string_split.pl": "#!/usr/bin/perl\n# --- Example 1: Splitting by Space ---\n$line = \"welcome to bioinformatics Dept.\";\nprint \"$line\\n\";\n\n@list_new = split(/ /, $line);\nprint \"First element (space split): $list_new[0]\\n\\n\";\n\n# --- Example 2: Splitting by Comma ---\n$line = \"welcome to, bioinformatics Dept.\";\nprint \"$line\\n\";\n\n@list_new = split(/,/, $line);\nprint \"First element (comma split): $list_new[0]\\n\";\n", "10_conditionals.pl": "#!/usr/bin/perl\n$salary = 10500;\nif( $salary > 10000 ) {\n    print \"Employee is Manager\\n\";\n} elsif ($salary < 10000) {\n    print \"Employee is staff\\n\";\n}\n\n# Unless executes if condition is FALSE\n$a = 22;\nunless( $a < 20 ) {\n    print \"a is greater than 20\\n\";\n}\n", "11_switch.pl": "#!/usr/bin/perl\n# W.A.P. - Switch Statement in Perl\n# Program Name: Switch Statement\n# Description : Using the Switch module to match variable against multiple cases\n# Concepts Used: use Switch, case, else, array matching, hash matching\n\nuse Switch;\n\n$var   = 30;\n@array = (10, 20, 30);\n%hash  = ('key1' => 10, 'key2' => 20);\n\nswitch ($var) {\n    case 10           { print \"Matched: number 10\\n\"               }\n    case \"a\"          { print \"Matched: string a\\n\"                }\n    case [1..10, 42]  { print \"Matched: number in range/list\\n\"    }\n    case (\\@array)    { print \"Matched: number in array list\\n\"    }\n    case (\\%hash)     { print \"Matched: entry in hash\\n\"           }\n    else              { print \"Previous case not true \u2014 default hit\\n\" }\n}\n", "12_loops.pl": "#!/usr/bin/perl\n# While Loop\n$a = 10;\nwhile( $a < 20 ) {\n    print \"Value of a: $a\\n\";\n    $a = $a + 1;\n}\n\n# For Loop \nfor ( $a = 10; $a < 20; $a = $a + 1 ) {\n    print \"value of a: $a\\n\"; \n}\n\n# Foreach Loop\n@names = (\"Ragav\", \"Yogita\", \"Ankit\");\nforeach $employee (@names) { \n    print \"name of employee: $employee\\n\"; \n}\n\n# Until Loop\n$a = 5;\nuntil( $a > 10 ) {\n    print \"Value of a: $a\\n\";\n    $a = $a + 1;\n}\n", "13_subroutines.pl": "#!/usr/bin/perl\nsub Average {\n    my $n = scalar(@_);   # @_ stores the arguments passed\n    my $sum = 0;\n    foreach my $item (@_) {\n        $sum += $item;\n    }\n    my $average = $sum / $n;\n    print \"Average is: $average\\n\";\n}\n\nAverage(10, 20, 30); # Calling the function\n", "14_subroutine_input.pl": "#!/usr/bin/perl\n# W.A.P. - Subroutine with User Input\n# Program Name: Subroutine with STDIN Input\n# Description : Takes 3 numbers as space-separated input, then calls\n#               a subroutine to calculate and print the average.\n# Concepts Used: STDIN, split, sub, scalar(@_), foreach, @_\n\nprint \"Enter three numbers separated by space: \";\nmy $input = <STDIN>;\nchomp($input);\n\nmy @numbers = split(' ', $input);   # Split input string into an array\nAverage(@numbers);                  # Pass array to subroutine\n\nsub Average {\n    my $n   = scalar(@_);           # Number of arguments\n    my $sum = 0;\n\n    foreach my $item (@_) {\n        $sum += $item;\n    }\n\n    my $average = $sum / $n;\n    print \"Average is: $average\\n\";\n}\n", "15_grep_pattern.pl": "#!/usr/bin/perl\n@myNames = ('Jacob', 'Radheshyam', 'Vivek', 'Vikram', 'Alexander', 'Jyoti');\n# grep to find items starting with 'V'\n@grepNames = grep(/^V/, @myNames); \nprint \"@grepNames\\n\"; \n\n@nameGrep=('reet', 'jacob','aryan',1234,666,'arav','rani',326);\nmy @GrepName_list = grep(/[a-z]$/, @nameGrep);\nprint \"Ends with a-z: @GrepName_list\\n\";\n\nmy @GrepName_list2 = grep(/\\d/, @nameGrep);\nprint \"Contains a digit: @GrepName_list2\\n\";\n\nmy @GrepName_list3 = grep(/i$/, @nameGrep);\nprint \"Ends with 'i': @GrepName_list3\\n\";\n\nmy @GrepName_list4 = grep(/^3/, @nameGrep);\nprint \"Starts with '3': @GrepName_list4\\n\";\n", "16_grep_advanced.pl": "#!/usr/bin/perl\n# W.A.P. - Advanced grep() Examples\n# Program Name: Grep Advanced Patterns\n# Description : Filters an array using different regex patterns with grep()\n# Concepts Used: grep(), regex anchors (^ $), character classes\n\n@myNames = ('Jacob', 'Radheshyam', 'Vivek', 'Vikram',\n            'Alexander', 'Jyoti', 9873, 4523, 5787);\n\nprint \"Original array: @myNames\\n\\n\";\n\n# Filter: items ending with a lowercase letter\n@grepNames = grep(/[a-z]$/, @myNames);\nprint \"Ends with a-z      : @grepNames\\n\";\n\n# Filter: items ending with 'm'\n@grepNames = grep(/m$/, @myNames);\nprint \"Ends with 'm'      : @grepNames\\n\";\n\n# Filter: items starting with 'V'\n@grepNames = grep(/^V/, @myNames);\nprint \"Starts with 'V'    : @grepNames\\n\";\n\n# Filter: items ending with 'k'\n@grepNames = grep(/k$/, @myNames);\nprint \"Ends with 'k'      : @grepNames\\n\";\n", "17_regex_match_sub.pl": "#!/usr/bin/perl\n# Match Operator\n$string = \"perl tutorials by VLSI academy\";\n$string =~ m/by/;\nprint \"Matched: $&\\n\"; \n\n# Substitution Operator (Replace text)\n$string = \"Punjab bioinformatics University\";\n$string =~ s/bioinformatics/online platform/;\nprint \"Final string: $string\\n\";\n", "18_match_operator.pl": "#!/usr/bin/perl\n# W.A.P. - Match Operator in Perl\n# Program Name: Match Operator (=~ m//)\n# Description : Uses the match operator to find a pattern and\n#               captures pre-match, matched, and post-match strings.\n# Concepts Used: =~ m//, $` (prematch), $& (match), $' (postmatch)\n\n# --- Example 1: Basic string ---\n$string = \"perl tutorials by VLSI academy\";\n$string =~ m/by/;\n\nprint \"String  : $string\\n\";\nprint \"Before  : $`\\n\";    # $` = everything BEFORE the match\nprint \"Matched : $&\\n\";    # $& = the exact MATCHED text\nprint \"After   : $'\\n\";    # $' = everything AFTER the match\n\n# --- Example 2: DNA sequence pattern ---\nprint \"\\n--- DNA Pattern Match ---\\n\";\n$dna = \"ATGCGTACGT\";\nif ($dna =~ m/ACGT/) {\n    print \"Sequence  : $dna\\n\";\n    print \"Matched   : $&\\n\";\n    print \"Before    : $`\\n\";\n    print \"After     : $'\\n\";\n}\n", "19_substitution_operator.pl": "#!/usr/bin/perl\n# W.A.P. - Substitution Operator in Perl\n# Program Name: Substitution Operator (s///)\n# Description : Replaces matched patterns in a string using s///\n#               and the global modifier (g) to replace all occurrences.\n# Concepts Used: s/pattern/replacement/, /g modifier\n\n# --- Example 1: Basic substitution ---\n$string = \"VLSI Academy is university\";\nprint \"Initial string: $string\\n\";\n$string =~ s/university/online platform/;\nprint \"Final string  : $string\\n\\n\";\n\n# --- Example 2: Replace Python with Perl ---\n$line = \"I love Python for bioinformatics. Python is great.\";\nprint \"Before: $line\\n\";\n$line =~ s/Python/Perl/g;    # /g = replace ALL occurrences\nprint \"After : $line\\n\\n\";\n\n# --- Example 3: Double substitution on bioinformatics string ---\n$string = \"Punjab bioinformatics University bioinformatics\";\nprint \"Initial: $string\\n\";\n$string =~ s/bioinformatics/ABBGCFDG/;  # Replaces FIRST occurrence\n$string =~ s/bioinformatics/XYZEF/;    # Replaces SECOND occurrence\nprint \"Final  : $string\\n\";\n", "20_bioinformatics_regex.pl": "#!/usr/bin/perl\n# W.A.P. - Bioinformatics Regular Expressions in Perl\n# Program Name: Bioinformatics Regex Patterns\n# Description : Demonstrates DNA pattern matching using Perl regex\n# Concepts Used: Match Operator (=~), Regex Anchors (^ $), Character Classes\n# -----------------------------------------------------------------------\n\n# -----------------------------------------------------------------------\n# Q1. Write a Perl regular expression to identify a DNA sequence\n#     that starts with ATG and ends with TAA.\n# Regex: /^ATG[ATGC]*TAA$/\n# -----------------------------------------------------------------------\nprint \"--- Q1: Sequence starts with ATG and ends with TAA ---\\n\";\nmy $dna1 = \"ATGCGTTAA\";\nif ($dna1 =~ /^ATG[ATGC]*TAA$/) {\n    print \"Sequence: $dna1\\n\";\n    print \"Result  : Valid! Starts with ATG and ends with TAA.\\n\";\n} else {\n    print \"Result  : No match.\\n\";\n}\n\n# -----------------------------------------------------------------------\n# Q2. Write a Perl syntax to match a DNA sequence containing\n#     ONLY the nucleotides A, T, G, and C.\n# Regex: /^[ATGC]+$/\n# -----------------------------------------------------------------------\nprint \"\\n--- Q2: Sequence contains ONLY A, T, G, C ---\\n\";\nmy $dna2 = \"ATGCATGC\";\nif ($dna2 =~ /^[ATGC]+$/) {\n    print \"Sequence: $dna2\\n\";\n    print \"Result  : Valid DNA sequence (only ATGC nucleotides).\\n\";\n} else {\n    print \"Result  : Invalid! Contains non-nucleotide characters.\\n\";\n}\n\n# Test with invalid sequence\nmy $dna2_invalid = \"ATGXCATT\";\nif ($dna2_invalid =~ /^[ATGC]+$/) {\n    print \"Sequence: $dna2_invalid  -> Valid.\\n\";\n} else {\n    print \"Sequence: $dna2_invalid -> Invalid! Contains non-nucleotide characters.\\n\";\n}\n\n# -----------------------------------------------------------------------\n# Q3. Write a Perl regular expression to identify sequences beginning\n#     with start codon ATG and ending with ANY stop codon (TAA/TAG/TGA).\n# Regex: /^ATG[ATGC]*(TAA|TAG|TGA)$/\n# -----------------------------------------------------------------------\nprint \"\\n--- Q3: Start codon ATG + any Stop codon (TAA|TAG|TGA) ---\\n\";\nmy @sequences = (\"ATGCGTTAA\", \"ATGCCCTAG\", \"ATGGCATGA\", \"ATGCGCATC\");\nforeach my $seq (@sequences) {\n    if ($seq =~ /^ATG[ATGC]*(TAA|TAG|TGA)$/) {\n        print \"Sequence: $seq -> MATCH! Stop codon: $1\\n\";\n    } else {\n        print \"Sequence: $seq -> No match (missing valid stop codon).\\n\";\n    }\n}\n", "21_file_handling.pl": "#!/usr/bin/perl\n# FASTA File Parsing Example (Mock)\nprint \"Simulating FASTA read...\\n\";\n$line = \">Sequence_1\\nATGCGTACGT\";\nif ($line =~ /^>/) {\n    print \"Header found\\n\";\n}\n", "22_reverse_number.pl": "#!/usr/bin/perl\n# W.A.P. to find the Reverse of a Number in Perl\n# Program Name: Reverse of a Number\n# Description : Two methods to reverse a number \u2014\n#               Method 1: Using the built-in reverse() function\n#               Method 2: Using a while loop (digit extraction)\n# Concepts Used: reverse(), int(), while loop, modulo (%), integer division\n# Bioinformatics Use: Reversing DNA strands (5'->3' to 3'->5' direction)\n# -----------------------------------------------------------------------\n\nprint \"Enter a number to reverse: \";\nmy $num = <STDIN>;\nchomp($num);    # Remove trailing newline\n\n# -----------------------------------------------------------------------\n# METHOD 1: Using the built-in reverse() function\n# reverse() treats the number as a string and flips its characters\n# int() removes any leading zeros (e.g., \"0021\" becomes 21)\n# -----------------------------------------------------------------------\nmy $reversed_func = int(reverse($num));\nprint \"\\n--- Method 1: Using reverse() function ---\\n\";\nprint \"Original number  : $num\\n\";\nprint \"Reversed number  : $reversed_func\\n\";\n\n# -----------------------------------------------------------------------\n# METHOD 2: Using a while loop\n# Extract the last digit using modulo (% 10)\n# Build the reversed number by shifting left (* 10) and adding digit\n# Remove the last digit using integer division (int($n / 10))\n# -----------------------------------------------------------------------\nmy $n        = $num;   # Working copy\nmy $reversed = 0;\n\nwhile ($n > 0) {\n    my $digit = $n % 10;          # Extract last digit\n    $reversed = $reversed * 10 + $digit;  # Append digit to result\n    $n        = int($n / 10);     # Remove last digit\n}\n\nprint \"\\n--- Method 2: Using while loop ---\\n\";\nprint \"Original number  : $num\\n\";\nprint \"Reversed number  : $reversed\\n\";\n", "23_odd_even.pl": "#!/usr/bin/perl\n# W.A.P. to find whether a Number is Odd or Even in Perl\n# Program Name: Odd or Even\n# Description : Takes a number as input and checks if it is Odd or Even\n# Concepts Used: Modulo operator (%), if-else, STDIN, chomp()\n# Bioinformatics Use: Determining reading frame offsets\n#   (position % 3 == 0 means start of a codon)\n# -----------------------------------------------------------------------\n\nprint \"Enter a number: \";\nmy $num = <STDIN>;\nchomp($num);    # Remove the trailing newline character\n\n# Modulo operation: if remainder when divided by 2 is 0 -> Even, else Odd\nif ($num % 2 == 0) {\n    print \"The number $num is Even.\\n\";\n} else {\n    print \"The number $num is Odd.\\n\";\n}\n", "24_dna_sequence_match.pl": "#!/usr/bin/perl\nprint \"Enter a DNA sequence: \";\nmy $dna = <STDIN>;\nchomp($dna);\n\n# Convert input to uppercase just in case\n$dna = uc($dna);\n\n# Check if it contains only valid nucleotides\nif ($dna =~ /^[ATGC]+$/) {\n    print \"Valid DNA Sequence!\\n\";\n    \n    # Check for Start and Stop codon\n    if ($dna =~ /^ATG.*(TAA|TAG|TGA)$/) {\n         print \"Match Found! This sequence contains a start codon (ATG) and a stop codon.\\n\";\n    } else {\n         print \"No Match: Missing proper start or stop codon.\\n\";\n    }\n} else {\n    print \"Invalid Sequence: Contains non-nucleotide characters.\\n\";\n}\n"};

window.App = {};

// --- MODULE: data.js ---
window.App.Data = {
    units: {
        "Perl Programs": { icon: "🐪", title: "All Programs" }
    },
    cppFiles: [
        { id: "1_hello_world.pl",            unit: "Perl Programs", title: "1.  Hello World",                      concept: "print Statement",                description: "The simplest Perl program — printing a string to the console using print.", useCase: "Testing environment setup.", bioNote: "Validates that the Perl interpreter is correctly installed." },
        { id: "2_variables.pl",              unit: "Perl Programs", title: "2.  Scalar Variables",                concept: "Scalars ($var)",                 description: "Declaring and printing scalar variables — strings, integers, and floats.", useCase: "Storing single values.", bioNote: "Storing patient IDs, gene names, or individual quality scores." },
        { id: "3_user_input.pl",             unit: "Perl Programs", title: "3.  User Input & Addition",           concept: "STDIN & chomp()",                description: "Reading two numbers from console via STDIN and computing their sum.", useCase: "Interactive scripts.", bioNote: "Accepting custom alignment thresholds from the user at runtime." },
        { id: "4_arrays.pl",                 unit: "Perl Programs", title: "4.  Arrays",                          concept: "Arrays (@array)",                description: "Defining arrays and accessing individual elements with $ and a numeric index.", useCase: "Ordered data storage.", bioNote: "Storing gene identifiers, quality scores, or sequence reads." },
        { id: "5_hashes.pl",                 unit: "Perl Programs", title: "5.  Hashes (Key-Value Pairs)",        concept: "Hashes (%hash)",                 description: "Creating a hash (dictionary) and accessing values by their string keys.", useCase: "Lookup tables.", bioNote: "Mapping codon strings (AUG) to amino acid names (Methionine)." },
        { id: "6_string_concat.pl",          unit: "Perl Programs", title: "6.  String Concatenation",            concept: "Dot (.) Operator",               description: "Using . to join strings, x to repeat, and ++ to increment string characters.", useCase: "Building dynamic strings.", bioNote: "Constructing poly-A tails or repetitive sequence motifs." },
        { id: "7_string_multiply.pl",        unit: "Perl Programs", title: "7.  String Multiply & Increment",     concept: "String Coercion & ++",           description: "Multiplying string-prefixed numbers (Perl uses numeric prefix). Auto-incrementing alphabetic strings.", useCase: "String arithmetic.", bioNote: "Understanding Perl type coercion — critical when processing mixed sequence/quality data." },
        { id: "8_lists.pl",                  unit: "Perl Programs", title: "8.  Lists",                           concept: "List Definition & Slicing",      description: "Defining lists of chars, ints, and strings. Accessing by index, negative index, and slicing multiple elements.", useCase: "Bulk data access.", bioNote: "Extracting subsets of gene positions or codon windows from a sequence array." },
        { id: "9_string_split.pl",           unit: "Perl Programs", title: "9.  Split Function",                  concept: "split()",                        description: "Splitting strings into arrays using space or comma as delimiter.", useCase: "CSV/TSV parsing.", bioNote: "Parsing whitespace-separated BED file fields or comma-delimited FASTA metadata." },
        { id: "10_conditionals.pl",          unit: "Perl Programs", title: "10. Conditionals (if/elsif/unless)",  concept: "if / elsif / unless",            description: "if-elsif chains for multi-branch logic. unless executes when the condition is FALSE.", useCase: "Decision making.", bioNote: "Filtering sequences based on length, GC-content, or quality score thresholds." },
        { id: "11_switch.pl",                unit: "Perl Programs", title: "11. Switch Statement",                concept: "use Switch",                     description: "The Switch module provides case-based branching — matching a variable against values, ranges, arrays, and hashes.", useCase: "Multi-branch dispatch.", bioNote: "Routing sequence analysis tasks based on file type or algorithm selection." },
        { id: "12_loops.pl",                 unit: "Perl Programs", title: "12. Loops (while/for/foreach/until)", concept: "Loop Constructs",                description: "All four Perl loop types: while (condition-first), for (C-style), foreach (iterator), until (runs until true).", useCase: "Iterating collections.", bioNote: "Iterating over every sequence record in a FASTQ file for batch processing." },
        { id: "13_subroutines.pl",           unit: "Perl Programs", title: "13. Subroutines (Average)",           concept: "sub / @_ / scalar(@_)",          description: "Defining a reusable sub that uses @_ for arguments and scalar(@_) for count.", useCase: "Modular code.", bioNote: "Calculating average GC content or quality score across multiple reads." },
        { id: "14_subroutine_input.pl",      unit: "Perl Programs", title: "14. Subroutine with User Input",      concept: "STDIN + split + sub",            description: "Takes space-separated numbers from STDIN, splits into an array, then passes to a subroutine.", useCase: "Interactive subroutines.", bioNote: "User-supplied scoring parameters piped into alignment quality averaging routines." },
        { id: "15_grep_pattern.pl",          unit: "Perl Programs", title: "15. Grep — Pattern Filtering",        concept: "grep() with Regex",              description: "Using grep() to filter arrays: elements ending in a-z, containing digits, starting with a letter.", useCase: "Array filtering.", bioNote: "Extracting gene names matching a specific prefix from large annotation databases." },
        { id: "16_grep_advanced.pl",         unit: "Perl Programs", title: "16. Grep — Advanced Patterns",        concept: "grep() Multiple Patterns",       description: "Applies four different regex patterns to the same array: ending a-z, ending m, starting V, ending k.", useCase: "Multi-filter analysis.", bioNote: "Scanning FASTA headers for sequences from specific organisms or chromosomes." },
        { id: "17_regex_match_sub.pl",       unit: "Perl Programs", title: "17. Match & Substitution",            concept: "=~ m// and s///",                description: "Match operator (=~ m//) returns position data. Substitution operator (s///) replaces first match.", useCase: "Text replacement.", bioNote: "Correcting sequencing errors by replacing invalid nucleotide characters in raw reads." },
        { id: "18_match_operator.pl",        unit: "Perl Programs", title: "18. Match Operator",                  concept: "Prematch, Match, Postmatch",     description: "After a match: the matched text, everything before it, and everything after it can all be captured using special Perl variables.", useCase: "Context extraction.", bioNote: "Isolating a specific motif within a sequence and examining its flanking regions." },
        { id: "19_substitution_operator.pl", unit: "Perl Programs", title: "19. Substitution Operator",           concept: "s/// and /g modifier",           description: "Replaces first match with s///, replaces ALL matches globally with the /g flag.", useCase: "Bulk text replacement.", bioNote: "Normalizing sequence data by replacing all ambiguous bases (X, N) with standard notation." },
        { id: "20_bioinformatics_regex.pl",  unit: "Perl Programs", title: "20. Bioinformatics Regex (Exam)",     concept: "DNA Regex — 3 Exam Questions",   description: "Q1: ATG to TAA regex. Q2: Valid DNA characters only. Q3: ATG with any stop codon (TAA/TAG/TGA). These three regex patterns are the core exam topic.", useCase: "Most important exam topic.", bioNote: "Standard tools for Open Reading Frame (ORF) detection in Perl bioinformatics pipelines." },
        { id: "21_file_handling.pl",         unit: "Perl Programs", title: "21. File Handling (FASTA)",           concept: "open() / while / chomp()",       description: "Opening a file with open(), reading line-by-line in a while loop, stripping newlines with chomp().", useCase: "File I/O.", bioNote: "Parsing FASTA files: detecting header lines vs. sequence lines." },
        { id: "22_reverse_number.pl",        unit: "Perl Programs", title: "22. Reverse a Number",               concept: "Method 1: reverse() | Method 2: while loop", description: "Two approaches: (1) reverse() flips digit string, int() strips leading zeros. (2) While loop extracts digits via modulo and builds the reversed number.", useCase: "Exam problem.", bioNote: "Reversing a DNA read direction." },
        { id: "23_odd_even.pl",              unit: "Perl Programs", title: "23. Odd or Even",                    concept: "Modulo Operator (%)",            description: "If the number modulo 2 equals 0 it is Even, otherwise it is Odd.", useCase: "Exam problem.", bioNote: "Reading frame check: position modulo 3 determines which codon position a nucleotide occupies." },
        { id: "24_dna_sequence_match.pl",    unit: "Perl Programs", title: "24. DNA Sequence Matching",          concept: "Comprehensive Regex (uc)",       description: "Validates DNA input with a character class regex, then checks for start codon ATG and stop codons TAA/TAG/TGA.", useCase: "Exam problem.", bioNote: "Detecting Open Reading Frames bounded by ATG and stop codons." }
    ]
};


// --- MODULE: search.js ---
window.App.Search = {
    debounceTimer: null,

    handleInput: function (e) {
        clearTimeout(this.debounceTimer);
        const query = e.target.value.trim();
        const clearBtn = document.getElementById('clearSearch');
        if (query.length > 0) clearBtn.classList.remove('hidden');
        else clearBtn.classList.add('hidden');

        this.debounceTimer = setTimeout(() => {
            window.App.UI.initSidebar(query);
        }, 200);
    },

    clear: function () {
        const input = document.getElementById('searchInput');
        input.value = '';
        document.getElementById('clearSearch').classList.add('hidden');
        window.App.UI.initSidebar('');
        input.focus();
    }
};


// --- MODULE: ui.js ---
window.App.UI = {

    // Scrolls the currently active sidebar link into view
    scrollActiveSidebarItem: function () {
        if (!window.currentActiveHash) return;
        const activeLink = document.querySelector(`#sidebarContent a[href="${window.currentActiveHash}"]`);
        if (activeLink) activeLink.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    },

    initSidebar: function (searchQuery = "") {
        const sidebar = document.getElementById('sidebarContent');
        sidebar.innerHTML = '';

        // Filter programs based on search query
        const filtered = window.App.Data.cppFiles.filter(file => {
            if (!searchQuery) return true;
            const q = searchQuery.toLowerCase();
            return (file.title + ' ' + file.concept).toLowerCase().includes(q);
        });

        // Show empty state if no results
        if (filtered.length === 0) {
            sidebar.innerHTML = `
                <div class="px-4 py-12 text-center text-sm text-gray-400">
                    <i class="fa-solid fa-magnifying-glass opacity-30 text-4xl mb-3"></i><br>
                    No programs found matching "<span class="text-gray-600 dark:text-gray-300">${searchQuery}</span>"
                </div>
            `;
            return;
        }

        // Program count bar
        const countBar = document.createElement('div');
        countBar.className = 'flex items-center justify-between px-4 py-2 text-[10px] text-gray-400 uppercase tracking-wide border-b border-gray-200 dark:border-[#333333]';
        countBar.innerHTML = `
            <span><i class="fa-solid fa-code mr-1"></i> ${filtered.length} Programs</span>
            <span class="text-purple-500 dark:text-purple-400 font-semibold">🐪 Perl</span>
        `;
        sidebar.appendChild(countBar);

        // Render flat list of programs
        const list = document.createElement('div');
        list.className = 'flex flex-col gap-0.5 p-2';

        filtered.forEach(file => {
            const link = document.createElement('a');
            link.href = `#${file.id}`;

            const isActive = window.currentActiveHash === `#${file.id}`;
            link.className = `flex items-center px-3 py-2 text-sm rounded-md transition-all relative group ${
                isActive
                    ? 'bg-primary/10 text-primary font-semibold border-l-[3px] border-primary'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 border-l-[3px] border-transparent hover:border-purple-400/50'
            }`;

            let displayTitle = file.title;
            if (searchQuery) {
                const safeQ = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                displayTitle = displayTitle.replace(new RegExp(`(${safeQ})`, 'gi'),
                    '<mark class="bg-primary/30 text-inherit rounded px-0.5 font-bold">$1</mark>');
            }

            link.innerHTML = `
                <i class="fa-solid fa-code w-3 mr-2.5 opacity-40 group-hover:opacity-100 group-hover:text-purple-400 shrink-0 transition-colors text-[11px]"></i>
                <span class="whitespace-normal break-words leading-tight text-left text-xs sm:text-sm">${displayTitle}</span>
            `;

            link.onclick = () => {
                if (window.innerWidth < 1024 && window.App.isMenuOpen) window.App.UI.toggleMobileMenu();
            };

            list.appendChild(link);
        });

        sidebar.appendChild(list);
    },




    toggleMobileMenu: function () {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');
        const btn = document.getElementById('mobileMenuBtn');

        window.App.isMenuOpen = !window.App.isMenuOpen;

        if (window.App.isMenuOpen) {
            sidebar.classList.remove('-translate-x-full');
            sidebar.classList.add('translate-x-0');
            overlay.classList.remove('hidden');
            setTimeout(() => overlay.classList.remove('opacity-0'), 10);
            btn.classList.add('menu-open');
        } else {
            sidebar.classList.add('-translate-x-full');
            sidebar.classList.remove('translate-x-0');
            overlay.classList.add('opacity-0');
            setTimeout(() => overlay.classList.add('hidden'), 300);
            btn.classList.remove('menu-open');
        }
    },

    toggleTheme: function () {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        const icon = document.getElementById('themeIcon');
        if (icon) {
            icon.className = isDark ? 'fa-solid fa-sun text-yellow-500' : 'fa-solid fa-moon text-gray-700';
        }
    },

    showToast: function (title, msg, isError = false) {
        const toast = document.getElementById('toast');
        document.getElementById('toastTitle').textContent = title;
        document.getElementById('toastMsg').textContent = msg;
        const iconDiv = toast.querySelector('div.w-8');
        if (isError) {
            iconDiv.className = "w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 shrink-0";
            iconDiv.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            iconDiv.className = "w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0";
            iconDiv.innerHTML = '<i class="fa-solid fa-check"></i>';
        }
        toast.classList.remove('translate-y-20', 'opacity-0');
        toast.classList.add('translate-y-0', 'opacity-100');

        setTimeout(() => {
            toast.classList.add('translate-y-20', 'opacity-0');
            toast.classList.remove('translate-y-0', 'opacity-100');
        }, 3000);
    },

    initTerminalResizer: function () {
        const resizer = document.getElementById('terminalResizer');
        const container = document.getElementById('terminalContainer');
        const output = document.getElementById('terminalOutput');
        if (!resizer || !container || !output) return;

        let startY = 0;
        let startHeight = 0;

        window.App.UI.isExpanded = false;
        window.App.UI.hasRunSimulation = false;

        window.App.UI.expandConsole = function (forceExpand) {
            if (forceExpand && window.App.UI.isExpanded) {
                let needed = output.scrollHeight + 60;
                let maxH = window.innerHeight * 0.65;
                container.style.height = Math.max(160, Math.min(needed, maxH)) + 'px';
                return;
            }
            if (forceExpand === false && !window.App.UI.isExpanded) return;

            window.App.UI.isExpanded = forceExpand !== undefined ? forceExpand : !window.App.UI.isExpanded;
            container.style.transition = 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)';

            if (window.App.UI.isExpanded) {
                let needed = output.scrollHeight + 60;
                let maxH = window.innerHeight * 0.65;
                container.style.height = Math.max(180, Math.min(needed, maxH)) + 'px';
            } else {
                container.style.height = '160px';
            }
            setTimeout(() => container.style.transition = 'none', 300);
        };

        output.style.cursor = 'pointer';
        output.setAttribute('title', 'Click to expand/collapse explicitly AFTER running.');
        output.addEventListener('click', (e) => {
            if (window.getSelection().toString().length > 0) return;
            if (!window.App.UI.hasRunSimulation) return;
            window.App.UI.expandConsole();
        });

        resizer.addEventListener('mousedown', (e) => {
            startY = e.clientY;
            startHeight = container.offsetHeight;
            document.body.style.cursor = 'ns-resize';

            const mouseMoveHandler = (e) => {
                const dy = startY - e.clientY;
                container.style.transition = 'none';
                container.style.height = `${startHeight + dy}px`;
                isExpanded = parseInt(container.style.height) > 200;
            };

            const mouseUpHandler = () => {
                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
                document.body.style.cursor = '';
            };

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        });
    },

    // 📏 Horizontal sidebar resizer (desktop only)
    initSidebarResizer: function () {
        const resizer = document.getElementById('sidebarResizer');
        const sidebar = document.getElementById('sidebar');
        if (!resizer || !sidebar) return;

        let isResizing = false;

        resizer.addEventListener('mousedown', () => {
            isResizing = true;
            document.body.classList.add('select-none');
            document.body.style.cursor = 'ew-resize';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isResizing) return;
            const newWidth = Math.max(200, Math.min(520, e.clientX));
            sidebar.style.width = newWidth + 'px';
        });

        document.addEventListener('mouseup', () => {
            if (!isResizing) return;
            isResizing = false;
            document.body.classList.remove('select-none');
            document.body.style.cursor = '';
        });
    }
};


// --- MODULE: viewer.js ---
window.App.Viewer = {
    handleHashRouting: function () {
        const hash = window.location.hash;
        window.currentActiveHash = hash;

        window.App.UI.initSidebar(document.getElementById('searchInput').value);
        // Scroll the active sidebar link into view (keyboard nav, button clicks)
        setTimeout(() => window.App.UI.scrollActiveSidebarItem(), 50);

        const fileId = hash.substring(1);
        const currentIndex = window.App.Data.cppFiles.findIndex(f => f.id === fileId);

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        if (prevBtn && nextBtn) {
            if (currentIndex <= 0) { prevBtn.style.opacity = 0.3; prevBtn.style.pointerEvents = 'none'; }
            else { prevBtn.style.opacity = 1; prevBtn.style.pointerEvents = 'auto'; }
            if (currentIndex >= window.App.Data.cppFiles.length - 1 || currentIndex === -1) { nextBtn.style.opacity = 0.3; nextBtn.style.pointerEvents = 'none'; }
            else { nextBtn.style.opacity = 1; nextBtn.style.pointerEvents = 'auto'; }
        }

        const emptyState = document.getElementById('emptyState');
        const viewer = document.getElementById('viewerContainer');

        if (!hash || hash === '#') {
            emptyState.classList.remove('hidden');
            viewer.classList.add('hidden');
            viewer.classList.remove('flex');
            return;
        }

        const fileObj = window.App.Data.cppFiles.find(f => f.id === fileId);
        if (fileObj) {
            emptyState.classList.add('hidden');
            viewer.classList.remove('hidden');
            viewer.classList.add('flex');

            document.getElementById('currentFileName').textContent = fileObj.title;
            document.getElementById('currentUnitName').textContent = fileObj.unit;

            if (document.getElementById('conceptName')) {
                document.getElementById('conceptName').textContent = fileObj.concept;
                document.getElementById('conceptDesc').textContent = fileObj.description;
                document.getElementById('conceptUseCase').textContent = fileObj.useCase;

                const bioNoteEl = document.getElementById('conceptBioNote');
                const bioContainer = document.getElementById('bioNoteContainer');
                if (bioNoteEl && bioContainer) {
                    if (fileObj.bioNote) {
                        bioNoteEl.textContent = fileObj.bioNote;
                        bioContainer.classList.remove('hidden');
                    } else {
                        bioContainer.classList.add('hidden');
                    }
                }
            }

            this.fetchCodeData(fileId);
            window.App.Simulator.resetTerminal();
        }
    },

    fetchCodeData: function (filename) {
        if (window.__CPP_CONTENTS__ && window.__CPP_CONTENTS__[filename]) {
            this.renderCode(window.__CPP_CONTENTS__[filename]);
        } else {
            this.renderCode('// Error: File not found in cache.');
        }
    },

    renderCode: function (text) {
        const codeBlock = document.getElementById('codeBlock');
        codeBlock.textContent = text;
        if (window.Prism) {
            Prism.highlightElement(codeBlock);
        }
    },

    navigateProgram: function (offset) {
        if (!window.currentActiveHash) return;
        const fileId = window.currentActiveHash.substring(1);
        const currentIndex = window.App.Data.cppFiles.findIndex(f => f.id === fileId);
        if (currentIndex === -1) return;

        let newIndex = currentIndex + offset;
        if (newIndex < 0) newIndex = 0;
        if (newIndex >= window.App.Data.cppFiles.length) newIndex = window.App.Data.cppFiles.length - 1;

        window.location.hash = '#' + window.App.Data.cppFiles[newIndex].id;
    },

    copyCode: async function () {
        const fileId = window.currentActiveHash.substring(1);
        if (!fileId || !window.__CPP_CONTENTS__ || !window.__CPP_CONTENTS__[fileId]) return;
        const textToCopy = window.__CPP_CONTENTS__[fileId];

        try {
            await navigator.clipboard.writeText(textToCopy);
            this.triggerCopyAnimation(true);
        } catch (err) {
            this.fallbackCopyTextToClipboard(textToCopy);
        }
    },

    fallbackCopyTextToClipboard: function (text) {
        var textArea = document.getElementById("copyFallback");
        textArea.value = text;
        textArea.focus();
        textArea.select();
        try {
            var successful = document.execCommand('copy');
            this.triggerCopyAnimation(successful);
        } catch (err) {
            this.triggerCopyAnimation(false);
        }
        window.getSelection().removeAllRanges();
    },

    triggerCopyAnimation: function (success) {
        if (success) window.App.UI.showToast("Copied!", "Source code placed in clipboard.");
        else window.App.UI.showToast("Error", "Copy command rejected.", true);

        const btn = document.getElementById('copyBtn');
        if (!btn) return;

        btn.classList.add('bg-emerald-500/20', 'border-emerald-500/50', 'text-emerald-600', 'dark:text-emerald-400', 'scale-95');
        btn.innerHTML = `<i class="fa-solid fa-check sm:mr-0 group-hover:scale-100"></i> <span class="hidden sm:inline ml-2">Copied ✓</span>`;

        setTimeout(() => {
            btn.classList.remove('bg-emerald-500/20', 'border-emerald-500/50', 'text-emerald-600', 'dark:text-emerald-400', 'scale-95');
            btn.innerHTML = `<i class="fa-regular fa-copy group-hover:scale-110 transition-transform duration-200"></i> <span class="hidden sm:inline ml-2">Copy Code</span>`;
        }, 1500);
    },

    downloadCode: function () {
        const fileId = window.currentActiveHash.substring(1);
        if (!fileId || !window.__CPP_CONTENTS__[fileId]) return;
        const textToDownload = window.__CPP_CONTENTS__[fileId];
        const blob = new Blob([textToDownload], { type: 'text/x-c++src' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = fileId;
        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);
        a.remove();
    }
};


// --- MODULE: simulator.js ---
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


// --- MODULE: manual_diagrams.js ---
// =========================================================================
// 🖨️ MANUAL DIAGRAM OVERRIDES
// =========================================================================
// Paste your exact Mermaid code here for any program you want to manually design!
// 
// Ensure the filename exactly matches the ones in `src/data.js`.
// You DO NOT need to write any `classDef` blocks! The engine automatically applies the theme natively.
//
// Example:
// "filename.cpp": \`flowchart TD ... \`,
// =========================================================================

window.__MANUAL_DIAGRAMS__ = {

    // ── UNIT I: BASICS & ARRAYS ──────────────────────────────────────────────

    "1_hello_world.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Include iostream"]:::process
    C["Print Hello World"]:::process
    D(["End"]):::startEnd

    A --> B --> C --> D`,

    "2_integer_input.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input n"/]:::input
    C["Store n in memory"]:::process
    D[/"Print n"/]:::output
    E(["End"]):::startEnd

    A --> B --> C --> D --> E`,

    "3_arithmetic_ops.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input a, b"/]:::input
    C["sum = a + b"]:::process
    D["diff = a - b"]:::process
    E["prod = a * b"]:::process
    F["quot = a / b"]:::process
    G["mod = a % b"]:::process
    H[/"Print all results"/]:::output
    I(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H --> I`,

    "4_sizeof_datatypes.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["List int, float, double, char, bool"]:::process
    C[/"Print sizeof each type"/]:::output
    D(["End"]):::startEnd

    A --> B --> C --> D`,

    "5_even_odd.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input n"/]:::input
    C{"n % 2 == 0"}:::decision
    D[/"Print Even"/]:::output
    E[/"Print Odd"/]:::output
    F(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D --> F
    C -- No --> E --> F`,

    "6_if_statement.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input n"/]:::input
    C{"n > 0"}:::decision
    D[/"Print Positive"/]:::output
    E(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D --> E
    C -- No --> E`,

    "7_smallest_two.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input a, b"/]:::input
    C{"a < b"}:::decision
    D[/"Print a is smallest"/]:::output
    E[/"Print b is smallest"/]:::output
    F(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D --> F
    C -- No --> E --> F`,

    "8_largest_three.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Initialize a=10, b=20, c=3"]:::process
    C{"a > b AND a > c"}:::decision
    D["Print a is greatest"]:::process
    E{"b > a AND b > c"}:::decision
    F["Print b is greatest"]:::process
    G["Print c is greatest"]:::process
    H(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D --> H
    C -- No --> E
    E -- Yes --> F --> H
    E -- No --> G --> H`,

    "9_leap_year.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input year"/]:::input
    C{"year % 400 == 0"}:::decision
    D{"year % 100 == 0"}:::decision
    E{"year % 4 == 0"}:::decision
    F[/"Print Leap Year"/]:::output
    G[/"Print Not Leap Year"/]:::output
    H(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> F --> H
    C -- No --> D
    D -- Yes --> G --> H
    D -- No --> E
    E -- Yes --> F
    E -- No --> G`,

    "10_calc_switch.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input op, a, b"/]:::input
    C{"Operator?"}:::decision

    D["Print a + b"]:::process
    E["Print a - b"]:::process
    F["Print a * b"]:::process

    G{"b != 0"}:::decision
    H["Print a / b"]:::process
    I["Print Div by 0"]:::process

    J["Print Invalid op"]:::process
    K(["End"]):::startEnd

    A --> B --> C

    C -- "+" --> D --> K
    C -- "-" --> E --> K
    C -- "*" --> F --> K

    C -- "/" --> G
    G -- Yes --> H --> K
    G -- No --> I --> K

    C -- "Other" --> J --> K`,

    "11_print_1_10_for.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["i = 1"]:::process
    C{"i <= 10"}:::decision
    D["Print i"]:::process
    E["i = i + 1"]:::process
    F(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D --> E --> C
    C -- No --> F`,

    "12_fibonacci_while.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Initialize count=10, a=0, b=1"]:::process
    C["Display Fibonacci Series"]:::process
    D{"count > 0"}:::decision
    E["Print a"]:::process
    F["next = a + b"]:::process
    G["a = b"]:::process
    H["b = next"]:::process
    I["count = count - 1"]:::process
    J(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F --> G --> H --> I --> D
    D -- No --> J`,

    "13_fibonacci_for.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Init a=0, b=1, i=0"]:::process
    C{"i < 10"}:::decision
    D["Print a"]:::process
    E["next = a + b"]:::process
    F["a = b"]:::process
    G["b = next"]:::process
    H["i = i + 1"]:::process
    I(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D --> E --> F --> G --> H --> C
    C -- No --> I`,

    "14_fibonacci_while_limit.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["a = 0, b = 1"]:::process
    C["Print heading"]:::process
    D{"a < 10"}:::decision
    E["Print a"]:::process
    F["next = a + b"]:::process
    G["a = b"]:::process
    H["b = next"]:::process
    I(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F --> G --> H --> D
    D -- No --> I`,

    "15_fibonacci_for_limit.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Initialize a = 0, b = 1"]:::process
    C["Print heading"]:::process
    D{"a < 10"}:::decision
    E["Print a"]:::process
    F["next = a + b"]:::process
    G["a = b"]:::process
    H["b = next"]:::process
    I(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F --> G --> H --> D
    D -- No --> I`,

    "16_prime_check.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input n"/]:::input
    C["isPrime = true"]:::process
    D{"n <= 1"}:::decision
    E["isPrime = false"]:::process
    F["i = 2"]:::process
    G{"i * i <= n"}:::decision
    H{"n % i == 0"}:::decision
    I["isPrime = false"]:::process
    J["i = i + 1"]:::process
    K{"isPrime"}:::decision
    L["Print Prime"]:::process
    M["Print Not Prime"]:::process
    N(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> K
    D -- No --> F --> G
    G -- Yes --> H
    H -- Yes --> I --> K
    H -- No --> J --> G
    G -- No --> K
    K -- Yes --> L --> N
    K -- No --> M --> N`,

    "17_armstrong.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input n"/]:::input
    C["num = n, sum = 0"]:::process
    D{"num != 0"}:::decision
    E["digit = num % 10"]:::process
    F["sum = sum + digit^3"]:::process
    G["num = num / 10"]:::process
    H{"sum == n"}:::decision
    I["Print Armstrong"]:::process
    J["Print Not Armstrong"]:::process
    K(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F --> G --> D
    D -- No --> H
    H -- Yes --> I --> K
    H -- No --> J --> K`,

    "18_break_continue.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["i = 1"]:::process
    C{"i <= 10"}:::decision
    D{"i == 4"}:::decision
    E["i = i + 1"]:::process
    F{"i == 8"}:::decision
    G["Print i"]:::process
    H["i = i + 1"]:::process
    I(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D
    D -- Yes --> E --> C
    D -- No --> F
    F -- Yes --> I
    F -- No --> G --> H --> C
    C -- No --> I`,

    "19_array_io.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Declare array arr size 5"]:::process
    C["i = 0"]:::process
    D{"i < 5"}:::decision
    E["Input arr[i]"]:::process
    F["i = i + 1"]:::process

    G["Display Scores"]:::process
    H["i = 0"]:::process
    I{"i < 5"}:::decision
    J["Print arr[i]"]:::process
    K["i = i + 1"]:::process

    L(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F --> D
    D -- No --> G --> H --> I
    I -- Yes --> J --> K --> I
    I -- No --> L`,

    "20_sum_avg_array.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Initialize arr = {10,20,30,40,50}"]:::process
    C["sum = 0, i = 0"]:::process
    D{"i < 5"}:::decision
    E["sum = sum + arr[i]"]:::process
    F["i = i + 1"]:::process
    G["Compute avg = sum / 5"]:::process
    H["Print Sum and Avg"]:::process
    I(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F --> D
    D -- No --> G --> H --> I`,

    "21_large_small_array.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Initialize arr = {3,1,9,7,5}"]:::process
    C["min = arr[0], max = arr[0], i = 1"]:::process
    D{"i < 5"}:::decision
    E{"arr[i] > max"}:::decision
    F["max = arr[i]"]:::process
    G{"arr[i] < min"}:::decision
    H["min = arr[i]"]:::process
    I["i = i + 1"]:::process
    J["Print Min and Max"]:::process
    K(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E
    E -- Yes --> F --> G
    E -- No --> G
    G -- Yes --> H --> I
    G -- No --> I
    I --> D
    D -- No --> J --> K`,

    "22_matrix_add.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Declare A, B, C as 2x2 matrices"]:::process
    C["i = 0"]:::process
    D{"i < 2"}:::decision
    E["j = 0"]:::process
    F{"j < 2"}:::decision
    G["C[i][j] = A[i][j] + B[i][j]"]:::process
    H["j = j + 1"]:::process
    I["i = i + 1"]:::process
    J[/"Print matrix C"/]:::output
    K(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F
    F -- Yes --> G --> H --> F
    F -- No --> I --> D
    D -- No --> J --> K`,

    "23_concat_name.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input firstName, lastName"/]:::input
    C["fullName = firstName + lastName"]:::process
    D[/"Print fullName"/]:::output
    E(["End"]):::startEnd

    A --> B --> C --> D --> E`,

    "24_reverse_string.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input string s"/]:::input
    C["i = length(s) - 1"]:::process
    D{"i >= 0"}:::decision
    E["Print s[i]"]:::process
    F["i = i - 1"]:::process
    G(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F --> D
    D -- No --> G`,

    // ── UNIT II: FUNCTIONS & POINTERS ───────────────────────────────────────

    "25_sum_function.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input a, b"/]:::input
    C["Call sum(a, b)"]:::process
    D["result = a + b"]:::process
    E["Return result"]:::process
    F[/"Print result"/]:::output
    G(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G`,

    "26_pass_array_func.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Initialize arr = {10,20,30,40,50}"]:::process
    C["Call printArray(arr, 5)"]:::process
    D["i = 0"]:::process
    E{"i < 5"}:::decision
    F[/"Print arr[i]"/]:::output
    G["i = i + 1"]:::process
    H(["End"]):::startEnd

    A --> B --> C --> D --> E
    E -- Yes --> F --> G --> E
    E -- No --> H`,

    "27_swap_value.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["a = 5, b = 10"]:::process
    C["Call swap(a, b)"]:::process
    D["temp = x, x = y, y = temp"]:::process
    E[/"Print a, b (UNCHANGED)"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`,

    "28_swap_ref.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["a = 5, b = 10"]:::process
    C["Call swap(&a, &b)"]:::process
    D["temp = *x, *x = *y, *y = temp"]:::process
    E[/"Print a, b (SWAPPED)"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`,

    "29_recursive_sum.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input n"/]:::input
    C["Call sum(n)"]:::process
    D{"n == 0"}:::decision
    E["Return 0"]:::process
    F["Return n + sum(n-1)"]:::process
    G[/"Print result"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> G --> H
    D -- No --> F --> C`,

    "30_recursive_factorial.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Call fact(4)"]:::process

    C{"n <= 1?"}:::decision
    D["Return 1"]:::process

    E["Call fact(n-1)"]:::process
    F["Multiply n * result"]:::process
    G["Return result"]:::process

    H(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D --> H
    C -- No --> E --> F --> G --> C`,

    "31_pointer_basics.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["int x = 10"]:::process
    C["int *p = &x"]:::process
    D[/"Print x, &x, *p, p"/]:::output
    E(["End"]):::startEnd

    A --> B --> C --> D --> E`,

    "32_add_pointers.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["int a = 5, b = 10"]:::process
    C["int *p = &a, *q = &b"]:::process
    D["sum = *p + *q"]:::process
    E[/"Print sum"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`,

    "33_dyn_array.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input size n"/]:::input
    C["Allocate array with new int[n]"]:::process
    D["i = 0"]:::process
    E{"i < n"}:::decision
    F[/"Input arr[i]"/]:::input
    G["i = i + 1"]:::process
    H["i = 0"]:::process
    I{"i < n"}:::decision
    J[/"Print arr[i]"/]:::output
    K["i = i + 1"]:::process
    L["delete[] array"]:::process
    M(["End"]):::startEnd

    A --> B --> C --> D --> E
    E -- Yes --> F --> G --> E
    E -- No --> H --> I
    I -- Yes --> J --> K --> I
    I -- No --> L --> M`,

    // ── UNIT III: OOP ────────────────────────────────────────────────────────

    "34_class_object.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class GfG"]:::process
    C["Create object obj"]:::process
    D["obj.printMsg()"]:::process
    E[/"Print message"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`,

    "35_student_class.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class Student"]:::process
    C["Create object s1"]:::process
    D["s1.setData(name, marks)"]:::process
    E["s1.display()"]:::process
    F[/"Print name, marks"/]:::output
    G(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G`,

    "36_getdata_display.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with getData() and display()"]:::process
    C["Create object obj"]:::process
    D["obj.getData()"]:::process
    E[/"Input data"/]:::input
    F["obj.display()"]:::process
    G[/"Print data"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "37_factorial_class.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class Factorial"]:::process
    C[/"Input n"/]:::input
    D["Create object f"]:::process
    E["f.compute(n)"]:::process
    F{"n <= 1"}:::decision
    G["Return 1"]:::process
    H["Return n * compute(n-1)"]:::process
    I[/"Print result"/]:::output
    J(["End"]):::startEnd

    A --> B --> C --> D --> E --> F
    F -- Yes --> G --> I --> J
    F -- No --> H --> E`,

    "38_array_objects.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class Student"]:::process
    C["Create array of 3 Student objects"]:::process
    D["i = 0"]:::process
    E{"i < 3"}:::decision
    F["Input student[i] data"]:::process
    G["i = i + 1"]:::process
    H["i = 0"]:::process
    I{"i < 3"}:::decision
    J[/"Display student[i]"/]:::output
    K["i = i + 1"]:::process
    L(["End"]):::startEnd

    A --> B --> C --> D --> E
    E -- Yes --> F --> G --> E
    E -- No --> H --> I
    I -- Yes --> J --> K --> I
    I -- No --> L`,

    "39_bank_encapsulation.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class BankAccount (private balance)"]:::process
    C["Create object acct"]:::process
    D["acct.deposit(500)"]:::process
    E["acct.withdraw(200)"]:::process
    F[/"acct.getBalance()"/]:::output
    G(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G`,

    "40_func_outside_class.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Declare class with method inside"]:::process
    C["Define method outside using ::"]:::process
    D["Create object obj"]:::process
    E["obj.display()"]:::process
    F[/"Print output"/]:::output
    G(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G`,

    "41_access_specifiers.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with public, private, protected"]:::process
    C["Create object obj"]:::process
    D["Access public member directly"]:::process
    E["Access private via public method"]:::process
    F[/"Print values"/]:::output
    G(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G`,

    "42_static_counter.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with static int count = 0"]:::process
    C["Create obj1 → count = 1"]:::process
    D["Create obj2 → count = 2"]:::process
    E["Create obj3 → count = 3"]:::process
    F[/"Print count = 3"/]:::output
    G(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G`,

    "43_friend_func.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with private data"]:::process
    C["Declare friend function"]:::process
    D["Create object obj"]:::process
    E["Call friend function with obj"]:::process
    F["Access private members directly"]:::process
    G[/"Print result"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "44_constructors.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with Default + Param constructors"]:::process
    C["Create obj1 (Default ctor fires)"]:::process
    D["Create obj2(10) (Param ctor fires)"]:::process
    E[/"Print obj1 and obj2 values"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`,

    "45_copy_constructor.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with Copy Constructor"]:::process
    C["Create original obj1"]:::process
    D["Create obj2 = obj1 (Copy ctor fires)"]:::process
    E[/"Print obj1 and obj2 (same values)"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`,

    "46_destructor.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with Destructor"]:::process
    C["Create object obj"]:::process
    D[/"obj constructor fires"/]:::output
    E["obj goes out of scope"]:::process
    F[/"Destructor fires automatically"/]:::output
    G(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G`,

    "47_func_overload.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define add(int, int)"]:::process
    C["Define add(float, float)"]:::process
    D["Define add(int, int, int)"]:::process
    E["Call add(2, 3)"]:::process
    F["Call add(2.5, 3.5)"]:::process
    G["Call add(1, 2, 3)"]:::process
    H[/"Print 5, 6.0, 6"/]:::output
    I(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H --> I`,

    "48_unary_overload.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class Counter with val = 0"]:::process
    C["Overload ++ operator"]:::process
    D["Create object c"]:::process
    E["++c  (operator fires)"]:::process
    F["val = val + 1"]:::process
    G[/"Print val"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "49_binary_overload.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class Complex (real, imag)"]:::process
    C["Overload + operator"]:::process
    D["Create c1(3,4), c2(1,2)"]:::process
    E["c3 = c1 + c2"]:::process
    F["real = c1.real + c2.real"]:::process
    G["imag = c1.imag + c2.imag"]:::process
    H[/"Print c3: 4 + 6i"/]:::output
    I(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H --> I`,

    "50_basic_to_class.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with converting constructor"]:::process
    C["int x = 42"]:::process
    D["MyClass obj = x (auto-converts)"]:::process
    E[/"Print obj value"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`,

    "51_single_inheritance.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define Base class Animal"]:::process
    C["Define Derived class Dog extends Animal"]:::process
    D["Create Dog object d"]:::process
    E["d.speak() (Base method)"]:::process
    F["d.bark() (Derived method)"]:::process
    G[/"Print output"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "52_multiple_inheritance.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class A (featA)"]:::process
    C["Define class B (featB)"]:::process
    D["Define class C extends A and B"]:::process
    E["Create object c"]:::process
    F["c.featA(), c.featB()"]:::process
    G[/"Print both features"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "53_multilevel_inheritance.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class A (Grandparent)"]:::process
    C["Define class B extends A (Parent)"]:::process
    D["Define class C extends B (Child)"]:::process
    E["Create object c"]:::process
    F["c.featureA(), c.featureB(), c.featureC()"]:::process
    G[/"Print all features"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "54_hybrid_inheritance.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class A (Base)"]:::process
    C["Define class B extends A"]:::process
    D["Define class C extends A"]:::process
    E["Define class D extends B and C"]:::process
    F["Create object d"]:::process
    G[/"d.show() (hybrid features)"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "55_hierarchical_inheritance.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define Base class Organism"]:::process
    C["Define Bacteria extends Organism"]:::process
    D["Define Virus extends Organism"]:::process
    E["Create Bacteria b, Virus v"]:::process
    F["b.info(), v.info()"]:::process
    G[/"Print both outputs"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "56_runtime_poly.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define Base class with virtual speak()"]:::process
    C["Define Derived Dog and Cat classes"]:::process
    D["Base *ptr = new Dog()"]:::process
    E["ptr->speak() → Dog sound"]:::process
    F["ptr = new Cat()"]:::process
    G["ptr->speak() → Cat sound"]:::process
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "57_virtual_function.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define Base with virtual display()"]:::process
    C["Define Derived overrides display()"]:::process
    D["Base *ptr = new Derived()"]:::process
    E["ptr->display()"]:::process
    F{"Late binding resolves at runtime"}:::decision
    G[/"Calls Derived::display()"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "58_exception_handling.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input a, b"/]:::input
    C["try block"]:::process
    D{"b == 0"}:::decision
    E["throw exception"]:::process
    F["result = a / b"]:::process
    G[/"Print result"/]:::output
    H["catch block"]:::process
    I[/"Print Div by 0 error"/]:::output
    J(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> H --> I --> J
    D -- No --> F --> G --> J`,

    "59_file_handling.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Open file for writing (ofstream)"]:::process
    C["Write sequence data to file"]:::process
    D["Close file"]:::process
    E["Open file for reading (ifstream)"]:::process
    F{"EOF?"}:::decision
    G[/"Read and print line"/]:::output
    H["Close file"]:::process
    I(["End"]):::startEnd

    A --> B --> C --> D --> E --> F
    F -- No --> G --> F
    F -- Yes --> H --> I`,

    "60_deep_shallow_copy.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Create obj1 with heap data"]:::process
    C["Shallow copy: obj2 = obj1 (same pointer)"]:::process
    D["Modify obj1 data"]:::process
    E[/"obj2 also changes (DANGER)"/]:::output
    F["Deep copy: obj3 with new memory"]:::process
    G["Modify obj1 data"]:::process
    H[/"obj3 unchanged (SAFE)"/]:::output
    I(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H --> I`,

    "61_templates.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define template function add(T a, T b)"]:::process
    C["add(3, 4) → int version"]:::process
    D["add(2.5, 1.5) → float version"]:::process
    E[/"Print 7, 4.0"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`

};


// --- MODULE: diagrams.js ---
window.App = window.App || {};

window.App.Diagrams = {
    init: function () {
        this.btn = document.getElementById('diagramBtn');
        this.modal = document.getElementById('diagramModal');
        this.closeBtn = document.getElementById('closeDiagramBtn');
        this.dlBtn = document.getElementById('dlPngBtn');
        this.renderCtx = document.getElementById('diagramRenderCtx');

        if (!this.btn || !this.modal) return;
        if (typeof mermaid !== 'undefined') {
            mermaid.initialize({ startOnLoad: false, theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default' });
        }

        this.btn.addEventListener('click', () => this.openModal());
        this.closeBtn.addEventListener('click', () => this.closeModal());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });
        this.dlBtn.addEventListener('click', () => this.downloadPNG());
    },

    openModal: function () {
        const fileId = window.currentActiveHash.substring(1);
        const code = window.__CPP_CONTENTS__[fileId] || "";

        let pattern = "";
        const fileObj = window.App.Data.cppFiles.find(f => f.id === fileId);
        const manualOverride = window.__MANUAL_DIAGRAMS__ && window.__MANUAL_DIAGRAMS__[fileId];

        if (manualOverride) {
            pattern = manualOverride + "\n" + this.styles();
        } else if (fileObj && fileObj.diagramPattern) {
            pattern = fileObj.diagramPattern;
        } else {
            pattern = this.generatePatternFromCode(code, fileObj?.title || fileId);
        }

        this.renderDiagram(pattern, fileId);

        this.modal.classList.remove('hidden');
        void this.modal.offsetWidth; // Reflow
        this.modal.classList.remove('opacity-0');
        this.modal.firstElementChild.classList.remove('scale-95');
    },

    closeModal: function () {
        this.modal.classList.add('opacity-0');
        this.modal.firstElementChild.classList.add('scale-95');
        setTimeout(() => { this.modal.classList.add('hidden'); }, 300);
    },

    // 🔷 1. DETECT TYPE
    detectProgramType: function (code, title) {
        const header = title ? title.toLowerCase() : "";
        if (header.includes("recurs")) return "recursion";
        if (/class\s+\w+\s*:\s*(public|private|protected)\s+\w+/.test(code)) return "inheritance";
        if (/class\s+\w+/.test(code)) return "oop";
        if (/(for|while)\s*\(/.test(code)) return "loop";
        if (/if\s*\(/.test(code)) return "decision";
        return "simple";
    },

    // 🔷 2. EXTRACT ALGORITHM-AWARE LOGIC
    extractInfo: function (code) {
        let lines = code.split('\n');
        let initOps = [];
        let bodyOps = [];
        let inLoop = false;

        for (let l of lines) {
            let t = l.trim();
            if (t.startsWith("for") || t.startsWith("while")) inLoop = true;
            if (t === "}") inLoop = false;

            // Extract clean mathematical assignment instructions securely
            if (!t.startsWith("/") && !t.startsWith("cout") && !t.startsWith("cin") && !t.startsWith("return") && !t.startsWith("class") && !t.startsWith("#") && !t.startsWith("using")) {
                let isOp = t.includes("=") || t.includes("++") || t.includes("--") || t.includes("+=") || t.includes("-=");
                if (isOp && !t.includes("==") && !t.includes("for") && !t.includes("while")) {
                    let cleanOp = t.replace(";", "").replace("int ", "").replace("float ", "").replace("double ", "").trim();
                    if (cleanOp.length > 0 && cleanOp.length < 40) {
                        if (inLoop) bodyOps.push(cleanOp);
                        else initOps.push(cleanOp);
                    }
                }
            }
        }

        return {
            hasInput: /cin\s*>>/.test(code),
            hasOutput: /cout\s*<<|printf/.test(code),
            condition: (code.match(/if\s*\((.*?)\)/) || [])[1] || "Condition",
            loop: (code.match(/(for|while)\s*\((.*?)\)/) || [])[2] || "Condition",
            initOps: initOps.length > 0 ? initOps.slice(0, 3) : ["Initialize Variables"],
            bodyOps: bodyOps.length > 0 ? bodyOps.slice(0, 4) : ["Process Logic"]
        };
    },

    // 🔷 3. CLEAN TEXT
    clean: function (txt) {
        if (!txt) return "";
        return txt
            .replace(/&&/g, "AND")
            .replace(/\|\|/g, "OR")
            .replace(/"/g, "'")
            .slice(0, 50);
    },

    // 🔷 4. MAIN GENERATOR
    generatePatternFromCode: function (code, title) {
        const type = this.detectProgramType(code, title);
        const info = this.extractInfo(code);

        switch (type) {
            case "recursion": return this.templateRecursion(info);
            case "inheritance": return this.templateInheritance(info);
            case "oop": return this.templateOOP(info);
            case "loop": return this.templateLoop(info);
            case "decision": return this.templateDecision(info);
            default: return this.templateSimple(info);
        }
    },

    // 🔥 STRUCTURED TEMPLATES (DYNAMIC EDGE ROUTING & AUTO HIDING)
    templateRecursion: function (info) {
        let diag = `flowchart TD\n    A(["Start"]):::startEnd\n`;
        let prev = "A";

        if (info.hasInput) { diag += `    B[/"Enter Input"/]:::input\n    ${prev} --> B\n`; prev = "B"; }
        diag += `    C["Invoke Recursive Function"]:::process\n    ${prev} --> C\n`;

        diag += `    D{"Base Case Reached? (${this.clean(info.condition)})"}:::decision\n    C --> D\n`;

        diag += `    E["Call Self (Recursive Loop)"]:::process\n    D -- No --> E\n    E --> C\n`;

        diag += `    F["Base Return AND Unwind Stack"]:::process\n    D -- Yes --> F\n`;
        prev = "F";

        if (info.hasOutput) { diag += `    G[/"Display Output"/]:::output\n    ${prev} --> G\n`; prev = "G"; }
        diag += `    H(["End"]):::startEnd\n    ${prev} --> H\n\n    ${this.styles()}`;
        return diag;
    },

    templateDecision: function (info) {
        const initText = info.initOps.map(op => this.clean(op)).join("<br>");
        let diag = `flowchart TD\n    A(["Start"]):::startEnd\n`;
        let prev = "A";

        if (info.hasInput) { diag += `    B[/"Enter Input"/]:::input\n    ${prev} --> B\n`; prev = "B"; }
        diag += `    C["${initText}"]:::process\n    ${prev} --> C\n`;
        diag += `    D{"${this.clean(info.condition)} ?"}:::decision\n    C --> D\n`;
        diag += `    E["True Case Logic"]:::process\n    F["False Case Logic"]:::process\n`;

        if (info.hasOutput) {
            diag += `    G[/"Print Result"/]:::output\n    E --> G\n    F --> G\n    G --> H(["End"]):::startEnd\n`;
        } else {
            diag += `    E --> H(["End"]):::startEnd\n    F --> H\n`;
        }

        diag += `    D -- Yes --> E\n    D -- No --> F\n\n    ${this.styles()}`;
        return diag;
    },

    templateLoop: function (info) {
        const loopCond = info.loop ? this.clean(info.loop) : "Condition";
        const initText = info.initOps.map(op => this.clean(op)).join("<br>");
        const bodyText = info.bodyOps.map(op => this.clean(op)).join("<br>");

        let diag = `flowchart TD\n    A(["Start"]):::startEnd\n`;
        let prev = "A";

        if (info.hasInput) { diag += `    B[/"Enter Input"/]:::input\n    ${prev} --> B\n`; prev = "B"; }
        diag += `    C["${initText}"]:::process\n    ${prev} --> C\n`;
        diag += `    D{"${loopCond}"}:::decision\n    C --> D\n`;
        diag += `    E["${bodyText}"]:::process\n    D -- Yes --> E\n    E --> D\n`;

        if (info.hasOutput) {
            diag += `    F[/"Print Result"/]:::output\n    D -- No --> F\n    F --> G(["End"]):::startEnd\n`;
        } else {
            diag += `    D -- No --> G(["End"]):::startEnd\n`;
        }

        diag += `\n    ${this.styles()}`;
        return diag;
    },

    templateOOP: function (info) {
        let diag = `flowchart TD\n    A(["Start"]):::startEnd\n    B["Create Object"]:::process\n    C["Call Methods"]:::process\n    D["Process Inside Class"]:::process\n`;
        diag += `    A --> B --> C --> D\n`;
        if (info.hasOutput) {
            diag += `    E[/"Display Output"/]:::output\n    D --> E\n    E --> F(["End"]):::startEnd\n`;
        } else {
            diag += `    D --> F(["End"]):::startEnd\n`;
        }
        diag += `\n    ${this.styles()}`;
        return diag;
    },

    templateInheritance: function (info) {
        let diag = `flowchart TD\n    A(["Start"]):::startEnd\n    B["Create Derived Object"]:::process\n    C["Access Base Class Features"]:::process\n    D["Access Derived Class Features"]:::process\n`;
        diag += `    A --> B --> C --> D\n`;
        if (info.hasOutput) {
            diag += `    E[/"Display Output"/]:::output\n    D --> E\n    E --> F(["End"]):::startEnd\n`;
        } else {
            diag += `    D --> F(["End"]):::startEnd\n`;
        }
        diag += `\n    ${this.styles()}`;
        return diag;
    },

    templateSimple: function (info) {
        const usedInit = info.initOps[0] !== "Initialize Variables" ? info.initOps.map(op => this.clean(op)).join("<br>") : "Process Logic";
        let diag = `flowchart TD\n    A(["Start"]):::startEnd\n`;
        let prev = "A";

        if (info.hasInput) { diag += `    B[/"Enter Input"/]:::input\n    ${prev} --> B\n`; prev = "B"; }
        diag += `    C["${usedInit}"]:::process\n    ${prev} --> C\n`;
        prev = "C";

        if (info.hasOutput) { diag += `    D[/"Display Output"/]:::output\n    ${prev} --> D\n`; prev = "D"; }
        diag += `    E(["End"]):::startEnd\n    ${prev} --> E\n\n    ${this.styles()}`;
        return diag;
    },

    // 🎨 STYLE
    styles: function () {
        return `
classDef startEnd fill:#22c55e,stroke:#16a34a,color:white,rx:20,ry:20;
classDef input fill:#3b82f6,stroke:#1d4ed8,color:white;
classDef process fill:#facc15,stroke:#ca8a04,color:black;
classDef decision fill:#fb7185,stroke:#e11d48,color:white;
classDef output fill:#a78bfa,stroke:#7c3aed,color:white;
`;
    },

    renderDiagram: async function (patternString, id) {
        this.renderCtx.innerHTML = '<div class="text-gray-500"><i class="fa-solid fa-spinner fa-spin"></i> Rendering diagram...</div>';
        try {
            if (typeof mermaid === 'undefined') {
                this.renderCtx.innerHTML = '<div class="text-red-500">Mermaid.js failed to load.</div>';
                return;
            }
            const uniqueId = `mermaid-${Date.now()}`;

            patternString = patternString.trim();
            const { svg } = await mermaid.render(uniqueId, patternString);

            this.renderCtx.innerHTML = svg;

            const svgEl = this.renderCtx.querySelector('svg');
            if (svgEl) {
                svgEl.style.maxWidth = '100% !important';
                svgEl.style.maxHeight = '100% !important';
                svgEl.style.width = 'auto';
                svgEl.style.height = 'auto';
            }
        } catch (err) {
            console.error("Mermaid Render Error:", err);
            this.renderCtx.innerHTML = `<div class="text-red-500 text-sm p-4 whitespace-pre">Syntax Error generating diagram.\n\n${err.message}</div>`;
        }
    },

    downloadPNG: function () {
        if (typeof html2canvas === 'undefined') {
            window.App.UI.showToast("Error", "html2canvas library not loaded.", true);
            return;
        }

        html2canvas(this.renderCtx, {
            scale: 2,
            backgroundColor: "#ffffff",
            logging: false
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `diagram_${window.currentActiveHash.substring(1).replace('.cpp', '')}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            window.App.UI.showToast("Success", "Diagram saved as PNG");
        }).catch(err => {
            console.error("html2canvas Error:", err);
            window.App.UI.showToast("Error", "Failed to generate PNG", true);
        });
    }
};


// --- MODULE: background.js ---
window.App.Background = {
    init: function () {
        const c = document.getElementById("matrix-canvas");
        if (!c) return;
        const ctx = c.getContext("2d");

        c.width = window.innerWidth;
        c.height = window.innerHeight;

        const matrixChars = "0101010101{}[]()<>+-*=&|!?;:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const matrix = matrixChars.split("");
        const font_size = 14;
        let columns = c.width / font_size;
        let drops = [];
        for (let x = 0; x < columns; x++) drops[x] = 1;

        let mouseX = -1000;
        let mouseY = -1000;
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function draw() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, c.width, c.height);

            const isDark = document.documentElement.classList.contains('dark');
            ctx.font = font_size + "px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = matrix[Math.floor(Math.random() * matrix.length)];

                let dropX = i * font_size;
                let dropY = drops[i] * font_size;
                let dist = Math.sqrt(Math.pow(dropX - mouseX, 2) + Math.pow(dropY - mouseY, 2));

                // Interaction glow!
                if (dist < 120) {
                    ctx.fillStyle = isDark ? "#ffffff" : "#000000"; // Pure white/black near mouse
                } else if (dist < 200) {
                    ctx.fillStyle = isDark ? "#38bdf8" : "#3b82f6"; // Light blue nearby
                } else {
                    ctx.fillStyle = isDark ? "#0ea5e9" : "#64748b"; // Base color
                }

                ctx.fillText(text, dropX, dropY);
                if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        }
        setInterval(draw, 35);

        window.addEventListener('resize', () => {
            c.width = window.innerWidth;
            c.height = window.innerHeight;
            columns = c.width / font_size;
            const newDrops = [];
            for (let x = 0; x < columns; x++) newDrops[x] = drops[x] !== undefined ? drops[x] : Math.random() * (c.height / font_size);
            drops = newDrops;
        });
    }
};


// --- MODULE: main.js ---
window.currentActiveHash = '';

// ─── Tab Engine ────────────────────────────────────────────────────────────────
// Active-tab classes (Tailwind)
const TAB_ACTIVE   = ['border-primary', 'text-primary', 'bg-primary/5'];
const TAB_INACTIVE = ['border-transparent', 'text-gray-400'];

window.App.Tabs = {
    current: 'code',

    init: function () {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.dataset.tab;
                window.App.Tabs.switch(tab);
            });
        });
    },

    switch: function (tab) {
        this.current = tab;

        // Toggle button styles
        document.querySelectorAll('.tab-btn').forEach(btn => {
            const isActive = btn.dataset.tab === tab;
            if (isActive) {
                TAB_ACTIVE.forEach(c => btn.classList.add(c));
                TAB_INACTIVE.forEach(c => btn.classList.remove(c));
            } else {
                TAB_INACTIVE.forEach(c => btn.classList.add(c));
                TAB_ACTIVE.forEach(c => btn.classList.remove(c));
            }
        });

        // Show/hide panels
        document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.add('hidden');
        });
        const active = document.getElementById('tabPanel-' + tab);
        if (active) active.classList.remove('hidden');
    },

    // Called by Simulator after run completes — mirrors terminal content to Output tab
    syncOutput: function (html) {
        const panel = document.getElementById('tabPanel-output');
        if (panel) panel.innerHTML = html || '<span class="text-gray-500">No output produced.</span>';
    }
};
// ───────────────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    window.App.Background.init();
    window.App.UI.initSidebar();
    if (window.App.UI.initTerminalResizer) window.App.UI.initTerminalResizer();
    if (window.App.UI.initSidebarResizer) window.App.UI.initSidebarResizer();
    if (window.App.Diagrams) window.App.Diagrams.init();

    // 🧩 Initialize tabs
    window.App.Tabs.init();

    document.getElementById('themeToggle').addEventListener('click', () => window.App.UI.toggleTheme());
    document.getElementById('searchInput').addEventListener('input', (e) => window.App.Search.handleInput(e));
    document.getElementById('clearSearch').addEventListener('click', () => window.App.Search.clear());
    document.getElementById('copyBtn').addEventListener('click', () => window.App.Viewer.copyCode());
    document.getElementById('downloadBtn').addEventListener('click', () => window.App.Viewer.downloadCode());

    document.getElementById('prevBtn').addEventListener('click', () => window.App.Viewer.navigateProgram(-1));
    document.getElementById('nextBtn').addEventListener('click', () => window.App.Viewer.navigateProgram(1));

    document.getElementById('mobileMenuBtn').addEventListener('click', () => window.App.UI.toggleMobileMenu());
    document.getElementById('sidebarOverlay').addEventListener('click', () => window.App.UI.toggleMobileMenu());
    const mobileSearchBtn = document.getElementById('mobileSearchBtn');
    if (mobileSearchBtn) {
        mobileSearchBtn.addEventListener('click', () => {
            if (!window.App.isMenuOpen) {
                window.App.UI.toggleMobileMenu();
            }
            setTimeout(() => {
                document.getElementById('searchInput').focus();
            }, 300);
        });
    }

    const runBtn = document.getElementById('runBtn');
    if (runBtn) runBtn.addEventListener('click', () => window.App.Simulator.runCompiler());

    const closeConceptBtn = document.getElementById('closeConceptBtn');
    const openConceptBtn  = document.getElementById('openConceptBtn');
    const conceptPanel    = document.getElementById('conceptPanel');

    if (closeConceptBtn && conceptPanel && openConceptBtn) {
        closeConceptBtn.addEventListener('click', () => {
            conceptPanel.classList.add('hidden');
            openConceptBtn.classList.remove('hidden');
        });
        openConceptBtn.addEventListener('click', () => {
            conceptPanel.classList.remove('hidden');
            openConceptBtn.classList.add('hidden');
        });
    }

    window.addEventListener('hashchange', () => window.App.Viewer.handleHashRouting());
    window.App.Viewer.handleHashRouting();

    // ⌨️ Keyboard Navigation (← →)
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        if (e.key === 'ArrowRight') window.App.Viewer.navigateProgram(1);
        if (e.key === 'ArrowLeft')  window.App.Viewer.navigateProgram(-1);
    });
});


