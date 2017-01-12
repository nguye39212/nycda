require 'sinatra'
require 'dotenv'
require 'sendgrid-ruby'
include SendGrid

Dotenv.load

get '/' do
	erb :index1
end

get '/contacts' do
	erb :contacts
end

get '/projects' do
	erb :projects
end

get '/dotenv' do
	"test: #{ENV['SENDGRID_API_KEY']}"
end

post '/send-email' do
	puts '_________________'
	puts params.inspect
	puts '_________________'
	params[:email]
	params[:name]
	params[:thoughts]

	from = Email.new(email: params[:email])
	to = Email.new(email: 'jimmynguyen1@att.net')
	subject = "A new email from: #{params[:name]}"
	content = Content.new(type: 'text/plain', value: params[:thoughts])
	mail = Mail.new(from, subject, to, content)

	sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
	response = sg.client.mail._('send').post(request_body: mail.to_json)
	puts response.status_code
	puts response.body
	puts response.headers
end