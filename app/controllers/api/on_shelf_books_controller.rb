class Api::OnShelfBooksController < ApplicationController
    def create
        @shelved_book = Shelve.new(shelved_book_params)
        if @shelved_book.save
            render :show
        else
            render json: @shelve.errors.full_messages, status: 406
        end
    end

    def destroy
        @shelved_book = Shelve.find(params[:id])
        if @shelved_book.destroy
            render :show
        else
            render json: @shelved_book.errors.full_messages, status: 406
        end
    end

    private
    def shelved_book_params
        params.require(:shelved_book).permit(:book_id, :shelf_id)
    end
end
