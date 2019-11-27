# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users_attributes = [
    {
        email: "bob@yahoo.com",
        password: "bob123"
    },
    {
        email: "sam@yahoo.com",
        password: "sam123"
    }
]

apartments_attributes = [
    {
        street:"213 What's Up Ave",
        user_id: 1
    },
    {
        street:"123 Made Up Dr",
        user_id: 2 
    },
    {
        street:"123 Made Up Dr",
        user_id: 1    
    }
]

users_attributes.each do |attributes|
    User.create(attributes)
end

apartments_attributes.each do |attributes|
    Apartment.create(attributes)
end