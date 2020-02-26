module CurrentScope
  thread_mattr_accessor :user
end

class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    
  
    if @user.save
      login(@user)
        shelf1 = Shelf.create(bookshelf_title: "Want To Read", user_id: @user.id)
        shelf2 = Shelf.create(bookshelf_title: "Reading", user_id: @user.id)
        shelf3 = Shelf.create(bookshelf_title: "Have Read", user_id: @user.id)
        render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
