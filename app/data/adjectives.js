const adjectives = [
  {value: "Fast"},
  {value: "Killer"},
  {value: "Melodies"},
  {value: "Red"},
  {value: "Blood Orange"},
  {value: "Blood Red"},
  {value: "Swift"},
  {value: "Destroyer"},
  {value: "Beggar"},
  {value: "Farming"},
  {value: "Beat"},
  {value: "Kick"},
  {value: "Smile"},
  {value: "Frown"},
  {value: "Scary"},
  {value: "Clean"},
  {value: "Splendid"},
  {value: "Befitting"},
  {value: "Spiky"},
  {value: "Elite"},
  {value: "Sassy"},
  {value: "Likeable"},
  {value: "Magestic"},
  {value: "Gabby"},
  {value: "Alive"},
  {value: "Milky"},
  {value: "Somber"},
  {value: "Drunk"},
  {value: "Wasted"},
  {value: "Dizzy"},
  {value: "Upset"},
  {value: "Mellow"},
  {value: "Idiotic"},
  {value: "Open"},
  {value: "Addicting"},
  {value: "Smelly"},
  {value: "Violent"},
  {value: "Nauseating"},
  {value: "Feigned"},
  {value: "Unsightly"},
  {value: "Cowardly"},
  {value: "Brief"},
  {value: "Godly"},
  {value: "Resolute"},
  {value: "Flippant"},
  {value: "Thick"},
  {value: "Thin"},
  {value: "Deadpan"},
  {value: "Early"},
  {value: "Heady"},
  {value: "Salty"},
  {value: "Puffy"},
  {value: "Slimy"},
  {value: "Raspy"},
  {value: "Resonant"},
  {value: "Poised"},
  {value: "Moldy"},
  {value: "Laughable"},
  {value: "Equable"},
  {value: "Honorable"},
  {value: "Jobless"},
  {value: "Kind Hearted"},
  {value: "Stiny"},
  {value: "Tiny"},
  {value: "Sophisticated"},
  {value: "Eminent"},
  {value: "Brawny"},
  {value: "Cagey"},
  {value: "Devilish"},
  {value: "Worthelss"},
  {value: "Amused"},
  {value: "Cheap"},
  {value: "Coordinated"},
  {value: "Sun Bleached"},
  {value: "Pissed"},
  {value: "Poisoned"},
  {value: "Poison"},
  {value: "Stinking"},
  {value: "Dirty"},
  {value: "Clean"},
  {value: "Filthy"},
  {value: "Batty"},
  {value: "Greesy"},
  {value: "Un Clean"},
  {value: "Flowery"},
  {value: "Delightful"},
  {value: "Maidenly"},
  {value: "Sexist"},
  {value: "Sexy"},
  {value: "Misogynistic"},
  {value: "Yellow"},
  {value: "Well Endowed"},
  {value: "Rich"},
  {value: "Poor"},
  {value: "Mutiny"},
  {value: "Pale"},
  {value: "Aware"},
  {value: "Joyful"},
  {value: "Weary"},
  {value: "Muddy"},
  {value: "Condemned"},
  {value: "Beautiful"},
  {value: "Jamming"},
  {value: "Sunken"},
  {value: "Cloudless"},
  {value: "Holy"},
  {value: "Calm"},
  {value: "Chivalry"},
  {value: "Ragged"},
  {value: "Elven"},
  {value: "Burdened"},
  {value: "Reckless"},
  {value: "Suffering"},
  {value: "Amiable"},
  {value: "Indented"},
  {value: "Beauteous"},
  {value: "Glorious"},
  {value: "Next"},
  {value: "Important"},
  {value: "Shy"},
  {value: "Bad"},
  {value: "Badly"},
  {value: "Few"},
  {value: "Public"},
  {value: "Private"},
  {value: "Same"},
  {value: "Amicable"},
  {value: "High"},
  {value: "Big"},
  {value: "Small"},
  {value: "Slow"},
  {value: "Strong"},
  {value: "Fat"},
  {value: "Short"},
  {value: "Long"},
  {value: "Plain"},
  {value: "Adorable"},
  {value: "Fancy"},
  {value: "Elegant"},
  {value: "Handsome"},
  {value: "Powerful"},
  {value: "Grateful"},
  {value: "Thankful"},
  {value: "Silly"},
  {value: "Clumsy"},
  {value: "Brave"},
  {value: "Grumpy"},
  {value: "Spooky"},
  {value: "horrible"},
  {value: "hideous"},
  {value: "eerie"},
  {value: "deathlike"},
  {value: "bewitching"},
  {value: "Aback"},
  {value: "Abaft"},
  {value: "Abandoned"},
  {value: "Abashed"},
  {value: "Aberrant"},
  {value: "Abhorrent"},
  {value: "Abiding"},
  {value: "Abject"},
  {value: "Ablaze"},
  {value: "Able"},
  {value: "Abnormal"},
  {value: "Aboard"},
  {value: "Aboriginal"},
  {value: "Abortive"},
  {value: "Abounding"},
  {value: "Abrasive"},
  {value: "Abrupt"},
  {value: "Absent"},
  {value: "Absorbed"},
  {value: "Absorbing"},
  {value: "Abstracted"},
  {value: "Absurd"},
  {value: "Abundant"},
  {value: "Abusive"},
  {value: "Acceptable"},
  {value: "Accessible"},
  {value: "Accidental"},
  {value: "Accurate"},
  {value: "Acid"},
  {value: "Acidic"},
  {value: "Acoustic"},
  {value: "Acrid"},
  {value: "Actually"},
  {value: "Ad Hoc"},
  {value: "Adamant"},
  {value: "Adaptable"},
  {value: "Addicted"},
  {value: "Adhesive"},
  {value: "Adjoining"},
  {value: "Adorable"},
  {value: "Adventurous"},
  {value: "Afraid"},
  {value: "Aggressive"},
  {value: "Agonizing"},
  {value: "Agreeable"},
  {value: "Ahead"},
  {value: "Ajar"},
  {value: "Alcoholic"},
  {value: "Alert"},
  {value: "Alike"},
  {value: "Alive"},
  {value: "Alleged"},
  {value: "Alluring"},
  {value: "Aloof"},
  {value: "Amazing"},
  {value: "Ambiguous"},
  {value: "Ambitious"},
  {value: "Amuck"},
  {value: "Amused"},
  {value: "Amusing"},
  {value: "Ancient"},
  {value: "Angry"},
  {value: "Animated"},
  {value: "Annoyed"},
  {value: "Annoying"},
  {value: "Anxious"},
  {value: "Apathetic"},
  {value: "Aquatic"},
  {value: "Aromatic"},
  {value: "Arrogant"},
  {value: "Ashamed"},
  {value: "Aspiring"},
  {value: "Assorted"},
  {value: "Astonishing"},
  {value: "Attractive"},
  {value: "Auspicious"},
  {value: "Automatic"},
  {value: "Available"},
  {value: "Average"},
  {value: "Awake"},
  {value: "Aware"},
  {value: "Awesome"},
  {value: "Awful"},
  {value: "Axiomatic"},
  {value: "Bad"},
  {value: "Barbarous"},
  {value: "Bashful"},
  {value: "Bawdy"},
  {value: "Beautiful"},
  {value: "Befitting"},
  {value: "Belligerent"},
  {value: "Beneficial"},
  {value: "Bent"},
  {value: "Berserk"},
  {value: "Best"},
  {value: "Better"},
  {value: "Bewildered"},
  {value: "Big"},
  {value: "Billowy"},
  {value: "Bite-Sized"},
  {value: "Bitter"},
  {value: "Bizarre"},
  {value: "Black"},
  {value: "Black-And-White"},
  {value: "Bloody"},
  {value: "Blue"},
  {value: "Blue-Eyed"},
  {value: "Blushing"},
  {value: "Boiling"},
  {value: "Boorish"},
  {value: "Bored"},
  {value: "Boring"},
  {value: "Bouncy"},
  {value: "Boundless"},
  {value: "Brainy"},
  {value: "Brash"},
  {value: "Brave"},
  {value: "Brawny"},
  {value: "Breakable"},
  {value: "Breezy"},
  {value: "Brief"},
  {value: "Bright"},
  {value: "Bright"},
  {value: "Broad"},
  {value: "Broken"},
  {value: "Brown"},
  {value: "Bumpy"},
  {value: "Burly"},
  {value: "Bustling"},
  {value: "Busy"},
  {value: "Cagey"},
  {value: "Calculating"},
  {value: "Callous"},
  {value: "Calm"},
  {value: "Capable"},
  {value: "Capricious"},
  {value: "Careful"},
  {value: "Careless"},
  {value: "Caring"},
  {value: "Cautious"},
  {value: "Ceaseless"},
  {value: "Certain"},
  {value: "Changeable"},
  {value: "Charming"},
  {value: "Cheap"},
  {value: "Cheerful"},
  {value: "Chemical"},
  {value: "Chief"},
  {value: "Childlike"},
  {value: "Chilly"},
  {value: "Chivalrous"},
  {value: "Chubby"},
  {value: "Chunky"},
  {value: "Clammy"},
  {value: "Classy"},
  {value: "Clean"},
  {value: "Clear"},
  {value: "Clever"},
  {value: "Cloistered"},
  {value: "Cloudy"},
  {value: "Closed"},
  {value: "Clumsy"},
  {value: "Cluttered"},
  {value: "Coherent"},
  {value: "Cold"},
  {value: "Colorful"},
  {value: "Colossal"},
  {value: "Combative"},
  {value: "Comfortable"},
  {value: "Common"},
  {value: "Complete"},
  {value: "Complex"},
  {value: "Concerned"},
  {value: "Condemned"},
  {value: "Confused"},
  {value: "Conscious"},
  {value: "Cooing"},
  {value: "Cool"},
  {value: "Cooperative"},
  {value: "Coordinated"},
  {value: "Courageous"},
  {value: "Cowardly"},
  {value: "Crabby"},
  {value: "Craven"},
  {value: "Crazy"},
  {value: "Creepy"},
  {value: "Crooked"},
  {value: "Crowded"},
  {value: "Cruel"},
  {value: "Cuddly"},
  {value: "Cultured"},
  {value: "Cumbersome"},
  {value: "Curious"},
  {value: "Curly"},
  {value: "Curved"},
  {value: "Curvy"},
  {value: "Cut"},
  {value: "Cute"},
  {value: "Cute"},
  {value: "Cynical"},
  {value: "Daffy"},
  {value: "Daily"},
  {value: "Damaged"},
  {value: "Damaging"},
  {value: "Damp"},
  {value: "Dangerous"},
  {value: "Dapper"},
  {value: "Dark"},
  {value: "Dashing"},
  {value: "Dazzling"},
  {value: "Dead"},
  {value: "Deadpan"},
  {value: "Deafening"},
  {value: "Dear"},
  {value: "Debonair"},
  {value: "Decisive"},
  {value: "Decorous"},
  {value: "Deep"},
  {value: "Deeply"},
  {value: "Defeated"},
  {value: "Defective"},
  {value: "Defiant"},
  {value: "Delicate"},
  {value: "Delicious"},
  {value: "Delightful"},
  {value: "Demonic"},
  {value: "Delirious"},
  {value: "Dependent"},
  {value: "Depressed"},
  {value: "Deranged"},
  {value: "Descriptive"},
  {value: "Deserted"},
  {value: "Detailed"},
  {value: "Determined"},
  {value: "Devilish"},
  {value: "Didactic"},
  {value: "Different"},
  {value: "Difficult"},
  {value: "Diligent"},
  {value: "Direful"},
  {value: "Dirty"},
  {value: "Disagreeable"},
  {value: "Disastrous"},
  {value: "Discreet"},
  {value: "Disgusted"},
  {value: "Disgusting"},
  {value: "Disillusioned"},
  {value: "Dispensable"},
  {value: "Distinct"},
  {value: "Disturbed"},
  {value: "Divergent"},
  {value: "Dizzy"},
  {value: "Domineering"},
  {value: "Doubtful"},
  {value: "Drab"},
  {value: "Draconian"},
  {value: "Dramatic"},
  {value: "Dreary"},
  {value: "Drunk"},
  {value: "Dry"},
  {value: "Dull"},
  {value: "Dusty"},
  {value: "Dusty"},
  {value: "Dynamic"},
  {value: "Dysfunctional"},
  {value: "Eager"},
  {value: "Early"},
  {value: "Earsplitting"},
  {value: "Earthy"},
  {value: "Easy"},
  {value: "Eatable"},
  {value: "Economic"},
  {value: "Educated"},
  {value: "Efficacious"},
  {value: "Efficient"},
  {value: "Eight"},
  {value: "Elastic"},
  {value: "Elated"},
  {value: "Elderly"},
  {value: "Electric"},
  {value: "Elegant"},
  {value: "Elfin"},
  {value: "Elite"},
  {value: "Embarrassed"},
  {value: "Eminent"},
  {value: "Empty"},
  {value: "Enchanted"},
  {value: "Enchanting"},
  {value: "Encouraging"},
  {value: "Endurable"},
  {value: "Energetic"},
  {value: "Enormous"},
  {value: "Entertaining"},
  {value: "Enthusiastic"},
  {value: "Envious"},
  {value: "Equable"},
  {value: "Equal"},
  {value: "Erect"},
  {value: "Erratic"},
  {value: "Ethereal"},
  {value: "Evanescent"},
  {value: "Evasive"},
  {value: "Even"},
  {value: "Excellent"},
  {value: "Excited"},
  {value: "Exciting"},
  {value: "Exclusive"},
  {value: "Exotic"},
  {value: "Expensive"},
  {value: "Extra-Large"},
  {value: "Extra-Small"},
  {value: "Exuberant"},
  {value: "Exultant"},
  {value: "Fabulous"},
  {value: "Faded"},
  {value: "Faint"},
  {value: "Fair"},
  {value: "Faithful"},
  {value: "Fallacious"},
  {value: "False"},
  {value: "Familiar"},
  {value: "Famous"},
  {value: "Fanatical"},
  {value: "Fancy"},
  {value: "Fantastic"},
  {value: "Far"},
  {value: "Far-Flung"},
  {value: "Fascinated"},
  {value: "Fast"},
  {value: "Fat"},
  {value: "Faulty"},
  {value: "Fearful"},
  {value: "Fearless"},
  {value: "Feeble"},
  {value: "Feigned"},
  {value: "Female"},
  {value: "Fertile"},
  {value: "Festive"},
  {value: "Few"},
  {value: "Fierce"},
  {value: "Filthy"},
  {value: "Fine"},
  {value: "Finicky"},
  {value: "First"},
  {value: "Five"},
  {value: "Fixed"},
  {value: "Flagrant"},
  {value: "Flaky"},
  {value: "Flashy"},
  {value: "Flat"},
  {value: "Flawless"},
  {value: "Flimsy"},
  {value: "Flippant"},
  {value: "Flowery"},
  {value: "Fluffy"},
  {value: "Fluttering"},
  {value: "Foamy"},
  {value: "Foolish"},
  {value: "Foregoing"},
  {value: "Forgetful"},
  {value: "Fortunate"},
  {value: "Four"},
  {value: "Frail"},
  {value: "Fragile"},
  {value: "Frantic"},
  {value: "Free"},
  {value: "Freezing"},
  {value: "Frequent"},
  {value: "Fresh"},
  {value: "Fretful"},
  {value: "Friendly"},
  {value: "Frightened"},
  {value: "Frightening"},
  {value: "Full"},
  {value: "Fumbling"},
  {value: "Functional"},
  {value: "Funny"},
  {value: "Furry"},
  {value: "Furtive"},
  {value: "Future"},
  {value: "Futuristic"},
  {value: "Fuzzy"},
  {value: "Gabby"},
  {value: "Gainful"},
  {value: "Gamy"},
  {value: "Gaping"},
  {value: "Garrulous"},
  {value: "Gaudy"},
  {value: "General"},
  {value: "Gentle"},
  {value: "Giant"},
  {value: "Giddy"},
  {value: "Gifted"},
  {value: "Gigantic"},
  {value: "Glamorous"},
  {value: "Gleaming"},
  {value: "Glib"},
  {value: "Glistening"},
  {value: "Glorious"},
  {value: "Glossy"},
  {value: "Godly"},
  {value: "Good"},
  {value: "Goofy"},
  {value: "Gorgeous"},
  {value: "Graceful"},
  {value: "Grandiose"},
  {value: "Grateful"},
  {value: "Gratis"},
  {value: "Gray"},
  {value: "Greasy"},
  {value: "Great"},
  {value: "Greedy"},
  {value: "Green"},
  {value: "Grey"},
  {value: "Grieving"},
  {value: "Groovy"},
  {value: "Grotesque"},
  {value: "Grouchy"},
  {value: "Grubby"},
  {value: "Gruesome"},
  {value: "Grumpy"},
  {value: "Guarded"},
  {value: "Guiltless"},
  {value: "Gullible"},
  {value: "Gusty"},
  {value: "Guttural"},
  {value: "Habitual"},
  {value: "Half"},
  {value: "Hallowed"},
  {value: "Halting"},
  {value: "Handsome"},
  {value: "Handsomely"},
  {value: "Handy"},
  {value: "Hanging"},
  {value: "Hapless"},
  {value: "Happy"},
  {value: "Hard"},
  {value: "Hard-To-Find"},
  {value: "Harmonious"},
  {value: "Harsh"},
  {value: "Hateful"},
  {value: "Heady"},
  {value: "Healthy"},
  {value: "Heartbreaking"},
  {value: "Heavenly"},
  {value: "Heavy"},
  {value: "Hellish"},
  {value: "Helpful"},
  {value: "Helpless"},
  {value: "Hesitant"},
  {value: "Hideous"},
  {value: "High"},
  {value: "Highfalutin"},
  {value: "High-Pitched"},
  {value: "Hilarious"},
  {value: "Hissing"},
  {value: "Historical"},
  {value: "Holistic"},
  {value: "Hollow"},
  {value: "Homeless"},
  {value: "Homely"},
  {value: "Honorable"},
  {value: "Horrible"},
  {value: "Hospitable"},
  {value: "Hot"},
  {value: "Huge"},
  {value: "Hulking"},
  {value: "Humdrum"},
  {value: "Humorous"},
  {value: "Hungry"},
  {value: "Hurried"},
  {value: "Hurt"},
  {value: "Hushed"},
  {value: "Husky"},
  {value: "Hypnotic"},
  {value: "Hysterical"},
  {value: "Icky"},
  {value: "Icy"},
  {value: "Idiotic"},
  {value: "Ignorant"},
  {value: "Ill"},
  {value: "Illegal"},
  {value: "Ill-Fated"},
  {value: "Ill-Informed"},
  {value: "Illustrious"},
  {value: "Imaginary"},
  {value: "Immense"},
  {value: "Imminent"},
  {value: "Impartial"},
  {value: "Imperfect"},
  {value: "Impolite"},
  {value: "Important"},
  {value: "Imported"},
  {value: "Impossible"},
  {value: "Incandescent"},
  {value: "Incompetent"},
  {value: "Inconclusive"},
  {value: "Industrious"},
  {value: "Incredible"},
  {value: "Inexpensive"},
  {value: "Infamous"},
  {value: "Innate"},
  {value: "Innocent"},
  {value: "Inquisitive"},
  {value: "Insidious"},
  {value: "Instinctive"},
  {value: "Intelligent"},
  {value: "Interesting"},
  {value: "Internal"},
  {value: "Invincible"},
  {value: "Irate"},
  {value: "Irritating"},
  {value: "Itchy"},
  {value: "Jaded"},
  {value: "Jagged"},
  {value: "Jazzy"},
  {value: "Jealous"},
  {value: "Jittery"},
  {value: "Jobless"},
  {value: "Jolly"},
  {value: "Joyous"},
  {value: "Judicious"},
  {value: "Juicy"},
  {value: "Jumbled"},
  {value: "Jumpy"},
  {value: "Juvenile"},
  {value: "Kaput"},
  {value: "Keen"},
  {value: "Kind"},
  {value: "Kindhearted"},
  {value: "Kindly"},
  {value: "Knotty"},
  {value: "Knowing"},
  {value: "Knowledgeable"},
  {value: "Known"},
  {value: "Labored"},
  {value: "Lackadaisical"},
  {value: "Lacking"},
  {value: "Lame"},
  {value: "Lamentable"},
  {value: "Languid"},
  {value: "Large"},
  {value: "Last"},
  {value: "Late"},
  {value: "Laughable"},
  {value: "Lavish"},
  {value: "Lazy"},
  {value: "Lean"},
  {value: "Learned"},
  {value: "Left"},
  {value: "Legal"},
  {value: "Lethal"},
  {value: "Level"},
  {value: "Lewd"},
  {value: "Light"},
  {value: "Like"},
  {value: "Likeable"},
  {value: "Limping"},
  {value: "Literate"},
  {value: "Little"},
  {value: "Lively"},
  {value: "Lively"},
  {value: "Living"},
  {value: "Lonely"},
  {value: "Long"},
  {value: "Longing"},
  {value: "Long-Term"},
  {value: "Loose"},
  {value: "Lopsided"},
  {value: "Loud"},
  {value: "Loutish"},
  {value: "Lovely"},
  {value: "Loving"},
  {value: "Low"},
  {value: "Lowly"},
  {value: "Lucky"},
  {value: "Ludicrous"},
  {value: "Lumpy"},
  {value: "Lush"},
  {value: "Luxuriant"},
  {value: "Lying"},
  {value: "Lyrical"},
  {value: "Macabre"},
  {value: "Macho"},
  {value: "Maddening"},
  {value: "Madly"},
  {value: "Magenta"},
  {value: "Magical"},
  {value: "Magnificent"},
  {value: "Majestic"},
  {value: "Makeshift"},
  {value: "Male"},
  {value: "Malicious"},
  {value: "Mammoth"},
  {value: "Maniacal"},
  {value: "Many"},
  {value: "Marked"},
  {value: "Massive"},
  {value: "Married"},
  {value: "Marvelous"},
  {value: "Material"},
  {value: "Materialistic"},
  {value: "Mature"},
  {value: "Mean"},
  {value: "Measly"},
  {value: "Meaty"},
  {value: "Medical"},
  {value: "Meek"},
  {value: "Mellow"},
  {value: "Melodic"},
  {value: "Melted"},
  {value: "Merciful"},
  {value: "Mere"},
  {value: "Messy"},
  {value: "Mighty"},
  {value: "Military"},
  {value: "Milky"},
  {value: "Mindless"},
  {value: "Miniature"},
  {value: "Minor"},
  {value: "Miscreant"},
  {value: "Misty"},
  {value: "Mixed"},
  {value: "Moaning"},
  {value: "Modern"},
  {value: "Moldy"},
  {value: "Momentous"},
  {value: "Motionless"},
  {value: "Mountainous"},
  {value: "Muddled"},
  {value: "Mundane"},
  {value: "Murky"},
  {value: "Mushy"},
  {value: "Mute"},
  {value: "Mysterious"},
  {value: "Naive"},
  {value: "Nappy"},
  {value: "Narrow"},
  {value: "Nasty"},
  {value: "Natural"},
  {value: "Naughty"},
  {value: "Nauseating"},
  {value: "Near"},
  {value: "Neat"},
  {value: "Nebulous"},
  {value: "Necessary"},
  {value: "Needless"},
  {value: "Needy"},
  {value: "Neighborly"},
  {value: "Nervous"},
  {value: "New"},
  {value: "Next"},
  {value: "Nice"},
  {value: "Nifty"},
  {value: "Nimble"},
  {value: "Nine"},
  {value: "Nippy"},
  {value: "Noiseless"},
  {value: "Noisy"},
  {value: "Nonchalant"},
  {value: "Nondescript"},
  {value: "Nonstop"},
  {value: "Normal"},
  {value: "Nostalgic"},
  {value: "Nosy"},
  {value: "Noxious"},
  {value: "Null"},
  {value: "Numberless"},
  {value: "Numerous"},
  {value: "Nutritious"},
  {value: "Nutty"},
  {value: "Oafish"},
  {value: "Obedient"},
  {value: "Obeisant"},
  {value: "Obese"},
  {value: "Obnoxious"},
  {value: "Obscene"},
  {value: "Obsequious"},
  {value: "Observant"},
  {value: "Obsolete"},
  {value: "Obtainable"},
  {value: "Oceanic"},
  {value: "Odd"},
  {value: "Offbeat"},
  {value: "Old"},
  {value: "Old-Fashioned"},
  {value: "Omniscient"},
  {value: "One"},
  {value: "Onerous"},
  {value: "Open"},
  {value: "Opposite"},
  {value: "Optimal"},
  {value: "Orange"},
  {value: "Ordinary"},
  {value: "Organic"},
  {value: "Ossified"},
  {value: "Outgoing"},
  {value: "Outrageous"},
  {value: "Outstanding"},
  {value: "Oval"},
  {value: "Overconfident"},
  {value: "Overjoyed"},
  {value: "Overrated"},
  {value: "Overt"},
  {value: "Overwrought"},
  {value: "Painful"},
  {value: "Painstaking"},
  {value: "Pale"},
  {value: "Paltry"},
  {value: "Panicky"},
  {value: "Panoramic"},
  {value: "Parallel"},
  {value: "Parched"},
  {value: "Parsimonious"},
  {value: "Past"},
  {value: "Pastoral"},
  {value: "Pathetic"},
  {value: "Peaceful"},
  {value: "Penitent"},
  {value: "Perfect"},
  {value: "Periodic"},
  {value: "Permissible"},
  {value: "Perpetual"},
  {value: "Petite"},
  {value: "Petite"},
  {value: "Phobic"},
  {value: "Physical"},
  {value: "Picayune"},
  {value: "Pink"},
  {value: "Piquant"},
  {value: "Placid"},
  {value: "Plain"},
  {value: "Plant"},
  {value: "Plastic"},
  {value: "Plausible"},
  {value: "Pleasant"},
  {value: "Plucky"},
  {value: "Pointless"},
  {value: "Poised"},
  {value: "Polite"},
  {value: "Political"},
  {value: "Poor"},
  {value: "Possessive"},
  {value: "Possible"},
  {value: "Powerful"},
  {value: "Precious"},
  {value: "Premium"},
  {value: "Present"},
  {value: "Pretty"},
  {value: "Previous"},
  {value: "Pricey"},
  {value: "Prickly"},
  {value: "Private"},
  {value: "Probable"},
  {value: "Productive"},
  {value: "Profuse"},
  {value: "Protective"},
  {value: "Proud"},
  {value: "Psychedelic"},
  {value: "Psychotic"},
  {value: "Public"},
  {value: "Puffy"},
  {value: "Pumped"},
  {value: "Puny"},
  {value: "Purple"},
  {value: "Purring"},
  {value: "Pushy"},
  {value: "Puzzled"},
  {value: "Puzzling"},
  {value: "Quack"},
  {value: "Quaint"},
  {value: "Quarrelsome"},
  {value: "Questionable"},
  {value: "Quick"},
  {value: "Quickest"},
  {value: "Quiet"},
  {value: "Quirky"},
  {value: "Quixotic"},
  {value: "Quizzical"},
  {value: "Rabid"},
  {value: "Racial"},
  {value: "Ragged"},
  {value: "Rainy"},
  {value: "Rambunctious"},
  {value: "Rampant"},
  {value: "Rapid"},
  {value: "Rare"},
  {value: "Raspy"},
  {value: "Ratty"},
  {value: "Ready"},
  {value: "Real"},
  {value: "Rebel"},
  {value: "Receptive"},
  {value: "Recondite"},
  {value: "Red"},
  {value: "Redundant"},
  {value: "Reflective"},
  {value: "Regular"},
  {value: "Relieved"},
  {value: "Remarkable"},
  {value: "Reminiscent"},
  {value: "Repulsive"},
  {value: "Resolute"},
  {value: "Resonant"},
  {value: "Responsible"},
  {value: "Rhetorical"},
  {value: "Rich"},
  {value: "Right"},
  {value: "Righteous"},
  {value: "Rightful"},
  {value: "Rigid"},
  {value: "Ripe"},
  {value: "Ritzy"},
  {value: "Roasted"},
  {value: "Robust"},
  {value: "Romantic"},
  {value: "Roomy"},
  {value: "Rotten"},
  {value: "Rough"},
  {value: "Round"},
  {value: "Royal"},
  {value: "Ruddy"},
  {value: "Rude"},
  {value: "Rural"},
  {value: "Rustic"},
  {value: "Ruthless"},
  {value: "Sable"},
  {value: "Sad"},
  {value: "Safe"},
  {value: "Salty"},
  {value: "Same"},
  {value: "Sassy"},
  {value: "Satisfying"},
  {value: "Savory"},
  {value: "Scandalous"},
  {value: "Scarce"},
  {value: "Scared"},
  {value: "Scary"},
  {value: "Scattered"},
  {value: "Scientific"},
  {value: "Scintillating"},
  {value: "Scrawny"},
  {value: "Screeching"},
  {value: "Second"},
  {value: "Second-Hand"},
  {value: "Secret"},
  {value: "Secretive"},
  {value: "Sedate"},
  {value: "Seemly"},
  {value: "Selective"},
  {value: "Selfish"},
  {value: "Separate"},
  {value: "Serious"},
  {value: "Shaggy"},
  {value: "Shaky"},
  {value: "Shallow"},
  {value: "Sharp"},
  {value: "Shiny"},
  {value: "Shivering"},
  {value: "Shocking"},
  {value: "Short"},
  {value: "Shrill"},
  {value: "Shut"},
  {value: "Shy"},
  {value: "Sick"},
  {value: "Silent"},
  {value: "Silent"},
  {value: "Silky"},
  {value: "Silly"},
  {value: "Simple"},
  {value: "Simplistic"},
  {value: "Sincere"},
  {value: "Six"},
  {value: "Skillful"},
  {value: "Skinny"},
  {value: "Sleepy"},
  {value: "Slim"},
  {value: "Slimy"},
  {value: "Slippery"},
  {value: "Sloppy"},
  {value: "Slow"},
  {value: "Small"},
  {value: "Smart"},
  {value: "Smelly"},
  {value: "Smiling"},
  {value: "Smoggy"},
  {value: "Smooth"},
  {value: "Sneaky"},
  {value: "Snobbish"},
  {value: "Snotty"},
  {value: "Soft"},
  {value: "Soggy"},
  {value: "Solid"},
  {value: "Somber"},
  {value: "Sophisticated"},
  {value: "Sordid"},
  {value: "Sore"},
  {value: "Sore"},
  {value: "Sour"},
  {value: "Sparkling"},
  {value: "Special"},
  {value: "Spectacular"},
  {value: "Spicy"},
  {value: "Spiffy"},
  {value: "Spiky"},
  {value: "Spiritual"},
  {value: "Spiteful"},
  {value: "Splendid"},
  {value: "Spooky"},
  {value: "Spotless"},
  {value: "Spotted"},
  {value: "Spotty"},
  {value: "Spurious"},
  {value: "Squalid"},
  {value: "Square"},
  {value: "Squealing"},
  {value: "Squeamish"},
  {value: "Staking"},
  {value: "Stale"},
  {value: "Standing"},
  {value: "Statuesque"},
  {value: "Steadfast"},
  {value: "Steady"},
  {value: "Steep"},
  {value: "Stereotyped"},
  {value: "Sticky"},
  {value: "Stiff"},
  {value: "Stimulating"},
  {value: "Stingy"},
  {value: "Stormy"},
  {value: "Straight"},
  {value: "Strange"},
  {value: "Striped"},
  {value: "Strong"},
  {value: "Stupendous"},
  {value: "Stupid"},
  {value: "Sturdy"},
  {value: "Subdued"},
  {value: "Subsequent"},
  {value: "Substantial"},
  {value: "Successful"},
  {value: "Succinct"},
  {value: "Sudden"},
  {value: "Sulky"},
  {value: "Super"},
  {value: "Superb"},
  {value: "Superficial"},
  {value: "Supreme"},
  {value: "Swanky"},
  {value: "Sweet"},
  {value: "Sweltering"},
  {value: "Swift"},
  {value: "Symptomatic"},
  {value: "Synonymous"},
  {value: "Taboo"},
  {value: "Tacit"},
  {value: "Tacky"},
  {value: "Talented"},
  {value: "Tall"},
  {value: "Tame"},
  {value: "Tan"},
  {value: "Tangible"},
  {value: "Tangy"},
  {value: "Tart"},
  {value: "Tasteful"},
  {value: "Tasteless"},
  {value: "Tasty"},
  {value: "Tawdry"},
  {value: "Tearful"},
  {value: "Tedious"},
  {value: "Teeny"},
  {value: "Teeny-Tiny"},
  {value: "Telling"},
  {value: "Temporary"},
  {value: "Ten"},
  {value: "Tender"},
  {value: "Tense"},
  {value: "Tense"},
  {value: "Tenuous"},
  {value: "Terrible"},
  {value: "Terrific"},
  {value: "Tested"},
  {value: "Testy"},
  {value: "Thankful"},
  {value: "Therapeutic"},
  {value: "Thick"},
  {value: "Thin"},
  {value: "Thinkable"},
  {value: "Third"},
  {value: "Thirsty"},
  {value: "Thirsty"},
  {value: "Thoughtful"},
  {value: "Thoughtless"},
  {value: "Threatening"},
  {value: "Three"},
  {value: "Thundering"},
  {value: "Tidy"},
  {value: "Tight"},
  {value: "Tightfisted"},
  {value: "Tiny"},
  {value: "Tired"},
  {value: "Tiresome"},
  {value: "Toothsome"},
  {value: "Torpid"},
  {value: "Tough"},
  {value: "Towering"},
  {value: "Tranquil"},
  {value: "Trashy"},
  {value: "Tremendous"},
  {value: "Tricky"},
  {value: "Trite"},
  {value: "Troubled"},
  {value: "Truculent"},
  {value: "True"},
  {value: "Truthful"},
  {value: "Two"},
  {value: "Typical"},
  {value: "Ubiquitous"},
  {value: "Ugliest"},
  {value: "Ugly"},
  {value: "Ultra"},
  {value: "Unable"},
  {value: "Unaccountable"},
  {value: "Unadvised"},
  {value: "Unarmed"},
  {value: "Unbecoming"},
  {value: "Unbiased"},
  {value: "Uncovered"},
  {value: "Understood"},
  {value: "Undesirable"},
  {value: "Unequal"},
  {value: "Unequaled"},
  {value: "Uneven"},
  {value: "Unhealthy"},
  {value: "Uninterested"},
  {value: "Unique"},
  {value: "Unkempt"},
  {value: "Unknown"},
  {value: "Unnatural"},
  {value: "Unruly"},
  {value: "Unsightly"},
  {value: "Unsuitable"},
  {value: "Untidy"},
  {value: "Unused"},
  {value: "Unusual"},
  {value: "Unwieldy"},
  {value: "Unwritten"},
  {value: "Upbeat"},
  {value: "Uppity"},
  {value: "Upset"},
  {value: "Uptight"},
  {value: "Used"},
  {value: "Useful"},
  {value: "Useless"},
  {value: "Utopian"},
  {value: "Utter"},
  {value: "Uttermost"},
  {value: "Vacuous"},
  {value: "Vagabond"},
  {value: "Vague"},
  {value: "Valuable"},
  {value: "Various"},
  {value: "Vast"},
  {value: "Vengeful"},
  {value: "Venomous"},
  {value: "Verdant"},
  {value: "Versed"},
  {value: "Victorious"},
  {value: "Vigorous"},
  {value: "Violent"},
  {value: "Violet"},
  {value: "Vivacious"},
  {value: "Voiceless"},
  {value: "Volatile"},
  {value: "Voracious"},
  {value: "Vulgar"},
  {value: "Wacky"},
  {value: "Waggish"},
  {value: "Waiting"},
  {value: "Wakeful"},
  {value: "Wandering"},
  {value: "Wanting"},
  {value: "Warlike"},
  {value: "Warm"},
  {value: "Wary"},
  {value: "Wasteful"},
  {value: "Watery"},
  {value: "Weak"},
  {value: "Wealthy"},
  {value: "Weary"},
  {value: "Well-Groomed"},
  {value: "Well-Made"},
  {value: "Well-Off"},
  {value: "Well-To-Do"},
  {value: "Wet"},
  {value: "Whimsical"},
  {value: "Whispering"},
  {value: "White"},
  {value: "Whole"},
  {value: "Wholesale"},
  {value: "Wicked"},
  {value: "Wide"},
  {value: "Wide-Eyed"},
  {value: "Wiggly"},
  {value: "Wild"},
  {value: "Willing"},
  {value: "Windy"},
  {value: "Wiry"},
  {value: "Wise"},
  {value: "Wistful"},
  {value: "Witty"},
  {value: "Woebegone"},
  {value: "Womanly"},
  {value: "Wonderful"},
  {value: "Wooden"},
  {value: "Woozy"},
  {value: "Workable"},
  {value: "Worried"},
  {value: "Worthless"},
  {value: "Wrathful"},
  {value: "Wretched"},
  {value: "Wrong"},
  {value: "Wry"},
  {value: "Yellow"},
  {value: "Yielding"},
  {value: "Young"},
  {value: "Youthful"},
  {value: "Yummy"},
  {value: "Zany"},
  {value: "Zealous"},
  {value: "Zesty"},
  {value: "Zippy"},
  {value: "Zonked"},
  {value: "Glorious"},
  {value: "Colossal"},
  {value: "hissing"},
  {value: "sparse"},
  {value: "zealous"},
  {value: "rotten"},
  {value: "Caustic"},
  {value: "Corpulent"},
  {value: "Petulant"},
  {value: "Zealous"},
  {value: "Voracious"},
  {value: "Blithering"},
  {value: "Barbigerous"},
  {value: "Chipper"},
  {value: "Jubilant"},
  {value: "Victorious"},
  {value: "Seafaring"},
  {value: "Bulbous"},
  {value: "Cavalier"},
  {value: "Copacetic"},
  {value: "Coquettish"},
  {value: "Dishonorable"},
  {value: "Maudlin"}
]

module.exports = adjectives
