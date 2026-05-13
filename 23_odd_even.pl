#!/usr/bin/perl
# W.A.P. to find whether a Number is Odd or Even in Perl
# Program Name: Odd or Even
# Description : Takes a number as input and checks if it is Odd or Even
# Concepts Used: Modulo operator (%), if-else, STDIN, chomp()
# Bioinformatics Use: Determining reading frame offsets
#   (position % 3 == 0 means start of a codon)
# -----------------------------------------------------------------------

print "Enter a number: ";
my $num = <STDIN>;
chomp($num);    # Remove the trailing newline character

# Modulo operation: if remainder when divided by 2 is 0 -> Even, else Odd
if ($num % 2 == 0) {
    print "The number $num is Even.\n";
} else {
    print "The number $num is Odd.\n";
}
