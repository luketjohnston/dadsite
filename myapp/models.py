from django.db import models
import os
from PIL import Image
from io import BytesIO
from django.core.files.base import ContentFile

# Create your models here.
class Portrait(models.Model):
  description = models.CharField(max_length=200)
  image = models.ImageField(upload_to='media/')
  thumbnail = models.ImageField(upload_to='media/thumbnails/', blank=True)
  gallery_order = models.FloatField()
  slideshow_order = models.FloatField()
  # used in the path for the portrait page, 'gallery/<identifier>'
  identifier = models.CharField(max_length=200)

  def __str__(self):
      return self.identifier

  def save(self, *args, **kwargs):
    """
    Make and save the thumbnail for the photo here.
    """
    if not self.thumbnail:
      self.make_thumbnail()
    super(Portrait, self).save(*args, **kwargs)

  def make_thumbnail(self):
    image = Image.open(self.image.path)
    image.thumbnail((300,300))

    # taken from https://stackoverflow.com/questions/22035833/how-to-go-form-django-image-field-to-pil-image-and-back
    f = BytesIO()
    try:
        image.save(f, format='png')
        self.thumbnail.save(self.identifier + '_thumbnail.jpg', ContentFile(f.getvalue()))
    finally:
        f.close()

    


class Award(models.Model):
  portrait = models.ForeignKey(Portrait, on_delete=models.CASCADE)
  description = models.CharField(max_length=100)
  link = models.URLField(blank=True, max_length=200)




