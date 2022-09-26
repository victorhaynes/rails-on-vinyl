puts "seeding..."

OrderDetail.destroy_all
Order.destroy_all
CartDetail.destroy_all
Song.destroy_all
Product.destroy_all
Album.destroy_all
Genre.destroy_all
Artist.destroy_all
SellerProfile.destroy_all
Cart.destroy_all
SellerProfile.destroy_all
User.destroy_all


OrderDetail.reset_pk_sequence
Order.reset_pk_sequence
CartDetail.reset_pk_sequence
Song.reset_pk_sequence
Product.reset_pk_sequence
Album.reset_pk_sequence
Genre.reset_pk_sequence
Artist.reset_pk_sequence
SellerProfile.reset_pk_sequence
Cart.reset_pk_sequence
SellerProfile.reset_pk_sequence
User.reset_pk_sequence

#######################
# Create 3 users, user #2 is an admin
User.create(username: "111", email: "111@gmail.com", admin: 0, password: "111")
User.create(username: "222", email: "222@gmail.com", admin: 0, password: "222")
User.create(username: "vendor", email: "vendor@gmail.com", admin: 0, password: "vendor")
User.create(username: "admin", email: "admin@gmail.com", admin: true, password: "admin")


####################################
# Create 1 seller_profile for user 3
SellerProfile.create(user_id: 3)

###################
# Create all genres
["Rock", "Electronic", "Hip Hop", "Folk, World & Country", "Jazz"].each {|g| Genre.create(name: g ) }

##################
# Create 4 artists
Artist.create(name: "Beach House")
Artist.create(name: "Armand Hammer")
Artist.create(name: "Fleet Foxes")

####################################
# Create 3 albums 
Album.create(name: "Bloom", genre_id: 1, artist_id: 1)
Album.first.image.attach(io: File.open('app/assets/images/bloom.jpg'), filename: 'bloom.jpg')
Album.create(name: "Teen Dream", genre_id: 1, artist_id: 1)
Album.second.image.attach(io: File.open('app/assets/images/teen_dream.jpg'), filename: 'teen_dream.jpg')
Album.create(name: "Paraffin", genre_id: 3, artist_id: 2)
Album.third.image.attach(io: File.open('app/assets/images/paraffin.jpg'), filename: 'paraffin.jpg')
Album.create(name: "Helplessness Blues", genre_id: 4, artist_id:3)
Album.fourth.image.attach(io: File.open('app/assets/images/helplessness_blues.jpg'), filename: 'helplessness_blues.jpg')


#######################
# Create songs for the 4 albums
# bloom
["Myth", "Wild", "Lazul","Other People","The Hours","Troublemaker","New Year","Wishes","On The Sea","Irene","(silence)","Wherever You go"].each {|s| Song.create(name: s, length: rand(120..240), album_id: 1)}
# teen dream
["Zebra", "Silver Soul", "Norway","Walk In The Park","Used To Be","Lover Of Mine","Better Times","10 Mile Stereo","Real Love","Take Care"].each {|s| Song.create(name: s, length: rand(120..240), album_id: 2)}
# paraffin
["Sweet Mickey", "Rehearse with Ornette", "Dettol","No Days Off", "Fuhrman Tapes","Hunter","Alternate Side Parking","If He Holla","Black Garlic","VX","Vindaloo","ECOMOG","Bob Barker","Sudden Death","Root Farm"].each {|s| Song.create(name: s, length: rand(120..240), album_id: 3)}
# helplessness blues
["Montezuma", "Bedouin Dress", "Sim Sala Bim","Battery Kinzie","The Plains / Bitter Dancer","Helplessness Blues","The Cascades","Lorelai","Someone You'd Admire","The Shrine / An Argument","Blue Spotted Tail","Grown Ocean"].each {|s| Song.create(name: s, length: rand(120..240), album_id: 4)}


###################
# Create 10 products
10.times do
    Product.create(format: ["vinyl", "cassette", "cd"].sample, seller_profile_id: 1, album_id: [1,2,3,4].sample, price:[10,20,30,40,50].sample, condition: ["Mint (M)", "Near Mint (NM or M-)", "Very Good Plus (VG+)", "Very Good (VG)", "Good Plus (G+)", "Good (G)", "Fair (F)", "Poor (P)"].sample)
end
# test,condition "bad" does not exist. should fail
1.times do
    Product.create(format: ["vinyl", "cassette", "cd"].sample, seller_profile_id: 1, album_id: [1,2,3,4].sample, price:[10,20,30,40,50].sample, condition:"bad")
end

7.times do
    Product.create(format: ["vinyl", "cassette", "cd"].sample, seller_profile_id: 1, album_id: 2, price:[10,20,30,40,50].sample, condition: ["Mint (M)", "Near Mint (NM or M-)", "Very Good Plus (VG+)", "Very Good (VG)", "Good Plus (G+)", "Good (G)", "Fair (F)", "Poor (P)"].sample)
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