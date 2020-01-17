class Api::BooksController < ApplicationController
    def index
        @books = Book.all
        # render "api/books/"
        render :index
    end

    def show
        @book = Book.find(params[:id])
        # render "api/books/:id"
        render :show
    end

    def update
        @book = Book.find(params[:id])
        if @book.update(book_params)
            render :show
        else
            render json: @book.errors.full_messages, status: 406
        end
    end

    private

    def book_params
        params.require(:book).permit(:date_read)
    end

 
end
