class PartialsController < ApplicationController
  @subscriber = Subscriber.new
  def newsletter
    @subscriber = Subscriber.new
  end
end
