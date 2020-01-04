class Trip < ApplicationRecord
  has_many :locations, dependent: :destroy
  has_many :reviews, dependent: :destroy
end
