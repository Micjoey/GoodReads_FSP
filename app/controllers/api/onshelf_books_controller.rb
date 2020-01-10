class Api::OnShelfBookController < ApplicationController
    def create
        @onshelfbook = OnShelfBook.new(onshelfbook_params)
        if @onshelfbook.save
            render :show
        else
            render json: @onshelfbook.errors.full_messages, status: 406
        end
    end

    def show
        @onshelfbook = @onshelfbook.find(params[:book_id])
    end

    def destroy
        @onshelfbook = OnShelfBook.find(params[:id])
        if @onshelfbook.destroy
            render :show
        else
            render json: @onshelfbook.errors.full_messages, status: 406
        end
    end

    private
    def onshelfbook_params
        params.require(:onshelfbook).permit(:book_id, :shelf_id)
    end
end
