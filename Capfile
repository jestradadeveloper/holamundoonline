# Load DSL and set up stages
require "capistrano/setup"
# Include default deployment tasks
require "capistrano/deploy"
require 'capistrano/rails'
require 'capistrano/rvm'
require 'capistrano/yarn'
require 'capistrano/bundler'
require 'capistrano/lets-encrypt'
require 'capistrano/puma'
install_plugin Capistrano::Puma
install_plugin Capistrano::Puma, load_hooks:  false # Tareas predeterminadas de puma 
install_plugin Capistrano::Puma::Workers   # si desea controlar a los trabajadores (en modo de clúster) 
install_plugin Capistrano::Puma::Jungle  # si necesita la jungla tareas 
install_plugin Capistrano::Puma::Monit, load_hooks:  false    # si necesita las tareas monit 
install_plugin Capistrano::Puma::Nginx   # si desea cargar una plantilla de sitio nginx
# Load the SCM plugin appropriate to your project:
#
# require "capistrano/scm/hg"
#install_plugin Capistrano::SCM::Hg
# or
# require "capistrano/scm/svn"
# install_plugin Capistrano::SCM::Svn
# or
require "capistrano/scm/git"
install_plugin Capistrano::SCM::Git
# Include tasks from other gems included in your Gemfile
#
# For documentation on these, see for example:
#
#   https://github.com/capistrano/rvm
#   https://github.com/capistrano/rbenv
#   https://github.com/capistrano/chruby
#   https://github.com/capistrano/bundler
#   https://github.com/capistrano/rails
#   https://github.com/capistrano/passenger
#
# require "capistrano/rvm"
# require "capistrano/rbenv"
# require "capistrano/chruby"
# require "capistrano/bundler"
# require "capistrano/rails/assets"
# require "capistrano/rails/migrations"
# require "capistrano/passenger"
# Load custom tasks from `lib/capistrano/tasks` if you have any defined
Dir.glob("lib/capistrano/tasks/*.rake").each { |r| import r }