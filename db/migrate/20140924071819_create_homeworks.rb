class CreateHomeworks < ActiveRecord::Migration
  def change
    create_table :homeworks do |t|
      t.string :name
      t.integer :course_id

      t.timestamps
    end
  end
end
