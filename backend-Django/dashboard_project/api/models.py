from django.db import models

# Create your models here.

class Insight(models.Model):
    end_year = models.CharField(max_length=10, blank=True, null=True)
    intensity = models.IntegerField()
    sector = models.CharField(max_length=100, blank=True, null=True)
    topic = models.CharField(max_length=100, blank=True, null=True)
    insight = models.TextField()
    url = models.URLField(blank=True, null=True)
    region = models.CharField(max_length=100, blank=True, null=True)
    start_year = models.CharField(max_length=10, blank=True, null=True)
    impact = models.CharField(max_length=10, blank=True, null=True)
    added = models.CharField(max_length=100, blank=True, null=True)
    published = models.CharField(max_length=100, blank=True, null=True)
    country = models.CharField(max_length=100, blank=True, null=True)
    relevance = models.IntegerField()
    pestle = models.CharField(max_length=100, blank=True, null=True)
    source = models.CharField(max_length=200, blank=True, null=True)
    title = models.TextField()
    likelihood = models.IntegerField()

    def __str__(self):
        return self.title