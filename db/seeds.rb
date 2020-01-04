3.times do 
  trip = Trip.create(
    name: Faker::Book.title,
    start_date: '2020-01-01',
    end_time: '2020-01-10')

    3.times do
      Location.create(
        name: Faker::Address.city,
        trip_id: trip.id
      )
    end
end

puts "Data seeded"
  
