puts "seeding..."

OrderDetail.destroy_all
Order.destroy_all
CartDetail.destroy_all
Product.destroy_all
SellerProfile.destroy_all
Cart.destroy_all
SellerProfile.destroy_all
User.destroy_all

OrderDetail.destroy_all
Order.reset_pk_sequence
SellerProfile.reset_pk_sequence
Product.reset_pk_sequence
Product.reset_pk_sequence
CartDetail.reset_pk_sequence
Cart.reset_pk_sequence
User.reset_pk_sequence

#######################
# Create 3 normal users
3.times do
    User.create(username: Faker::Name.name, password: "12345")
end

####################################
# Create 1 seller_profile for user 3
SellerProfile.create(user_id: 3)

###################
# Create 10 products
10.times do
    Product.create(format: ["vinyl", "cassette", "cd"].sample, seller_profile_id: 1)
end
# test,profile 7 does not exist. should fail
1.times do
    Product.create(format: ["vinyl", "cassette", "cd"].sample, seller_profile_id: 7 )
end

############################
# Create carts for all users
User.all.pluck(:id).each {|n| Cart.create(user_id:n ) }

###################################
# Create cart_details for all carts

# TEST: add same product to same cart - NEGATIVE
CartDetail.create(cart_id: 1, product_id: 1)
CartDetail.create(cart_id: 1, product_id: 1)
CartDetail.create(cart_id: 1, product_id: 3)

# TEST: add same product to different carts - POSITIVE
CartDetail.create(cart_id: 2, product_id: 1)
CartDetail.create(cart_id: 2, product_id: 2)
CartDetail.create(cart_id: 2, product_id: 3)

CartDetail.create(cart_id: 3, product_id: 1)
CartDetail.create(cart_id: 3, product_id: 3)


###############################
# Create Order for user 1 and 2
Order.create(user_id: 1)
Order.create(user_id: 1)
Order.create(user_id: 2)

###########################
OrderDetail.create(order_id: 99, product_id:1) # FAIL
OrderDetail.create(order_id: 1, product_id:1) # PASS
OrderDetail.create(order_id: 1, product_id:2) # PASS
OrderDetail.create(order_id: 1, product_id:3) # PASS
OrderDetail.create(order_id: 1, product_id:4) # PASS
OrderDetail.create(order_id: 2, product_id:1) # FAIL
OrderDetail.create(order_id: 2, product_id:10) #Pass

puts "done seeding!"