class Bet < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :set_number, presence: true, numericality: true
  validates :voter, presence: true
  validates :count, numericality: true
end
