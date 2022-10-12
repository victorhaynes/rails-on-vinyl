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
User.create(username: "vendor1", email: "vendor1@gmail.com", admin: 0, password: "vendor1")
User.create(username: "vendor2", email: "vendor2@gmail.com", admin: 0, password: "vendor2")
User.create(username: "admin", email: "admin@gmail.com", admin: true, password: "admin")


####################################
# Create 1 seller_profile_id for vendor1
SellerProfile.create(user_id: 3)
# And vendor2
SellerProfile.create(user_id: 4)
# And admin
SellerProfile.create(user_id: 5)


###################
# Create all genres
["Rock", "Electronic", "Pop", "Hip Hop", "Folk, World & Country", "Jazz"].each {|g| Genre.create!(name: g ) }


##################
# Create 5 artists
Artist.create(name: "Beach House")
Artist.create(name: "Armand Hammer")
Artist.create(name: "Fleet Foxes")
Artist.create(name: "billy woods")
Artist.create(name: "Sector")

####################################
# Create 6 albums 
Album.create(name: "Bloom", release_year: 2012, label:"Sub Pop", genre_id: 3, artist_id: 1, seller_profile_id: 1)
Album.first.image.attach(io: File.open('app/assets/images/bloom.jpg'), filename: 'bloom.jpg')
Album.create(name: "Teen Dream", release_year: 2010,  label:"Sub Pop", genre_id: 1, artist_id: 1, seller_profile_id: 1)
Album.second.image.attach(io: File.open('app/assets/images/teen_dream.jpg'), filename: 'teen_dream.jpg')
Album.create(name: "Paraffin", release_year: 2018, label:"Backwoodz Studioz", genre_id: 4, artist_id: 2, seller_profile_id: 1)
Album.third.image.attach(io: File.open('app/assets/images/paraffin.jpg'), filename: 'paraffin.jpg')
Album.create(name: "Helplessness Blues", release_year: 2011, label:"Sub Pop", genre_id: 5, artist_id:3, seller_profile_id: 1)
Album.fourth.image.attach(io: File.open('app/assets/images/helplessness_blues.jpg'), filename: 'helplessness_blues.jpg')
Album.create(name: "Church", release_year: 2022, label:"Backwoodz Studioz", genre_id: 4, artist_id:4, seller_profile_id: 1)
Album.fifth.image.attach(io: File.open('app/assets/images/church.jpg'), filename: 'church.jpg')
Album.create(name: "The Chicago Sector", release_year: 2022, label:"DAZE", genre_id: 1, artist_id:5, seller_profile_id: 1)
Album.find(6).image.attach(io: File.open('app/assets/images/the_chicago_sector.jpg'), filename: 'the_chicago_sector.jpg')



#######################
# Create songs for the 6 albums
# bloom
["Myth", "Wild", "Lazul","Other People","The Hours","Troublemaker","New Year","Wishes","On The Sea","Irene","(silence)","Wherever You go"].each {|s| Song.create(name: s, length: rand(120..300), album_id: 1)}
# teen dream
["Zebra", "Silver Soul", "Norway","Walk In The Park","Used To Be","Lover Of Mine","Better Times","10 Mile Stereo","Real Love","Take Care"].each {|s| Song.create(name: s, length: rand(120..300), album_id: 2)}
# paraffin
["Sweet Mickey", "Rehearse with Ornette", "Dettol","No Days Off", "Fuhrman Tapes","Hunter","Alternate Side Parking","If He Holla","Black Garlic","VX","Vindaloo","ECOMOG","Bob Barker","Sudden Death","Root Farm"].each {|s| Song.create(name: s, length: rand(120..300), album_id: 3)}
# helplessness blues
["Montezuma", "Bedouin Dress", "Sim Sala Bim","Battery Kinzie","The Plains / Bitter Dancer","Helplessness Blues","The Cascades","Lorelai","Someone You'd Admire","The Shrine / An Argument","Blue Spotted Tail","Grown Ocean"].each {|s| Song.create(name: s, length: rand(120..300), album_id: 4)}
# church
["Paraquat", "Artichoke", "Swampwater","Fever Grass","Fuchsia & Greens ft. ELUCID","Classical Music ft. AKAI SOLO & FIELDED","Cossack Wedding","Schism ft. Fat Ray","Frankie", "Pollo Rico","All Jokes Aside","Magdalene ft. ELUCID"].each {|s| Song.create(name: s, length: rand(120..300), album_id: 5)}
# chicago sector
["The Chicago Sector", "Writing On The Wall", "The Swarm","Dying Memories","Incinerate","Boiling Red","Cold Day in Chicago","The Side Of The Dirt"].each {|s| Song.create(name: s, length: rand(120..300), album_id: 6)}


###################
# Create 10 products
30.times do
    Product.create(format: ["Vinyl", "Cassette", "CD"].sample, seller_profile_id: 1, album_id: [1,2,3,4,5,6].sample, price:[10,20,30,40,50].sample, condition: ["Mint (M)", "Near Mint (NM or M-)", "Very Good Plus (VG+)", "Very Good (VG)", "Good Plus (G+)", "Good (G)", "Fair (F)", "Poor (P)"].sample)
end
# test,condition "bad" does not exist. should fail
1.times do
    Product.create(format: ["Vinyl", "Cassette", "CD"].sample, seller_profile_id: 1, album_id: [1,2,3,4].sample, price:[10,20,30,40,50].sample, condition:"bad")
end

7.times do
    Product.create(format: ["Vinyl", "Cassette", "CD"].sample, seller_profile_id: 1, album_id: 2, price:[10,20,30,40,50].sample, condition: ["Mint (M)", "Near Mint (NM or M-)", "Very Good Plus (VG+)", "Very Good (VG)", "Good Plus (G+)", "Good (G)", "Fair (F)", "Poor (P)"].sample)
end

############################
# Create carts for all users
User.all.pluck(:id).each {|n| Cart.create(user_id:n ) }

###################################
# Create cart_details for all carts

# TEST: add same product to same cart 
CartDetail.create(cart_id: 1, product_id: 6) #P
CartDetail.create(cart_id: 1, product_id: 6) #F
CartDetail.create(cart_id: 1, product_id: 7) #P

# TEST: add same product to different carts - POSITIVE
CartDetail.create(cart_id: 2, product_id: 6)
CartDetail.create(cart_id: 2, product_id: 7)
CartDetail.create(cart_id: 2, product_id: 8)

CartDetail.create(cart_id: 3, product_id: 9)
CartDetail.create(cart_id: 3, product_id: 10)


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
OrderDetail.create(order_id: 2, product_id:9) # PASS
OrderDetail.create(order_id: 3, product_id:5) #Pass


# Spoofed Albums with No Products
Artist.create(name: "SpoofArtist1")
Artist.create(name: "SpoofArtist2")
Artist.create(name: "SpoofArtist3")
Artist.create(name: "SpoofArtist4")
Artist.create(name: "SpoofArtist5")

# Get an array of all Spoof Artists
spoof_ids = Artist.where("name like ?", "%SpoofArtist%").pluck(:id)

labels = ["SpoofLabel10","SpoofLabel20","SpoofLabel30","SpoofLabel40","SpoofLabel50","Sub Pop", "Backwoodz Studioz","DAZE"]

# Create 30 random albums randomly assigned to Spoof Artists
30.times{|index| Album.create(name: "SpoofAlbum#{index+1}", release_year: rand(1960...2022), label: labels.sample, genre_id: Genre.all.sample.id, artist_id: spoof_ids.sample, seller_profile_id: 2)}

# Attach the placeholder image 30 times to the spoof albums
spoof_albums = Album.where("name like ?", "%SpoofAlbum%")
spoof_albums.each {|album| album.image.attach(io: File.open('app/assets/images/y2_placeholder.jpg'), filename: 'y2_placeholder.jpg')}

# For each spoofed album, create a random number of songs, and assign the songs to each album
spoof_albums.each{|album| Faker::Lorem.words(number: rand(5..15)).each {|s| Song.create(name: s, length: rand(120..300), album_id: album.id)}}

puts "done seeding!"