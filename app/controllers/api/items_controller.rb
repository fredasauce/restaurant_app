class Api::ItemsController < ApplicationController
  before_action :set_menu
  before_action :set_item, only: [:update, :destroy]

  def index
    # maybe fix this
    render json: @menu.items.all
  end

  def create
    item = @menu.items.new(item_params)

    # maybe fix this
    if item.save
      render json: item
    else
      render json: { errors: item.errors }, status: :unprocessable_entity
    end
  end

  def update
    # item = @menu.items.find(params[:id])
    # item.update
    # render json: item

    @item.update(item_params)
    render json: @item
  end

  def destroy
    @item.destroy
    render json: { message: "Item Removed" }
  end

  private

    def set_menu
      @menu = Menu.find(params[:menu_id])
    end

    def set_item
      @item = Item.find(params[:id])
    end

    def item_params
      params.require(:item).permit(:name, :price)
    end

end
