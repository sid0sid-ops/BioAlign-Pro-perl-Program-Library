#!/usr/bin/perl
# W.A.P. - Substitution Operator in Perl
# Program Name: Substitution Operator (s///)
# Description : Replaces matched patterns in a string using s///
#               and the global modifier (g) to replace all occurrences.
# Concepts Used: s/pattern/replacement/, /g modifier

# --- Example 1: Basic substitution ---
$string = "VLSI Academy is university";
print "Initial string: $string\n";
$string =~ s/university/online platform/;
print "Final string  : $string\n\n";

# --- Example 2: Replace Python with Perl ---
$line = "I love Python for bioinformatics. Python is great.";
print "Before: $line\n";
$line =~ s/Python/Perl/g;    # /g = replace ALL occurrences
print "After : $line\n\n";

# --- Example 3: Double substitution on bioinformatics string ---
$string = "Punjab bioinformatics University bioinformatics";
print "Initial: $string\n";
$string =~ s/bioinformatics/ABBGCFDG/;  # Replaces FIRST occurrence
$string =~ s/bioinformatics/XYZEF/;    # Replaces SECOND occurrence
print "Final  : $string\n";
