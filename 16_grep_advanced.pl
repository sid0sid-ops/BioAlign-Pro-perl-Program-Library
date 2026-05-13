#!/usr/bin/perl
# W.A.P. - Advanced grep() Examples
# Program Name: Grep Advanced Patterns
# Description : Filters an array using different regex patterns with grep()
# Concepts Used: grep(), regex anchors (^ $), character classes

@myNames = ('Jacob', 'Radheshyam', 'Vivek', 'Vikram',
            'Alexander', 'Jyoti', 9873, 4523, 5787);

print "Original array: @myNames\n\n";

# Filter: items ending with a lowercase letter
@grepNames = grep(/[a-z]$/, @myNames);
print "Ends with a-z      : @grepNames\n";

# Filter: items ending with 'm'
@grepNames = grep(/m$/, @myNames);
print "Ends with 'm'      : @grepNames\n";

# Filter: items starting with 'V'
@grepNames = grep(/^V/, @myNames);
print "Starts with 'V'    : @grepNames\n";

# Filter: items ending with 'k'
@grepNames = grep(/k$/, @myNames);
print "Ends with 'k'      : @grepNames\n";
