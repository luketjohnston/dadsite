from django.core.files import File
from myapp.models import Portrait
from myapp.models import Award

# populates all portraits, does not add any awards.

filenames = [
  'oil_portrait_artist_Scott_Walllace_Johnston-SAlanRay_portrait.jpg',
  'Scott-Johnston_Oil_Portrait_Art_Official_Portrait_Judge_Wilken.jpg',
  'Scott_Johnston_Oil_Portrait_President_George_Bush.jpg',
  'Artist_Scott_Johnston_OilPortrait_Official_Portrait_Judge_Illston.jpg',
  'artist-scott-johnston-oil-portraits-peter-devine.jpg',
  'Scott_Johnston_oil_portrait_art_President_Burcham.jpg',
  'Scott_Johnston_Oil_Portrait_Art_Official_Portrait_Judge_Chesney.jpg',
  'Portrait-Painter-Artist-Scott-Johnston-Official-Saundra-Brown-Armstrong.jpg',
  'scott-johnston-oil-portrait-art-girl.jpg',
  'Official-Portrait-Painter-Artist-Scott-Johnston-Vaughn-Walker.jpg',
  'oil-portrait-judge-ware-by-painter-scott-johnston.jpg',
  'Scott_Johnston_Oil_Portrait_Art_Official_Portrait_Judge_Breyer.jpg',
  'shinji-portrait-painter-scott-johnston-art-edgar-degas.jpg',
  'artist-scott-johnston-oil-portrait-family.jpg',
  'ScottJohnston_portrait_director.jpg',
  'scott-johnston-portrait-painter-judge-whyte.jpg',
  'portrait-painter-scott-johnston-art-burdick.jpg',
]

short_ids = [
  'Ray',
  'Wilken',
  'Bush',
  'Illston',
  'Devine',
  'Burcham',
  'Chesney',
  'Armstrong',
  'Shelby',
  'Walker',
  'Ware',
  'Breyer',
  'Eshima',
  'Family',
  'Siebert',
  'Whyte',
  'Burdick',
]

descriptions = [
  'S. ALAN RAY, PRESIDENT, ELMHURST COLLEGE',
  'JUDGE CLAUDIA WILKEN, UNITED STATES DISTRICT COURT, CALIFORNIA',
  'PRESIDENT GEORGE H.W. BUSH. &thinsp; COLLECTION BOHEMIAN CLUB, SAN FRANCISCO',
  'JUDGE SUSAN ILLSTON, UNITED STATES DISTRICT COURT, CALIFORNIA',
  'PETER DEVINE',
  'DAVID BURCHAM, PRESIDENT, LOYOLA MARYMOUNT UNIVERSITY',
  'JUDGE MAXINE CHESNEY, UNITED STATES DISTRICT COURT, CALIFORNIA',
  'JUDGE SAUNDRA BROWN ARMSTRONG, U.S. DISTRICT COURT, CALIFORNIA',
  'SHELBY LYNN',
  'JUDGE VAUGHN R WALKER, UNITED STATES DISTRICT COURT, CALIFORNIA',
  'JUDGE JAMES S. WARE, UNITED STATES DISTRICT COURT, CALIFORNIA',
  'JUDGE CHARLES BREYER, UNITED STATES DISTRICT COURT, CALIFORNIA',
  'SHINJI ESHIMA, BASSIST, COMPOSER, SF BALLET AND OPERA ORCHESTRAS',
  ' ',                                     # space instead of empty, so it still displays on portrait page, to keep styling consistent
  'ACTOR, DIRECTOR CHARLES SIEBERT',
  'JUDGE RONALD WHYTE, UNITED STATES DISTRICT COURT, CALIFORNIA',
  'HUNT BURDICK',
]

gallery_orders = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
]


# when building slideshow, will ignore those with order=0
slideshow_orders = [
  1,
  2,
  3,
  4,
  5,
  0,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  0,
  15,
  0,
  17,
]

for i,f in enumerate(filenames):
  p = Portrait(
    description=descriptions[i],
    gallery_order=gallery_orders[i],
    slideshow_order=slideshow_orders[i],
    identifier = short_ids[i],
  )
  p.image.save(f, File(open('/home/v9xm9e4lqiii/dadsite/images/portraits/' + f, 'rb')))
  p.save()


awards = []

p = Portrait.objects.get(identifier='Walker') 
awards.append(
  (p, 'Awarded third place, Portrait Society of America’s Members Only Competition, 2012',
   'http://www.portraitsociety.org/'))
awards.append(
  (p, 'Featured in International Artist Magazine',
   'http://www.international-artist.com/'))
awards.append(
  (p, 'Art Renewal Center Salon Finalist, 2013-14',
   'http://artrenewal.org/pages/salon_winners.php?contest=2013-2014%20Salon&page=Figurative'))

p = Portrait.objects.get(identifier='Armstrong') 
awards.append(
  (p, 'Art Renewal Center Salon Finalist, 2016', 
   'http://artrenewal.org/pages/salon_winners.php?contest=2013-2014%20Salon&page=Figurative'))

p = Portrait.objects.get(identifier='Wilken') 
awards.append(
  (p, 'Art Renewal Center Salon Finalist, 2016', 'http://artrenewal.org/pages/salon_winners.php?contest=2013-2014%20Salon&page=Figurative'))

p = Portrait.objects.get(identifier='Breyer')
awards.append(
  (p, 'Honors Award, Portrait Society of America’s Members Only Competition, 2013',
   'http://www.portraitsociety.org/'))

p = Portrait.objects.get(identifier='Eshima')
awards.append(
  (p, 'Shinji Eshima with his Plumerel Bass, the very same instrument painted by Degas in L’Orchestre de l’Opera.', 'http://it.wikipedia.org/wiki/File:Degas_l%27orchestre.jpg'))
awards.append(
  (p, 'Read story here.', 'https://www.scottjohnstonportraits.com/images/ShinjiEshimaPlumerelBase_Article.pdf'))
awards.append(
  (p, 'Honors Award, Portrait Society of America’s Members Only Competition, 2014', 'http://www.portraitsociety.org/'))

p = Portrait.objects.get(identifier='Ray')
awards.append(
  (p, 'Finalist, Portrait Society of America\'s Members Only Competition, 2016', 'http://artrenewal.org/pages/salon_winners.php?contest=2013-2014%20Salon&page=Figurative'))

p = Portrait.objects.get(identifier='Devine')
awards.append(
  (p, 'Award Winner Ray Mar Art Contest 2014', 'https://www.scottjohnstonportraits.com/images/award-winner-scott-johnston.pdf'))
awards.append(
  (p, 'Honors Award, Portrait Society of America’s Members Only Competition, 2013', ''))
awards.append(
  (p, 'Honors Award, Oil Painters of America', 'http://opaonlineshowcase.com/winners/134'))
awards.append(
  (p, 'Art Renewal Center Salon Finalist, 2013-14', 'http://artrenewal.org/pages/salon_winners.php?contest=2013-2014%20Salon&page=Figurative'))

p = Portrait.objects.get(identifier='Chesney')
awards.append(
  (p, 'Honors Award, Portrait Society of America’s Members Only Competition, 2010', 'http://www.portraitsociety.org/'))

p = Portrait.objects.get(identifier='Shelby')
awards.append(
  (p, 'Ray Mar Art Contest Finalist', 'http://www.raymarartcontest.com/'))
awards.append(
  (p, 'Featured in International Artist Magazine', 'https://www.internationalartist.com/'))

p = Portrait.objects.get(identifier='Ware')
awards.append(
  (p, 'Honors Award, Portrait Society of America’s Members Only Competition, 2012', ''))


for a in awards:
  mya = Award(portrait = a[0], description = a[1], link = a[2])
  mya.save()

  
  





