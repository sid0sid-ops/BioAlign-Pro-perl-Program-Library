#!/usr/bin/perl
# W.A.P. - Match Operator in Perl
# Program Name: Match Operator (=~ m//)
# Description : Uses the match operator to find a pattern and
#               captures pre-match, matched, and post-match strings.
# Concepts Used: =~ m//, $` (prematch), $& (match), $' (postmatch)

# --- Example 1: Basic string ---
$string = "perl tutorials by VLSI academy";
$string =~ m/by/;

print "String  : $string\n";
print "Before  : $`\n";    # $` = everything BEFORE the match
print "Matched : $&\n";    # $& = the exact MATCHED text
print "After   : $'\n";    # $' = everything AFTER the match

# --- Example 2: DNA sequence pattern ---
print "\n--- DNA Pattern Match ---\n";
$dna = "ATGCGTACGT";
if ($dna =~ m/ACGT/) {
    print "Sequence  : $dna\n";
    print "Matched   : $&\n";
    print "Before    : $`\n";
    print "After     : $'\n";
}
