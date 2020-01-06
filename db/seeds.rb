1.times do
  trip = Trip.create(
    name: 'Washington Vacation',
    start_date: '2021-01-01',
    end_time: '2021-01-15')

    3.times do
      Location.create(
        name: Faker::Address.city,
        days: 3,
        trip_id: trip.id
      )
    end
end
1.times do
  trip = Trip.create(
    name: 'Vancouver Trip',
    start_date: '2022-10-14',
    end_time: '2022-10-19')

    3.times do
      Location.create(
        name: Faker::Address.city,
        days: 1,
        trip_id: trip.id
      )
    end
  end
1.times do
  trip = Trip.create(
    name: 'Disneyworld',
    start_date: '2020-3-14',
    end_time: '2020-3-22')

    1.times do
      Location.create(
        name: 'Orlando',
        days: 7,
        trip_id: trip.id
      )
    end
end

puts "Data seeded"
  
