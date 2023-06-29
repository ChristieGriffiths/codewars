require 'duplicates'

describe "Fixed tests" do
  it "returns 0 for empty string" do
    expect(duplicate_count("")).to eq(0)
  end
  it "returns 0 for a string with no duplicates" do 
    expect(duplicate_count("abcde")).to eq (0)
  end 
  it "returns 1 for a string with 1 duplicated letter" do 
    expect(duplicate_count("Abcdeaa")).to eq (1)
  end 
  it "returns 2 for a string with 2 duplicated letters" do 
    expect(duplicate_count("abcdeaB")).to eq (2)
  end 
end




# Test.assert_equals(duplicate_count("abcdeaa"), 1)
# Test.assert_equals(duplicate_count("abcdeaB"), 2)
# Test.assert_equals(duplicate_count("Indivisibilities"), 2)