class Uniquekey < ActiveRecord::Base
  before_save :generate_next

  private
  def generate_next
    unless self.key == "dong0001"
      last = self.class.maximum("key")
      self.key = last.next
    end
  end
end
