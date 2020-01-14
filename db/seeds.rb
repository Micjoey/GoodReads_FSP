# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.transaction do
    
    User.destroy_all
    Book.destroy_all
    Review.destroy_all
    
    require 'faker'
    include Faker

# books

# 1
book1 = Book.create(
    title: "American Spy",
    author: "Lauren Wilkinson",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds./American_Spy_By_Lauren_wilkinson.png'),
    description: "American Spy is her story, written in 1992 in the first person as a diary for her young twin sons to read when they're older. The action spans the thirty preceding years—from the Cuban Missile Crisis to the `New World Order` following the end of the Cold War. Marie is the younger of two sisters.",
)
file1 = open("https://myreads-seeds.s3-us-west-1.amazonaws.com/American_Spy_By_Lauren_wilkinson.png")
book1.photo.attach(io: file1, filename:'American_Spy.jpg')
# 2
book2 = Book.create(
    title: "Book Of Strange New Things",
    author: "Michel Faber",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds./Book-of-Strange-New-Things.jpg'),
    description: "The Book of Strange New Things is a 2014 science fiction novel by Dutch-born author Michel Faber. The work was first published in the United States on October 28, 2014 and concerns an English pastor who is sent to the planet of Oasis to teach its reclusive native inhabitants about Christianity.",
)

file = open("https://myreads-seeds.s3-us-west-1.amazonaws.com/Book-of-Strange-New-Things.jpg")
book2.photo.attach(io: file, filename:'Book-of-Strange-New-Things.jpg')
# 3
book3 = Book.create(
    title: "Upright Women Wanted",
    author: "Sarah Gailey",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds./upright_woman_wanted.jpeg'),
    description: "Esther is a stowaway. She’s hidden herself away in the Librarian’s book wagon in an attempt to escape the marriage her father has arranged for her―a marriage to the man who was previously engaged to her best friend. Her best friend who she was in love with. Her best friend who was just executed for possession of resistance propaganda.",
)
file = open("https://myreads-seeds.s3-us-west-1.amazonaws.com/upright_woman_wanted.jpeg")
book3.photo.attach(io: file, filename:'upright_woman_wanted.jpeg')
# 4
book4 = Book.create(
    title: "City of Girls",
    author: "Elizabeth Gilbert",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds./Elizabeth_Gilbert_by_city_of_girls.png'),
    description: "Beloved author Elizabeth Gilbert returns to fiction with a unique love story set in the New York City theater world during the 1940s. Told from the perspective of an older woman as she looks back on her youth with both pleasure and regret (but mostly pleasure), City of Girls explores themes of female sexuality and promiscuity, as well as the idiosyncrasies of true love. ",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/Elizabeth_Gilbert_by_city_of_girls.png')
book4.photo.attach(io: file, filename:'Elizabeth_Gilbert_by_city_of_girls.png')

# 5
book5 = Book.create(
    title: "Maybe You Should Talk To Someone",
    author: "Lori Gottlieb",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds./Maybe_You_Should_Talk_To_Someone_by_Lori_Gottlieb.png'),
    description: "Maybe You Should Talk to Someone: A Therapist, Her Therapist, and Our Lives Revealed is a book by Lori Gottlieb, published in 2019. It is a memoir where Gottlieb portrays a difficult time in her professional and personal life.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/Maybe_You_Should_Talk_To_Someone_by_Lori_Gottlieb.png')
book5.photo.attach(io: file, filename:'Maybe_You_Should_Talk_To_Someone_by_Lori_Gottlieb.png')

# 6
book6 = Book.create(
    title: "The Names Of The Dead",
    author: "Kevin Wignall",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds./The_Names_of_the_dead_by_Kevin_wignall.png'),
    description: "They locked him up. Now he's out--for revenge. Former CIA officer James 'Wes' Wesley paid the ultimate price for his patriotism when he was locked up in a French jail for an anti-terror operation gone wrong--abandoned by the Agency he served, shunned by his colleagues and friends, cut off from his family.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/The_Names_of_the_dead_by_Kevin_wignall.png')
book6.photo.attach(io: file, filename:'The_Names_of_the_dead_by_Kevin_wignall.png')

# 7
book7 = Book.create(
    title: "Quichotte",
    author: "Salman Rushdie",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds./Salman_Rushdie_by_Quichotte.png'),
    description: "Inspired by Miguel de Cervantes' classic novel Don Quixote, Quichotte is a metafiction that tells the story of an addled Indian American man who travels across America in pursuit of a celebrity television host with whom he has become obsessed.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/Salman_Rushdie_by_Quichotte.png')
book7.photo.attach(io: file, filename:'Salman_Rushdie_by_Quichotte.png')

# 8
book8 = Book.create(
    title: "Swann's Way",
    author: "Marcel Proust",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds./Swanns_Way_by_Marcel_Proust.png'),
    description: "A new translation of the first volume of Proust's In Search of Lost Time follows a sensitive boy's impressions of his family and neighbors; and includes the novella, Swann's Love.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/Swanns_Way_by_Marcel_Proust.png')
book8.photo.attach(io: file, filename:'Swanns_Way_by_Marcel_Proust.png')

# 9
book9 = Book.create(
    title: "Super Pumped, The Battle For Uber",
    author: "Mike Isaac",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//Super_Pumped_by_Mike_Issac.png'),
    description: "Uber had catapulted to the top of the tech world, yet for many came to symbolize everything wrong with Silicon Valley. Award-winning New York Times technology correspondent Mike Isaac's Super Pumped presents the dramatic rise and fall of Uber, set against an era of rapid upheaval in Silicon Valley.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/Super_Pumped_by_Mike_Isaac.png')
book9.photo.attach(io: file, filename:'Super_Pumped_by_Mike_Issac.png')

# 10
book10 = Book.create(
    title: "The Nickel Boys",
    author: "Colson Whitehead",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//The_Nickel_Boys_by_Colson_Whitehead.png'),
    description: "Based on the real story of a reform school in Florida that operated for one hundred and eleven years and warped the lives of thousands of children, The Nickel Boys is a devastating, driven narrative that showcases a great American novelist writing at the height of his powers.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/The_Nickel_Boys_by_Colson_Whitehead.png')
book10.photo.attach(io: file, filename:'The_Nickel_Boys_by_Colson_Whitehead.png')

# 11
book11 = Book.create(
    title: "The Starless Sea",
    author: "Erin Morgenstern",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//The_starless_sea_by_erin_morgenstern.png') ,
    description: "The Starless Sea tells a tale about an underground labyrinth that serves as a sanctuary for stories and storytellers. It's located in a place called the Starless Sea. It's also about a young man who finds a book of nested stories, including one that is about him.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/The_starless_sea_by_erin_morgenstern.png')
book11.photo.attach(io: file, filename:'The_starless_sea_by_erin_morgenstern.png')

# 12
book12 = Book.create(
    title: "The Testaments",
    author: "Atwood",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//The_Testaments_by_Atwood.png'),
    description: "More than fifteen years after the events of The Handmaid's Tale, the theocratic regime of the Republic of Gilead maintains its grip on power, but there are signs it is beginning to rot from within. At this crucial moment, the lives of three radically different women converge, with potentially explosive results.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/The_Testaments_by_Atwood.png')
book12.photo.attach(io: file, filename:'The_Testaments_by_Atwood.png')

# 13
book13 = Book.create(
    title: "They Called Us Enemy",
    author: "George Takei",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//They_Called_us_enemy_by_Georege_takei.png'),
    description: "George Takei has captured hearts and minds worldwide with his captivating stage presence and outspoken commitment to equal rights. But long before he braved new frontiers in Star Trek, he woke up as a four-year-old boy to find his own birth country at war with his father's -- and their entire family forced from their home into an uncertain future.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/They_Called_us_enemy_by_Georege_takei.png')
book13.photo.attach(io: file, filename:'They_Called_us_enemy_by_Georege_takei.png')

# 14
book14 = Book.create(
    title: "Wild Game, My Mother, Her Lover, and Me",
    author: "Adrienne Brodeur",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//Wild_Game_by_Adrienne_Brodeur.png'),
    description: "On a hot July night on Cape Cod when Adrienne was fourteen, her mother, Malabar, woke her at midnight with five simple words that would set the course of both of their lives for years to come: Ben Souther just kissed me.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/Wild_Game_by_Adrienne_Brodeur.png')
book14.photo.attach(io: file, filename:'Wild_Game_by_Adrienne_Brodeur.png')


#users
i = 0
while i <= 3 do
    if i ==0
        test = User.create(username: "test", email: "test@gmail.com", password: "password")
    else
        test = User.create(username: "test#{i}", email: "test#{i}@gmail.com", password: "password")
    end
    i += 1
end


#shelves

shelf1 = Shelf.create(bookshelf_title: "Want To Read", user_id: "1")
shelf2 = Shelf.create(bookshelf_title: "Reading", user_id: "1")
shelf3 = Shelf.create(bookshelf_title: "Have Read", user_id: "1")
shelf4 = Shelf.create(bookshelf_title: "Adventure", user_id: "1")
shelf5 = Shelf.create(bookshelf_title: "Want To Read", user_id: "2")
shelf6 = Shelf.create(bookshelf_title: "Reading", user_id: "2")
shelf7 = Shelf.create(bookshelf_title: "Have Read", user_id: "2")
shelf8 = Shelf.create(bookshelf_title: "Adventure", user_id: "2")
shelf5 = Shelf.create(bookshelf_title: "Want To Read", user_id: "3")
shelf6 = Shelf.create(bookshelf_title: "Reading", user_id: "3")
shelf7 = Shelf.create(bookshelf_title: "Have Read", user_id: "3")
shelf8 = Shelf.create(bookshelf_title: "Adventure", user_id: "3")
shelf5 = Shelf.create(bookshelf_title: "Want To Read", user_id: "0")
shelf6 = Shelf.create(bookshelf_title: "Reading", user_id: "0")
shelf7 = Shelf.create(bookshelf_title: "Have Read", user_id: "0")
shelf8 = Shelf.create(bookshelf_title: "Adventure", user_id: "0")
 
# on_shelf_books

    

on_shelf_books1 = OnShelfBook.create(shelf_id: shelf1.id, book_id: book1.id)
on_shelf_books1 = OnShelfBook.create(shelf_id: shelf1.id, book_id: book1.id)
on_shelf_books2 = OnShelfBook.create(shelf_id: shelf2.id, book_id: book2.id)
on_shelf_books3 = OnShelfBook.create(shelf_id: shelf3.id, book_id: book3.id)
on_shelf_books4 = OnShelfBook.create(shelf_id: shelf4.id, book_id: book4.id)
on_shelf_books5 = OnShelfBook.create(shelf_id: shelf5, book_id: book5.id)
on_shelf_books6 = OnShelfBook.create(shelf_id: shelf6.id, book_id: book6.id)
on_shelf_books7 = OnShelfBook.create(shelf_id: shelf7.id, book_id: book7.id)
on_shelf_books8 = OnShelfBook.create(shelf_id: shelf8.id, book_id: book8.id)
on_shelf_books9 = OnShelfBook.create(shelf_id: shelf1.id, book_id: book9.id)
on_shelf_books10 = OnShelfBook.create(shelf_id: shelf2.id, book_id: book10.id)
on_shelf_books11 = OnShelfBook.create(shelf_id: shelf3.id, book_id: book11.id)
on_shelf_books12 = OnShelfBook.create(shelf_id: shelf4.id, book_id: book12.id)
on_shelf_books13 = OnShelfBook.create(shelf_id: shelf5.id, book_id: book13.id)
on_shelf_books14 = OnShelfBook.create(shelf_id: shelf1.id, book_id: book14.id)


#reviews
    i = 0

    100.times do
    review = Review.create(
        title: Faker::Quotes::Shakespeare.hamlet_quote, 
        user_id: rand(1..3), 
        book_id: rand(1..14), 
        rating: rand(1..5),
        body: Faker::Quotes::Shakespeare.as_you_like_it_quote,
        date_reviewed: Faker::Date.between(from: 1.year.ago, to: Date.today)
    )
    i += 1
    end


  
end
