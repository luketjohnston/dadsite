from django.core.files import File
from myapp.models import Portrait

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


for i,f in enumerate(filenames):
  p = Portrait(
    identifier=f,
    description='Test description',
    order=i,
  )
  p.image.save(f, File(open('/Users/lukejohnston/Desktop/DadsWebsite/images/portraits/' + f, 'rb')))
  p.save()




