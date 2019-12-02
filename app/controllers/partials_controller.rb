class PartialsController < ActionController
  @subscriber = Subscriber.new
  def newsletter
    @subscriber = Subscriber.new
  end
end
