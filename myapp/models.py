from django.db import models
import os

# Create your models here.
class Portrait(models.Model):
  description = models.CharField(max_length=200)
  image = models.ImageField(upload_to='myapp/images/')
  order = models.FloatField()
  # used in the path for the portrait page, 'gallery/<identifier>'
  identifier = models.CharField(max_length=200)
  overlay_text = models.CharField(max_length=50)

class Award(models.Model):
  portrait = models.ForeignKey(Portrait, on_delete=models.CASCADE)
  description = models.CharField(max_length=100)
  link = models.URLField(blank=True, max_length=200)
