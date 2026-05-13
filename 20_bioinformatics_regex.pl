#!/usr/bin/perl
# W.A.P. - Bioinformatics Regular Expressions in Perl
# Program Name: Bioinformatics Regex Patterns
# Description : Demonstrates DNA pattern matching using Perl regex
# Concepts Used: Match Operator (=~), Regex Anchors (^ $), Character Classes
# -----------------------------------------------------------------------

# -----------------------------------------------------------------------
# Q1. Write a Perl regular expression to identify a DNA sequence
#     that starts with ATG and ends with TAA.
# Regex: /^ATG[ATGC]*TAA$/
# -----------------------------------------------------------------------
print "--- Q1: Sequence starts with ATG and ends with TAA ---\n";
my $dna1 = "ATGCGTTAA";
if ($dna1 =~ /^ATG[ATGC]*TAA$/) {
    print "Sequence: $dna1\n";
    print "Result  : Valid! Starts with ATG and ends with TAA.\n";
} else {
    print "Result  : No match.\n";
}

# -----------------------------------------------------------------------
# Q2. Write a Perl syntax to match a DNA sequence containing
#     ONLY the nucleotides A, T, G, and C.
# Regex: /^[ATGC]+$/
# -----------------------------------------------------------------------
print "\n--- Q2: Sequence contains ONLY A, T, G, C ---\n";
my $dna2 = "ATGCATGC";
if ($dna2 =~ /^[ATGC]+$/) {
    print "Sequence: $dna2\n";
    print "Result  : Valid DNA sequence (only ATGC nucleotides).\n";
} else {
    print "Result  : Invalid! Contains non-nucleotide characters.\n";
}

# Test with invalid sequence
my $dna2_invalid = "ATGXCATT";
if ($dna2_invalid =~ /^[ATGC]+$/) {
    print "Sequence: $dna2_invalid  -> Valid.\n";
} else {
    print "Sequence: $dna2_invalid -> Invalid! Contains non-nucleotide characters.\n";
}

# -----------------------------------------------------------------------
# Q3. Write a Perl regular expression to identify sequences beginning
#     with start codon ATG and ending with ANY stop codon (TAA/TAG/TGA).
# Regex: /^ATG[ATGC]*(TAA|TAG|TGA)$/
# -----------------------------------------------------------------------
print "\n--- Q3: Start codon ATG + any Stop codon (TAA|TAG|TGA) ---\n";
my @sequences = ("ATGCGTTAA", "ATGCCCTAG", "ATGGCATGA", "ATGCGCATC");
foreach my $seq (@sequences) {
    if ($seq =~ /^ATG[ATGC]*(TAA|TAG|TGA)$/) {
        print "Sequence: $seq -> MATCH! Stop codon: $1\n";
    } else {
        print "Sequence: $seq -> No match (missing valid stop codon).\n";
    }
}
