#!/usr/bin/perl
$salary = 10500;
if( $salary > 10000 ) {
    print "Employee is Manager\n";
} elsif ($salary < 10000) {
    print "Employee is staff\n";
}

# Unless executes if condition is FALSE
$a = 22;
unless( $a < 20 ) {
    print "a is greater than 20\n";
}
