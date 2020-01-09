# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
include Faker

# 20.times do 
#     book = Book.create(
#         title: Faker::Book.title,
#         author: Faker::Book.author,
#         genre: Faker::Book.genre,
#         rating: rand(0..5),
#         review: Faker::Quotes::Shakespeare
#     )
# end
i = 0
while i <= 3 do
    if i ==0
        return test = User.create(username: "test", email: "test@gmail.com", password: "password")
    else
        test = User.create(username: "test#{i}", email: "test#{i}@gmail.com", password: "password")
    end
    i += 1
end