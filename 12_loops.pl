#!/usr/bin/perl
# While Loop
$a = 10;
while( $a < 20 ) {
    print "Value of a: $a\n";
    $a = $a + 1;
}

# For Loop 
for ( $a = 10; $a < 20; $a = $a + 1 ) {
    print "value of a: $a\n"; 
}

# Foreach Loop
@names = ("Ragav", "Yogita", "Ankit");
foreach $employee (@names) { 
    print "name of employee: $employee\n"; 
}

# Until Loop
$a = 5;
until( $a > 10 ) {
    print "Value of a: $a\n";
    $a = $a + 1;
}
