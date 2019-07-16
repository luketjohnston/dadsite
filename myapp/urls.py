
from django.urls import path
from django.conf.urls.static import static
from . import views

urlpatterns = [
  path('', views.home, name='home'),
  path('gallery', views.gallery, name='gallery'),
  path('about', views.about, name='about'),
  path('pricing', views.pricing, name='pricing'),
  path('gallery/<str:portrait_id>', views.portrait, name='portrait'),
] + static('myapp/images', document_root='myapp/images') + static('gallery/myapp/images', document_root='myapp/images')

# last two lines are so that static images are served from myapp/images when requested
# from either myapp/images or gallery/myapp/images.
