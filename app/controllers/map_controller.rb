class MapController < ApplicationController

  def index

    @api_key = '<Your Google Map API key.>'
    @map_center = [17.410875, 78.482226]
    @map_zoom = 13

  end

end
