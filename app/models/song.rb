class Song < ApplicationRecord
  before_save :calculate_run_time
  belongs_to :album

  def calculate_run_time 
    minutes = self.length / 60
    seconds = (self.length - minutes * 60).to_s
    string = "#{minutes}:#{seconds.rjust(2, '0')}"
    self.run_time= string
  end

end
