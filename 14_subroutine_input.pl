#!/usr/bin/perl
# W.A.P. - Subroutine with User Input
# Program Name: Subroutine with STDIN Input
# Description : Takes 3 numbers as space-separated input, then calls
#               a subroutine to calculate and print the average.
# Concepts Used: STDIN, split, sub, scalar(@_), foreach, @_

print "Enter three numbers separated by space: ";
my $input = <STDIN>;
chomp($input);

my @numbers = split(' ', $input);   # Split input string into an array
Average(@numbers);                  # Pass array to subroutine

sub Average {
    my $n   = scalar(@_);           # Number of arguments
    my $sum = 0;

    foreach my $item (@_) {
        $sum += $item;
    }

    my $average = $sum / $n;
    print "Average is: $average\n";
}
