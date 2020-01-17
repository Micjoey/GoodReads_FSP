class Api::OnShelfBooksController < ApplicationController
    def create
        @onshelfbook = OnShelfBook.new(on_shelf_book_params)
        if @onshelfbook.save!
            @book = Book.find(@onshelfbook.book_id)
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
    def on_shelf_book_params
        params.require(:onshelfbook).permit(:book_id, :shelf_id, :id)
    end
end
