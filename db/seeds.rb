3.times do 
  trip = Trip.create(
    name: Faker::Book.title,
    start_date: '2020-01-01',
    end_time: '2020-01-10')
end
  
