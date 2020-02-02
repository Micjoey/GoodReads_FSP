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


# -----------------------
# 15
book15 = Book.create(
    title: "Bad Blood: Secrets and Lies in a Silicon Valley Startup",
    author: "John Carreyrou",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//Wild_Game_by_Adrienne_Brodeur.png'),
    description: "The full inside story of the breathtaking rise and shocking collapse of a multibillion-dollar startup, by the prize-winning journalist who first broke the story and pursued it to the end in the face of pressure and threats from the CEO and her lawyers.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/bad_blood.png')
book15.photo.attach(io: file, filename:'bad_blood.png')

# 16
book16 = Book.create(
    title: "All You Have to Do Is Ask: How to Master the Most Important Skill for Success",
    author: "Wayne Baker",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//Wild_Game_by_Adrienne_Brodeur.png'),
    description: "All You Have to Do Is Ask: How to Master the Most Important Skill for Success Audible Audiobook – Unabridged. A set of tools for mastering the one skill standing between us and success: the ability to ask for the things we need to succeed. Imagine you're on a deadline for a big project, and feeling overwhelmed.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/All_you_have_to_do_is_ask.png')
book16.photo.attach(io: file, filename:'All_you_have_to_do_is_ask.png')

# 17
book17 = Book.create(
    title: "The Attention Merchants: The Epic Scramble to Get Inside Our Heads",
    author: "Tim Wu",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//Wild_Game_by_Adrienne_Brodeur.png'),
    description: "Attention merchant: an industrial-scale harvester of human attention. A firm whose business model is the mass capture of attention for resale to advertisers.
In nearly every moment of our waking lives, we face a barrage of advertising enticements, branding efforts, sponsored social media, commercials and other efforts to harvest our attention. Over the last century, few times or spaces have remained uncultivated by the 'attention merchants', contributing to the distracted, unfocused tenor of our times. Tim Wu argues that this is not simply the byproduct of recent inventions but the end result of more than a century's growth and expansion in the industries that feed on human attention.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/the_attention_merchants.png')
book17.photo.attach(io: file, filename:'the_attention_merchants.png')

# 18
book18 = Book.create(
    title: "Beaten Down, Worked Up: The Past, Present, and Future of American Labor",
    author: "Deckle Edge",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//Wild_Game_by_Adrienne_Brodeur.png'),
    description: "From the longtime New York Times labor correspondent, an in-depth look at working men and women in America, the challenges they face, and how they can be re-empowered In an era when corporate profits.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/beaten_down_worked_up.png')
book18.photo.attach(io: file, filename:'beaten_down_worked_up.png')

# 19
book19 = Book.create(
    title: "Call Sign Chaos: Learning to Lead",
    author: "Jim Mattis",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//Wild_Game_by_Adrienne_Brodeur.png'),
    description: "A clear-eyed account of learning how to lead in a chaotic world, by General Jim Mattis—the former Secretary of Defense and one of the most formidable strategic thinkers of our time—and Bing West, a former assistant secretary of defense and combat Marine.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/call_sign.png')
book19.photo.attach(io: file, filename:'call_sign.png')

# 20
book20 = Book.create(
    title: "The Culture Code: The Secrets of Highly Successful Groups",
    author: "Daniel Coyle",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//Wild_Game_by_Adrienne_Brodeur.png'),
    description: "Culture is not something you are—it's something you do. The Culture Code puts the power in your hands. No matter the size of your group or your goal, this book can teach you the principles of cultural chemistry that transform individuals into teams that can accomplish amazing things together.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/the_culture_code.png')
book20.photo.attach(io: file, filename:'the_culture_code.png')

# 21
book21 = Book.create(
    title: "Decolonizing Wealth: Indigenous Wisdom to Heal Divides and Restore Balance",
    author: "Edgar Villanueva",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//Wild_Game_by_Adrienne_Brodeur.png'),
    description: "Decolonizing Wealth is a provocative analysis of the dysfunctional colonial dynamics at play in philanthropy and finance. Award-winning philanthropy executive Edgar Villanueva draws from the traditions from the Native way to prescribe the medicine for restoring balance and healing our divides.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/decolonizing_wealth.png')
book21.photo.attach(io: file, filename:'decolonizing_wealth.png')

# 22
book22 = Book.create(
    title: "Designing Your Life: How to Build a Well-Lived, Joyful Life",
    author: "Bill Burnett",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//Wild_Game_by_Adrienne_Brodeur.png'),
    description: "In this book, Bill Burnett and Dave Evans show us how design thinking can help us create a life that is both meaningful and fulfilling, regardless of who or where we are, what we do or have done for a living, or how young or old we are. The same design thinking responsible for amazing technology, products, and spaces can be used to design and build your career and your life, a life of fulfillment and joy, constantly creative and productive, one that always holds the possibility of surprise.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/designing_life.png')
book22.photo.attach(io: file, filename:'designing_life.png')

# 23
book23 = Book.create(
    title: "The 5 Languages of Appreciation in the Workplace: Empowering Organizations by Encouraging People",
    author: "Gary Chapman",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//Wild_Game_by_Adrienne_Brodeur.png'),
    description: "This book will give you the tools to improve staff morale, create a more positive workplace, and increase employee engagement. How? By teaching you to effectively communicate authentic appreciation and encouragement to employees, co-workers, and leaders. Most relational problems in organizations flow from this question: do people feel appreciated? This book will help you answer “Yes!”",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/the_five_languages.png')
book23.photo.attach(io: file, filename:'the_five_languages.png')

# 24
book24 = Book.create(
    title: "The Power of the Other: The startling effect other people have on you, from the boardroom to the bedroom and beyond-and what to do about it",
    author: "Henry Cloud",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//Wild_Game_by_Adrienne_Brodeur.png'),
    description: "Most leadership coaching focuses on helping leaders build their skills and knowledge and close performance gaps. These are necessary, but not sufficient. Using evidence from neuroscience and his work with leaders, Dr. Henry Cloud shows that the best performers draw on another vital resource: personal and professional relationships that fuel growth and help them surpass current limits.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/the_power_of_the_other.png')
book24.photo.attach(io: file, filename:'the_power_of_the_other.png')

# 25
book25 = Book.create(
    title: "Integrity: The Courage to Meet the Demands of Reality",
    author: "Henry Cloud",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//Wild_Game_by_Adrienne_Brodeur.png'),
    description: "Integrity; more than simple honesty, it's the key to success. A person with integrity has the ability to pull everything together, to make it all happen no matter how challenging the circumstances. Drawing on experiences from his work, Dr. Henry Cloud, a clinical psychologist, leadership coach, corporate consultant and nationally syndicated radio host, shows how our character can keep us from achieving all we want to (or could) be.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/integrity.png')
book25.photo.attach(io: file, filename:'integrity.png')

# 26
book26 = Book.create(
    title: "Leadership Strategy and Tactics: Field Manual",
    author: "Jocko Willink",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//Wild_Game_by_Adrienne_Brodeur.png'),
    description: "In the military, a field manual provides instructions in simple, clear, step-by-step language to help soldiers complete their mission. In the civilian sector, books offer information on everything from fixing a leaky faucet to developing an effective workout program to cooking a good steak.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/leadership.png')
book26.photo.attach(io: file, filename:'leadership.png')

# 27
book27 = Book.create(
    title: "Arguing with Zombies: Economics, Politics, and the Fight for a Better Future",
    author: "Paul Krugman",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//Wild_Game_by_Adrienne_Brodeur.png'),
    description: "In Arguing with Zombies, Krugman tackles many of these misunderstandings, taking stock of where the United States has come from and where it’s headed in a series of concise, digestible chapters. Drawn mainly from his popular New York Times column, they cover a wide range of issues, organized thematically and framed in the context of a wider debate. Explaining the complexities of health care, housing bubbles, tax reform, Social Security, and so much more with unrivaled clarity and precision, Arguing with Zombies is Krugman at the height of his powers.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/arguing_with_zombies.png')
book27.photo.attach(io: file, filename:'arguing_with_zombies.png')

# 28
book28 = Book.create(
    title: "Mary Berry's Baking Bible: Over 250 Classic Recipes",
    author: "Mary Berry",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//Wild_Game_by_Adrienne_Brodeur.png'),
    description: "illed with 250 foolproof recipes of every variety, this comprehensive cookbook is packed with delicious baking ideas. Tempting muffins, scones, and breads are included along with Marry Berry’s famous cake recipes, including Victoria Sponge, Very Best Chocolate Cake, and Hazelnut Meringue Cake. Full-color photographs and illustrations that detail trickier steps are accompanied by easy-to-follow instructions and handy tips, making this an ideal resource for kitchen novices and more experienced cooks alike.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/baking_bible.png')
book28.photo.attach(io: file, filename:'baking_bible.png')

# 29
book29 = Book.create(
    title: "How to Bake",
    author: "Paul Hollywood",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//Wild_Game_by_Adrienne_Brodeur.png'),
    description: "The full inside story of the breathtaking rise and shocking collapse of a multibillion-dollar startup, by the prize-winning journalist who first broke the story and pursued it to the end in the face of pressure and threats from the CEO and her lawyers.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/how_to_bake.png')
book29.photo.attach(io: file, filename:'how_to_bake.png')

# 30
book30 = Book.create(
    title: "Black Wave: Saudi Arabia, Iran, and the Forty-Year Rivalry That Unraveled Culture, Religion, and Collective Memory in the Middle East",
    author: "Kim Ghattas",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//Wild_Game_by_Adrienne_Brodeur.png'),
    description: "Kim Ghattas seamlessly weaves together history, geopolitics, and culture to deliver a gripping read of the largely unexplored story of the rivalry between between Saudi Arabia and Iran, born from the sparks of the 1979 Iranian revolution and fueled by American policy.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/black_wave.png')
book30.photo.attach(io: file, filename:'black_wave.png')

# 31
book31 = Book.create(
    title: "The Victory Garden: A Novel",
    author: "Rhys Bowen",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//Wild_Game_by_Adrienne_Brodeur.png'),
    description: "As the Great War continues to take its toll, headstrong twenty-one-year-old Emily Bryce is determined to contribute to the war effort. She is convinced by a cheeky and handsome Australian pilot that she can do more, and it is not long before she falls in love with him and accepts his proposal of marriage.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/the_victory.png')
book31.photo.attach(io: file, filename:'the_victory.png')

# 32
book32 = Book.create(
    title: "The Book of the Unnamed Midwife (The Road to Nowhere)",
    author: "Meg Elison",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//Wild_Game_by_Adrienne_Brodeur.png'),
    description: "In the wake of a fever that decimated the earth’s population—killing women and children and making childbirth deadly for the mother and infant—the midwife must pick her way through the bones of the world she once knew to find her place in this dangerous new one. Gone are the pillars of civilization. All that remains is power—and the strong who possess it.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/unnamed_midwife.png')
book32.photo.attach(io: file, filename:'unnamed_midwife.png')

# 33
book33 = Book.create(
    title: "My Sister's Grave (Tracy Crosswhite)",
    author: "Robert Dugoni",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//Wild_Game_by_Adrienne_Brodeur.png'),
    description: "Tracy Crosswhite has spent twenty years questioning the facts surrounding her sister Sarah’s disappearance and the murder trial that followed. She doesn’t believe that Edmund House—a convicted rapist and the man condemned for Sarah’s murder—is the guilty party. Motivated by the opportunity to obtain real justice, Tracy became a homicide detective with the Seattle PD and dedicated her life to tracking down killers.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/sisters_grave.png')
book33.photo.attach(io: file, filename:'sisters_grave.png')

# 34
book34 = Book.create(
    title: "A Killer's Mind (Zoe Bentley Mystery)",
    author: "Mike Omer",
    genre: Faker::Book.genre,
    # cover_image_url: open('https://myreads-seeds.s3-us-west-1.amazonaws.com//Wild_Game_by_Adrienne_Brodeur.png'),
    description: "Three Chicago women have been found strangled, embalmed, and posed as if still alive. Doubting the findings of the local PD’s profiler, The FBI calls on forensic psychologist Zoe Bentley to investigate.

Zoe quickly gets off on the wrong foot with her new partner, Special Agent Tatum Gray. Zoe’s a hunter, intense and focused; Tatum’s a smug maverick with little respect for the rules. Together, they must descend into a serial killer’s psyche and untangle his twisted fantasies, or more women will die. But when the contents of three inconspicuous envelopes reveal a chilling connection to gruesome murders from Zoe’s childhood, suddenly the hunter becomes the hunted.",
)
file = open('https://myreads-seeds.s3-us-west-1.amazonaws.com/killer_mind.png')
book34.photo.attach(io: file, filename:'killer_mind.png')


#users
i = 0
while i <= 3 do
    if i ==0
        test = User.create(username: "Lord Fitzgerald", email: "LordFitzgerald@gmail.com", password: "password")
    else
        test = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: "password")
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

    200.times do
    review = Review.create(
        title: Faker::Quotes::Shakespeare.hamlet_quote, 
        user_id: rand(1..3), 
        book_id: rand(1..34), 
        rating: rand(1..5),
        body: Faker::Quotes::Shakespeare.as_you_like_it_quote,
        date_reviewed: Faker::Date.between(from: 1.year.ago, to: Date.today)
    )
    i += 1
    end


  
end
