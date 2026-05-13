#!/usr/bin/perl
# Match Operator
$string = "perl tutorials by VLSI academy";
$string =~ m/by/;
print "Matched: $&\n"; 

# Substitution Operator (Replace text)
$string = "Punjab bioinformatics University";
$string =~ s/bioinformatics/online platform/;
print "Final string: $string\n";
