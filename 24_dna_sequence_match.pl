#!/usr/bin/perl
print "Enter a DNA sequence: ";
my $dna = <STDIN>;
chomp($dna);

# Convert input to uppercase just in case
$dna = uc($dna);

# Check if it contains only valid nucleotides
if ($dna =~ /^[ATGC]+$/) {
    print "Valid DNA Sequence!\n";
    
    # Check for Start and Stop codon
    if ($dna =~ /^ATG.*(TAA|TAG|TGA)$/) {
         print "Match Found! This sequence contains a start codon (ATG) and a stop codon.\n";
    } else {
         print "No Match: Missing proper start or stop codon.\n";
    }
} else {
    print "Invalid Sequence: Contains non-nucleotide characters.\n";
}
