class Api::ShelvesController < ApplicationController
    def create
        @shelf = Shelf.new(shelf_params)
        @shelf.user_id = current_user.id
        # debugger
        if @shelf.save
            render :show
        else
            render json: @shelf.errors.full_messages, status: 406
        end
    end

    def index
        @shelves = current_user.shelves
    end

    def show
        @shelf = Shelf.find(params[:id])
    end

    def destroy
        @shelf = Shelf.find(params[:id])
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
