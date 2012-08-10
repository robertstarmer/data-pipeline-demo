require 'sinatra'


get '/*' do
 erb :index
end

get '/bloodpressure' do
  "Nothing here yet"
end

get '/heartrate' do
  "Nothing here yet"
end

get '/weight' do
  "Nothing here yet"
end

get '/circumference' do
  "Nothing here yet"
end
