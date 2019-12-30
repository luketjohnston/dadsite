from django.shortcuts import render
from .models import Portrait


# Create your views here.
def home(request):
  portrait_list = Portrait.objects.filter(slideshow_order__gt=0).order_by('slideshow_order')
  print(portrait_list)
  return render(request, 'myapp/home.html', {'portrait_list' : portrait_list})

def gallery(request):
  portrait_list = Portrait.objects.all()
  context = {'portrait_list' : portrait_list, 'portraits_per_page' : 6}
  return render(request, 'myapp/gallery.html', context)

def about(request):
  return render(request, 'myapp/about.html', {})

def pricing(request):
  return render(request, 'myapp/pricing.html', {})

def contact(request):
  return render(request, 'myapp/contact.html', {})

def portrait(request, portrait_id):
  portrait = Portrait.objects.get(identifier=portrait_id)
  # need to figure out the next and previous portraits by gallery_order, so we can 
  # link to them with the arrow buttons

  gallery = Portrait.objects.all().order_by('gallery_order')
  following_portraits = gallery.filter(gallery_order__gt=portrait.gallery_order)
  preceeding_portraits = gallery.filter(gallery_order__lt=portrait.gallery_order)

  if following_portraits:
    next_id = following_portraits.order_by('gallery_order').first().identifier
  else:
    next_id = gallery.first().identifier

  if preceeding_portraits:
    prev_id = preceeding_portraits.order_by('gallery_order').last().identifier
  else:
    prev_id = gallery.last().identifier

  awards = portrait.award_set.all() # award_set just works, defined with many-to-one relationship
  context = {'portrait' : portrait, 'awards' : awards, 
             'next_id' : next_id, 'prev_id' : prev_id }
  return render(request, 'myapp/portrait.html', context)

