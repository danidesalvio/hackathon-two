class Api::LocationsController < ApplicationController
  before_action :set_trip

  def index
    render json: @trip.locations
  end

  def create
    @location = @trip.locations.new(locations_params)
    if @location.save
      render json: @location
    else
      render json: { errors: @location.errors }, status: :unprocessable_entity
    end
  end

  def update
    @location = @trip.locations.find(params[:id])
    if @location.update(locations_params)
      render json: @location
    else
      render json: { errors: @location.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @trip.locations.find(params[:id]).destroy
    render json: { message: 'Location Deleted' }
  end

  private
    def locations_params
      params.require(:location).permit(:name, :days)
    end

    def set_trip
      @trip = Trip.find(params[:trip_id])
    end
end
