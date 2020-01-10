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
end
