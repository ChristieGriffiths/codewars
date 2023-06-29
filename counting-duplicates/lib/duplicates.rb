def duplicate_count(text)
  counter = 0 
  letter_count = Hash.new(0)
  text.each_char do |char| 
    if char.match?(/[a-zA-Z]|\d/)
      letter_count[char.downcase] += 1 
    end 
  end 
  letter_count.each do |key, value|
    if value > 1 
      counter += 1 
    end 
  end 
  counter 
end