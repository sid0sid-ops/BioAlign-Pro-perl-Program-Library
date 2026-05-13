#!/usr/bin/perl
# FASTA File Parsing Example (Mock)
print "Simulating FASTA read...\n";
$line = ">Sequence_1\nATGCGTACGT";
if ($line =~ /^>/) {
    print "Header found\n";
}
