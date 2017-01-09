# puts 'guess a number'

# number_string = gets.chomp
# number = number_string.to_i

# puts 'now enter a password'
# password = gets.chomp

# if number < 15 && password == 'correct'
# 	puts "number is less than 15!"
# elsif number < 15
# 	puts "I cant tell you anything because you dont have the right password."
# elsif number == 15
# 	puts " it is equal to 15"
# elsif number >15 && password == "correct"
# 	puts "that number is greater than 15"
# else
# 	puts "I cant tell you anything because you dont have the right password."
# end

# "secret number" is 15

# if (number !=15 && password !="correct")
# 	puts 'we cant tell you anything'
# end



puts ' what is your favorite fruit, apple, pear, orange, grapefruit, lemon?'

fruits = gets.chomp

if fruits == "apple" || fruits =="pear"
	puts "yummy"
elsif fruits =="orange" || fruits =="grapefruit" || fruits =="lemon"
	puts "yucky"
else 
	puts"I dont know what your telling me!"
end

my_array =['element1', 'element2', 'element3']

for element in my_array
	puts "#{element}"
end

my_array.each do |element|
	puts element
end

(0..4).each do |i|
	puts i
end



def subtract_two n
	n - 2
end

def divide (x,y)
	if (x==0 || y==0)
		return "we dont do math on zeros"
	end
	x/y
end

def add_five n
	n+5
end

	def multiply_fifteen n
		n*15
	end

def secret_math(a,b,c,d)
	a+b-c*d
end

	def print_four(word)
		for i in 1..4
		puts word
	end
end

def uppercase(n)
	n.capitalize
end



