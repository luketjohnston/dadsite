from django.shortcuts import render
from .models import Portrait
from django.shortcuts import redirect


# import the logging library
import logging

# Get an instance of a logger
logger = logging.getLogger(__name__)



# Create your views here.
def home(request):
  portrait_list = Portrait.objects.filter(slideshow_order__gt=0).order_by('slideshow_order')
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

def portrait(request):
  portraits = Portrait.objects.all()

  context = {'portraits' : portraits }
  return render(request, 'myapp/portrait.html', context)


def view_404(request, exception=None):
    print('herhewkkrejwlr')
    logger.error('IN VIEW 404')
    return redirect('/') 

