#!/usr/bin/perl
# --- Example 1: Splitting by Space ---
$line = "welcome to bioinformatics Dept.";
print "$line\n";

@list_new = split(/ /, $line);
print "First element (space split): $list_new[0]\n\n";

# --- Example 2: Splitting by Comma ---
$line = "welcome to, bioinformatics Dept.";
print "$line\n";

@list_new = split(/,/, $line);
print "First element (comma split): $list_new[0]\n";
