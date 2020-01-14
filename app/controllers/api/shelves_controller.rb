class Api::ShelvesController < ApplicationController
    def create
        @shelf = shelf.new(shelf_params)
        if @shelf.save
            render :show
        else
            render json: @shelf.errors.full_messages, status: 406
        end
    end

    def index
        @shelves = Shelf.all
    end

    def show
        @shelf = @shelf.find(params[:id])
    end

    def destroy
        @shelf = shelf.find(params[:id])
        if @shelf.destroy
            render :show
        else
            render json: @shelf.errors.full_messages, status: 406
        end
    end

    def update
        @shelf = Shelf.find(params[:id])
        if @shelf.update(shelf_params)
            render :show
        else
            render json: @shelf.errors.full_messages, status: 406
        end
    end

    private
    def shelf_params
        params.require(:shelf).permit(:bookshelf_title)
    end
end
