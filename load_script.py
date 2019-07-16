from django.core.files import File
from myapp.models import Portrait
from myapp.models import Award

# populates all portraits, does not add any awards.

filenames = [
  'Artist_Scott_Johnston_OilPortrait_Official_Portrait_Judge_Illston.jpg',
  'Official-Portrait-Painter-Artist-Scott-Johnston-Vaughn-Walker.jpg',
  'Portrait-Painter-Artist-Scott-Johnston-Official-Saundra-Brown-Armstrong.jpg',
  'Scott-Johnston_Oil_Portrait_Art_Official_Portrait_Judge_Wilken.jpg',
  'ScottJohnston_portrait_director.jpg',
  'Scott_Johnston_Oil_Portrait_Art_Official_Portrait_Judge_Breyer.jpg',
  'Scott_Johnston_Oil_Portrait_Art_Official_Portrait_Judge_Chesney.jpg',
  'Scott_Johnston_Oil_Portrait_President_George_Bush.jpg',
  'Scott_Johnston_oil_portrait_art_President_Burcham.jpg',
  'artist-scott-johnston-oil-portrait-family.jpg',
  'artist-scott-johnston-oil-portraits-peter-devine.jpg',
  'oil-portrait-judge-ware-by-painter-scott-johnston.jpg',
  'oil_portrait_artist_Scott_Walllace_Johnston-SAlanRay_portrait.jpg',
  'portrait-painter-scott-johnston-art-burdick.jpg',
  'scott-johnston-oil-portrait-art-girl.jpg',
  'scott-johnston-portrait-painter-judge-whyte.jpg',
  'shinji-portrait-painter-scott-johnston-art-edgar-degas.jpg',
]

short_ids = [
  'Illston',
  'Walker',
  'Armstrong',
  'Wilken',
  'Siebert',
  'Breyer',
  'Chesney',
  'Bush',
  'Burcham',
  'Family',
  'Devine',
  'Ware',
  'Ray',
  'Burdick',
  'Shelby',
  'Whyte',
  'Eshima',
]

descriptions = [
  'JUDGE SUSAN ILLSTON, UNITED STATES DISTRICT COURT,\nNORTHERN DISTRICT OF CALIFORNIA',
  'JUDGE VAUGHN R WALKER, UNITED STATES DISTRICT COURT,\nNORTHERN DISTRICT OF CALIFORNIA',
  'JUDGE SAUNDRA BROWN ARMSTRONG, UNITED STATES DISTRICT COURT,\nNORTHERN DISTRICT OF CALIFORNIA',
  'JUDGE CLAUDIA WILKEN, UNITED STATES DISTRICT COURT,\nNORTHERN DISTRICT OF CALIFORNIA',
  'ACTOR, DIRECTOR CHARLES SIEBERT',
  'JUDGE CHARLES BREYER, UNITED STATES DISTRICT COURT,\nNORTHERN DISTRICT OF CALIFORNIA',
  'JUDGE MAXINE CHESNEY, UNITED STATES DISTRICT COURT,\nNORTHERN DISTRICT OF CALIFORNIA',
  'PRESIDENT GEORGE H.W. BUSH\nCOLLECTION BOHEMIAN CLUB, SAN FRANCISCO',
  'DAVID BURCHAM\nPRESIDENT, LOYOLA MARYMOUNT UNIVERSITY',
  '',
  'PETER DEVINE',
  'JUDGE JAMES S. WARE, UNITED STATES DISTRICT COURT,\nNORTHERN DISTRICT OF CALIFORNIA',
  'S. ALAN RAY\nPRESIDENT, ELMHURST COLLEGE',
  'HUNT BURDICK',
  'SHELBY LYNN',
  'JUDGE RONALD WHYTE, UNITED STATES DISTRICT COURT,\nNORTHERN DISTRICT OF CALIFORNIA',
  'SHINJI ESHIMA, BASSIST, COMPOSER,\nSF BALLET ORCHESTRA AND SF OPERA ORCHESTRA',
]

for i,f in enumerate(filenames):
  p = Portrait(
    identifier=f,
    description=descriptions[i],
    order=i,
    myid = short_ids[i],
  )
  p.image.save(f, File(open('/Users/lukejohnston/Desktop/dadsite/images/portraits/' + f, 'rb')))
  p.save()


awards = []

p = Portrait.objects.get(myid='Walker') 
awards.append(
  (p, 'Awarded third place, Portrait Society of America’s Members Only Competition, 2012',
   'http://www.portraitsociety.org/'))
awards.append(
  (p, 'Featured in International Artist Magazine',
   'http://www.international-artist.com/'))
awards.append(
  (p, 'Art Renewal Center Salon Finalist, 2013-14',
   'http://artrenewal.org/pages/salon_winners.php?contest=2013-2014%20Salon&page=Figurative'))

p = Portrait.objects.get(myid='Armstrong') 
awards.append(
  (p, 'Art Renewal Center Salon Finalist, 2016', 
   'http://artrenewal.org/pages/salon_winners.php?contest=2013-2014%20Salon&page=Figurative'))

p = Portrait.objects.get(myid='Wilken') 
awards.append(
  (p, 'Art Renewal Center Salon Finalist, 2016', 'http://artrenewal.org/pages/salon_winners.php?contest=2013-2014%20Salon&page=Figurative'))

p = Portrait.objects.get(myid='Breyer')
awards.append(
  (p, 'Honors Award, Portrait Society of America’s Members Only Competition, 2013',
   'http://www.portraitsociety.org/'))

p = Portrait.objects.get(myid='Eshima')
awards.append(
  (p, 'Shinji Eshima with his Plumerel Bass, the very same instrument painted by Degas in L’Orchestre de l’Opera.', 'http://it.wikipedia.org/wiki/File:Degas_l%27orchestre.jpg'))
awards.append(
  (p, 'Read story here.', 'https://www.scottjohnstonportraits.com/images/ShinjiEshimaPlumerelBase_Article.pdf'))
awards.append(
  (p, 'Honors Award, Portrait Society of America’s Members Only Competition, 2014', 'http://www.portraitsociety.org/'))

p = Portrait.objects.get(myid='Ray')
awards.append(
  (p, 'Finalist, Portrait Society of America\'s Members Only Competition, 2016', 'http://artrenewal.org/pages/salon_winners.php?contest=2013-2014%20Salon&page=Figurative'))

p = Portrait.objects.get(myid='Devine')
awards.append(
  (p, 'Award Winner Ray Mar Art Contest 2014', 'https://www.scottjohnstonportraits.com/images/award-winner-scott-johnston.pdf'))
awards.append(
  (p, 'Honors Award, Portrait Society of America’s Members Only Competition, 2013', ''))
awards.append(
  (p, 'Honors Award, Oil Painters of America', 'http://opaonlineshowcase.com/winners/134'))
awards.append(
  (p, 'Art Renewal Center Salon Finalist, 2013-14', 'http://artrenewal.org/pages/salon_winners.php?contest=2013-2014%20Salon&page=Figurative'))

p = Portrait.objects.get(myid='Chesney')
awards.append(
  (p, 'Honors Award, Portrait Society of America’s Members Only Competition, 2010', 'http://www.portraitsociety.org/'))

p = Portrait.objects.get(myid='Shelby')
awards.append(
  (p, 'Ray Mar Art Contest Finalist', 'http://www.raymarartcontest.com/'))
awards.append(
  (p, 'Featured in International Artist Magazine', 'https://www.internationalartist.com/'))

p = Portrait.objects.get(myid='Ware')
awards.append(
  (p, 'Honors Award, Portrait Society of America’s Members Only Competition, 2012', ''))


for a in awards:
  mya = Award(portrait = a[0], description = a[1], link = a[2])
  mya.save()

  
  





