#!/usr/bin/perl
# W.A.P. - Lists in Perl
# Program Name: Lists (Definition, Access & Slicing)
# Description : Defining lists of chars, integers and strings.
#               Accessing elements by index and using negative index.
# Concepts Used: Lists, array indexing, array slicing

# Defining lists
@list1 = ('a', 'b', 'c', 'd');         # list of characters
@list2 = (1, 2, 3, 4);                 # list of integers
@list3 = ("this", "is", "a", "list");  # list of strings

print "Character list: @list1\n";
print "Integer list  : @list2\n";
print "String list   : @list3\n";

# Accessing elements
@names = ('Danish', 'Satish', 'Rajesh', 'Manju', 'Uma', 'Vipin', 'Suresh');

$array_element = $names[4];     # 5th element (index 4)
$last_name     = $names[-1];    # Last element (negative index)

print "\nElement at index 4 : $array_element\n";
print "Last element ([-1]): $last_name\n";

# Array slicing
@new_names[0, 1, 2] = @names[1, 3, 5];   # Pick elements at positions 1,3,5
print "Sliced names: $new_names[0], $new_names[1], $new_names[2]\n";
