
from django.conf import settings
from django.urls import path
from django.conf.urls.static import static
from . import views

urlpatterns = [
  path('', views.home, name='home'),
  path('gallery', views.gallery, name='gallery'),
  path('about', views.about, name='about'),
  path('pricing', views.pricing, name='pricing'),
  path('contact', views.contact, name='contact'),
  path('gallery/<str:portrait_id>', views.portrait, name='portrait'),
] + static('myapp/images', document_root='myapp/images') + static('gallery/myapp/images', document_root='myapp/images') + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


# last two lines are so that static images are served from myapp/images when requested
# from either myapp/images or gallery/myapp/images.
# 
# And the last one is so media is served when using runserver. Should remove for production I would guess.
