#!/usr/bin/perl
# W.A.P. - Switch Statement in Perl
# Program Name: Switch Statement
# Description : Using the Switch module to match variable against multiple cases
# Concepts Used: use Switch, case, else, array matching, hash matching

use Switch;

$var   = 30;
@array = (10, 20, 30);
%hash  = ('key1' => 10, 'key2' => 20);

switch ($var) {
    case 10           { print "Matched: number 10\n"               }
    case "a"          { print "Matched: string a\n"                }
    case [1..10, 42]  { print "Matched: number in range/list\n"    }
    case (\@array)    { print "Matched: number in array list\n"    }
    case (\%hash)     { print "Matched: entry in hash\n"           }
    else              { print "Previous case not true — default hit\n" }
}
