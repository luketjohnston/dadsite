from django.shortcuts import render
from .models import Portrait


# Create your views here.
def home(request):
  portrait_list = Portrait.objects.all()
  return render(request, 'myapp/home.html', {'portrait_list' : portrait_list})

def gallery(request):
  portrait_list = Portrait.objects.all()
  context = {'portrait_list' : portrait_list, 'portraits_per_page' : 6}
  return render(request, 'myapp/gallery.html', context)

def about(request):
  return render(request, 'myapp/about.html', {})

def pricing(request):
  return render(request, 'myapp/pricing.html', {})

def portrait(request, portrait_id):
  portrait = Portrait.objects.get(identifier=portrait_id)
  awards = portrait.award_set.all() # award_set just works, defined with many-to-one relationship
  context = {'portrait' : portrait, 'awards' : awards}
  return render(request, 'myapp/portrait.html', context)

  
  
