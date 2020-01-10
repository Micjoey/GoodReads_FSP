class Api::BooksController < ApplicationController
    def index
        @books = Class_name.all
        render "api/books/"
    end

    def show
        @book = Class_name.find(params[:id])
        render "api/books/:id"
    end
end
