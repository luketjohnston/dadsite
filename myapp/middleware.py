import logging

# Get an instance of a logger
logger = logging.getLogger(__name__)



class ErrorLoggingMiddleware:
  def __init__(self, get_response):
    self.get_response = get_response
    # One-time configuration and initialization.

  def __call__(self, request):
    response = self.get_response(request)
    return response

  def process_exception(self, request, exception):
    logger.error(exception)   
    return 
