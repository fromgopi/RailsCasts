class MapController < ApplicationController

  def index

    @api_key = 'AIzaSyBd-zAiP5BziIKMOGKvZJ8CoP1YtnxR4Ww'
    @map_center = [17.410875, 78.482226]
    @map_zoom = 13

  end

end
