class Auth::Devise::SessionsController < Devise::SessionsController
  skip_before_action :verify_signed_out_user

  def create
    user = User.find_for_database_authentication(email: params[:email])
    if user && user.valid_password?(params[:password])
      sign_in user
      render json: {message: 'User logged in.', user: user}, status: :created
    else
      invalid_login_attempt
    end
  end

  def destroy
    resource = User.find_by(email: params[:email])
    sign_out(resource_name)
    render :json => {message: 'User logged out.'}, :status => :ok
  end

  private

  def invalid_login_attempt
    render json: { error: 'Email or password is invalid' }, status: :unprocessable_entity
  end
end
