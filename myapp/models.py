from django.db import models
import os

# Create your models here.
class Portrait(models.Model):
  description = models.CharField(max_length=200)
  image = models.ImageField(upload_to='media/')
  gallery_order = models.FloatField()
  slideshow_order = models.FloatField()
  # used in the path for the portrait page, 'gallery/<identifier>'
  identifier = models.CharField(max_length=200)
  overlay_text = models.CharField(max_length=50)
  # used to "get()" portraits in load_script.py
  myid = models.CharField(max_length=20)
  staticurl = models.CharField(max_length=200)

  def __str__(self):
      return self.identifier

    


class Award(models.Model):
  portrait = models.ForeignKey(Portrait, on_delete=models.CASCADE)
  description = models.CharField(max_length=100)
  link = models.URLField(blank=True, max_length=200)
