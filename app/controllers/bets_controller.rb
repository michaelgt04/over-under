class BetsController < ApplicationController
  def index
    @bets = Bet.all
  end

  def create
    vote = params[:vote] == "Over"
    @bet = Bet.new(
      title: params[:bet][:title],
      description: params[:bet][:description],
      set_number: params[:bet][:set_number],
      voter: params[:bet][:voter],
      vote: vote
    )
    @bet.save
    redirect_to :bets
  end

  def new
    @bet = Bet.new
  end

  def update
    @bet = Bet.find(params[:id])
    next_count = @bet.count + 1
    @bet.update(count: next_count)
    redirect_to :bets
  end

  def destroy
    @bet = Bet.find(params[:id])
    @bet.delete
    redirect_to :bets
  end
end
