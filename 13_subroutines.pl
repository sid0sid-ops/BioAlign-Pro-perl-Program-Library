#!/usr/bin/perl
sub Average {
    my $n = scalar(@_);   # @_ stores the arguments passed
    my $sum = 0;
    foreach my $item (@_) {
        $sum += $item;
    }
    my $average = $sum / $n;
    print "Average is: $average\n";
}

Average(10, 20, 30); # Calling the function
