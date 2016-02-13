class StoriesController < ApplicationController
  before_action :set_story

  def index
  end

  def show
  end

  def download
    send_file("app/downloads/" + @story.path)
  end

  def set_story
    @story = Story.find(params[:id])
  end

end