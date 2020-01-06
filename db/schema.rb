ActiveRecord::Schema.define(version: 2020_01_04_170559) do
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.string "street"
    t.integer "city"
    t.integer "state"
    t.integer "zip"
    t.bigint "location_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["location_id"], name: "index_addresses_on_location_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "name"
    t.integer "days"
    t.bigint "trip_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["trip_id"], name: "index_locations_on_trip_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "name"
    t.integer "rating"
    t.text "body"
    t.bigint "trip_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["trip_id"], name: "index_reviews_on_trip_id"
  end

  create_table "trips", force: :cascade do |t|
    t.string "name"
    t.datetime "start_date"
    t.datetime "end_time"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "addresses", "locations"
  add_foreign_key "locations", "trips"
  add_foreign_key "reviews", "trips"
end
