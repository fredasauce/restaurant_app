class Item < ApplicationRecord
  belongs_to :menu, dependent: :destroy
end
