import json
import os
from api.models import Insight


BASE_DIR = os.path.dirname(os.path.abspath(__file__))  
json_file_path = os.path.join(BASE_DIR, '..', 'jsondata.json') 

def load_json_data():
    full_path = os.path.abspath(json_file_path)
    if not os.path.exists(json_file_path):
        print(f"❌ Error: JSON file not found at {full_path}")
        return

    
    with open(json_file_path, 'r', encoding='utf-8') as file:
        try:
            data = json.load(file)  
        except json.JSONDecodeError as e:
            print(f"❌ JSON decoding error: {e}")
            return

    for entry in data:
        intensity = entry.get('intensity', 0)
        if not isinstance(intensity, int):
            intensity = 0

        Insight.objects.create(
            end_year=entry.get('end_year', ''),
            intensity=entry.get('intensity', 0),
            sector=entry.get('sector', ''),
            topic=entry.get('topic', ''),
            insight=entry.get('insight', ''),
            url=entry.get('url', ''),
            region=entry.get('region', ''),
            start_year=entry.get('start_year', ''),
            impact=entry.get('impact', ''),
            added=entry.get('added', ''),
            published=entry.get('published', ''),
            country=entry.get('country', ''),
            relevance=entry.get('relevance', 0),
            pestle=entry.get('pestle', ''),
            source=entry.get('source', ''),
            title=entry.get('title', ''),
            likelihood=entry.get('likelihood', 0),
        )
    
    print("✅ Data Loaded Successfully!")

load_json_data()