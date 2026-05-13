#!/usr/bin/perl
# W.A.P. to find the Reverse of a Number in Perl
# Program Name: Reverse of a Number
# Description : Two methods to reverse a number —
#               Method 1: Using the built-in reverse() function
#               Method 2: Using a while loop (digit extraction)
# Concepts Used: reverse(), int(), while loop, modulo (%), integer division
# Bioinformatics Use: Reversing DNA strands (5'->3' to 3'->5' direction)
# -----------------------------------------------------------------------

print "Enter a number to reverse: ";
my $num = <STDIN>;
chomp($num);    # Remove trailing newline

# -----------------------------------------------------------------------
# METHOD 1: Using the built-in reverse() function
# reverse() treats the number as a string and flips its characters
# int() removes any leading zeros (e.g., "0021" becomes 21)
# -----------------------------------------------------------------------
my $reversed_func = int(reverse($num));
print "\n--- Method 1: Using reverse() function ---\n";
print "Original number  : $num\n";
print "Reversed number  : $reversed_func\n";

# -----------------------------------------------------------------------
# METHOD 2: Using a while loop
# Extract the last digit using modulo (% 10)
# Build the reversed number by shifting left (* 10) and adding digit
# Remove the last digit using integer division (int($n / 10))
# -----------------------------------------------------------------------
my $n        = $num;   # Working copy
my $reversed = 0;

while ($n > 0) {
    my $digit = $n % 10;          # Extract last digit
    $reversed = $reversed * 10 + $digit;  # Append digit to result
    $n        = int($n / 10);     # Remove last digit
}

print "\n--- Method 2: Using while loop ---\n";
print "Original number  : $num\n";
print "Reversed number  : $reversed\n";
