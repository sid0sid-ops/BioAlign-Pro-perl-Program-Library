#!/usr/bin/perl
@myNames = ('Jacob', 'Radheshyam', 'Vivek', 'Vikram', 'Alexander', 'Jyoti');
# grep to find items starting with 'V'
@grepNames = grep(/^V/, @myNames); 
print "@grepNames\n"; 

@nameGrep=('reet', 'jacob','aryan',1234,666,'arav','rani',326);
my @GrepName_list = grep(/[a-z]$/, @nameGrep);
print "Ends with a-z: @GrepName_list\n";

my @GrepName_list2 = grep(/\d/, @nameGrep);
print "Contains a digit: @GrepName_list2\n";

my @GrepName_list3 = grep(/i$/, @nameGrep);
print "Ends with 'i': @GrepName_list3\n";

my @GrepName_list4 = grep(/^3/, @nameGrep);
print "Starts with '3': @GrepName_list4\n";
