puts "whats your favorite color?"
color = gets.chomp

puts "#{color} Only in America!"


array = [100,10,-1000]
puts array.sort.last

cars = [:toyota, :tesla]
cars_models = {cars[0]=> " prius", cars[1] =>" Model S"}
puts cars_models

numbers = Array(1..100)
numbers.each do |num|
  if num % 15 == 0
    puts "FizzBuzz"
  elsif num % 5 == 0
    puts "Buzz"
  elsif num % 3 == 0
    puts "Fizz"
  else
    puts num
  end
end

