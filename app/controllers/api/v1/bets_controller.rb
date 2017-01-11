class Api::V1::BetsController < ApplicationController
  def index
    bets = Bet.all
    render json: bets
  end

  def create
    binding.pry
  end
end
