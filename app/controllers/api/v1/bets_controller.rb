class Api::V1::BetsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    bets = Bet.order(:id)
    render json: bets
  end

  def create
    data = JSON.parse(request.body.read)
    vote = data["vote"] == "Over"
    bet = Bet.new(
      title: data["title"],
      description: data["description"],
      set_number: data["set_number"],
      voter: data["voter"],
      vote: vote
    )
    if bet.save!
      bets = Bet.order(:id)
      render json: bets
    end
  end

  def update
    bet = Bet.find(params[:id])
    new_count = bet.count += 1
    bet.update_attributes(count: new_count)
    bets = Bet.order(:id)
    render json: bets
  end

  def destroy
    bet = Bet.find(params[:id])
    bet.delete
    bets = Bet.order(:id)
    render json: bets
  end
end
