#!/usr/bin/perl
# W.A.P. - String Multiply and Increment in Perl
# Program Name: String Multiply & Increment
# Description : Demonstrates multiplication of string-numbers and
#               the auto-increment (++) operator on strings
# Concepts Used: String * Number coercion, ++ operator, x repeat operator

# --- Multiply Operation ---
$stringvar = "abc";
print "abc * 2 = ";
print($stringvar * 2);    # Non-numeric string treated as 0
print "\n";

$stringvar = "12P34";
print "12P34 * 2 = ";
print($stringvar * 2);    # Numeric prefix 12 is used
print "\n";

# --- Increment Operation ---
$stringvar = "abc";
$stringvar++;
print "abc++ = $stringvar\n";   # Results in "abd"

$newstring = "t" x 5;
print "t x 5 = $newstring\n";   # Results in "ttttt"

$str = "z";
$str++;
print "z++ = $str\n";           # Results in "aa"

$str = "1.2P34";
$str++;
print "1.2P34++ = $str\n";      # Numeric increment: 2.2P34
